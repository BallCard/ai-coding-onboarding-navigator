/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, AlertCircle, FileCode, Settings, Monitor, Layers, Network, Route } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const NAV_ITEMS = [
  { to: '/', label: '路线图', icon: Compass },
  { to: '/starter', label: '入门层', icon: Route },
  { to: '/project', label: '项目层', icon: Layers },
  { to: '/architecture', label: '架构层', icon: Network },
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
