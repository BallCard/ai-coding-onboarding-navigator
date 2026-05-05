import { motion } from 'motion/react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, ShieldCheck, AlertCircle } from 'lucide-react';
import { ROADMAP_NODES, TROUBLESHOOTING_DATA, getSource } from '../constants';

export default function RoadmapDetail() {
  const { nodeId } = useParams();
  const node = ROADMAP_NODES.find((item) => item.id === nodeId);

  if (!node) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-32">
        <h1 className="text-4xl font-serif font-bold mb-6">没有找到这个路线节点</h1>
        <Link to="/" className="link-claude">回到路线图</Link>
      </div>
    );
  }

  const sources = node.sourceIds.map(getSource).filter(Boolean);
  const issues = TROUBLESHOOTING_DATA.filter((issue) => issue.category === node.stuckCategory || issue.os === node.stuckCategory).slice(0, 4);
  const nextNode = node.nextStepId ? ROADMAP_NODES.find((item) => item.id === node.nextStepId) : undefined;

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
      <Link to="/" className="link-claude mb-12">
        <ArrowLeft size={14} /> 回到层次路线图
      </Link>

      <header className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start mb-20">
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-sage" />
            <span className="tertiary-text !tracking-[0.3em] !text-sage">{node.level} route</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif tracking-tighter mb-8 text-ink leading-none">{node.title}</h1>
          <p className="text-xl text-sage/70 leading-relaxed font-serif italic border-l-2 border-clay/40 pl-8">{node.description}</p>
        </div>

        <aside className="step-card !p-9">
          <span className="tertiary-text">完成后应该得到</span>
          <h2 className="text-3xl font-serif font-bold mt-5 mb-5">{node.userGoal}</h2>
          <p className="text-sm text-sage/70 leading-relaxed">{node.successCriteria[0]}</p>
        </aside>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <section className="lg:col-span-8 space-y-10">
          {node.detail?.tracks ? (
            <div className="space-y-10">
              {node.detail.tracks.map((track) => (
                <div key={track.id} className="step-card !p-8 md:!p-10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                      <span className="tertiary-text">{track.id}</span>
                      <h2 className="text-3xl font-serif font-bold mt-3">{track.title}</h2>
                    </div>
                    <span className="px-4 py-2 rounded-full bg-ink text-paper text-[10px] font-black uppercase tracking-[0.18em] w-fit">
                      先走这一条线
                    </span>
                  </div>

                  <div className="mb-8">
                    <h3 className="tertiary-text mb-4">1. 打开终端</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {track.openTerminal.map((item, index) => (
                        <div key={item} className="bg-oat/55 border border-clay/70 rounded-2xl p-4">
                          <div className="text-[11px] font-black text-ink mb-3">0{index + 1}</div>
                          <p className="!text-ink/85 text-sm leading-relaxed font-semibold">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6 mb-8">
                    <h3 className="tertiary-text">2. 复制命令并回车</h3>
                    {track.runCommands.map((command) => (
                      <div key={command.label} className="bg-[#f7f4ef] border border-clay/80 rounded-[24px] p-5">
                        <h4 className="font-serif font-bold text-xl mb-4">{command.label}</h4>
                        <div className="terminal-box !p-4 !rounded-[16px] mb-5">
                          <pre className="whitespace-pre-wrap text-[12px] select-all">{command.command}</pre>
                        </div>
                        <h5 className="tertiary-text mb-3">应该看到</h5>
                        <div className="space-y-2">
                          {command.expected.map((item) => (
                            <div key={item} className="flex items-start gap-3">
                              <CheckCircle2 size={16} className="text-sage mt-0.5 flex-shrink-0" />
                              <p className="!text-ink/80 text-sm leading-relaxed font-medium">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="bg-oat/55 border border-clay/70 rounded-[24px] p-5">
                      <h3 className="tertiary-text mb-4">3. 通过标准</h3>
                      <div className="space-y-3">
                        {track.success.map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <CheckCircle2 size={16} className="text-sage mt-0.5 flex-shrink-0" />
                            <p className="!text-ink/80 text-sm leading-relaxed font-semibold">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white border border-clay/70 rounded-[24px] p-5">
                      <h3 className="tertiary-text mb-4">失败时先处理</h3>
                      <div className="space-y-3">
                        {track.ifFailed.map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <AlertCircle size={16} className="text-sage mt-0.5 flex-shrink-0" />
                            <p className="!text-ink/75 text-sm leading-relaxed font-medium">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : node.detail?.playbook ? (
            <div className="step-card !p-8 md:!p-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                  <span className="tertiary-text">{node.detail.playbook.badge}</span>
                  <h2 className="text-3xl font-serif font-bold mt-3">{node.detail.playbook.title}</h2>
                </div>
                <span className="px-4 py-2 rounded-full bg-ink text-paper text-[10px] font-black uppercase tracking-[0.18em] w-fit">
                  直接照做
                </span>
              </div>

              <div className="space-y-6">
                {node.detail.playbook.blocks.map((block, index) => (
                  <div key={block.title} className="bg-oat/55 border border-clay/70 rounded-[26px] p-5 md:p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-8 h-8 rounded-full bg-ink text-paper flex items-center justify-center text-[11px] font-black">
                        {index + 1}
                      </div>
                      <h3 className="font-serif font-bold text-xl">{block.title}</h3>
                    </div>

                    <div className="space-y-3 mb-5">
                      {block.actions.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-sage mt-0.5 flex-shrink-0" />
                          <p className="!text-ink/85 text-sm leading-relaxed font-semibold">{item}</p>
                        </div>
                      ))}
                    </div>

                    {block.command && (
                      <div className="terminal-box !p-4 !rounded-[16px] mb-5">
                        <pre className="whitespace-pre-wrap text-[12px] select-all">{block.command}</pre>
                      </div>
                    )}

                    {block.expected && (
                      <div className="mb-5">
                        <h4 className="tertiary-text mb-3">应该看到</h4>
                        <div className="space-y-2">
                          {block.expected.map((item) => (
                            <p key={item} className="!text-ink/75 text-sm leading-relaxed font-medium">{item}</p>
                          ))}
                        </div>
                      </div>
                    )}

                    {block.ifFailed && (
                      <div className="bg-white border border-clay/70 rounded-2xl p-4">
                        <h4 className="tertiary-text mb-3">失败时</h4>
                        <div className="space-y-2">
                          {block.ifFailed.map((item) => (
                            <div key={item} className="flex items-start gap-3">
                              <AlertCircle size={15} className="text-sage mt-0.5 flex-shrink-0" />
                              <p className="!text-ink/75 text-sm leading-relaxed font-medium">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="step-card !p-8 md:!p-10">
              <h2 className="text-3xl font-serif font-bold mb-8">{node.level === 'starter' ? '直接照做' : '执行逻辑'}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {(node.detail?.steps ?? node.tasks).map((task, index) => (
                  <div key={task} className="bg-oat/55 border border-clay/70 rounded-[24px] p-5 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-ink text-paper flex items-center justify-center text-[11px] font-black">
                        {index + 1}
                      </div>
                      <div className="tertiary-text">Step</div>
                    </div>
                    <p className="text-[15px] !text-ink/85 leading-relaxed font-semibold">{task}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {node.detail && !node.detail.tracks && (
            <div className="step-card !p-8 md:!p-10">
              <h2 className="text-3xl font-serif font-bold mb-8">操作前检查</h2>
              <div className="space-y-4 mb-10">
                {node.detail.preflight.map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <CheckCircle2 size={18} className="text-sage mt-1 flex-shrink-0" />
                    <p className="!text-ink/80 leading-relaxed font-medium">{item}</p>
                  </div>
                ))}
              </div>

              {node.detail.commands && (
                <>
                  <h3 className="tertiary-text mb-4">可复制命令</h3>
                  <div className="space-y-4 mb-10">
                    {node.detail.commands.map((item) => (
                      <div key={item.label} className="bg-[#f7f4ef] border border-clay/80 rounded-[22px] p-5 shadow-sm">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                          <h4 className="font-serif font-bold text-lg text-ink">{item.label}</h4>
                          <span className="tertiary-text !text-sage">{item.note}</span>
                        </div>
                        <div className="terminal-box !p-4 !rounded-[16px] !shadow-[0_18px_45px_-28px_rgba(18,17,16,0.8)]">
                          <pre className="whitespace-pre-wrap text-[12px] select-all">{item.command}</pre>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              <h3 className="tertiary-text mb-4">按工具/系统区分</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {node.detail.differences.map((item) => (
                  <div key={item} className="bg-oat/55 border border-clay/60 rounded-2xl p-4 text-sm !text-ink/75 leading-relaxed font-medium">
                    {item}
                  </div>
                ))}
              </div>

              {node.detail.prompt && (
                <>
                  <h3 className="tertiary-text mb-4">示例 Prompt</h3>
                  <div className="terminal-box !p-5 !rounded-[20px] mb-10">
                    <pre className="whitespace-pre-wrap text-[12px]">{node.detail.prompt}</pre>
                  </div>
                </>
              )}

              <h3 className="tertiary-text mb-4">先不要做</h3>
              <div className="space-y-3">
                {node.detail.doNotDo.map((item) => (
                  <div key={item} className="bg-white border border-clay/60 rounded-2xl p-4 text-sm !text-ink/75 leading-relaxed font-medium">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="step-card !p-8 md:!p-10">
            <h2 className="text-3xl font-serif font-bold mb-8">完成标准</h2>
            <div className="space-y-5">
              {node.successCriteria.map((criterion) => (
                <div key={criterion} className="flex items-start gap-4">
                  <CheckCircle2 size={18} className="text-sage mt-1 flex-shrink-0" />
                  <p className="!text-ink/80 leading-relaxed font-medium">{criterion}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="step-card !p-8 md:!p-10">
            <h2 className="text-3xl font-serif font-bold mb-8">卡住先看这里</h2>
            {issues.length > 0 ? (
              <div className="space-y-5">
                {issues.map((issue) => (
                  <Link key={issue.id} to={`/troubleshooting?node=${node.id}&category=${issue.category}`} className="block bg-oat/35 border border-clay/30 rounded-[24px] p-5 hover:border-ink transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <AlertCircle size={16} className="text-sage" />
                      <span className="tertiary-text">{issue.category}</span>
                    </div>
                    <p className="font-serif font-bold text-lg mb-2">{issue.symptom}</p>
                    <p className="text-sm text-sage/70">{issue.firstActions[0]}</p>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-sage/70">这一步暂时没有单独卡点。复制报错原文，到排障数据库搜索症状。</p>
            )}
          </div>
        </section>

        <aside className="lg:col-span-4 space-y-8">
          <div className="step-card !p-8">
            <h2 className="text-2xl font-serif font-bold mb-6">官方来源</h2>
            <div className="space-y-4">
              {sources.map((source) => source && (
                <a key={source.id} href={source.url} target={source.url === '#' ? undefined : '_blank'} rel="noreferrer" className="block border border-clay/40 rounded-2xl p-4 hover:border-ink transition-colors">
                  <div className="tertiary-text mb-3">{source.sourceType}</div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm text-sage/80">{source.title}</span>
                    {source.url !== '#' && <ExternalLink size={14} className="text-sage/40 flex-shrink-0" />}
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="step-card !p-8">
            <h2 className="text-2xl font-serif font-bold mb-6">动手前检查</h2>
            <div className="flex items-start gap-4">
              <ShieldCheck size={18} className="text-sage mt-1 flex-shrink-0" />
              <p className="text-sm text-sage/75 leading-relaxed">
                在真实项目里，修改前先确认规则文件、Git 状态和验证命令。第一次尝试只放在测试目录。
              </p>
            </div>
          </div>

          <div className="step-card !p-8">
            <h2 className="text-2xl font-serif font-bold mb-6">下一步</h2>
            {nextNode ? (
              <Link to={`/roadmap/${nextNode.id}`} className="btn-claude w-fit">
                {nextNode.title} <ArrowRight size={16} />
              </Link>
            ) : (
              <Link to={node.route} className="btn-claude w-fit">
                进入对应页面 <ArrowRight size={16} />
              </Link>
            )}
          </div>
        </aside>
      </div>
    </motion.div>
  );
}
