import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ROADMAP_NODES, ROUTE_LEVELS, getSource, type RouteLevel } from '../constants';
import { ArrowRight, AlertCircle, CheckCircle2, Circle } from 'lucide-react';
import { Link } from 'react-router-dom';

const STORAGE_KEY = 'ai-navigator-completed-nodes';

export default function Home() {
  const [completed, setCompleted] = useState<string[]>([]);
  const [activeLevel, setActiveLevel] = useState<RouteLevel>('starter');

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) setCompleted(JSON.parse(saved));
  }, []);

  const toggleCompleted = (nodeId: string) => {
    const next = completed.includes(nodeId)
      ? completed.filter((id) => id !== nodeId)
      : [...completed, nodeId];
    setCompleted(next);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32"
    >
      <header className="mb-16 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-end">
        <div>
          <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-oat/50 border border-clay/40 mb-10 shadow-sm">
            <div className="w-2.5 h-2.5 rounded-full bg-sage animate-pulse" />
            <span className="tertiary-text !text-sage !tracking-[0.3em]">Campus AI Coding Onboarding</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif tracking-tighter mb-8 leading-[0.98] text-ink">
            先选当前状态，<br />
            <span className="italic opacity-40">再按步骤做</span>
          </h1>
          <p className="text-xl text-sage/70 max-w-2xl leading-relaxed font-serif italic">
            先把一次任务跑通，再把经验带进真实项目。工具会变化，但目标、上下文、权限和验证这套闭环可以迁移。
          </p>
        </div>

        <aside className="step-card !p-10">
          <span className="tertiary-text">默认选择</span>
          <h2 className="text-3xl font-serif font-bold mt-6 mb-6">先跑通第一次任务</h2>
          <p className="text-sage/70 leading-relaxed mb-8">
            还没完成第一次 AI 编程任务，先选一个入口、装好、登录、做一个小任务。MCP、Hooks 或多 Agent 都是遇到真实重复问题后再加的选项。
          </p>
          <button onClick={() => setActiveLevel('starter')} className="btn-claude w-fit">
            查看入门路线 <ArrowRight size={16} />
          </button>
        </aside>
      </header>

      <section className="mb-24 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {ROUTE_LEVELS.map((level) => {
          const layerPath = `/${level.id}`;
          return (
          <div
            key={level.id}
            onClick={() => setActiveLevel(level.id)}
            role="button"
            tabIndex={0}
            className={`text-left step-card !p-8 transition-all cursor-pointer ${activeLevel === level.id ? '!border-ink shadow-[0_30px_70px_-20px_rgba(18,17,16,0.12)]' : ''}`}
          >
            <span className="tertiary-text">{level.subtitle}</span>
            <h2 className="text-3xl font-serif font-bold mt-5 mb-4">{level.title}</h2>
            <p className="text-sm text-sage/75 leading-relaxed mb-6">{level.description}</p>
            <div className="flex flex-wrap gap-2">
              {level.fitSignals.map((signal) => (
                <span key={signal} className="text-[9px] font-black uppercase tracking-[0.16em] bg-oat/40 text-sage/70 border border-clay/30 px-2.5 py-1 rounded-md">
                  {signal}
                </span>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-clay/40 flex items-center justify-between gap-4">
              <span className="tertiary-text">协作入口</span>
              <Link onClick={(event) => event.stopPropagation()} to={layerPath} className="link-claude">
                打开独立入口 <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        );
        })}
      </section>

      <section className="relative">
        <div className="absolute left-[31px] md:left-[63px] top-16 bottom-16 w-px bg-clay/30" />

        <div className="space-y-16 md:space-y-24 relative z-10">
          {ROADMAP_NODES.filter((node) => node.level === activeLevel).map((node, index) => {
            const isCompleted = completed.includes(node.id);
            const primarySource = getSource(node.sourceIds[0]);

            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-120px' }}
                transition={{ delay: index * 0.04, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                className="flex gap-8 md:gap-16 group"
              >
                <div className="relative flex-shrink-0">
                  <div className="w-16 md:w-32 flex justify-center pt-3">
                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full border flex items-center justify-center transition-all duration-700 shadow-sm relative z-20 ${
                      isCompleted ? 'bg-sage border-sage text-paper' : 'bg-paper border-clay/60 text-sage/50 group-hover:bg-ink group-hover:text-paper'
                    }`}>
                      {isCompleted ? <CheckCircle2 size={22} /> : <span className="text-lg font-serif font-bold">{index + 1}</span>}
                    </div>
                  </div>
                </div>

                <div className="flex-1 step-card !p-8 md:!p-12">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-10">
                    <div className="max-w-3xl">
                      <div className="flex flex-wrap items-center gap-4 mb-5">
                        <h3 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-ink leading-none">{node.title}</h3>
                        {node.commonPitfalls > 0 && (
                          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-clay/20 text-sage/80 border border-clay/10">
                            <AlertCircle size={15} />
                            <span className="text-[10px] font-black uppercase tracking-[0.25em] leading-none whitespace-nowrap">{node.commonPitfalls} 个常见卡点</span>
                          </div>
                        )}
                      </div>
                      <p className="text-[18px] text-sage/70 leading-relaxed font-medium font-serif italic border-l-2 border-clay/40 pl-6 py-1">
                        {node.description}
                      </p>
                    </div>
                    {primarySource && (
                      <span className="tertiary-text px-4 py-2 rounded-full border border-clay/40 bg-paper whitespace-nowrap">
                        {primarySource.sourceType}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <div>
                      <h4 className="tertiary-text mb-4">当前任务</h4>
                      <div className="flex flex-wrap gap-3">
                        {node.tasks.map((task) => (
                          <div key={task} className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-oat/20 border border-clay/10">
                            <Circle size={9} className="text-sage/40 fill-current" />
                            <span className="text-[12px] font-black text-sage/80 uppercase tracking-[0.2em]">{task}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="tertiary-text mb-4">完成标准</h4>
                      <p className="text-sm text-sage/80 leading-relaxed">{node.successCriteria[0]}</p>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-clay/30 flex flex-col lg:flex-row items-center justify-between gap-8">
                    <Link to={`/roadmap/${node.id}`} className="link-claude text-sm">
                      查看这一步 <ArrowRight size={16} />
                    </Link>
                    <div className="flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => toggleCompleted(node.id)}
                        className="h-12 px-7 rounded-full text-[11px] font-black uppercase tracking-[0.18em] border border-clay text-sage/70 hover:border-ink hover:text-ink transition-all active:scale-95 bg-transparent"
                      >
                        {isCompleted ? '取消完成' : '我完成了'}
                      </button>
                      <Link
                        to={`/troubleshooting?node=${node.id}&category=${node.stuckCategory}`}
                        className="h-12 px-7 rounded-full text-[11px] font-black uppercase tracking-[0.18em] bg-clay/30 text-sage border border-clay/20 hover:bg-clay/50 transition-all flex items-center active:scale-95"
                      >
                        我卡住了
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
}
