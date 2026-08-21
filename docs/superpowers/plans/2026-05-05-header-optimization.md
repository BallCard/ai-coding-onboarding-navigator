# Header 导航栏优化实现计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将 Header 导航从 6 项简化为 3 项，并为移动端添加汉堡菜单。

**Architecture:** 在 App.tsx 中重构 Header 组件，新增 MobileMenu 状态管理，将移动端导航抽离为独立组件。

**Tech Stack:** React 18, motion/react (动画), lucide-react (图标), Tailwind CSS 4

---

## 文件结构

```
src/
├── App.tsx                    # 修改：Header 组件重构
├── components/
│   └── MobileMenu.tsx         # 新增：移动端汉堡菜单组件
```

---

### Task 1: 创建 MobileMenu 组件

**Files:**
- Create: `src/components/MobileMenu.tsx`

- [ ] **Step 1: 创建 MobileMenu 组件**

```tsx
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, Compass, AlertCircle, FileCode, Settings, Monitor } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const NAV_ITEMS = [
  { to: '/', label: '路线图', icon: Compass },
  { to: '/troubleshooting', label: '卡点排障', icon: AlertCircle },
  { to: '/practice', label: '首次实践', icon: FileCode },
];

const SECONDARY_ITEMS = [
  { to: '/tools', label: '工具选择', icon: Settings },
  { to: '/setup', label: '安装验证', icon: Monitor },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const location = useLocation();

  const handleNavigate = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-ink/20 backdrop-blur-sm z-40 xl:hidden"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="fixed top-16 left-4 right-4 bg-paper border border-clay/40 rounded-2xl shadow-2xl shadow-ink/10 z-50 xl:hidden overflow-hidden"
          >
            <div className="p-4">
              <nav className="space-y-1">
                {NAV_ITEMS.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.to;
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={handleNavigate}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                        isActive
                          ? 'bg-clay/40 text-ink font-semibold'
                          : 'text-sage/70 hover:bg-clay/20 hover:text-ink'
                      }`}
                    >
                      <Icon size={18} />
                      <span className="text-sm">{item.label}</span>
                    </Link>
                  );
                })}
              </nav>

              <div className="h-px bg-clay/40 my-3" />

              <nav className="space-y-1">
                {SECONDARY_ITEMS.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.to;
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={handleNavigate}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all ${
                        isActive
                          ? 'bg-clay/40 text-ink font-semibold'
                          : 'text-sage/60 hover:bg-clay/20 hover:text-ink'
                      }`}
                    >
                      <Icon size={16} />
                      <span className="text-xs">{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
```

- [ ] **Step 2: 验证组件创建成功**

Run: `cd "D:\ClaudeCode教学\ui\ai-coding-onboarding-navigator" && npx tsc --noEmit src/components/MobileMenu.tsx`
Expected: 无错误输出

---

### Task 2: 重构 App.tsx 中的 Header

**Files:**
- Modify: `src/App.tsx`

- [ ] **Step 1: 更新 imports**

将 imports 部分替换为：

```tsx
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import type { ReactNode } from 'react';
import { useState } from 'react';
import {
  AlertCircle,
  Compass,
  FileCode,
  Menu,
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
import MobileMenu from './components/MobileMenu';
```

- [ ] **Step 2: 简化 NavItem 组件**

将 NavItem 函数替换为（去掉 icon 参数）：

```tsx
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
```

- [ ] **Step 3: 重构 Layout 组件**

将 Layout 函数替换为：

```tsx
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
              <a href="https://developers.openai.com/codex/cli" target="_blank" rel="noreferrer" className="text-sm text-sage/80 hover:text-ink transition-colors font-medium">Codex CLI Docs</a>
              <Link to="/updates" className="text-sm text-sage/80 hover:text-ink transition-colors font-medium">来源与更新</Link>
            </div>
          </div>
        </div>
      </footer>
      <FloatingAssistant />
    </div>
  );
}
```

- [ ] **Step 4: 验证 TypeScript 编译**

Run: `cd "D:\ClaudeCode教学\ui\ai-coding-onboarding-navigator" && npx tsc --noEmit`
Expected: 无错误输出

- [ ] **Step 5: 启动开发服务器验证**

Run: `cd "D:\ClaudeCode教学\ui\ai-coding-onboarding-navigator" && npm run dev`
Expected: 服务器启动成功，浏览器访问 localhost:3002 显示页面，Header 显示 3 个导航项

---

### Task 3: 提交变更

- [ ] **Step 1: 提交代码**

```bash
cd "D:\ClaudeCode教学"
git add ui/ai-coding-onboarding-navigator/src/App.tsx ui/ai-coding-onboarding-navigator/src/components/MobileMenu.tsx
git commit -m "$(cat <<'EOF'
feat: optimize header navigation

- Reduce nav items from 6 to 3 (路线图, 卡点排障, 首次实践)
- Add hamburger menu for mobile with secondary links
- Simplify CTA button text ("开始任务")
- Remove subtitle from logo area

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>
EOF
)"
```

Expected: 提交成功

---

## 验收标准

1. 桌面端 Header 显示 3 个导航项：路线图、卡点排障、首次实践
2. 移动端显示汉堡菜单按钮，点击展开菜单
3. 汉堡菜单包含核心 3 项 + 次要 2 项（工具选择、安装验证）
4. CTA 按钮文案为"开始任务"
5. Logo 区域只显示图标 + "AI Navigator"
