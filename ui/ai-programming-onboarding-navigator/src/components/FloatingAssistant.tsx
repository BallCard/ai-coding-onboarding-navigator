import { useEffect, useMemo, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Bot, ChevronRight, MessageCircle, ShieldCheck, X } from 'lucide-react';
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
  const [apiSummary, setApiSummary] = useState<string | null>(null);
  const [apiActions, setApiActions] = useState<string[] | null>(null);
  const location = useLocation();

  const currentNode = useMemo(() => {
    const match = location.pathname.match(/^\/roadmap\/([^/]+)/);
    if (!match) return undefined;
    return ROADMAP_NODES.find((node) => node.id === match[1]);
  }, [location.pathname]);

  const matches = useMemo(() => findMatches(question), [question]);

  useEffect(() => {
    const controller = new AbortController();
    const timer = window.setTimeout(async () => {
      if (!question.trim()) {
        setApiSummary(null);
        setApiActions(null);
        return;
      }

      try {
        const response = await fetch('/api/troubleshooting-assistant', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ question, stageId: currentNode?.id }),
          signal: controller.signal,
        });

        if (!response.ok) throw new Error('assistant api unavailable');
        const data = await response.json();
        setApiSummary(typeof data.summary === 'string' ? data.summary : null);
        setApiActions(Array.isArray(data.firstActions) ? data.firstActions.slice(0, 3) : null);
      } catch {
        setApiSummary(null);
        setApiActions(null);
      }
    }, 350);

    return () => {
      controller.abort();
      window.clearTimeout(timer);
    };
  }, [question, currentNode?.id]);

  return (
    <div className="fixed right-4 bottom-4 z-[80]">
      {open && (
        <div className="mb-4 w-[min(380px,calc(100vw-32px))] max-h-[min(680px,calc(100vh-120px))] rounded-[28px] border border-clay/50 bg-paper shadow-[0_30px_90px_-30px_rgba(18,17,16,0.35)] overflow-hidden flex flex-col">
          <div className="p-5 border-b border-clay/40 flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Bot size={18} className="text-sage" />
                <span className="tertiary-text">排障助手 · 本地版</span>
              </div>
              <p className="text-sm text-sage/70 leading-relaxed">
                先基于本站排障库匹配，不调用外部 API。不要输入 API Key、token、密码。
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

            <textarea
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="描述你卡在哪，例如：npm 装不上 / 登录回调失败 / 浏览器能打开但 CLI 不行"
              className="w-full min-h-24 resize-none rounded-2xl border border-clay/50 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-ink focus:ring-4 focus:ring-clay/20"
            />

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-sage" />
                <span className="tertiary-text">{apiActions ? 'API 预留返回' : '建议先试'}</span>
              </div>
              {apiActions && (
                <div className="rounded-2xl border border-clay/40 bg-white p-4">
                  {apiSummary && <p className="font-serif font-bold text-sm mb-3">{apiSummary}</p>}
                  <ol className="space-y-2">
                    {apiActions.map((action, index) => (
                      <li key={action} className="text-xs text-sage/75 leading-relaxed">
                        <span className="font-mono text-sage/40 mr-2">{index + 1}</span>{action}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
              {!apiActions && matches.map((issue) => {
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
                    <Link to={`/troubleshooting?category=${issue.category}`} className="link-claude mt-4">
                      打开排障卡 <ChevronRight size={13} />
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
