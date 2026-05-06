import { useMemo, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Bot, ChevronRight, Loader2, MessageCircle, Send, ShieldCheck, X } from 'lucide-react';
import { ROADMAP_NODES, TROUBLESHOOTING_DATA, getSource } from '../constants';

function normalize(value: string) {
  return value.toLowerCase().trim();
}

function findMatches(question: string) {
  const query = normalize(question);
  if (!query) return TROUBLESHOOTING_DATA.slice(0, 3);

  const scored = TROUBLESHOOTING_DATA.map((issue) => {
    const haystack = normalize(`${issue.symptom} ${issue.cause} ${issue.firstActions.join(' ')} ${issue.category}`);
    const score = query
      .split(/\s+/)
      .filter(Boolean)
      .reduce((sum, token) => sum + (haystack.includes(token) ? 1 : 0), 0);
    return { issue, score };
  });

  const matches = scored.filter((item) => item.score > 0).sort((a, b) => b.score - a.score).map((item) => item.issue);
  return matches.length > 0 ? matches.slice(0, 3) : TROUBLESHOOTING_DATA.slice(0, 3);
}

export default function FloatingAssistant() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [submittedQuestion, setSubmittedQuestion] = useState('');
  const [apiSummary, setApiSummary] = useState<string | null>(null);
  const [apiAnswer, setApiAnswer] = useState<string | null>(null);
  const [apiActions, setApiActions] = useState<string[] | null>(null);
  const [apiMode, setApiMode] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'thinking' | 'answered' | 'error'>('idle');
  const location = useLocation();

  const currentNode = useMemo(() => {
    const match = location.pathname.match(/^\/roadmap\/([^/]+)/);
    if (!match) return undefined;
    return ROADMAP_NODES.find((node) => node.id === match[1]);
  }, [location.pathname]);

  const matches = useMemo(() => findMatches(submittedQuestion || question), [submittedQuestion, question]);

  async function handleSubmit() {
    const trimmedQuestion = question.trim();
    if (!trimmedQuestion || status === 'thinking') return;

    setSubmittedQuestion(trimmedQuestion);
    setApiSummary(null);
    setApiAnswer(null);
    setApiActions(null);
    setApiMode(null);
    setStatus('thinking');

    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), 20_000);

    try {
      const response = await fetch('/api/troubleshooting-assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: trimmedQuestion, stageId: currentNode?.id }),
        signal: controller.signal,
      });

      if (!response.ok) throw new Error('assistant api unavailable');
      const data = await response.json();
      setApiSummary(typeof data.summary === 'string' ? data.summary : null);
      setApiAnswer(typeof data.answer === 'string' ? data.answer : null);
      setApiActions(Array.isArray(data.firstActions) ? data.firstActions.slice(0, 4) : null);
      setApiMode(typeof data.mode === 'string' ? data.mode : null);
      setStatus('answered');
    } catch {
      setApiSummary('AI 助手暂时没有返回。下面先给你本地排障库的匹配结果。');
      setApiAnswer(null);
      setApiActions(null);
      setApiMode(null);
      setStatus('error');
    } finally {
      window.clearTimeout(timer);
    }
  }

  function resetAnswer() {
    setSubmittedQuestion('');
    setApiSummary(null);
    setApiAnswer(null);
    setApiActions(null);
    setApiMode(null);
    setStatus('idle');
  }

  return (
    <div className="fixed right-4 bottom-4 z-[80]">
      {open && (
        <div className="mb-4 w-[min(380px,calc(100vw-32px))] max-h-[min(680px,calc(100vh-120px))] rounded-[28px] border border-clay/50 bg-paper shadow-[0_30px_90px_-30px_rgba(18,17,16,0.35)] overflow-hidden flex flex-col">
          <div className="p-5 border-b border-clay/40 flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Bot size={18} className="text-sage" />
                <span className="tertiary-text">AI 编程助手 · 安全代理</span>
              </div>
              <p className="text-sm text-sage/70 leading-relaxed">
                可以问排障、工具选择、项目流程、prompt、工作流和 Agent 思维。服务端会先脱敏、限流，再调用 AI；不要输入密钥、密码或账号凭据。
              </p>
            </div>
            <button onClick={() => setOpen(false)} className="p-2 text-sage/50 hover:text-ink transition-colors" aria-label="关闭排障助手">
              <X size={18} />
            </button>
          </div>

          <div className="p-5 space-y-5 overflow-y-auto">
            {currentNode && (
              <div className="rounded-2xl border border-clay/40 bg-oat/35 p-4">
                <span className="tertiary-text">当前上下文</span>
                <p className="font-serif font-bold mt-2">{currentNode.title}</p>
                <p className="text-xs text-sage/65 mt-2 leading-relaxed">{currentNode.successCriteria[0]}</p>
              </div>
            )}

            <div className="rounded-2xl border border-clay/50 bg-white p-3 focus-within:border-ink focus-within:ring-4 focus-within:ring-clay/20 transition-all">
              <textarea
                value={question}
                onChange={(event) => {
                  setQuestion(event.target.value);
                  if (status !== 'thinking' && status !== 'idle') resetAnswer();
                }}
                onKeyDown={(event) => {
                  if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
                    event.preventDefault();
                    void handleSubmit();
                  }
                }}
                placeholder="描述你卡在哪，例如：npm 装不上 / 登录回调失败 / 浏览器能打开但 CLI 不行"
                className="w-full min-h-24 resize-none bg-transparent px-1 py-1 text-sm text-ink outline-none"
              />
              <div className="flex items-center justify-between gap-3 pt-3 border-t border-clay/30">
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-sage/45">
                  Ctrl / Cmd + Enter
                </span>
                <button
                  onClick={() => void handleSubmit()}
                  disabled={!question.trim() || status === 'thinking'}
                  className="h-10 px-4 rounded-full bg-ink text-paper text-[11px] font-black tracking-[0.08em] flex items-center gap-2 disabled:opacity-35 disabled:cursor-not-allowed hover:opacity-90 transition-all"
                >
                  {status === 'thinking' ? <Loader2 size={15} className="animate-spin" /> : <Send size={15} />}
                  {status === 'thinking' ? '思考中' : '发送'}
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-sage" />
                <span className="tertiary-text">
                  {status === 'thinking'
                    ? 'AI 正在定位问题'
                    : apiActions
                      ? (apiMode === 'ai' ? 'AI 助手返回' : '本地安全返回')
                      : status === 'error'
                        ? '本地排障兜底'
                        : '等待发送'}
                </span>
              </div>
              {submittedQuestion && (
                <div className="rounded-2xl bg-ink text-paper p-4 ml-8">
                  <span className="tertiary-text !text-paper/35">你的问题</span>
                  <p className="text-sm text-paper/80 leading-relaxed mt-2">{submittedQuestion}</p>
                </div>
              )}
              {status === 'thinking' && (
                <div className="rounded-2xl border border-clay/40 bg-white p-4 flex items-start gap-3">
                  <Loader2 size={16} className="text-sage animate-spin mt-0.5" />
                  <div>
                    <p className="font-serif font-bold text-sm mb-2">正在理解你的问题和当前页面上下文</p>
                    <p className="text-xs text-sage/65 leading-relaxed">如果 AI 服务超时，会自动回退到本地排障库。</p>
                  </div>
                </div>
              )}
              {status === 'error' && apiSummary && (
                <div className="rounded-2xl border border-clay/40 bg-oat/35 p-4">
                  <p className="font-serif font-bold text-sm">{apiSummary}</p>
                </div>
              )}
              {apiActions && (
                <div className="rounded-2xl border border-clay/40 bg-white p-4">
                  {apiSummary && <p className="font-serif font-bold text-sm mb-3">{apiSummary}</p>}
                  {apiAnswer && (
                    <p className="text-xs text-sage/75 leading-relaxed whitespace-pre-wrap mb-4">
                      {apiAnswer}
                    </p>
                  )}
                  <ol className="space-y-2">
                    {apiActions.map((action, index) => (
                      <li key={action} className="text-xs text-sage/75 leading-relaxed">
                        <span className="font-mono text-sage/40 mr-2">{index + 1}</span>{action}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
              {!apiActions && status !== 'thinking' && matches.map((issue) => {
                const source = getSource(issue.sourceIds[0]);
                return (
                  <div key={issue.id} className="rounded-2xl border border-clay/40 bg-white p-4">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <span className="text-[10px] font-black uppercase tracking-[0.16em] text-sage/50">{issue.category}</span>
                      <span className="text-[10px] font-black uppercase tracking-[0.16em] text-sage/50">{source?.sourceType ?? issue.sourceType}</span>
                    </div>
                    <p className="font-serif font-bold text-sm mb-3">{issue.symptom}</p>
                    <ol className="space-y-2">
                      {issue.firstActions.slice(0, 3).map((action, index) => (
                        <li key={action} className="text-xs text-sage/75 leading-relaxed">
                          <span className="font-mono text-sage/40 mr-2">{index + 1}</span>{action}
                        </li>
                      ))}
                    </ol>
                    <Link to={`/troubleshooting/${issue.id}`} className="link-claude mt-4">
                      打开详情 <ChevronRight size={13} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((value) => !value)}
        className="h-13 px-5 rounded-full bg-ink text-paper shadow-[0_20px_50px_-18px_rgba(18,17,16,0.55)] flex items-center gap-3 font-bold text-[12px] tracking-[0.08em] hover:opacity-90 transition-all"
      >
        <MessageCircle size={18} />
        排障助手
      </button>
    </div>
  );
}
