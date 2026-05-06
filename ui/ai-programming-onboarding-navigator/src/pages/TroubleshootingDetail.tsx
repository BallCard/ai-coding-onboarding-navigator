import { motion } from 'motion/react';
import { AlertTriangle, ArrowLeft, CheckCircle2, ClipboardList, ExternalLink, ShieldCheck } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { TROUBLESHOOTING_DATA, TROUBLESHOOTING_DETAILS, getSource } from '../constants';

function escalationLabel(escalation: string) {
  if (escalation === 'self-serve') return '可自助处理';
  if (escalation === 'ask-campus-helper') return '建议找校内同学协助';
  return '查看官方支持';
}

export default function TroubleshootingDetail() {
  const { issueId } = useParams();
  const item = TROUBLESHOOTING_DATA.find((issue) => issue.id === issueId);
  const detail = issueId ? TROUBLESHOOTING_DETAILS[issueId] : undefined;

  if (!item || !detail) return <Navigate to="/troubleshooting" replace />;

  const sources = item.sourceIds.map(getSource).filter(Boolean);

  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
      <Link to="/troubleshooting" className="link-claude mb-14 w-fit">
        <ArrowLeft size={16} /> 返回排障层
      </Link>

      <header className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-end mb-20">
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-sage" />
            <span className="tertiary-text !tracking-[0.3em] !text-sage">{item.category}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif tracking-tighter mb-8 leading-[1.02] text-ink">
            {item.symptom}
          </h1>
          <p className="text-xl !text-ink/75 max-w-3xl leading-relaxed font-medium">{detail.diagnosticGoal}</p>
        </div>

        <aside className="step-card !rounded-[8px] !p-8 md:!p-10">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle size={20} className="text-sage" />
            <span className="tertiary-text">最可能原因</span>
          </div>
          <p className="!text-ink/76 leading-relaxed font-medium mb-8">{item.cause}</p>
          <div className="flex flex-wrap gap-3">
            <span className="tertiary-text px-3 py-2 rounded-full border border-clay/50">{item.os}</span>
            <span className="tertiary-text px-3 py-2 rounded-full border border-clay/50">{escalationLabel(item.escalation)}</span>
          </div>
        </aside>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 mb-20">
        <div className="step-card !rounded-[8px] !p-8 md:!p-10">
          <ClipboardList size={22} className="text-sage mb-5" />
          <span className="tertiary-text">先收集证据</span>
          <ul className="mt-6 space-y-4">
            {detail.evidenceToCollect.map((evidence) => (
              <li key={evidence} className="flex gap-3 text-sm !text-ink/76 leading-relaxed font-medium">
                <CheckCircle2 size={16} className="text-sage flex-shrink-0 mt-0.5" />
                <span>{evidence}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[8px] bg-ink text-paper p-8 md:p-10">
          <ShieldCheck size={22} className="text-paper/70 mb-5" />
          <span className="tertiary-text !text-paper/40">判断规则</span>
          <p className="mt-6 text-2xl font-serif font-bold leading-snug">{detail.decisionRule}</p>
        </div>
      </section>

      <section className="mb-20">
        <div className="mb-10">
          <span className="tertiary-text">Diagnostic Checks</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 tracking-tight">按顺序检查</h2>
        </div>

        <div className="space-y-5">
          {detail.checks.map((check, index) => (
            <article key={check.title} className="step-card !rounded-[8px] !p-7 md:!p-9">
              <div className="grid grid-cols-1 lg:grid-cols-[0.16fr_0.84fr] gap-8">
                <div>
                  <div className="w-12 h-12 rounded-full bg-ink text-paper flex items-center justify-center font-serif font-bold mb-5">
                    {index + 1}
                  </div>
                  <span className="tertiary-text">Check {index + 1}</span>
                </div>
                <div>
                  <h3 className="text-3xl font-serif font-bold mb-4">{check.title}</h3>
                  <p className="!text-ink/76 leading-relaxed font-medium mb-8">{check.action}</p>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="rounded-[8px] border border-clay/50 bg-oat/25 p-5">
                      <span className="tertiary-text">应该看到</span>
                      <p className="mt-4 text-sm !text-ink/76 leading-relaxed font-medium">{check.expected}</p>
                    </div>
                    <div className="rounded-[8px] border border-clay/50 bg-white p-5">
                      <span className="tertiary-text">如果不是</span>
                      <p className="mt-4 text-sm !text-ink/76 leading-relaxed font-medium">{check.ifFailed}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8">
        <div className="step-card !rounded-[8px] !p-8 md:!p-10">
          <span className="tertiary-text">下次避免</span>
          <ul className="mt-6 space-y-4">
            {detail.prevention.map((itemText) => (
              <li key={itemText} className="flex gap-3 text-sm !text-ink/76 leading-relaxed font-medium">
                <CheckCircle2 size={16} className="text-sage flex-shrink-0 mt-0.5" />
                <span>{itemText}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="step-card !rounded-[8px] !p-8 md:!p-10">
          <span className="tertiary-text">来源</span>
          <p className="!text-ink/70 leading-relaxed font-medium mt-5 mb-6">
            产品事实优先看官方来源；校内经验只用于定位常见卡点。
          </p>
          <div className="flex flex-wrap gap-3">
            {sources.map((source) => source && (
              <a
                key={source.id}
                href={source.url}
                target="_blank"
                rel="noreferrer"
                className="min-h-10 px-4 py-2 rounded-full border border-clay/50 bg-paper text-[10px] font-black uppercase tracking-[0.12em] text-sage hover:text-ink hover:border-ink/30 transition-all flex items-center gap-2"
              >
                <span>{source.title}</span>
                <span className="text-sage/45">{source.sourceType}</span>
                <ExternalLink size={12} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
