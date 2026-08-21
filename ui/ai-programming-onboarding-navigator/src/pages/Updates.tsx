import { motion } from 'motion/react';
import { BookOpen, Calendar, CheckCircle2, ChevronDown, ExternalLink, History, ShieldCheck } from 'lucide-react';
import { SOURCE_RECORDS, SOURCE_SITES, UPDATES, getSource, type SourceRecord } from '../constants';

const LAYER_DESCRIPTIONS = [
  { id: '官方资料', desc: '产品事实、安装、权限、安全和变更的唯一事实依据。' },
  { id: '研究与社区', desc: '用于发现痛点、观点与练习灵感，结论仍需回到官方或本地证据。' },
  { id: '校园记录', desc: '只说明标注日期与场景的本站路径或个人经验。' },
];

function isExternal(source: SourceRecord) {
  return source.url.startsWith('http://') || source.url.startsWith('https://');
}

export default function Updates() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
      <header className="mb-20 max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-px bg-sage" />
          <span className="tertiary-text !tracking-[0.3em] !text-sage">Sources & Updates</span>
        </div>
        <h1 className="text-[42px] md:text-7xl font-serif tracking-tighter mb-8 text-ink leading-[1.02] md:leading-[0.98] break-words">
          先知道去哪里核对，<br /><span className="opacity-40 italic">再打开具体文档</span>
        </h1>
        <p className="text-lg text-sage/75 leading-relaxed max-w-3xl">
          来源不是资源墙。先按站点判断它适合回答什么，再按需展开具体页面；每条记录都保留用途、适用范围、核查日期与审核状态。
        </p>
      </header>

      <section className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-5">
        {LAYER_DESCRIPTIONS.map((layer, index) => (
          <article key={layer.id} className={`step-card !p-7 ${index === 0 ? '!border-ink/25' : ''}`}>
            <span className="tertiary-text">0{index + 1}</span>
            <h2 className="text-2xl font-serif font-bold mt-5 mb-4">{layer.id}</h2>
            <p className="text-sm leading-relaxed">{layer.desc}</p>
          </article>
        ))}
      </section>

      <section className="mb-24">
        <div className="flex items-center gap-5 mb-10">
          <div className="w-14 h-14 rounded-[22px] bg-ink text-paper flex items-center justify-center"><BookOpen size={24} /></div>
          <div>
            <span className="tertiary-text">By Site</span>
            <h2 className="text-4xl font-serif font-bold mt-2">按站点聚合</h2>
          </div>
        </div>

        <div className="space-y-5">
          {SOURCE_SITES.map((site, index) => {
            const records = SOURCE_RECORDS.filter((source) => site.ownerIds.includes(source.owner));
            if (records.length === 0) return null;
            const latestCheck = records.map((source) => source.lastCheckedAt).sort().at(-1);
            return (
              <details key={site.id} className="group rounded-[32px] border border-clay/60 bg-white shadow-[0_18px_55px_-38px_rgba(18,17,16,0.4)]" open={index < 2}>
                <summary className="list-none cursor-pointer p-7 md:p-9 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="max-w-3xl">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="tertiary-text px-3 py-1.5 rounded-full border border-clay/50 bg-oat/30">{site.layer}</span>
                      <span className="text-xs text-sage/60">{records.length} 条记录 · 最近核查 {latestCheck}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3">{site.title}</h3>
                    <p className="text-sm text-sage/75 leading-relaxed">{site.purpose}</p>
                  </div>
                  <div className="w-11 h-11 rounded-full border border-clay/60 flex items-center justify-center text-sage group-open:rotate-180 transition-transform">
                    <ChevronDown size={18} />
                  </div>
                </summary>

                <div className="border-t border-clay/40 px-7 md:px-9 pb-4">
                  {records.map((source) => (
                    <a
                      id={source.id}
                      key={source.id}
                      href={source.url}
                      target={isExternal(source) ? '_blank' : undefined}
                      rel={isExternal(source) ? 'noreferrer' : undefined}
                      className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.9fr_auto] gap-5 py-6 border-b border-clay/35 last:border-b-0 hover:pl-2 transition-all"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-serif font-bold text-lg">{source.title}</h4>
                          {isExternal(source) && <ExternalLink size={14} className="text-sage/50" />}
                        </div>
                        <p className="text-sm text-sage/70">{source.evidenceUse}</p>
                      </div>
                      <div>
                        <span className="tertiary-text">适用范围</span>
                        <p className="text-sm text-sage/70 mt-2">{source.applicableScope}</p>
                      </div>
                      <div className="lg:text-right">
                        <span className="tertiary-text px-3 py-1.5 rounded-full border border-clay/50">{source.reviewStatus}</span>
                        <p className="text-xs text-sage/55 mt-3">Checked {source.lastCheckedAt}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </details>
            );
          })}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-5 mb-10">
          <div className="w-14 h-14 rounded-[22px] bg-oat border border-clay/40 text-sage flex items-center justify-center"><Calendar size={24} /></div>
          <div>
            <span className="tertiary-text">Change Log</span>
            <h2 className="text-4xl font-serif font-bold mt-2">更新记录</h2>
          </div>
        </div>

        <div className="space-y-6">
          {UPDATES.map((update, index) => {
            const source = getSource(update.sourceId);
            return (
              <motion.article key={update.id} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }} className="step-card !p-7 md:!p-9">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="tertiary-text flex items-center gap-2"><CheckCircle2 size={13} /> {update.detectedAt}</span>
                  <span className="tertiary-text px-3 py-1 rounded-full bg-oat border border-clay/40">{update.impactArea}</span>
                  <span className="tertiary-text px-3 py-1 rounded-full border border-clay/40">{source?.sourceType ?? 'Source'}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">{update.title}</h3>
                <p className="text-sm md:text-base leading-relaxed max-w-4xl mb-6">{update.impactSummary}</p>
                <div className="flex flex-wrap items-center gap-5">
                  {source && source.url !== '#' && (
                    <a href={source.url} target="_blank" rel="noreferrer" className="link-claude">打开来源 <ExternalLink size={14} /></a>
                  )}
                  <span className="tertiary-text flex items-center gap-2">
                    {update.userActionRequired ? <ShieldCheck size={13} /> : <History size={13} />}
                    {update.userActionRequired ? '需要用户行动' : '暂不需要行动'}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
}
