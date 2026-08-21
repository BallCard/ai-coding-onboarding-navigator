import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Link, Navigate, useParams } from 'react-router-dom';
import {
  AlertCircle,
  ArrowRight,
  Brain,
  CheckCircle2,
  Circle,
  FileText,
  FolderSearch,
  PlugZap,
  Puzzle,
  ShieldCheck,
  Target,
} from 'lucide-react';
import { PROJECT_CAPABILITIES, ROADMAP_NODES, ROUTE_LEVELS, getSource, type RouteLevel } from '../constants';

const STORAGE_KEY = 'ai-navigator-completed-nodes';

const PATH_TO_LEVEL: Record<string, RouteLevel> = {
  starter: 'starter',
  project: 'project',
};

const LEVEL_GUIDE: Record<RouteLevel, { eyebrow: string; headline: string; subcopy: string; owner: string }> = {
  starter: {
    eyebrow: 'Starter Layer',
    headline: '入门层：从零跑通第一次任务',
    subcopy: '这层按保姆级执行稿维护：按什么键、复制什么命令、看到什么输出、失败时去哪排障，都要写清楚。',
    owner: '适合负责新手引导、安装验证、排障卡的人维护。',
  },
  project: {
    eyebrow: 'Project Layer',
    headline: '项目层：把 AI 放进真实项目流程',
    subcopy: '这层按项目工作流维护：规则、权限、读仓库、测试、PR、CI 反馈，重点讲痛点、收益和工程习惯。',
    owner: '适合负责课程项目、GitHub 工作流、测试和协作规范的人维护。',
  },
  advanced: {
    eyebrow: 'Workflow Layer',
    headline: '工作流层：把一次协作变成下一次的起点',
    subcopy: '这是可选进阶：从上下文、信息来源、验证和复盘入手，再决定是否需要 pipeline、自动化或多 Agent。',
    owner: '适合已经跑通一次任务，想减少重复沟通和错误的人。',
  },
};

const PROJECT_CAPABILITY_VISUALS = [
  {
    icon: Target,
    position: 'lg:left-[14%] lg:top-[14%]',
    accent: 'border-[#8c6d3d]/45 bg-[#f9f1df]',
    line: 'lg:left-[27%] lg:top-[28%] lg:w-[18%] lg:rotate-[22deg]',
  },
  {
    icon: FileText,
    position: 'lg:right-[14%] lg:top-[14%]',
    accent: 'border-[#7f5a46]/45 bg-[#fbefe8]',
    line: 'lg:right-[27%] lg:top-[28%] lg:w-[18%] lg:-rotate-[22deg]',
  },
  {
    icon: FolderSearch,
    position: 'lg:left-[8%] lg:top-[45%]',
    accent: 'border-[#526b72]/45 bg-[#edf5f6]',
    line: 'lg:left-[23%] lg:top-[51%] lg:w-[20%]',
  },
  {
    icon: Puzzle,
    position: 'lg:right-[8%] lg:top-[45%]',
    accent: 'border-[#626f50]/45 bg-[#eef4e9]',
    line: 'lg:right-[23%] lg:top-[51%] lg:w-[20%]',
  },
  {
    icon: PlugZap,
    position: 'lg:left-[18%] lg:bottom-[12%]',
    accent: 'border-[#395f82]/40 bg-[#edf2f7]',
    line: 'lg:left-[30%] lg:bottom-[31%] lg:w-[16%] lg:-rotate-[28deg]',
  },
  {
    icon: ShieldCheck,
    position: 'lg:right-[18%] lg:bottom-[12%]',
    accent: 'border-[#5d654f]/45 bg-[#f0f4ec]',
    line: 'lg:right-[30%] lg:bottom-[31%] lg:w-[16%] lg:rotate-[28deg]',
  },
];

function ProjectLayerMap({
  completed,
  nodes,
  onToggleCompleted,
}: {
  completed: string[];
  nodes: typeof ROADMAP_NODES;
  onToggleCompleted: (nodeId: string) => void;
}) {
  const nodeById = new Map(nodes.map((node) => [node.id, node]));

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32"
    >
      <header className="mb-14 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-end">
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-sage" />
            <span className="tertiary-text !tracking-[0.3em] !text-sage">Project Layer</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif tracking-tighter mb-8 leading-[0.98] text-ink">
            项目层：把不完美的大脑武装成项目搭档
          </h1>
          <p className="text-xl !text-ink/75 max-w-3xl leading-relaxed font-medium">
            LLM 不是稳定工程师，它更像一个会推理但会遗漏、会脑补、会被上下文带偏的大脑。项目层要做的事，是用任务契约、规则、上下文、工具和验证把它变成可协作的系统。
          </p>
        </div>

        <aside className="step-card !rounded-[8px] !p-8 md:!p-10">
          <span className="tertiary-text">核心判断</span>
          <h2 className="text-3xl font-serif font-bold mt-5 mb-5">不要让 AI 直接进仓库裸奔</h2>
          <p className="!text-ink/75 leading-relaxed mb-8 font-medium">
            先给目标，后给边界；先建上下文，再让它改；最后用验证决定是否完成。项目层的收益来自这套约束系统，不来自多问几句 prompt。
          </p>
          <Link to="/" className="link-claude">
            回到统一入口 <ArrowRight size={16} />
          </Link>
        </aside>
      </header>

      <section className="relative mb-16 overflow-hidden border border-clay/70 bg-white rounded-[8px] shadow-[0_30px_90px_-58px_rgba(18,17,16,0.55)]">
        <div className="absolute inset-0 technical-grid opacity-80" />
        <div className="relative min-h-[610px] px-5 py-8 md:p-10 lg:p-12">
          <div className="hidden lg:block">
            {PROJECT_CAPABILITY_VISUALS.map((visual) => (
              <div
                key={visual.position}
                className={`absolute h-px bg-gradient-to-r from-transparent via-sage/45 to-transparent ${visual.line}`}
              />
            ))}
          </div>

          <div className="lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 mx-auto mb-8 lg:mb-0 w-full max-w-[280px] aspect-square rounded-full bg-ink text-paper border border-ink/10 shadow-[0_42px_110px_-54px_rgba(18,17,16,0.9)] flex flex-col items-center justify-center text-center p-8">
            <Brain size={36} className="mb-5 text-paper/90" />
            <span className="tertiary-text !text-paper/55 mb-4">LLM / Agent</span>
            <h2 className="text-3xl font-serif font-bold text-paper mb-4">不完美的大脑</h2>
            <p className="text-sm !text-paper/68 leading-relaxed">
              能推理、能生成、能执行，但必须被目标、边界、上下文和验证持续校正。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:block">
            {PROJECT_CAPABILITIES.map((capability, index) => {
              const visual = PROJECT_CAPABILITY_VISUALS[index];
              const Icon = visual.icon;
              const node = nodeById.get(capability.nodeId);
              const isCompleted = completed.includes(capability.nodeId);

              return (
                <motion.article
                  key={capability.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-120px' }}
                  transition={{ delay: index * 0.05, duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
                  className={`group lg:absolute lg:w-[190px] ${visual.position}`}
                >
                  <div className={`h-full rounded-[8px] border p-4 shadow-[0_18px_50px_-42px_rgba(18,17,16,0.5)] transition-all duration-500 hover:-translate-y-1 hover:border-ink/35 ${visual.accent}`}>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="w-9 h-9 rounded-full bg-white/80 border border-clay/70 flex items-center justify-center text-sage">
                        <Icon size={17} />
                      </div>
                      <span className="tertiary-text px-2.5 py-1.5 rounded-full border border-white/70 bg-white/55">
                        {capability.shortLabel}
                      </span>
                    </div>
                    <h3 className="text-lg font-serif font-bold mb-4">{capability.title}</h3>
                    {node && (
                      <div className="flex flex-wrap items-center gap-3">
                        <Link to={`/roadmap/${node.id}`} className="link-claude">
                          进入模块 <ArrowRight size={14} />
                        </Link>
                        <button
                          onClick={() => onToggleCompleted(node.id)}
                          className="h-8 px-3 rounded-full text-[10px] font-black uppercase tracking-[0.12em] border border-ink/15 text-sage hover:border-ink hover:text-ink transition-all bg-white/45"
                        >
                          {isCompleted ? '已完成' : '完成'}
                        </button>
                      </div>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 items-end">
          <div>
            <span className="tertiary-text">Project Modules</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-5 mb-6 tracking-tight">
              外圈是能力，下面才是具体项目动作
            </h2>
          </div>
          <p className="!text-ink/72 leading-relaxed font-medium">
            这里保留现有项目层节点，但不再暗示必须按编号推进。真实项目里，用户通常是缺哪块就补哪块：目标不清先补契约，仓库陌生先补上下文，结果不可信先补验证。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {nodes.map((node) => {
            const isCompleted = completed.includes(node.id);
            const primarySource = getSource(node.sourceIds[0]);

            return (
              <div key={node.id} className="step-card !rounded-[8px] !p-6">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <h3 className="text-2xl font-serif font-bold">{node.title}</h3>
                  {isCompleted && <CheckCircle2 size={18} className="text-sage flex-shrink-0 mt-1" />}
                </div>
                <p className="!text-ink/72 text-sm leading-relaxed font-medium mb-5">{node.userGoal}</p>
                <div className="mb-6">
                  <span className="tertiary-text">成功标准</span>
                  <p className="!text-ink/70 text-sm leading-relaxed mt-2">{node.successCriteria[0]}</p>
                </div>
                <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-clay/50">
                  <Link to={`/roadmap/${node.id}`} className="link-claude">
                    查看详情 <ArrowRight size={14} />
                  </Link>
                  <Link
                    to={`/troubleshooting?node=${node.id}&category=${node.stuckCategory}`}
                    className="h-9 px-4 rounded-full text-[10px] font-black uppercase tracking-[0.14em] bg-clay/40 text-sage border border-clay/40 hover:bg-clay/60 transition-all flex items-center"
                  >
                    卡住了
                  </Link>
                  {primarySource && (
                    <span className="tertiary-text px-3 py-1.5 rounded-full border border-clay/50 bg-paper">
                      {primarySource.sourceType}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
}

export default function LayerRoute() {
  const { layerId } = useParams();
  const level = layerId ? PATH_TO_LEVEL[layerId] : undefined;
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) setCompleted(JSON.parse(saved));
  }, []);

  if (!level) return <Navigate to="/" replace />;

  const levelOption = ROUTE_LEVELS.find((item) => item.id === level);
  const guide = LEVEL_GUIDE[level];
  const nodes = ROADMAP_NODES.filter((node) => node.level === level);

  const toggleCompleted = (nodeId: string) => {
    const next = completed.includes(nodeId)
      ? completed.filter((id) => id !== nodeId)
      : [...completed, nodeId];
    setCompleted(next);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  if (level === 'project') {
    return <ProjectLayerMap completed={completed} nodes={nodes} onToggleCompleted={toggleCompleted} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32"
    >
      <header className="mb-16 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-end">
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-sage" />
            <span className="tertiary-text !tracking-[0.3em] !text-sage">{guide.eyebrow}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif tracking-tighter mb-8 leading-[0.98] text-ink">
            {guide.headline}
          </h1>
          <p className="text-xl !text-ink/75 max-w-2xl leading-relaxed font-medium">
            {guide.subcopy}
          </p>
        </div>

        <aside className="step-card !p-10">
          <span className="tertiary-text">协作边界</span>
          <h2 className="text-3xl font-serif font-bold mt-6 mb-6">{levelOption?.subtitle}</h2>
          <p className="!text-ink/75 leading-relaxed mb-8 font-medium">{guide.owner}</p>
          <Link to="/" className="link-claude">
            回到统一入口 <ArrowRight size={16} />
          </Link>
        </aside>
      </header>

      <section className="relative">
        <div className="absolute left-[31px] md:left-[63px] top-16 bottom-16 w-px bg-clay/50" />

        <div className="space-y-16 md:space-y-24 relative z-10">
          {nodes.map((node, index) => {
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
                      isCompleted ? 'bg-sage border-sage text-paper' : 'bg-paper border-clay/70 text-sage group-hover:bg-ink group-hover:text-paper'
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
                          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-clay/35 text-sage border border-clay/40">
                            <AlertCircle size={15} />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] leading-none whitespace-nowrap">{node.commonPitfalls} 个常见卡点</span>
                          </div>
                        )}
                      </div>
                      <p className="text-[17px] !text-ink/75 leading-relaxed font-medium border-l-2 border-clay/60 pl-6 py-1">
                        {node.description}
                      </p>
                    </div>
                    {primarySource && (
                      <span className="tertiary-text px-4 py-2 rounded-full border border-clay/50 bg-paper whitespace-nowrap">
                        {primarySource.sourceType}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <div>
                      <h4 className="tertiary-text mb-4">当前任务</h4>
                      <div className="flex flex-wrap gap-3">
                        {node.tasks.map((task) => (
                          <div key={task} className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-oat/45 border border-clay/40">
                            <Circle size={9} className="text-sage fill-current" />
                            <span className="text-[12px] font-black text-sage uppercase tracking-[0.16em]">{task}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="tertiary-text mb-4">完成标准</h4>
                      <p className="text-sm !text-ink/75 leading-relaxed font-medium">{node.successCriteria[0]}</p>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-clay/40 flex flex-col lg:flex-row items-center justify-between gap-8">
                    <Link to={`/roadmap/${node.id}`} className="link-claude text-sm">
                      查看这一步 <ArrowRight size={16} />
                    </Link>
                    <div className="flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => toggleCompleted(node.id)}
                        className="h-12 px-7 rounded-full text-[11px] font-black uppercase tracking-[0.16em] border border-clay text-sage hover:border-ink hover:text-ink transition-all active:scale-95 bg-transparent"
                      >
                        {isCompleted ? '取消完成' : '我完成了'}
                      </button>
                      <Link
                        to={`/troubleshooting?node=${node.id}&category=${node.stuckCategory}`}
                        className="h-12 px-7 rounded-full text-[11px] font-black uppercase tracking-[0.16em] bg-clay/40 text-sage border border-clay/30 hover:bg-clay/60 transition-all flex items-center active:scale-95"
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
