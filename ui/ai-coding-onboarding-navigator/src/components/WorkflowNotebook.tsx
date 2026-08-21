import { useEffect, useState } from 'react';
import { CheckCircle2, Download, NotebookPen } from 'lucide-react';

const STORAGE_KEY = 'ai-navigator-workflow-note';

const WEEKLY_LOOP = [
  ['3 分钟', '选一个本周真实遇到的问题'],
  ['5 分钟', '核对官方边界与所需证据'],
  ['15 分钟', '完成一次有边界的小实践'],
  ['7 分钟', '写下结果与一条可复用规则'],
];

export default function WorkflowNotebook() {
  const [note, setNote] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setNote(window.localStorage.getItem(STORAGE_KEY) ?? '');
  }, []);

  const save = () => {
    window.localStorage.setItem(STORAGE_KEY, note);
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1800);
  };

  const download = () => {
    const content = `# 我的 AI 协作复盘\n\n核查日期：${new Date().toISOString().slice(0, 10)}\n\n${note || '在这里写下：目标、证据、最小修改范围，以及下一次要复用的一条规则。'}\n`;
    const url = URL.createObjectURL(new Blob([content], { type: 'text/markdown;charset=utf-8' }));
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'ai-workflow-note.md';
    anchor.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-7">
      <article className="rounded-[36px] bg-ink text-paper p-8 md:p-10">
        <span className="tertiary-text !text-paper/40">Weekly 30-minute loop</span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold mt-5 mb-7">每周只积累一个方法</h2>
        <div className="space-y-5">
          {WEEKLY_LOOP.map(([time, action]) => (
            <div key={time} className="grid grid-cols-[72px_1fr] gap-4 items-start">
              <span className="font-mono text-xs text-paper/40 pt-0.5">{time}</span>
              <p className="text-sm text-paper/70 leading-relaxed">{action}</p>
            </div>
          ))}
        </div>
      </article>

      <article className="step-card !p-8 md:!p-10">
        <div className="flex items-center gap-3 mb-5">
          <NotebookPen size={20} className="text-sage" />
          <span className="tertiary-text">Personal workflow note</span>
        </div>
        <h2 className="text-3xl font-serif font-bold mb-4">把这次经验留给下次的自己</h2>
        <p className="text-sm leading-relaxed mb-6">建议写：我解决了什么、用了什么证据、AI 哪一步容易猜错、下一次要沿用哪条规则。内容只保存在当前浏览器。</p>
        <textarea
          value={note}
          onChange={(event) => setNote(event.target.value)}
          placeholder="例如：下次修 bug 时，先固定复现命令，再要求 AI 说明最小修改范围；完成后必须重新运行同一条命令。"
          className="w-full min-h-40 resize-y rounded-2xl border border-clay/60 bg-oat/25 p-5 text-sm leading-relaxed focus:outline-none focus:ring-4 focus:ring-clay/20 focus:border-sage/40"
        />
        <div className="mt-5 flex flex-wrap gap-3">
          <button onClick={save} className="h-11 px-5 rounded-full bg-ink text-paper text-[10px] font-black uppercase tracking-[0.16em] flex items-center gap-2">
            {saved ? <CheckCircle2 size={14} /> : <NotebookPen size={14} />}
            {saved ? '已保存到本地' : '保存到本地'}
          </button>
          <button onClick={download} className="h-11 px-5 rounded-full border border-clay/70 text-sage text-[10px] font-black uppercase tracking-[0.16em] flex items-center gap-2 hover:text-ink hover:border-ink/30 transition-colors">
            <Download size={14} /> 导出 Markdown
          </button>
        </div>
      </article>
    </section>
  );
}
