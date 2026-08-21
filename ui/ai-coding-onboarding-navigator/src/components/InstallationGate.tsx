import { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, ExternalLink, HelpCircle } from 'lucide-react';

const STORAGE_KEY = 'ai-navigator-installation-status';
type InstallationStatus = 'ready' | 'needs-help' | null;

const GUIDES = [
  {
    name: 'Claude Code',
    description: '按 Anthropic 官方安装说明核对当前系统对应的安装方式。',
    url: 'https://code.claude.com/docs/zh-CN/setup',
    sourceLabel: '官方安装说明',
  },
  {
    name: 'Codex',
    description: '没有安装好，或不确定当前状态时，按这篇图文重新核对。',
    url: 'https://mp.weixin.qq.com/s/5kgVdLNABViv8uAnD0M6Ag',
    sourceLabel: '卡兹克图文指南',
  },
  {
    name: 'WorkBuddy',
    description: '没有安装好，或不确定当前状态时，按这篇图文重新核对。',
    url: 'https://mp.weixin.qq.com/s/nFSSzluc57xPv50Zbh4owg',
    sourceLabel: '卡兹克图文指南',
  },
];

export default function InstallationGate() {
  const [status, setStatus] = useState<InstallationStatus>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'ready' || saved === 'needs-help') setStatus(saved);
  }, []);

  const choose = (next: Exclude<InstallationStatus, null>) => {
    setStatus(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <section id="installation-check" className="max-w-7xl mx-auto px-6 md:px-10 pt-20 md:pt-24 scroll-mt-24">
      <div className="rounded-[40px] border border-ink/20 bg-white shadow-[0_28px_80px_-42px_rgba(18,17,16,0.5)] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="bg-ink text-paper p-8 md:p-10 lg:p-12">
            <span className="tertiary-text !text-paper/45">Step 0 · 开始前确认</span>
            <h1 className="text-3xl md:text-4xl font-serif font-bold mt-5 mb-5 !text-paper">Claude Code、Codex 和 WorkBuddy 都安装好了吗？</h1>
            <p className="text-sm text-paper/65 leading-relaxed mb-8">
              这里只确认共同起点，不要求你运行命令或理解安装细节。按你现在的真实情况选择即可。
            </p>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <button
                type="button"
                onClick={() => choose('ready')}
                className={`h-12 px-5 rounded-full text-[10px] font-black uppercase tracking-[0.12em] flex items-center justify-center gap-2 transition-colors ${status === 'ready' ? 'bg-paper text-ink' : 'border border-paper/25 text-paper hover:bg-paper/10'}`}
              >
                <CheckCircle2 size={15} /> 已经安装好了
              </button>
              <button
                type="button"
                onClick={() => choose('needs-help')}
                className={`h-12 px-5 rounded-full text-[10px] font-black uppercase tracking-[0.12em] flex items-center justify-center gap-2 transition-colors ${status === 'needs-help' ? 'bg-paper text-ink' : 'border border-paper/25 text-paper hover:bg-paper/10'}`}
              >
                <HelpCircle size={15} /> 没有 / 不确定
              </button>
            </div>
          </div>

          <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center min-h-[330px]">
            {status === null && (
              <div className="max-w-2xl">
                <span className="tertiary-text">先回答左边的问题</span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold mt-4 mb-4">不用证明，也不用测试</h2>
                <p className="text-sm text-sage/70 leading-relaxed">如果你已经正常用过这三个工具，就选择“已经安装好了”；只要有一点不确定，就选择“没有 / 不确定”，对照资料检查。</p>
              </div>
            )}

            {status === 'ready' && (
              <div className="max-w-2xl">
                <div className="w-12 h-12 rounded-full bg-sage text-paper flex items-center justify-center mb-6"><CheckCircle2 size={22} /></div>
                <span className="tertiary-text">共同起点已确认</span>
                <h2 className="text-3xl font-serif font-bold mt-4 mb-4">好，继续解决真实问题</h2>
                <p className="text-sm text-sage/70 leading-relaxed mb-7">后面的内容不再要求你照着固定教程前进，而是从目标、证据和复盘中逐渐形成自己的方法。</p>
                <a href="#growth-start" className="link-claude">进入生长性引导 <ArrowRight size={14} /></a>
              </div>
            )}

            {status === 'needs-help' && (
              <div>
                <span className="tertiary-text">按需核对</span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold mt-4 mb-6">看对应文章，把缺的部分补好</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {GUIDES.map((guide) => (
                    <a key={guide.name} href={guide.url} target="_blank" rel="noreferrer" className="rounded-2xl border border-clay/60 bg-oat/25 p-5 hover:border-ink/25 hover:-translate-y-0.5 transition-all">
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <h3 className="font-serif font-bold text-xl">{guide.name}</h3>
                        <ExternalLink size={15} className="text-sage/55" />
                      </div>
                      <p className="text-sm text-sage/70 leading-relaxed">{guide.description}</p>
                      <span className="tertiary-text inline-block mt-5">{guide.sourceLabel}</span>
                    </a>
                  ))}
                </div>
                <p className="text-xs text-sage/55 leading-relaxed mt-5">Claude Code 使用官方说明；Codex 与 WorkBuddy 的两篇图文作为实际操作参考，内容可能随产品更新变化。</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
