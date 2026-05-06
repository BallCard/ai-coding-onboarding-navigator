/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import type { ReactNode } from 'react';
import { useState } from 'react';
import {
  Compass,
  Menu,
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import Home from './pages/Home';
import ToolSelection from './pages/ToolSelection';
import SetupVerification from './pages/SetupVerification';
import Troubleshooting from './pages/Troubleshooting';
import TroubleshootingDetail from './pages/TroubleshootingDetail';
import FirstTask from './pages/FirstTask';
import PracticeDetail from './pages/PracticeDetail';
import Updates from './pages/Updates';
import Advanced from './pages/Advanced';
import RoadmapDetail from './pages/RoadmapDetail';
import LayerRoute from './pages/LayerRoute';
import FloatingAssistant from './components/FloatingAssistant';
import MobileMenu from './components/MobileMenu';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function NavItem({ to, label }: { to: string; label: string }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={cn(
        'relative px-4 py-2 text-[11px] font-bold tracking-[0.04em] transition-all rounded-full whitespace-nowrap',
        isActive
          ? 'text-ink bg-clay/40'
          : 'text-sage/60 hover:text-ink hover:bg-clay/20'
      )}
    >
      <span>{label}</span>
    </Link>
  );
}

function Layout({ children }: { children: ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col technical-grid">
      <header className="sticky top-0 z-50 bg-paper/80 backdrop-blur-xl border-b border-clay/30">
        <div className="max-w-7xl mx-auto px-4 2xl:px-6 h-16 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full bg-ink flex items-center justify-center transition-transform group-hover:rotate-12">
              <Compass size={18} className="text-paper" />
            </div>
            <span className="text-sm font-serif font-bold tracking-tight text-ink">AI Navigator</span>
          </Link>

          <nav className="hidden xl:flex items-center gap-1">
            <NavItem to="/" label="路线图" />
            <NavItem to="/troubleshooting" label="卡点排障" />
            <NavItem to="/practice" label="首次实践" />
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="xl:hidden h-10 w-10 flex items-center justify-center rounded-full border border-clay/50 text-sage/60 hover:text-ink hover:border-clay transition-all"
              aria-label="打开菜单"
            >
              <Menu size={18} />
            </button>
            <Link
              to="/practice"
              className="h-10 px-5 rounded-full bg-ink text-paper text-[10px] font-black tracking-[0.08em] hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-clay/20 flex items-center whitespace-nowrap"
            >
              开始任务
            </Link>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      <main className="flex-1 relative">
        <AnimatePresence mode="wait">{children}</AnimatePresence>
      </main>

      <footer className="border-t border-clay/30 py-24 px-6 bg-oat/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 font-serif font-bold text-lg mb-8 text-ink">
              <Compass size={20} className="text-sage" />
              <span>AI Onboarding Navigator</span>
            </div>
            <p className="text-[15px] text-sage/70 leading-relaxed max-w-sm mb-10 font-medium">
              面向校内学生的 AI 编程上手导航：选工具、装环境、查卡点、做第一次可验证任务。
            </p>
            <div className="flex items-center gap-4 py-2 px-4 rounded-full bg-paper w-fit border border-clay/30">
              <span className="h-1.5 w-1.5 rounded-full bg-sage animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-sage/60">Sources reviewed on 2026-05-04</span>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <span className="tertiary-text">先做这些</span>
            <div className="flex flex-col gap-4">
              <Link to="/tools" className="text-sm text-sage/80 hover:text-ink transition-colors font-medium">工具选择</Link>
              <Link to="/setup" className="text-sm text-sage/80 hover:text-ink transition-colors font-medium">安装验证</Link>
              <Link to="/troubleshooting" className="text-sm text-sage/80 hover:text-ink transition-colors font-medium">卡点排障</Link>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <span className="tertiary-text">官方入口</span>
            <div className="flex flex-col gap-4">
              <a href="https://code.claude.com/docs/en/overview" target="_blank" rel="noreferrer" className="text-sm text-sage/80 hover:text-ink transition-colors font-medium">Claude Code Docs</a>
              <a href="https://developers.openai.com/codex/" target="_blank" rel="noreferrer" className="text-sm text-sage/80 hover:text-ink transition-colors font-medium">Codex Docs</a>
              <Link to="/updates" className="text-sm text-sage/80 hover:text-ink transition-colors font-medium">来源与更新</Link>
            </div>
          </div>
        </div>
      </footer>
      <FloatingAssistant />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:layerId" element={<LayerRoute />} />
          <Route path="/roadmap/:nodeId" element={<RoadmapDetail />} />
          <Route path="/tools" element={<ToolSelection />} />
          <Route path="/setup" element={<SetupVerification />} />
          <Route path="/troubleshooting" element={<Troubleshooting />} />
          <Route path="/troubleshooting/:issueId" element={<TroubleshootingDetail />} />
          <Route path="/practice" element={<FirstTask />} />
          <Route path="/practice/:taskId" element={<PracticeDetail />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/advanced" element={<Advanced />} />
        </Routes>
      </Layout>
    </Router>
  );
}
