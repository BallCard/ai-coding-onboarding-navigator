import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Clock, FileText, LockKeyhole, ShieldCheck, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRACTICE_TASKS, RULE_TEMPLATES, SAFETY_GUIDES, getSource } from '../constants';
import WorkflowNotebook from '../components/WorkflowNotebook';

const HELP_PROMPT = `我的小目标是：……
当前材料或环境是：……
这次允许修改：……
这次不要做：……
请先复述目标，列出最小文件范围和验证步骤；等我确认后再执行。
完成后请说明实际改了什么，并逐条对照验收标准。`;

export default function FirstTask() {
  const recommendedTasks = PRACTICE_TASKS.slice(0, 4);
  const moreTasks = PRACTICE_TASKS.slice(4);

  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
      <header className="grid grid-cols-1 lg:grid-cols-[1.12fr_0.88fr] gap-12 lg:gap-20 items-end mb-20">
        <div>
          <div className="flex items-center gap-4 mb-8"><div className="w-12 h-px bg-sage" /><span className="tertiary-text">First Practice</span></div>
          <h1 className="text-5xl md:text-7xl font-serif tracking-tighter leading-[0.98] mb-8">选一个小目标，<br /><span className="italic opacity-40">今天就做完</span></h1>
          <p className="text-lg text-sage/75 leading-relaxed max-w-2xl mb-9">每张任务卡只练一次完整闭环：说清目标、确认边界、执行一个小动作、用证据验收，并留下下一次能复用的一条规则。</p>
          <Link to="/practice/web-tool" className="btn-claude w-fit">开始推荐任务 <ArrowRight size={16} /></Link>
        </div>
        <aside className="step-card !p-8 md:!p-10">
          <span className="tertiary-text">推荐从这里开始</span>
          <h2 className="text-3xl font-serif font-bold mt-5 mb-4">生成一个网页小工具</h2>
          <p className="text-sm leading-relaxed mb-7">20 分钟，在空目录完成一个计时器、Todo、单位换算或课程 DDL 提醒。产物直观，修改范围也容易控制。</p>
          <div className="flex flex-wrap gap-3 text-xs text-sage/70">
            <span className="px-3 py-2 rounded-full bg-oat border border-clay/40 flex items-center gap-2"><Clock size={13} /> 20 分钟</span>
            <span className="px-3 py-2 rounded-full bg-oat border border-clay/40 flex items-center gap-2"><Target size={13} /> 空测试目录</span>
          </div>
        </aside>
      </header>

      <section className="mb-20 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-7">
        <article className="rounded-[36px] bg-ink text-paper p-8 md:p-10">
          <span className="tertiary-text !text-paper/40">Before the first edit</span>
          <h2 className="text-3xl font-serif font-bold mt-5 mb-5">先把边界交给 AI</h2>
          <div className="space-y-4 text-sm text-paper/65 leading-relaxed">
            <p>使用独立测试目录，或先确认 Git / 备份状态。</p>
            <p>第一次保留人工确认；写文件、运行命令和权限变化都要看清影响范围。</p>
            <p>真实成绩、隐私数据、账号凭据与课程项目大范围改动不作为第一次练习。</p>
          </div>
        </article>
        <article className="step-card !p-8 md:!p-10">
          <span className="tertiary-text">通用开场模板</span>
          <h2 className="text-3xl font-serif font-bold mt-5 mb-5">先复制这段，再填你的目标</h2>
          <div className="terminal-box !p-6 !rounded-[20px]"><pre className="whitespace-pre-wrap text-xs md:text-[13px]">{HELP_PROMPT}</pre></div>
        </article>
      </section>

      <section className="mb-20">
        <div className="max-w-3xl mb-10"><span className="tertiary-text">Small Projects</span><h2 className="text-4xl md:text-5xl font-serif font-bold mt-5 mb-5">选一个与你有关的产出</h2><p className="text-sage/70 leading-relaxed">不必按顺序做。优先选择你能亲自判断结果好坏的任务。</p></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {recommendedTasks.map((task, index) => (
            <motion.article key={task.id} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }} className="step-card !p-7 md:!p-9 flex flex-col">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-7">
                <span className="tertiary-text">{task.tags[0]}</span>
                <span className="text-xs text-sage/65 flex items-center gap-2"><Clock size={13} /> {task.estimatedMinutes} 分钟</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">{task.title}</h3>
              <p className="text-sm leading-relaxed mb-7">{task.projectBrief}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-7">
                <div><span className="tertiary-text">交付物</span><p className="text-sm text-sage/75 mt-3 leading-relaxed">{task.deliverables[0]}</p></div>
                <div><span className="tertiary-text">边界</span><p className="text-sm text-sage/75 mt-3 leading-relaxed">{task.requiredInputs[0]}；只做本卡目标</p></div>
              </div>
              <div className="rounded-2xl bg-oat/35 border border-clay/40 p-5 mb-8">
                <span className="tertiary-text">验收证据</span>
                <ul className="mt-4 space-y-2">
                  {task.successCriteria.slice(0, 3).map((criterion) => <li key={criterion} className="flex gap-2 text-sm text-sage/80"><CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" />{criterion}</li>)}
                </ul>
              </div>
              <div className="mt-auto pt-6 border-t border-clay/40 flex items-center justify-between gap-4"><Link to={`/practice/${task.id}`} className="link-claude">打开任务 <ArrowRight size={14} /></Link><span className="tertiary-text">{task.difficulty}</span></div>
            </motion.article>
          ))}
        </div>

        {moreTasks.length > 0 && (
          <details className="mt-7 rounded-[28px] border border-clay/60 bg-white p-7 md:p-8">
            <summary className="cursor-pointer font-serif font-bold text-xl">我已经做过一次，查看更多项目型任务</summary>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-7 pt-7 border-t border-clay/40">
              {moreTasks.map((task) => (
                <Link key={task.id} to={`/practice/${task.id}`} className="rounded-2xl bg-oat/30 border border-clay/40 p-5 hover:border-ink/25 transition-colors">
                  <span className="tertiary-text">{task.estimatedMinutes} min</span><h3 className="font-serif font-bold text-xl mt-3 mb-2">{task.title}</h3><p className="text-sm text-sage/70 leading-relaxed">{task.description}</p>
                </Link>
              ))}
            </div>
          </details>
        )}
      </section>

      <section className="mb-20">
        <details className="rounded-[28px] border border-clay/60 bg-white p-7 md:p-8">
          <summary className="cursor-pointer flex items-center gap-3 font-serif font-bold text-xl"><LockKeyhole size={19} className="text-sage" />需要时再看：规则模板与完整安全说明</summary>
          <div className="mt-8 pt-8 border-t border-clay/40 grid grid-cols-1 lg:grid-cols-2 gap-7">
            {RULE_TEMPLATES.map((template) => {
              const source = getSource(template.sourceIds[0]);
              return <article key={template.id} className="rounded-2xl bg-oat/25 border border-clay/40 p-6"><div className="flex justify-between gap-4 mb-4"><FileText size={20} className="text-sage" /><span className="tertiary-text">{source?.sourceType}</span></div><h3 className="text-2xl font-serif font-bold mb-3">{template.filename}</h3><p className="text-sm text-sage/70 mb-5">{template.purpose}</p><pre className="terminal-box !p-5 !rounded-[18px] whitespace-pre-wrap text-xs max-h-52 overflow-auto">{template.starterText}</pre></article>;
            })}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-5">
              {SAFETY_GUIDES.map((guide) => <article key={guide.id} className="rounded-2xl border border-clay/40 p-5"><ShieldCheck size={18} className="text-sage mb-4" /><h3 className="font-serif font-bold text-lg mb-3">{guide.title}</h3><p className="text-sm text-sage/70 leading-relaxed">{guide.beginnerRule}</p></article>)}
            </div>
          </div>
        </details>
      </section>

      <WorkflowNotebook />
    </motion.div>
  );
}
