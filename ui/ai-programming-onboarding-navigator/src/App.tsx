/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import type { ElementType, ReactNode } from 'react';
import {
  AlertCircle,
  Compass,
  FileCode,
  Github,
  Network,
  Settings,
  Terminal,
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import Home from './pages/Home';
import ToolSelection from './pages/ToolSelection';
import SetupVerification from './pages/SetupVerification';
import Troubleshooting from './pages/Troubleshooting';
import FirstTask from './pages/FirstTask';
import Updates from './pages/Updates';
import Advanced from './pages/Advanced';
import RoadmapDetail from './pages/RoadmapDetail';
import LayerRoute from './pages/LayerRoute';
import FloatingAssistant from './components/FloatingAssistant';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function NavItem({ to, label, icon: Icon }: { to: string; label: string; icon: ElementType }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={cn(
        'relative flex items-center gap-1.5 px-3 2xl:px-5 py-2 text-[12px] font-bold tracking-[0.04em] transition-all rounded-full group whitespace-nowrap',
        isActive ? 'text-ink' : 'text-sage/60 hover:text-ink'
      )}
    >
      <Icon size={14} className={cn('transition-colors flex-shrink-0', isActive ? 'text-ink' : 'text-sage/40 group-hover:text-sage')} />
      <span>{label}</span>
      {isActive && (
        <motion.div
          layoutId="nav-glow"
          className="absolute inset-0 bg-clay/30 rounded-full -z-10"
          transition={{ type: 'spring', bounce: 0.1, duration: 0.8 }}
        />
      )}
    </Link>
  );
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col technical-grid">
      <header className="sticky top-0 z-50 bg-paper/80 backdrop-blur-xl border-b border-clay/30">
        <div className="max-w-7xl mx-auto px-4 2xl:px-6 h-16 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="w-8 h-8 rounded-full bg-ink flex items-center justify-center transition-transform group-hover:rotate-12">
              <Compass size={18} className="text-paper" />
            </div>
            <div className="hidden 2xl:flex flex-col">
              <span className="text-sm font-serif font-bold tracking-tight leading-none mb-0.5 text-ink">AI Navigator</span>
              <span className="tertiary-text opacity-50">Campus Onboarding</span>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center justify-center gap-1 flex-1 min-w-0">
            <NavItem to="/" label="路线图" icon={Compass} />
            <NavItem to="/starter" label="入门层" icon={Terminal} />
            <NavItem to="/tools" label="工具选择" icon={Settings} />
            <NavItem to="/troubleshooting" label="卡点排障" icon={AlertCircle} />
            <NavItem to="/practice" label="首次实践" icon={FileCode} />
            <NavItem to="/advanced" label="架构层" icon={Network} />
          </nav>

          <div className="flex items-center gap-2 2xl:gap-3 flex-shrink-0">
            <div className="h-6 w-px bg-clay/50 hidden md:block" />
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hidden 2xl:block p-2 text-sage/40 hover:text-ink transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <Link to="/practice" className="h-10 px-4 2xl:px-6 rounded-full bg-ink text-paper text-[10px] font-black tracking-[0.04em] 2xl:tracking-[0.08em] hover:opacity-90 transition-all active:scale-95 shadow-xl shadow-clay/20 flex items-center whitespace-nowrap">
              开始第一次任务
            </Link>
          </div>
        </div>
      </header>

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
          <Route path="/practice" element={<FirstTask />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/advanced" element={<Advanced />} />
        </Routes>
      </Layout>
    </Router>
  );
}
