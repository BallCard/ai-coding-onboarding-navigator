import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ROADMAP_NODES, TROUBLESHOOTING_DATA } from '../src/constants';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const app = express();
const port = Number(process.env.PORT ?? 3001);

app.use(express.json({ limit: '12kb' }));

function redactSecrets(value: string) {
  return value
    .replace(/sk-[a-zA-Z0-9_-]{12,}/g, '[REDACTED_API_KEY]')
    .replace(/[a-zA-Z0-9_-]{24,}\.[a-zA-Z0-9_-]{24,}\.[a-zA-Z0-9_-]{24,}/g, '[REDACTED_TOKEN]');
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

app.post('/api/troubleshooting-assistant', async (request, response) => {
  const question = typeof request.body?.question === 'string' ? redactSecrets(request.body.question).slice(0, 800) : '';
  const stageId = typeof request.body?.stageId === 'string' ? request.body.stageId : undefined;

  if (!question.trim()) {
    return response.status(400).json({ error: 'question_required' });
  }

  const matches = localMatches(question);
  const contextNode = stageId ? ROADMAP_NODES.find((node) => node.id === stageId) : undefined;
  const relatedSourceIds = Array.from(new Set(matches.flatMap((issue) => issue.sourceIds)));

  if (!process.env.OPENAI_API_KEY) {
    return response.json({
      mode: 'local',
      summary: contextNode ? `你当前可能卡在「${contextNode.title}」。先按本地排障库做最小诊断。` : '先按本地排障库做最小诊断。',
      likelyCategory: matches[0]?.category ?? 'workflow',
      firstActions: matches[0]?.firstActions ?? ['请补充报错原文、系统类型和当前路线阶段。'],
      doNotDo: ['不要粘贴 API Key、token、密码或代理订阅。', '不要直接执行看不懂的破坏性命令。'],
      relatedIssueIds: matches.map((issue) => issue.id),
      relatedSourceIds,
      needsHumanHelp: matches.some((issue) => issue.escalation !== 'self-serve'),
    });
  }

  return response.status(501).json({
    error: 'openai_assistant_not_enabled',
    message: 'OPENAI_API_KEY is configured, but the OpenAI Responses API call is intentionally reserved for later integration.',
  });
});

app.use(express.static(path.join(rootDir, 'dist')));
app.get('*', (_request, response) => {
  response.sendFile(path.join(rootDir, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`AI Navigator server listening on http://localhost:${port}`);
});
