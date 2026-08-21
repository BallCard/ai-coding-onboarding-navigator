import { useState } from 'react';
import { motion } from 'motion/react';
import { useSearchParams } from 'react-router-dom';
import { Monitor, Apple, ExternalLink, AlertCircle, CheckCircle2 } from 'lucide-react';
import { getSource, type OS, type ToolOption } from '../constants';

type ToolId = ToolOption['id'];

const TOOL_LABELS: Record<ToolId, string> = {
  'claude-code': 'Claude Code',
  codex: 'Codex',
};

const INSTALL_STEPS = {
  'claude-code': {
    sourceId: 'claude-code-setup',
    command: 'npm install -g @anthropic-ai/claude-code',
    verify: 'claude --version',
    note: '按官方 setup 页面确认登录方式、订阅/API 要求和系统支持状态。',
  },
  codex: {
    sourceId: 'codex-cli-docs',
    command: 'npm install -g @openai/codex',
    verify: 'codex --version',
    note: '按 Codex CLI 文档确认安装、运行、升级和 Windows 说明。',
  },
} satisfies Record<ToolId, { sourceId: string; command: string; verify: string; note: string }>;

export default function SetupVerification() {
  const [searchParams] = useSearchParams();
  const initialTool = searchParams.get('tool') === 'claude-code' ? 'claude-code' : 'codex';
  const [os, setOs] = useState<OS>('windows');
  const [tool, setTool] = useState<ToolId>(initialTool);
  const current = INSTALL_STEPS[tool];
  const source = getSource(current.sourceId);

  const steps = [
    {
      id: 'precheck',
      title: '安装前检查',
      content: os === 'windows'
        ? '确认你能打开 Windows Terminal 或 PowerShell，并能运行 Node.js、npm、Git 的版本命令。'
        : '确认你能打开 Terminal，并已准备好 Homebrew、Node.js、npm、Git 等基础开发工具。',
      command: os === 'windows' ? 'node --version; npm --version; git --version' : 'node --version && npm --version && git --version',
      sourceType: 'Personal Note',
    },
    {
      id: 'official-doc',
      title: '打开官方安装入口',
      content: current.note,
      link: source?.url,
      sourceType: source?.sourceType ?? 'Official',
    },
    {
      id: 'install',
      title: '执行安装命令',
      content: '只在官方文档确认后执行安装。遇到报错时，保留完整原文或截图，直接交给可用的 AI 判断原因和下一步。',
      command: current.command,
      sourceType: source?.sourceType ?? 'Official',
    },
    {
      id: 'verify',
      title: '安装成功验证',
      content: '验证目标不是“看起来装了”，而是命令能运行、登录能进入下一步、测试目录能启动一次任务。',
      command: current.verify,
      sourceType: source?.sourceType ?? 'Official',
    },
  ];

  return (
    <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="max-w-7xl mx-auto px-6 py-24 md:py-32">
      <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24 border-b border-clay/30 pb-16">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-ink" />
            <span className="tertiary-text">Install & Verify</span>
          </div>
          <h1 className="text-5xl font-serif tracking-tight text-ink mb-6">看到版本号，才算装好</h1>
          <p className="text-sage/70 max-w-2xl leading-relaxed">
            先选系统和工具，再按官方入口安装。任何一步报错，都保留完整原文或截图，直接交给可用的 AI 判断原因。
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex bg-oat/40 p-2 rounded-full border border-clay/40 shadow-inner">
            <button onClick={() => setOs('windows')} className={`flex items-center gap-3 px-6 py-3 rounded-full text-[11px] font-black uppercase tracking-[0.16em] transition-all ${os === 'windows' ? 'bg-ink text-paper shadow-xl' : 'text-sage/50 hover:text-ink'}`}>
              <Monitor size={14} /> Windows
            </button>
            <button onClick={() => setOs('macos')} className={`flex items-center gap-3 px-6 py-3 rounded-full text-[11px] font-black uppercase tracking-[0.16em] transition-all ${os === 'macos' ? 'bg-ink text-paper shadow-xl' : 'text-sage/50 hover:text-ink'}`}>
              <Apple size={14} /> macOS
            </button>
          </div>
          <div className="flex bg-oat/40 p-2 rounded-full border border-clay/40 shadow-inner">
            {Object.entries(TOOL_LABELS).map(([id, label]) => (
              <button key={id} onClick={() => setTool(id as ToolId)} className={`px-6 py-3 rounded-full text-[11px] font-black uppercase tracking-[0.16em] transition-all ${tool === id ? 'bg-ink text-paper shadow-xl' : 'text-sage/50 hover:text-ink'}`}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 space-y-20">
          {steps.map((step, idx) => (
            <div key={step.id} className="relative group">
              <div className="flex flex-col md:flex-row gap-10 md:gap-16">
                <div className="flex-shrink-0">
                  <div className="text-5xl md:text-6xl font-serif italic text-clay/50 group-hover:text-sage/30 transition-colors leading-none tracking-tighter">
                    0{idx + 1}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-5 mb-6">
                    <h3 className="text-3xl font-serif font-bold tracking-tight text-ink">{step.title}</h3>
                    <span className="tertiary-text px-3 py-2 rounded-full border border-clay/40 bg-paper">{step.sourceType}</span>
                    <div className="h-px flex-1 bg-clay/20" />
                  </div>

                  <p className="text-[17px] text-sage/70 leading-relaxed mb-8 max-w-2xl font-medium">{step.content}</p>

                  {step.command && (
                    <div className="terminal-box mb-8 relative overflow-hidden">
                      <code className="block flex-1 text-paper/90 select-all font-mono text-[14px] leading-relaxed">$ {step.command}</code>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-8">
                    {step.link && (
                      <a href={step.link} target="_blank" rel="noreferrer" className="link-claude">
                        官方文档 <ExternalLink size={14} />
                      </a>
                    )}
                    <span className="flex items-center gap-2 tertiary-text">
                      <AlertCircle size={14} /> 出错时把原文或截图交给 AI
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="lg:col-span-4 lg:border-l lg:border-clay/40 lg:pl-10 space-y-10">
          <div className="step-card !p-8">
            <h4 className="tertiary-text mb-5">完成标准</h4>
            <div className="space-y-5">
              {['命令能输出版本号', '登录或认证能进入下一步', '测试目录能启动一次任务', '出错时知道把完整信息交给 AI'].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-sage/80">
                  <CheckCircle2 size={16} className="text-sage mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="step-card !p-8">
            <h4 className="tertiary-text mb-5">不要做</h4>
            <p className="text-sm text-sage/70 leading-relaxed">
              密钥和账号凭据不写进项目文件。第一次实验放在测试目录里做，认证和权限说明按官方文档逐项确认。
            </p>
          </div>
        </aside>
      </div>
    </motion.div>
  );
}
