import { useState } from 'react';
import { ArrowUpRight, Megaphone, X } from 'lucide-react';

const DISMISSED_KEY = 'ai-navigator-dismissed-announcement';
const ANNOUNCEMENT_ID = '2026-08-21-learning-loop';
const FEEDBACK_URL = 'https://github.com/BallCard/ai-coding-onboarding-navigator/issues/new?title=%5B%E5%8F%8D%E9%A6%88%5D%20&body=%E6%88%91%E5%9C%A8%E4%BD%BF%E7%94%A8%E7%9A%84%E9%A1%B5%E9%9D%A2%EF%BC%9A%0A%0A%E6%88%91%E6%83%B3%E5%8F%8D%E9%A6%88%E7%9A%84%E9%97%AE%E9%A2%98%E6%88%96%E5%BB%BA%E8%AE%AE%EF%BC%9A%0A%0A%E6%88%91%E6%9C%9F%E6%9C%9B%E7%9A%84%E7%BB%93%E6%9E%9C%EF%BC%9A';

export { FEEDBACK_URL };

function getInitialVisibility() {
  try {
    return window.localStorage.getItem(DISMISSED_KEY) !== ANNOUNCEMENT_ID;
  } catch {
    return true;
  }
}

export default function UpdateAnnouncement() {
  const [visible, setVisible] = useState(getInitialVisibility);

  const dismiss = () => {
    try {
      window.localStorage.setItem(DISMISSED_KEY, ANNOUNCEMENT_ID);
    } catch {
      // The close action should still work when storage is unavailable.
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      className="fixed z-40 bottom-4 left-4 right-4 md:left-auto md:bottom-6 md:right-6 md:w-[360px] rounded-[24px] md:rounded-[28px] border border-clay/60 bg-paper/95 p-4 md:p-5 shadow-[0_24px_80px_-28px_rgba(18,17,16,0.45)] backdrop-blur-xl"
      aria-label="网站更新说明"
    >
      <div className="flex items-start gap-4">
        <div className="mt-0.5 flex h-9 w-9 md:h-10 md:w-10 flex-shrink-0 items-center justify-center rounded-full bg-ink text-paper">
          <Megaphone size={17} />
        </div>
        <div className="min-w-0 flex-1">
          <span className="tertiary-text">本次重大调整</span>
          <h2 className="mt-2 text-base md:text-lg font-serif font-bold">从“查教程”转向“做中生长”</h2>
          <p className="mt-2 hidden text-xs leading-relaxed text-sage/70 sm:block">
            先确认工具，再用目标、行动、验证和沉淀完成真实任务；遇到问题，直接把完整信息交给可用的 AI。
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-5">
            <a href="/#growth-start" className="link-claude">查看新路线 <ArrowUpRight size={13} /></a>
            <a href="/#three-level-roadmap" className="link-claude">查看三层路线 <ArrowUpRight size={13} /></a>
            <a href={FEEDBACK_URL} target="_blank" rel="noreferrer" className="link-claude">提出反馈 <ArrowUpRight size={13} /></a>
          </div>
        </div>
        <button
          type="button"
          onClick={dismiss}
          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sage/50 transition-colors hover:bg-oat hover:text-ink"
          aria-label="关闭更新说明"
        >
          <X size={15} />
        </button>
      </div>
    </aside>
  );
}
