import 'dotenv/config';
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ROADMAP_NODES, TROUBLESHOOTING_DATA, TROUBLESHOOTING_DETAILS, getSource } from '../src/constants';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const app = express();
const port = Number(process.env.PORT ?? 3001);
const openaiModel = process.env.OPENAI_MODEL || 'gpt-5.4-mini';
const openaiApiKey = process.env.OPENAI_API_KEY?.trim();
const openaiBaseUrl = (process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1').replace(/\/+$/, '');

const REQUEST_LIMIT_WINDOW_MS = 60_000;
const REQUEST_LIMIT_MAX = Number(process.env.ASSISTANT_RATE_LIMIT_MAX ?? 12);
const MAX_QUESTION_LENGTH = 800;
const MAX_STAGE_ID_LENGTH = 80;
const requestBuckets = new Map<string, { count: number; resetAt: number }>();

app.use(express.json({ limit: '12kb' }));

function redactSecrets(value: string) {
  return value
    .replace(/sk-[a-zA-Z0-9_-]{12,}/g, '[REDACTED_API_KEY]')
    .replace(/[a-zA-Z0-9_-]{24,}\.[a-zA-Z0-9_-]{24,}\.[a-zA-Z0-9_-]{24,}/g, '[REDACTED_TOKEN]');
}

function clientIp(request: express.Request) {
  const forwarded = request.headers['x-forwarded-for'];
  if (typeof forwarded === 'string') return forwarded.split(',')[0]?.trim() || request.ip;
  return request.ip || 'unknown';
}

function checkRateLimit(request: express.Request) {
  const ip = clientIp(request);
  const now = Date.now();
  const current = requestBuckets.get(ip);

  if (!current || current.resetAt <= now) {
    requestBuckets.set(ip, { count: 1, resetAt: now + REQUEST_LIMIT_WINDOW_MS });
    return { allowed: true, remaining: REQUEST_LIMIT_MAX - 1, retryAfterSeconds: 0 };
  }

  if (current.count >= REQUEST_LIMIT_MAX) {
    return {
      allowed: false,
      remaining: 0,
      retryAfterSeconds: Math.ceil((current.resetAt - now) / 1000),
    };
  }

  current.count += 1;
  return {
    allowed: true,
    remaining: REQUEST_LIMIT_MAX - current.count,
    retryAfterSeconds: 0,
  };
}

function validateAssistantInput(body: unknown) {
  const payload = body && typeof body === 'object' ? body as Record<string, unknown> : {};
  const rawQuestion = typeof payload.question === 'string' ? payload.question : '';
  const rawStageId = typeof payload.stageId === 'string' ? payload.stageId : undefined;
  const question = redactSecrets(rawQuestion).replace(/\s+/g, ' ').trim().slice(0, MAX_QUESTION_LENGTH);
  const stageId = rawStageId?.replace(/[^\w-]/g, '').slice(0, MAX_STAGE_ID_LENGTH);
  return { question, stageId };
}

function localMatches(question: string) {
  const query = question.toLowerCase();
  return TROUBLESHOOTING_DATA
    .map((issue) => {
      const haystack = `${issue.symptom} ${issue.cause} ${issue.firstActions.join(' ')} ${issue.category}`.toLowerCase();
      const score = query.split(/\s+/).filter(Boolean).reduce((sum, token) => sum + (haystack.includes(token) ? 1 : 0), 0);
      return { issue, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((item) => item.issue);
}

function localAssistantResponse(question: string, stageId?: string, mode = 'local') {
  const matches = localMatches(question);
  const contextNode = stageId ? ROADMAP_NODES.find((node) => node.id === stageId) : undefined;
  const relatedSourceIds = Array.from(new Set(matches.flatMap((issue) => issue.sourceIds)));

  return {
    mode,
    summary: contextNode ? `你当前可能卡在「${contextNode.title}」。先按本地排障库做最小诊断。` : '先按本地排障库做最小诊断。',
    answer: contextNode
      ? `我会先把你的问题放到「${contextNode.title}」这个阶段里看。当前没有成功调用通用 AI，所以先给你本地排障库的保守建议。`
      : '当前没有成功调用通用 AI，所以先给你本地排障库的保守建议。你可以补充系统、工具、具体报错和正在做哪一步。',
    likelyCategory: matches[0]?.category ?? 'workflow',
    firstActions: matches[0]?.firstActions ?? ['请补充报错原文、系统类型和当前路线阶段。'],
    doNotDo: ['不要粘贴 API Key、token、密码或账号凭据。', '不要直接执行看不懂的破坏性命令。'],
    relatedIssueIds: matches.map((issue) => issue.id),
    relatedSourceIds,
    needsHumanHelp: matches.some((issue) => issue.escalation !== 'self-serve'),
  };
}

function buildAssistantContext(question: string, stageId?: string) {
  const matches = localMatches(question);
  const contextNode = stageId ? ROADMAP_NODES.find((node) => node.id === stageId) : undefined;

  return {
    stage: contextNode ? {
      id: contextNode.id,
      title: contextNode.title,
      successCriteria: contextNode.successCriteria.slice(0, 2),
    } : null,
    issues: matches.map((issue) => {
      const detail = TROUBLESHOOTING_DETAILS[issue.id];
      return {
        id: issue.id,
        category: issue.category,
        os: issue.os,
        symptom: issue.symptom,
        cause: issue.cause,
        firstActions: issue.firstActions,
        escalation: issue.escalation,
        detail: detail ? {
          diagnosticGoal: detail.diagnosticGoal,
          evidenceToCollect: detail.evidenceToCollect,
          decisionRule: detail.decisionRule,
          checks: detail.checks.map((check) => ({
            title: check.title,
            action: check.action,
            expected: check.expected,
            ifFailed: check.ifFailed,
          })),
        } : null,
        sources: issue.sourceIds.map((sourceId) => {
          const source = getSource(sourceId);
          return source ? { id: source.id, title: source.title, type: source.sourceType, url: source.url } : { id: sourceId };
        }),
      };
    }),
  };
}

function normalizeActions(value: unknown) {
  if (!Array.isArray(value)) return undefined;
  return value.filter((item): item is string => typeof item === 'string' && item.trim().length > 0).slice(0, 4);
}

function parseAssistantJson(text: string) {
  const cleaned = text
    .replace(/^```json\s*/i, '')
    .replace(/^```\s*/i, '')
    .replace(/```$/i, '')
    .trim();

  try {
    return JSON.parse(cleaned);
  } catch {
    const start = cleaned.indexOf('{');
    const end = cleaned.lastIndexOf('}');
    if (start >= 0 && end > start) {
      return JSON.parse(cleaned.slice(start, end + 1));
    }
    throw new Error('assistant_json_parse_failed');
  }
}

function normalizeAssistantOutput(value: unknown, fallback: ReturnType<typeof localAssistantResponse>) {
  const data = value && typeof value === 'object' ? value as Record<string, unknown> : {};
  return {
    mode: 'ai',
    summary: typeof data.summary === 'string' && data.summary.trim() ? data.summary.trim().slice(0, 220) : fallback.summary,
    answer: typeof data.answer === 'string' && data.answer.trim() ? data.answer.trim().slice(0, 1200) : fallback.answer,
    likelyCategory: typeof data.likelyCategory === 'string' ? data.likelyCategory.slice(0, 40) : fallback.likelyCategory,
    firstActions: normalizeActions(data.firstActions) ?? fallback.firstActions,
    doNotDo: normalizeActions(data.doNotDo) ?? fallback.doNotDo,
    relatedIssueIds: Array.isArray(data.relatedIssueIds)
      ? data.relatedIssueIds.filter((item): item is string => typeof item === 'string').slice(0, 3)
      : fallback.relatedIssueIds,
    relatedSourceIds: fallback.relatedSourceIds,
    needsHumanHelp: typeof data.needsHumanHelp === 'boolean' ? data.needsHumanHelp : fallback.needsHumanHelp,
  };
}

async function callOpenAI(question: string, stageId?: string) {
  if (!openaiApiKey) return undefined;

  const fallback = localAssistantResponse(question, stageId);
  const context = buildAssistantContext(question, stageId);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12_000);
  const systemPrompt = [
    '你是 AI Navigator 的校内 AI 编程上手助手，不只是排障库检索器。',
    '你的任务是帮助中国高校学生把 AI 编程问题说清楚、定位问题、选择下一步，并解释必要的思考框架。',
    '你可以使用用户问题、当前页面/路线图上下文、本站排障库、实践路径，以及你的通用编程与学习辅导能力。',
    '排障库是参考资料，不是唯一知识边界；如果用户问的是通用学习、工具选择、项目流程、prompt、工作流、agent 思维，可以直接回答。',
    '但 Claude Code、Codex 的安装、账号、权限、价格、模型、API 等产品事实必须以官方文档为准；不确定就说明需要查官方文档。',
    '不要编造版本、价格、政策、订阅权益或不存在的命令。',
    '不要提供绕过学校/地区网络管理的具体方法。',
    '不要索要、复述或保存 API key、token、密码、cookie、代理订阅等敏感信息。',
    '如果问题涉及密钥泄露、账号权限或合规网络访问，给出安全止损和官方/校内支持路径。',
    '对新手优先给可执行的下一步；对项目层问题，先问目标、边界、验证命令、Git 状态；对架构层问题，可以启发式讨论但要区分观点和事实。',
    '输出严格 JSON，不要 Markdown，不要代码块。',
    'JSON 字段：summary:string, answer:string, likelyCategory:string, firstActions:string[], doNotDo:string[], relatedIssueIds:string[], needsHumanHelp:boolean。',
  ].join('\n');
  const userPayload = JSON.stringify({
    question,
    context,
      outputRules: {
        maxFirstActions: 4,
        tone: '中文，具体，直接。先回答用户真实问题，再给下一步动作。',
      },
  });

  try {
    const upstream = await fetch(`${openaiBaseUrl}/responses`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openaiApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: openaiModel,
        input: [
          {
            role: 'system',
            content: systemPrompt,
          },
          {
            role: 'user',
            content: userPayload,
          },
        ],
      }),
      signal: controller.signal,
    });

    if (!upstream.ok) {
      const chat = await fetch(`${openaiBaseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${openaiApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: openaiModel,
          temperature: 0.2,
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userPayload },
          ],
        }),
        signal: controller.signal,
      });

      if (!chat.ok) return { ...fallback, mode: 'local_fallback', upstreamStatus: chat.status };

      const chatPayload = await chat.json() as { choices?: Array<{ message?: { content?: string } }> };
      const chatText = chatPayload.choices?.[0]?.message?.content;
      if (!chatText) return { ...fallback, mode: 'local_fallback' };
      const parsedChat = parseAssistantJson(chatText);
      return normalizeAssistantOutput(parsedChat, fallback);
    }

    const payload = await upstream.json() as { output_text?: string; output?: unknown[] };
    const outputText = typeof payload.output_text === 'string'
      ? payload.output_text
      : JSON.stringify(payload).match(/"text"\s*:\s*"([^"]+)"/)?.[1];

    if (!outputText) return { ...fallback, mode: 'local_fallback' };

    const parsed = parseAssistantJson(outputText);
    return normalizeAssistantOutput(parsed, fallback);
  } catch {
    return { ...fallback, mode: 'local_fallback' };
  } finally {
    clearTimeout(timeout);
  }
}

app.post('/api/troubleshooting-assistant', async (request, response) => {
  const limit = checkRateLimit(request);
  response.setHeader('X-RateLimit-Limit', String(REQUEST_LIMIT_MAX));
  response.setHeader('X-RateLimit-Remaining', String(Math.max(0, limit.remaining)));

  if (!limit.allowed) {
    response.setHeader('Retry-After', String(limit.retryAfterSeconds));
    return response.status(429).json({
      error: 'rate_limited',
      message: '请求太频繁，请稍后再试。',
      retryAfterSeconds: limit.retryAfterSeconds,
    });
  }

  const { question, stageId } = validateAssistantInput(request.body);

  if (!question.trim()) {
    return response.status(400).json({ error: 'question_required' });
  }

  if (!process.env.OPENAI_API_KEY) {
    return response.json(localAssistantResponse(question, stageId));
  }

  const assistantResponse = await callOpenAI(question, stageId);
  return response.json(assistantResponse ?? localAssistantResponse(question, stageId, 'local_fallback'));
});

app.use(express.static(path.join(rootDir, 'dist')));
app.get('*', (_request, response) => {
  response.sendFile(path.join(rootDir, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`AI Navigator server listening on http://localhost:${port}`);
});
