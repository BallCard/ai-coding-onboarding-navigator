import { motion } from 'motion/react';
import { TOOLS, getSource } from '../constants';
import { Check, Info, ArrowRight, Zap, Target, BookOpen, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ToolSelection() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
      <header className="mb-24 max-w-3xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-[1px] bg-sage" />
          <span className="tertiary-text !tracking-[0.3em] !text-sage">Tool Choice</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-serif tracking-tighter mb-8 text-ink leading-none">
          先选今天要跑通的工具，<br /><span className="opacity-40 italic">再去安装</span>
        </h1>
        <p className="text-xl text-sage/70 leading-relaxed font-serif italic border-l-2 border-clay/40 pl-8">
          不做参数竞赛。Claude Code 和 Codex 是本站的两条示范路径；同样的判断也适用于 OpenCode、Z Code、Grok Build 等 AI 辅助编程工具：入口、任务、权限和验证是否匹配。
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
        {TOOLS.map((tool) => {
          const sources = tool.sourceIds.map(getSource).filter(Boolean);
          return (
            <div key={tool.id} className="step-card flex flex-col group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sage/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

              <div className="p-2 md:p-4 flex-1 relative z-10">
                <div className="flex items-center justify-between mb-14">
                  <div className="w-16 h-16 bg-paper rounded-[24px] border border-clay/40 flex items-center justify-center shadow-sm group-hover:bg-ink group-hover:text-paper transition-all duration-700">
                    {tool.id === 'claude-code' ? <Zap size={24} /> : <Target size={24} />}
                  </div>
                  <span className="tertiary-text opacity-40 uppercase">Official Path</span>
                </div>

                <h2 className="text-4xl font-serif font-bold tracking-tight mb-6 text-ink">{tool.name}</h2>
                <p className="text-lg text-sage/70 mb-12 leading-relaxed font-medium max-w-sm">{tool.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-clay/20 pt-12">
                  <div>
                    <h4 className="tertiary-text mb-8 !text-ink/80">选它，如果</h4>
                    <ul className="space-y-5">
                      {tool.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-4 text-[14px] leading-snug">
                          <Check size={16} className="text-sage mt-1 flex-shrink-0" />
                          <span className="text-sage/90 font-medium font-serif italic">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="tertiary-text mb-8 !text-ink/80">先确认</h4>
                    <ul className="space-y-5">
                      {tool.cons.map((con) => (
                        <li key={con} className="flex items-start gap-4 text-[14px] leading-snug">
                          <Info size={16} className="text-clay mt-1 flex-shrink-0" />
                          <span className="text-sage/60 italic font-medium">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-clay/20 bg-oat/5 -mx-12 -mb-12 px-12 pb-12 rounded-b-[40px] relative z-10">
                <div className="flex flex-wrap gap-3 mb-10">
                  {tool.scenarios.map((scenario) => (
                    <span key={scenario} className="bg-paper border border-clay/60 px-5 py-2.5 rounded-full text-[11px] font-black uppercase tracking-[0.16em] text-sage/70 shadow-sm">
                      {scenario}
                    </span>
                  ))}
                </div>

                <p className="text-[15px] leading-relaxed text-sage/70 font-serif italic border-l-2 border-clay pl-8 max-w-md mb-10">
                  {tool.recommendation}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <Link to={`/setup?tool=${tool.id}`} className="btn-claude w-fit">
                    进入安装验证 <ArrowRight size={18} />
                  </Link>
                  <div className="flex flex-wrap gap-2">
                    {sources.map((source) => source && (
                      <a key={source.id} href={source.url} target="_blank" rel="noreferrer" className="tertiary-text px-3 py-2 rounded-full border border-clay/40 hover:text-ink">
                        {source.sourceType} <ExternalLink size={11} className="inline ml-1" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-32 p-14 md:p-20 rounded-[48px] bg-ink text-paper relative overflow-hidden flex flex-col lg:flex-row items-center gap-14">
        <div className="relative z-10 p-8 bg-paper/5 rounded-3xl border border-paper/10 backdrop-blur-sm">
          <BookOpen size={42} className="text-clay" />
        </div>
        <div className="relative z-10 flex-1 text-center lg:text-left">
            <h3 className="font-serif text-3xl md:text-4xl mb-6 italic opacity-90">还选不出来？</h3>
            <p className="text-lg text-paper/55 leading-relaxed max-w-2xl font-serif italic mb-0">
              先用你已有账号体系和客户端的一侧；两边都能用，就各自完成同一个小任务后再比较。别把工具选择变成开始工作的替代品。
          </p>
        </div>
        <Link to="/practice" className="relative z-10 bg-paper text-ink px-12 py-5 rounded-full font-bold text-[12px] uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-2xl active:scale-95 whitespace-nowrap">
          直接做首次实践
        </Link>
      </div>
    </motion.div>
  );
}
