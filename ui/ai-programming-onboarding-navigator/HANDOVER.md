# AI Onboarding Navigator - Handoff Documentation

## 1. 项目愿景 (Project Vision)
本站是一个专为**中国高校学生**设计的 AI 编程工具上手导航。它旨在解决官方文档与实际国内网络/学术环境之间的“最后一公里”问题。

## 2. 视觉与设计语言 (Design Language - "Claude Style")
本项目采用了一种深受 Anthropic (Claude) 启发的视觉风格。接手 AI 必须严格遵守以下设计准则：

### A. 核心设计原理 (24 Keywords Implementation)
- **呼吸感 (Breathing Space)**：极大的 Padding 和 Margin（如 `py-48`, `gap-24`）。
- **克制 (Restraint)**：仅使用黑 (Ink)、白 (Paper)、灰绿 (Sage) 和燕麦色 (Oat)。严禁使用高饱和度彩色。
- **秩序感 (Order)**：严格的网格对齐与排版层次。
- **质感 (Texture)**：全站覆盖 3.5% 透明度的 SVG 噪声滤镜（在 `index.css` 的 `body::before` 中定义）。

### B. 排版系统 (Typography)
- **标题 (Serif)**：`font-serif` (Libre Baskerville)。用于 H1-H4，强调人文感与思考深度。
- **正文 (Sans)**：`font-sans` (Inter)。用于功能性描述，确保清晰易读。
- **代码 (Mono)**：`font-mono` (JetBrains Mono)。用于指令与终端演示。

### C. 调色板 (Color Palette)
定义于 `index.css` 的 `@theme` 块：
- `--color-paper`: `#fbfaf8` (主背景)
- `--color-ink`: `#121110` (主文字)
- `--color-sage`: `#6b705c` (辅助装饰)
- `--color-clay`: `#e8e4e0` (边框与分割线)
- `--color-oat`: `#f3f0ec` (次要背景)

## 3. 技术栈 (Tech Stack)
- **Framework**: React 18 (Vite)
- **Styling**: Tailwind CSS 4.0 (采用新版原生变量定义)
- **Animation**: `motion/react` (Framer Motion)
- **Icons**: `lucide-react`
- **Routing**: `react-router-dom`

## 4. 关键组件与样式类 (Critical Utilities)
在编写 UI 时，请优先使用以下预设类：
- `.step-card`：大圆角 (40px) 的白色容器，带有基于 `cubic-bezier` 的平滑阴影过渡。
- `.btn-claude`：标志性的圆柱形黑色按钮。
- `.link-claude`：带有下划线动效的文本链接。
- `.tertiary-text`：用于描述性小字，带有较高的字符间距 (`tracking-[0.25em]`)。
- `.terminal-box`：用于展示代码块的深色容器。

## 5. 页面架构 (Page Structure)
- `Home.tsx`: 视觉化的 Roadmap 节点。
- `ToolSelection.tsx`: 决策矩阵，对比 Claude Code 与 Cursor。
- `SetupVerification.tsx`: OS 相关的原子化安装步骤。
- `Troubleshooting.tsx`: 错误对策索引。
- `Updates.tsx`: 信息可靠性验证与更新流水。

## 6. 后续开发建议 (Next Steps)
1. **Practice.tsx 填充**：目前仅为占位，需补充第一个 AI 编程任务（如：创建一个带 API 的天气看板）的步骤。
2. **移动端适配优化**：虽然使用了响应式类，但在超大间距下，移动端需微调字体大小。
3. **GitHub Student Pack 指引**：在 `ToolSelection` 底部按钮点击后，应落地到一个详细的申请攻略页。
4. **交互增强**：利用 `AnimatePresence` 为页面切换增加淡入淡出（Fade & Slide）效果。

## 7. 开发者提示 (Developer Note)
> "好设计，是克制的表达，也是有温度的思考。"
在修改 UI 时，如果一个元素看起来“太像普通的互联网产品”，请尝试增加留白、降低对比度、或更换为衬线体 (Serif)。
