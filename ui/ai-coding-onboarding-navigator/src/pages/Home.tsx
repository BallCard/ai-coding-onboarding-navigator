import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Circle, Compass, Lightbulb, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROADMAP_NODES, ROUTE_LEVELS } from '../constants';
import InstallationGate from '../components/InstallationGate';

const STORAGE_KEY = 'ai-navigator-completed-nodes';

const STARTING_POINTS = [
  {
    icon: Lightbulb,
    eyebrow: '我想找一个真实方向',
    title: '从能产生反馈的小产出开始',
    description: '看看网页工具、课程自测、README、测试或代码解释，选一个与你有关的方向。',
    to: '/practice',
    action: '浏览小目标',
  },
];

const LOOP_STEPS = [
  ['说清目标', '写下你想得到什么，以及这次明确不做什么。'],
  ['先看计划', '让 AI 复述问题、列出范围，再允许它执行一个小动作。'],
  ['检查证据', '运行、测试、看 diff 或人工操作，确认结果不是“看起来完成”。'],
  ['留下方法', '保存一条规则、Markdown、模板或复盘，供下一次复用。'],
];

export default function Home() {
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return;
    try {
      setCompleted(JSON.parse(saved));
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const starterNodes = ROADMAP_NODES.filter((node) => node.level === 'starter');
  const starterCompleted = starterNodes.filter((node) => completed.includes(node.id)).length;

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
      <InstallationGate />

      <section id="growth-start" className="max-w-7xl mx-auto px-6 md:px-10 pt-20 md:pt-24 pb-20 md:pb-28 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-20 items-end">
          <div>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-oat/55 border border-clay/50 mb-8">
              <span className="w-2 h-2 rounded-full bg-sage animate-pulse" />
              <span className="tertiary-text">从一个真实小目标开始</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[82px] font-serif tracking-tighter leading-[0.98] mb-8">
              你现在，<br /><span className="italic opacity-40">想解决什么？</span>
            </h1>
            <p className="text-lg md:text-xl text-sage/75 leading-relaxed max-w-2xl mb-10 font-serif">
              不用先学完整套工具。选一个 20 分钟能看到结果的小目标，让 AI 帮你计划、行动和验证，再留下下一次能复用的一条经验。
            </p>
            <Link to="/practice/web-tool" className="btn-claude w-fit">
              做一个 20 分钟小任务 <ArrowRight size={16} />
            </Link>
          </div>

          <aside className="step-card !p-8 md:!p-10">
            <span className="tertiary-text">完成时应该留下</span>
            <h2 className="text-3xl font-serif font-bold mt-5 mb-7">不是一段聊天，而是四样东西</h2>
            <div className="space-y-4">
              {['一个可打开、可运行或可复查的产物', '一份 AI 实际修改范围的说明', '至少三条你亲自检查过的证据', '一条下次可以直接复用的规则'].map((item) => (
                <div key={item} className="flex gap-3 text-sm text-sage/80 leading-relaxed">
                  <CheckCircle2 size={17} className="text-sage flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
        <div className="border-t border-clay/50 pt-10 mb-8">
          <span className="tertiary-text">真实问题本身就是入口</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="step-card !p-7 md:!p-9">
            <div className="w-11 h-11 rounded-2xl bg-oat border border-clay/50 flex items-center justify-center text-sage mb-7"><Wrench size={20} /></div>
            <span className="tertiary-text">我遇到了具体问题</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold mt-4 mb-4">直接把报错或截图交给 AI</h2>
            <p className="text-sm leading-relaxed mb-6">使用 Codex、豆包或你手边可用的 AI，说明你原本想做什么，并附上完整错误信息或截图，请它先解释原因，再给最小解决步骤。</p>
            <div className="rounded-2xl bg-oat/35 border border-clay/40 p-4 text-sm text-sage/75 leading-relaxed">
              可直接问：我想完成……，现在出现……。这是完整报错或截图。请判断原因，并告诉我先做哪一步。
            </div>
          </article>
          {STARTING_POINTS.map((point) => {
            const Icon = point.icon;
            return (
              <Link key={point.title} to={point.to} className="group step-card !p-7 md:!p-9">
                <div className="w-11 h-11 rounded-2xl bg-oat border border-clay/50 flex items-center justify-center text-sage mb-7"><Icon size={20} /></div>
                <span className="tertiary-text">{point.eyebrow}</span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold mt-4 mb-4">{point.title}</h2>
                <p className="text-sm leading-relaxed mb-7">{point.description}</p>
                <span className="link-claude">{point.action} <ArrowRight size={14} /></span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-oat/55 border-y border-clay/60 py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-14">
            <span className="tertiary-text">A repeatable loop</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-5 mb-6">每次只练同一个闭环</h2>
            <p className="text-sage/75 leading-relaxed">工具会变化，这四个动作可以迁移到课程作业、个人项目和真实仓库。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {LOOP_STEPS.map(([title, description], index) => (
              <article key={title} className="bg-paper border border-clay/80 rounded-[28px] p-7 md:p-8 shadow-[0_18px_48px_-38px_rgba(18,17,16,0.45)]">
                <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-sage/8 border border-sage/15 px-2 font-mono text-xs font-medium text-sage/70">0{index + 1}</span>
                <h3 className="text-xl font-serif font-bold mt-7 mb-4 text-ink">{title}</h3>
                <p className="text-sm text-sage/75 leading-relaxed">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="three-level-roadmap" className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-28 scroll-mt-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-3xl">
            <span className="tertiary-text">Progressive Depth</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-5 mb-5">完成一次后，再按需要走深</h2>
            <p className="text-sage/70 leading-relaxed">三层路线仍然保留，但它们是进度与深度，不是开始前必须做出的选择。</p>
          </div>
          <div className="rounded-full border border-clay/50 bg-oat/30 px-5 py-3 text-xs text-sage/70">
            入门进度 {starterCompleted} / {starterNodes.length}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {ROUTE_LEVELS.map((level, index) => (
            <Link key={level.id} to={`/${level.id}`} className="step-card !p-7 md:!p-8 group">
              <div className="flex items-center justify-between mb-7">
                <div className="w-12 h-12 rounded-full border border-clay/60 flex items-center justify-center">
                  {index === 0 ? <Compass size={19} className="text-sage" /> : <Circle size={16} className="text-sage/50" />}
                </div>
                <span className="tertiary-text">0{index + 1}</span>
              </div>
              <span className="tertiary-text">{level.subtitle}</span>
              <h3 className="text-2xl font-serif font-bold mt-4 mb-4">{level.title}</h3>
              <p className="text-sm leading-relaxed mb-7">{level.description}</p>
              <span className="link-claude">查看这层 <ArrowRight size={14} /></span>
            </Link>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
