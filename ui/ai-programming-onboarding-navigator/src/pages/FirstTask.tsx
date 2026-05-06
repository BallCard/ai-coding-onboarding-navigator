import { motion } from 'motion/react';
import { Code2, Bug, FileSearch, Clock, Target, ArrowRight, ShieldCheck, ChevronRight, TestTube2, FileText, LockKeyhole } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRACTICE_TASKS, RULE_TEMPLATES, SAFETY_GUIDES, getSource } from '../constants';

const ICONS = {
  'web-tool': Code2,
  'fix-bug': Bug,
  'explain-code': FileSearch,
  'add-tests': TestTube2,
  'repo-rules': FileText,
  'review-pr': ShieldCheck,
};

export default function FirstTask() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-7xl mx-auto px-6 py-24">
      <header className="mb-20">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-[1px] bg-sage" />
          <span className="tertiary-text !text-sage">First Practice</span>
        </div>
        <h1 className="text-5xl font-serif tracking-tight mb-6">装好后，马上做一个小任务</h1>
        <p className="text-sage/70 max-w-2xl leading-relaxed font-medium">
          先在测试目录里做。这里的项目参考 Claude Code 开源学习项目的练习组织方式，但事实性操作仍回到官方文档。每个项目都有详情页，按交付物验收。
        </p>
      </header>

      <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {RULE_TEMPLATES.map((template) => {
          const source = getSource(template.sourceIds[0]);
          return (
            <div key={template.id} className="step-card !p-8 md:!p-10">
              <div className="flex items-center justify-between gap-6 mb-8">
                <div className="p-4 rounded-2xl bg-oat text-sage border border-clay/40">
                  <FileText size={24} />
                </div>
                <span className="tertiary-text px-3 py-2 rounded-full border border-clay/40">{source?.sourceType ?? 'Official'}</span>
              </div>
              <h2 className="text-3xl font-serif font-bold mb-4">{template.filename} 最小模板</h2>
              <p className="text-sm text-sage/75 leading-relaxed mb-6">{template.purpose}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {template.sections.map((section) => (
                  <span key={section} className="text-[9px] font-black uppercase tracking-[0.18em] bg-oat/40 text-sage/70 border border-clay/30 px-2.5 py-1 rounded-md">
                    {section}
                  </span>
                ))}
              </div>
              <div className="terminal-box !p-5 !rounded-[20px] max-h-64 overflow-auto">
                <pre className="whitespace-pre-wrap text-[12px]">{template.starterText}</pre>
              </div>
            </div>
          );
        })}
      </section>

      <section className="mb-24 rounded-[48px] bg-ink text-paper p-10 md:p-14">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <LockKeyhole size={20} className="text-clay" />
              <span className="tertiary-text !text-paper/40">Safety Before First Run</span>
            </div>
            <h2 className="text-4xl font-serif font-bold italic">没边界，不让 Agent 动手</h2>
          </div>
          <p className="text-paper/45 max-w-xl leading-relaxed font-serif italic">
            第一次使用时保留人工确认。写文件、跑命令、改权限这些动作，都要知道它会影响哪里。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SAFETY_GUIDES.map((guide) => {
            const source = getSource(guide.sourceIds[0]);
            return (
              <div key={guide.id} className="bg-paper/5 border border-paper/10 rounded-[28px] p-6">
                <span className="tertiary-text !text-paper/30">{source?.sourceType ?? 'Official'}</span>
                <h3 className="text-xl font-serif font-bold mt-5 mb-4">{guide.title}</h3>
                <p className="text-sm text-paper/50 leading-relaxed mb-5">{guide.summary}</p>
                <p className="text-sm text-paper/75 leading-relaxed border-l border-paper/20 pl-4">{guide.beginnerRule}</p>
              </div>
            );
          })}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PRACTICE_TASKS.map((task, idx) => {
          const Icon = ICONS[task.id as keyof typeof ICONS] ?? Code2;
          const source = getSource(task.sourceIds[0]);
          return (
            <motion.div key={task.id} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} className="group relative bg-white structure-border rounded-[32px] overflow-hidden hover:border-clay transition-all duration-300 hover:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.08)]">
              <div className="p-8 md:p-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <div className="p-4 rounded-2xl bg-oat text-sage border border-clay/40">
                    <Icon size={24} />
                  </div>
                  <div className="flex gap-2">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-oat/40 border border-clay/30 rounded-lg text-[10px] font-black uppercase tracking-widest text-sage/60">
                      <Clock size={12} /> {task.estimatedMinutes} min
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-oat/40 border border-clay/30 rounded-lg text-[10px] font-black uppercase tracking-widest text-sage/60">
                      <Target size={12} /> {task.difficulty}
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-serif font-bold tracking-tight mb-4">{task.title}</h3>
                <p className="text-[14px] text-sage/70 leading-relaxed mb-8 font-medium">{task.description}</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="tertiary-text mb-3">适合人群</h4>
                    <p className="text-sm text-sage/80">{task.targetUser}</p>
                  </div>
                  <div>
                    <h4 className="tertiary-text mb-3">推荐工具</h4>
                    <p className="text-sm text-sage/80">{task.recommendedTool}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="tertiary-text mb-3">完成标准</h4>
                  <p className="text-sm text-sage/80 leading-relaxed">{task.successCriteria[0]}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-10">
                  {task.tags.map((tag) => (
                    <span key={tag} className="text-[9px] font-black uppercase tracking-[0.18em] bg-oat/40 text-sage/70 border border-clay/30 px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                  {source && (
                    <span className="text-[9px] font-black uppercase tracking-[0.18em] bg-paper text-sage/70 border border-clay/40 px-2.5 py-1 rounded-md">
                      {source.sourceType}
                    </span>
                  )}
                </div>

                <div className="mt-auto pt-8 border-t border-clay/30 flex items-center justify-between">
                  <Link to={`/practice/${task.id}`} className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-ink group/btn transition-colors hover:text-sage">
                    查看详情 <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                  <Link to={`/troubleshooting?node=task-one&category=workflow`} className="tertiary-text hover:text-ink">
                    卡住了
                  </Link>
                </div>
              </div>

              <div className="absolute -right-16 -bottom-16 opacity-[0.03] scale-150 rotate-12 transition-transform group-hover:rotate-[0deg] group-hover:scale-[1.7] pointer-events-none">
                <Icon size={240} />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-24 p-12 md:p-16 rounded-[48px] bg-white structure-border text-center relative overflow-hidden shadow-2xl shadow-zinc-200/40">
        <div className="absolute inset-0 technical-grid opacity-5 pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-3xl font-serif font-bold tracking-tight mb-4">满足这三条，才算跑通</h2>
          <p className="tertiary-text mb-12">Success Criteria</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              { title: '产物可验证', desc: '代码能运行、测试能通过，或解释结果能指导你读下一处文件。' },
              { title: '过程能复述', desc: '你知道 AI 修改了什么、为什么这么改、用了什么验证方式。' },
              { title: '风险可回退', desc: '任务发生在测试目录或 Git 工作区里，不会误伤课程项目。' },
            ].map((item) => (
              <div key={item.title} className="space-y-5">
                <div className="w-12 h-12 rounded-2xl bg-ink text-paper flex items-center justify-center mx-auto shadow-xl">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg mb-3 tracking-tight">{item.title}</h4>
                  <p className="text-sm text-sage/70 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6">
            <Link to="/" className="btn-claude">
              回到路线图
            </Link>
            <Link to="/troubleshooting" className="flex items-center gap-2 tertiary-text font-black text-sage/60 hover:text-ink transition-colors">
              我需要排障 <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
