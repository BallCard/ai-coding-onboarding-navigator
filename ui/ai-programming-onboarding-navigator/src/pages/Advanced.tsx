import { motion } from 'motion/react';
import {
  ArrowRight,
  Brain,
  Cable,
  CheckCircle2,
  Database,
  ExternalLink,
  GitBranch,
  Hammer,
  Network,
  PlayCircle,
  Route,
  ShieldCheck,
  Terminal,
  Workflow,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { getSource } from '../constants';

const sourceIds = [
  'claude-code-overview',
  'claude-code-features-overview',
  'claude-code-permissions',
  'claude-code-hooks',
  'claude-code-subagents',
  'codex-mcp',
  'codex-hooks',
  'fowler-humans-and-agents',
  'dora-2025-ai-amplifier',
  'baoyu-claude-code-secrets',
];

const agentLoop = [
  {
    title: '理解目标',
    description: '聊天机器人通常停在回答。Agent 先把目标转成可执行任务，判断缺什么上下文。',
    icon: Brain,
  },
  {
    title: '读取上下文',
    description: '进入真实仓库、文档、终端输出和历史规则，而不是只依赖用户复制粘贴。',
    icon: Database,
  },
  {
    title: '调用工具',
    description: '读文件、改文件、跑命令、查页面、连外部系统。工具让模型从建议者变成行动者。',
    icon: Hammer,
  },
  {
    title: '观察反馈',
    description: '命令输出、测试失败、review 意见和浏览器截图会反过来修正下一步动作。',
    icon: Terminal,
  },
  {
    title: '验证交付',
    description: '没有验证，Agent 只是在“看起来完成”。能跑测试、构建和 smoke test，才有闭环。',
    icon: CheckCircle2,
  },
];

const architectureParts = [
  ['Model', '负责推理、生成计划、解释反馈。它是大脑，但不是完整 Agent。'],
  ['Context', '项目文件、规则、终端输出、官方来源、用户意图。上下文决定它到底在解决什么问题。'],
  ['Tool Router', '决定什么时候读文件、什么时候跑命令、什么时候打开浏览器或调用 MCP。'],
  ['Executor', '真正执行动作：修改文件、运行脚本、提交变更、请求接口。'],
  ['Verifier', '把“我觉得对”变成“命令、测试、页面或用户结果证明它对”。'],
  ['Memory / Rules', '把稳定经验沉淀成 AGENTS.md、CLAUDE.md、Skill、模板或项目规范。'],
  ['Permission Boundary', '控制哪些动作能自动做，哪些必须人工确认。边界不是麻烦，是系统安全阀。'],
];

const toolChain = [
  {
    title: '文件工具',
    description: '让 Agent 直接读项目结构、搜索符号、定位调用链、做小步修改。',
    icon: Route,
  },
  {
    title: 'Shell 工具',
    description: '让 Agent 能安装、启动、测试、构建、查看日志，形成真实工程反馈。',
    icon: Terminal,
  },
  {
    title: 'MCP',
    description: '把 GitHub、数据库、文档、浏览器、内部系统接入 Agent 的上下文和动作空间。',
    icon: Cable,
  },
  {
    title: 'Hooks',
    description: '在关键动作前后自动插入检查，例如格式化、测试、审计、阻止危险命令。',
    icon: GitBranch,
  },
  {
    title: 'Subagents',
    description: '不是多开聊天窗口，而是把探索、实现、验证拆成不同职责和上下文。',
    icon: Network,
  },
  {
    title: 'Skills / Rules',
    description: '把重复三次的工作流固化下来，下次不用重新解释做法。',
    icon: Workflow,
  },
];

const buildSteps = [
  {
    title: '选一个高频任务',
    description: '不要从“我要做通用 Agent”开始。从一个重复任务开始：改周报脚本、整理课程资料、检查 PR、生成复盘。',
  },
  {
    title: '定义输入和完成标准',
    description: '写清楚需要哪些文件、命令、上下文；再写清楚怎样证明完成。完成标准必须能被检查。',
  },
  {
    title: '给它最小工具集',
    description: '只开放必要工具。先让它读文件和跑验证，再考虑 MCP、hooks、subagents。',
  },
  {
    title: '加入安全边界',
    description: '删除、部署、改密钥、批量改文件、提交远端这类动作要保留确认点。',
  },
  {
    title: '沉淀成规则或 Skill',
    description: '当同一流程跑通三次，把 prompt、检查项、命令和失败处理写进规则文件或 Skill。',
  },
];

function SourceLinks() {
  const sources = sourceIds.map(getSource).filter(Boolean);

  return (
    <div className="flex flex-wrap gap-4">
      {sources.map((source) => source && (
        <a key={source.id} href={source.url} target="_blank" rel="noreferrer" className="link-claude">
          {source.owner} · {source.title} <ExternalLink size={14} />
        </a>
      ))}
    </div>
  );
}

export default function Advanced() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
      <header className="mb-20 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 items-end">
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-sage" />
            <span className="tertiary-text !tracking-[0.3em] !text-sage">Workflow Route</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif tracking-tighter mb-8 text-ink leading-none">
            AI 不是更会聊天，<br />
            <span className="italic opacity-45">而是开始行动</span>
          </h1>
          <p className="text-xl text-sage/70 leading-relaxed font-serif italic border-l-2 border-clay/40 pl-8">
            这一层是可选进阶，不是新手门槛。我们把 Claude Code、Codex，以及 OpenCode、Z Code、Grok Build 等同类工具放回同一个问题里：人如何定义目标，AI 如何行动，结果如何被验证并沉淀。
          </p>
        </div>

        <aside className="step-card !p-8 md:!p-10">
          <span className="tertiary-text">本站判断</span>
          <h2 className="text-3xl font-serif font-bold mt-5 mb-5">工具不是核心，闭环才是</h2>
          <p className="text-sage/75 leading-relaxed mb-8">
            不同工具的入口、权限和扩展方式会变化，但可迁移的工作模型相同：目标、上下文、工具、执行、验证和反馈。先学会这套模型，再按账号、任务和环境选择工具。
          </p>
          <div className="flex flex-wrap gap-2">
            {['Goal-first', 'Context-aware', 'Tool-using', 'Permissioned', 'Verifiable'].map((tag) => (
              <span key={tag} className="text-[9px] font-black uppercase tracking-[0.16em] bg-oat/40 text-sage/70 border border-clay/30 px-2.5 py-1 rounded-md">
                {tag}
              </span>
            ))}
          </div>
        </aside>
      </header>

      <section className="mb-24">
        <div className="mb-10 max-w-3xl">
          <span className="tertiary-text">01 · Agent Loop</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-5 mb-5">从 Chatbot 到 Agent，差别在行动闭环</h2>
          <p className="text-sage/75 leading-relaxed">
            聊天机器人主要生成答案。Agent 会把答案接到工具、环境和验证上：它能做事，也能根据结果修正自己。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {agentLoop.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="step-card !p-6 md:!p-7">
                <div className="flex items-center justify-between mb-7">
                  <Icon size={22} className="text-sage" />
                  <span className="tertiary-text">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">{item.title}</h3>
                <p className="text-sm text-sage/75 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mb-24 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
        <div className="lg:sticky lg:top-28">
          <span className="tertiary-text">02 · Internal Architecture</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-5 mb-5">Agent 内部不是一个模型，而是一套系统</h2>
          <p className="text-sage/75 leading-relaxed mb-8">
            进阶同学最该建立的心智模型：模型负责思考，但 Agent 的上限由上下文、工具、执行器、验证器和权限边界共同决定。
          </p>
          <div className="terminal-box !rounded-[28px]">
            <div>goal -&gt; context -&gt; plan</div>
            <div>plan -&gt; tool call -&gt; observation</div>
            <div>observation -&gt; revision -&gt; verification</div>
            <div>verification -&gt; delivery -&gt; reusable rule</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {architectureParts.map(([title, description]) => (
            <div key={title} className="border border-clay/60 bg-white px-6 py-6 rounded-[28px]">
              <h3 className="text-2xl font-serif font-bold mb-3">{title}</h3>
              <p className="text-sm text-sage/75 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-24">
        <div className="mb-10 max-w-3xl">
          <span className="tertiary-text">03 · Tool Chain</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-5 mb-5">工具链让 AI 从“建议”变成“执行”</h2>
          <p className="text-sage/75 leading-relaxed">
            没有工具，AI 只能告诉你应该怎么做。有工具，它能亲自做。有验证工具，它才能知道自己有没有做对。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {toolChain.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="step-card !p-8">
                <Icon size={24} className="text-sage mb-8" />
                <h3 className="text-3xl font-serif font-bold mb-4">{item.title}</h3>
                <p className="text-sage/75 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mb-24 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 items-stretch">
        <div className="step-card !p-8 md:!p-10">
          <ShieldCheck size={26} className="text-sage mb-8" />
          <span className="tertiary-text">04 · Human On The Loop</span>
          <h2 className="text-4xl font-serif font-bold mt-5 mb-6">人负责为什么，AI 负责怎么做</h2>
          <p className="text-sage/75 leading-relaxed mb-8">
            Martin Fowler 对软件工程循环的区分很有用：人应该掌握目标、价值判断和最终结果的 why loop；AI 可以承担代码、工具和中间产物的 how loop。人不必逐行盯住每个动作，但必须设计边界、反馈和验收。
          </p>
          <ul className="space-y-4 text-sm text-sage/80 leading-relaxed">
            <li>· 你负责目标、优先级、风险承受和完成标准。</li>
            <li>· AI 负责检索、归纳、生成、执行和根据反馈提出下一步。</li>
            <li>· 工具权限、测试、diff、运行结果和用户反馈共同构成验收证据。</li>
          </ul>
        </div>

        <div className="step-card !p-8 md:!p-10 bg-ink !border-ink text-paper">
          <PlayCircle size={26} className="text-clay mb-8" />
          <span className="tertiary-text !text-clay/70">05 · Practice</span>
          <h2 className="text-4xl font-serif font-bold mt-5 mb-6 !text-paper">最后落到：自己搭一个 Agent</h2>
          <p className="text-clay/80 leading-relaxed mb-8">
            这一层的毕业任务不是背概念，而是做出一个最小可用 Agent：它能接收固定输入，调用必要工具，执行一段任务，并用验证结果证明完成。
          </p>
          <div className="terminal-box !bg-paper !text-ink !rounded-[24px] !shadow-none">
            <div>Input: 一个重复三次的真实任务</div>
            <div>Tools: 文件读取 + Shell 验证 + 必要 MCP</div>
            <div>Boundary: 高风险动作人工确认</div>
            <div>Output: 可复用规则 / Skill / workflow</div>
          </div>
        </div>
      </section>

      <section className="mb-24">
        <div className="mb-10 max-w-3xl">
          <span className="tertiary-text">Build Your Own Agent</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-5 mb-5">最小实践路线</h2>
          <p className="text-sage/75 leading-relaxed">
            自己搭 Agent 不从框架开始，而从任务系统开始。先把一个真实任务跑通，再决定是否引入更复杂的工具。
          </p>
        </div>

        <div className="space-y-5">
          {buildSteps.map((step, index) => (
            <div key={step.title} className="grid grid-cols-[64px_1fr] md:grid-cols-[96px_1fr] gap-5 items-start border border-clay/60 bg-white rounded-[28px] px-6 py-6">
              <div className="w-12 h-12 rounded-full bg-oat border border-clay/50 flex items-center justify-center text-sm font-serif font-bold text-sage">
                {index + 1}
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-sage/75 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-clay/40 pt-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div>
            <span className="tertiary-text">Official Source Trail</span>
            <h2 className="text-3xl font-serif font-bold mt-4">事实看官方，判断看本站路线</h2>
          </div>
          <SourceLinks />
        </div>
        <div className="mt-10">
          <Link to="/practice" className="btn-claude w-fit">
            去做第一个可验证 Agent 任务 <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
