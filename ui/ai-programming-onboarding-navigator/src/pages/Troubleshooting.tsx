import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useSearchParams } from 'react-router-dom';
import { ROADMAP_NODES, TROUBLESHOOTING_DATA, getSource, type TroubleshootingCategory } from '../constants';
import { Search, AlertTriangle, HelpCircle, ShieldCheck, ArrowRight } from 'lucide-react';

const CATEGORIES: { id: TroubleshootingCategory; label: string }[] = [
  { id: 'all', label: '全部' },
  { id: 'network', label: '网络' },
  { id: 'login', label: '登录' },
  { id: 'subscription', label: '订阅' },
  { id: 'api-key', label: 'API Key' },
  { id: 'node-npm', label: 'npm / Node' },
  { id: 'terminal', label: '终端' },
  { id: 'permission', label: '权限' },
  { id: 'windows', label: 'Windows' },
  { id: 'macos', label: 'macOS' },
];

export default function Troubleshooting() {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<TroubleshootingCategory>((searchParams.get('category') as TroubleshootingCategory) || 'all');
  const node = ROADMAP_NODES.find((item) => item.id === searchParams.get('node'));

  useEffect(() => {
    const cat = searchParams.get('category') as TroubleshootingCategory | null;
    if (cat) setCategory(cat);
  }, [searchParams]);

  const filtered = TROUBLESHOOTING_DATA.filter((item) => {
    const haystack = `${item.symptom} ${item.cause} ${item.firstActions.join(' ')}`.toLowerCase();
    const matchesSearch = haystack.includes(search.toLowerCase());
    const matchesCategory = category === 'all' || item.category === category || item.os === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-7xl mx-auto px-6 py-24">
      <header className="mb-16 max-w-3xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-[1px] bg-sage" />
          <span className="tertiary-text">Troubleshooting</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif tracking-tight mb-6 text-ink">复制症状，先试前三步</h1>
        <p className="text-sage/80 leading-relaxed font-medium">
          搜报错原文或现象。每张卡都按“可能原因 → 优先尝试 → 找谁处理”给下一步。
        </p>
      </header>

      {node && (
        <div className="mb-10 step-card !p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="tertiary-text">来自路线图节点</span>
            <h2 className="text-2xl font-serif font-bold mt-3">{node.title}</h2>
          </div>
          <p className="text-sm text-sage/70 max-w-xl">{node.successCriteria[0]}</p>
        </div>
      )}

      <div className="mb-10 rounded-[32px] border border-clay/40 bg-oat/40 px-8 py-6">
        <div className="flex items-start gap-4">
          <AlertTriangle size={20} className="text-sage mt-1 flex-shrink-0" />
          <div>
            <h2 className="font-serif font-bold text-xl mb-2">网络问题先拆开测</h2>
            <p className="text-sm text-sage/75 leading-relaxed">
              本站不提供规避网络限制的工具、节点、协议或教程。这里只判断浏览器、终端、npm、登录回调和校园网策略分别卡在哪里。
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mb-16">
        <div className="flex-1 relative group">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-clay group-focus-within:text-ink transition-colors" size={20} />
          <input
            type="text"
            placeholder="搜索症状，例如 npm 装不上、登录失败、API key、Windows 终端报错"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full pl-16 pr-6 py-5 bg-white border border-clay/40 rounded-2xl focus:outline-none focus:ring-4 focus:ring-clay/10 focus:border-clay transition-all text-sm font-medium shadow-sm"
          />
        </div>
        <div className="flex bg-oat/30 p-1.5 rounded-2xl border border-clay/30 overflow-x-auto shadow-sm">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`whitespace-nowrap px-5 py-3 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all ${category === cat.id ? 'bg-ink text-paper shadow-xl' : 'text-sage/60 hover:text-ink'}`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((item, idx) => {
            const source = getSource(item.sourceIds[0]);
            return (
              <motion.div key={item.id} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} className="group step-card flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-10">
                    <div className="px-3 py-1.5 rounded-md text-[9px] font-black uppercase tracking-widest shadow-sm bg-ink text-paper">
                      {item.category}
                    </div>
                    <span className="tertiary-text text-[9px] opacity-50">{item.os}</span>
                  </div>

                  <h3 className="text-xl font-serif font-bold tracking-tight mb-6 leading-tight text-ink">{item.symptom}</h3>

                  <div className="space-y-8">
                    <div>
                      <h4 className="tertiary-text mb-4">可能原因</h4>
                      <p className="text-[14px] text-sage/70 leading-relaxed font-medium">{item.cause}</p>
                    </div>

                    <div>
                      <h4 className="tertiary-text mb-4">优先尝试</h4>
                      <div className="space-y-3">
                        {item.firstActions.map((step, stepIndex) => (
                          <div key={step} className="bg-oat/40 border border-clay/30 rounded-2xl px-4 py-3 text-sm text-sage/80">
                            <span className="font-mono text-sage/40 mr-2">{stepIndex + 1}</span>{step}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-clay/30 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 tertiary-text text-[9px]">
                    <ShieldCheck size={12} className="text-clay" />
                    {source?.sourceType ?? item.sourceType}
                  </div>
                  <span className="link-claude">
                    {item.escalation === 'self-serve' ? '可自助处理' : item.escalation === 'ask-campus-helper' ? '建议找同学协助' : '看官方支持'}
                    <ArrowRight size={14} />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        <div className="py-32 text-center bg-white border border-clay/30 rounded-[40px] shadow-sm">
          <HelpCircle size={48} className="mx-auto text-clay/30 mb-8" />
          <h3 className="text-xl font-serif font-bold mb-3 tracking-tight text-ink/60">没有匹配到现有卡点</h3>
          <p className="text-sm text-sage/50 font-medium">换一个症状关键词，或先回到路线图确认当前阶段。</p>
        </div>
      )}
    </motion.div>
  );
}
