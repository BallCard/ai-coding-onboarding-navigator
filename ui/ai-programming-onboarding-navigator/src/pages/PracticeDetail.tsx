import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Clock, FileText, ListChecks, Target } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { PRACTICE_TASKS, getSource } from '../constants';

export default function PracticeDetail() {
  const { taskId } = useParams();
  const task = PRACTICE_TASKS.find((item) => item.id === taskId);

  if (!task) return <Navigate to="/practice" replace />;

  const sources = task.sourceIds.map(getSource).filter(Boolean);

  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
      <Link to="/practice" className="link-claude mb-14 w-fit">
        <ArrowLeft size={16} /> 返回实践层
      </Link>

      <header className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-end mb-20">
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-sage" />
            <span className="tertiary-text !tracking-[0.3em] !text-sage">Practice Project</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif tracking-tighter mb-8 leading-[0.98] text-ink">
            {task.title}
          </h1>
          <p className="text-xl !text-ink/75 max-w-3xl leading-relaxed font-medium">{task.projectBrief}</p>
        </div>

        <aside className="step-card !rounded-[8px] !p-8 md:!p-10">
          <span className="tertiary-text">适合谁做</span>
          <h2 className="text-3xl font-serif font-bold mt-5 mb-5">{task.targetUser}</h2>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="rounded-[8px] border border-clay/50 bg-oat/25 p-4">
              <Clock size={18} className="text-sage mb-3" />
              <span className="tertiary-text">时间</span>
              <p className="text-lg font-serif font-bold mt-2">{task.estimatedMinutes} min</p>
            </div>
            <div className="rounded-[8px] border border-clay/50 bg-oat/25 p-4">
              <Target size={18} className="text-sage mb-3" />
              <span className="tertiary-text">工具</span>
              <p className="text-lg font-serif font-bold mt-2">{task.recommendedTool}</p>
            </div>
          </div>
          <p className="text-sm text-sage/70 leading-relaxed">
            做不下去时，把当前目标、完整报错或截图发给你手边可用的 AI，请它先解释原因。
          </p>
        </aside>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
        <div className="step-card !rounded-[8px] !p-7">
          <FileText size={22} className="text-sage mb-5" />
          <span className="tertiary-text">开始前准备</span>
          <ul className="mt-5 space-y-3">
            {task.requiredInputs.map((input) => (
              <li key={input} className="flex gap-3 text-sm !text-ink/72 leading-relaxed font-medium">
                <CheckCircle2 size={16} className="text-sage flex-shrink-0 mt-0.5" />
                <span>{input}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="step-card !rounded-[8px] !p-7">
          <ListChecks size={22} className="text-sage mb-5" />
          <span className="tertiary-text">最后要交付</span>
          <ul className="mt-5 space-y-3">
            {task.deliverables.map((deliverable) => (
              <li key={deliverable} className="flex gap-3 text-sm !text-ink/72 leading-relaxed font-medium">
                <CheckCircle2 size={16} className="text-sage flex-shrink-0 mt-0.5" />
                <span>{deliverable}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="step-card !rounded-[8px] !p-7">
          <Target size={22} className="text-sage mb-5" />
          <span className="tertiary-text">通过标准</span>
          <ul className="mt-5 space-y-3">
            {task.successCriteria.map((criteria) => (
              <li key={criteria} className="flex gap-3 text-sm !text-ink/72 leading-relaxed font-medium">
                <CheckCircle2 size={16} className="text-sage flex-shrink-0 mt-0.5" />
                <span>{criteria}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-20">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <span className="tertiary-text">Execution Path</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 tracking-tight">按这条线做</h2>
          </div>
        </div>

        <div className="space-y-5">
          {task.detailSteps.map((step, index) => (
            <article key={step.title} className="step-card !rounded-[8px] !p-7 md:!p-9">
              <div className="grid grid-cols-1 lg:grid-cols-[0.18fr_0.82fr] gap-8">
                <div>
                  <div className="w-12 h-12 rounded-full bg-ink text-paper flex items-center justify-center font-serif font-bold mb-5">
                    {index + 1}
                  </div>
                  <span className="tertiary-text">Step {index + 1}</span>
                </div>
                <div>
                  <h3 className="text-3xl font-serif font-bold mb-4">{step.title}</h3>
                  <p className="!text-ink/70 leading-relaxed font-medium mb-6">{step.purpose}</p>
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-8">
                    <div>
                      <span className="tertiary-text">操作</span>
                      <ol className="mt-4 space-y-3">
                        {step.actions.map((action) => (
                          <li key={action} className="text-sm !text-ink/76 leading-relaxed font-medium">
                            {action}
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div className="rounded-[8px] border border-clay/50 bg-oat/25 p-5">
                      <span className="tertiary-text">应该看到</span>
                      <p className="mt-4 text-sm !text-ink/78 leading-relaxed font-medium">{step.check}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8">
        <div className="rounded-[8px] bg-ink text-paper p-8 md:p-10">
          <span className="tertiary-text !text-paper/40">After Action Review</span>
          <h2 className="text-3xl font-serif font-bold mt-5 mb-6">做完后问自己</h2>
          <div className="space-y-4">
            {task.reflectionPrompts.map((prompt) => (
              <p key={prompt} className="text-paper/70 leading-relaxed border-l border-paper/20 pl-4">
                {prompt}
              </p>
            ))}
          </div>
        </div>

        <div className="step-card !rounded-[8px] !p-8 md:!p-10">
          <span className="tertiary-text">参考来源</span>
          <p className="!text-ink/70 leading-relaxed font-medium mt-5 mb-6">
            开源学习项目只作为练习设计参考；安装、权限、配置等事实仍以官方文档为准。
          </p>
          <div className="flex flex-wrap gap-3">
            {sources.map((source) => source && (
              <a
                key={source.id}
                href={source.url}
                target="_blank"
                rel="noreferrer"
                className="min-h-10 px-4 py-2 rounded-full border border-clay/50 bg-paper text-[10px] font-black uppercase tracking-[0.12em] text-sage hover:text-ink hover:border-ink/30 transition-all flex items-center gap-2"
              >
                <span>{source.title}</span>
                <span className="text-sage/45">{source.sourceType}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
