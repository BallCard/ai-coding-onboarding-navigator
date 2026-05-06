import { motion } from 'motion/react';
import { History, ExternalLink, ShieldCheck, BookOpen, Calendar, CheckCircle2, ChevronRight } from 'lucide-react';
import { SOURCES, UPDATES, getSource, type Source } from '../constants';

const SOURCE_TYPE_DESCRIPTIONS = [
  { id: 'Official', desc: '官方文档、changelog、release 或产品说明。事实优先引用这一层。' },
  { id: 'Official-Derived', desc: '基于官方事实写成的中文路径、检查清单和完成标准，必须链接官方来源。' },
  { id: 'Personal Note', desc: '校内实际使用经验，只作为场景补充，不替代官方事实。' },
  { id: 'Community Signal', desc: '社区内容只作为痛点线索，未核验前不能进入正式指导。' },
];

const SOURCE_TYPE_ORDER = ['Official', 'Official-Derived', 'Personal Note', 'Learning Reference', 'Community Signal'];

function sourceHref(source: Source) {
  return source.url.startsWith('#') ? source.url : source.url;
}

function isExternalSource(source: Source) {
  return source.url.startsWith('http://') || source.url.startsWith('https://');
}

function sourceTarget(source: Source) {
  return isExternalSource(source) ? '_blank' : undefined;
}

function sourceRel(source: Source) {
  return isExternalSource(source) ? 'noreferrer' : undefined;
}

const sourceGroups = SOURCE_TYPE_ORDER.map((sourceType) => ({
  sourceType,
  sources: SOURCES.filter((source) => source.sourceType === sourceType),
})).filter((group) => group.sources.length > 0);

export default function Updates() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
      <header className="mb-24 max-w-3xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-[1px] bg-sage" />
          <span className="tertiary-text !tracking-[0.3em] !text-sage">Sources & Updates</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-serif tracking-tighter mb-8 text-ink leading-none">
          信息可信度，<br /><span className="opacity-40 italic">必须可追溯</span>
        </h1>
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-full bg-oat border border-clay/30">
            <History size={16} className="text-sage" />
          </div>
          <p className="text-lg text-sage/60 font-serif italic font-medium">首批来源检查于 2026-05-04。</p>
        </div>
      </header>

      <section className="mb-24">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 mb-16 border-b border-clay/30 pb-12">
          <div className="flex items-center gap-8">
            <div className="w-20 h-20 rounded-[32px] bg-ink text-paper flex items-center justify-center shadow-2xl relative">
              <div className="absolute inset-2 border border-paper/10 rounded-[24px]" />
              <ShieldCheck size={34} />
            </div>
            <div>
              <h2 className="text-4xl font-serif font-bold tracking-tight text-ink mb-2 italic">来源分层</h2>
              <p className="text-lg text-sage/50 font-medium font-serif italic">官方事实、个人经验和待验证线索不能混在一起。</p>
            </div>
          </div>
          <button className="btn-claude h-12 px-8 text-[10px]">
            查看规范 <ChevronRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SOURCE_TYPE_DESCRIPTIONS.map((type) => (
            <div key={type.id} className="step-card !p-8">
              <div className="tertiary-text !text-ink px-4 py-1.5 rounded-full inline-block mb-8 border border-clay/50 bg-paper">
                {type.id}
              </div>
              <p className="text-[15px] text-sage/70 leading-relaxed font-medium">{type.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-24">
        <div className="flex items-center gap-6 mb-12">
          <div className="w-16 h-16 rounded-[24px] bg-oat border border-clay/40 text-sage flex items-center justify-center shadow-inner">
            <BookOpen size={28} />
          </div>
          <h2 className="text-4xl font-serif font-bold tracking-tight text-ink italic">来源记录</h2>
        </div>

        <div className="space-y-10">
          {sourceGroups.map((group) => (
            <div key={group.sourceType}>
              <div className="flex items-center gap-4 mb-4">
                <span className="tertiary-text px-4 py-2 rounded-full border border-clay/40 bg-oat/40">{group.sourceType}</span>
                <span className="text-sm text-sage/60">
                  {group.sourceType === 'Official' ? '产品事实优先引用这一层。' : '用于解释、经验或痛点线索，不替代官方事实。'}
                </span>
              </div>

              <div className="overflow-hidden rounded-[32px] border border-clay/40 bg-white">
                {group.sources.map((source) => (
                  <a id={source.id} key={source.id} href={sourceHref(source)} target={sourceTarget(source)} rel={sourceRel(source)} className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-4 px-6 py-5 border-b border-clay/30 last:border-b-0 hover:bg-oat/30 transition-colors">
                    <div>
                      <h3 className="font-serif font-bold text-lg">{source.title}</h3>
                      <p className="text-sm text-sage/60 mt-1">{source.owner} · {source.topicTags.join(', ')}</p>
                      {source.sourceType === 'Personal Note' && (
                        <p className="text-sm text-sage/70 mt-3 leading-relaxed">
                          Verified {source.lastCheckedAt} · 校园个人使用记录，只说明本地场景经验，不作为产品事实来源。
                        </p>
                      )}
                    </div>
                    <span className="tertiary-text px-3 py-2 rounded-full border border-clay/40 h-fit w-fit">{source.sourceType}</span>
                    <span className="tertiary-text h-fit w-fit">Checked {source.lastCheckedAt}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-6 mb-12">
          <div className="w-16 h-16 rounded-[24px] bg-oat border border-clay/40 text-sage flex items-center justify-center shadow-inner">
            <Calendar size={28} />
          </div>
          <h2 className="text-4xl font-serif font-bold tracking-tight text-ink italic">更新记录</h2>
        </div>

        <div className="space-y-8">
          {UPDATES.map((update, idx) => {
            const source = getSource(update.sourceId);
            return (
              <motion.div key={update.id} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.04 }} className="step-card !p-8">
                <div className="flex flex-col md:flex-row md:items-center gap-5 mb-6">
                  <div className="flex items-center gap-2 tertiary-text !text-sage/50">
                    <CheckCircle2 size={14} /> {update.detectedAt}
                  </div>
                  <div className="px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] bg-sage text-paper w-fit">
                    {source?.sourceType ?? 'Source'}
                  </div>
                  <div className="px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] bg-oat text-sage border border-clay/50 w-fit">
                    {update.impactArea}
                  </div>
                </div>
                <h3 className="text-3xl font-serif font-bold mb-5 tracking-tight text-ink">{update.title}</h3>
                <p className="text-[16px] text-sage/70 leading-relaxed mb-8 font-medium max-w-3xl border-l-2 border-clay/30 pl-6">
                  {update.impactSummary}
                </p>
                <div className="flex flex-wrap items-center gap-6">
                  {source && source.url !== '#' && (
                    <a href={source.url} target="_blank" rel="noreferrer" className="link-claude text-sm">
                      打开来源 <ExternalLink size={16} />
                    </a>
                  )}
                  <span className="tertiary-text">
                    {update.userActionRequired ? '需要用户行动' : '暂不需要用户行动'}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
}
