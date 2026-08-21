# AI Coding Onboarding Navigator

面向中国高校学生的 AI 编程上手导航站。

产品先确认 Claude Code、Codex 与 WorkBuddy 的安装基础，再引导学生从真实问题或小目标出发，完成一次有边界、可验证的 AI 协作任务，并留下下一次可复用的规则或复盘。

## 当前产品边界

包含：

- 开始前的三工具安装确认
- 入门、项目、工作流三层渐进路线
- Claude Code / Codex 官方安装与工具说明
- 少量可验证的首次实践任务
- 目标、边界、证据和复盘闭环
- 按站点聚合的来源与更新记录
- 本地个人工作流笔记与 Markdown 导出

不包含：

- 站内排障数据库
- 站内 AI 排障助手或助手 API
- 网络规避与非官方事实指导
- 完整教程库或工具生态百科

遇到错误时，网站只建议用户把原本目标、完整报错或截图交给 Codex、豆包或手边可用的 AI，请它先解释原因，再给最小解决步骤；分享前应移除密钥、密码、Cookie 与敏感数据。

## 本地运行

```powershell
cd D:\Workspace\projects\ai-coding-onboarding-navigator\ui\ai-coding-onboarding-navigator
npm install
npm run dev
```

访问：<http://localhost:3000>

## 联系与反馈

- GitHub：[@BallCard](https://github.com/BallCard)
- 网站建议与问题：[提交反馈](https://github.com/BallCard/ai-coding-onboarding-navigator/issues/new)

## 验证

```powershell
.\node_modules\.bin\tsx.cmd src\content.test.ts
npm run lint
npm run build
node scripts\smoke-test.mjs
powershell.exe -ExecutionPolicy Bypass -File scripts\browser-smoke.ps1
node scripts\capture-visual-regression.mjs
```

## 主要路由

- `/`：安装确认与连续学习入口
- `/starter`：入门层
- `/project`：项目层
- `/advanced`：工作流层
- `/roadmap/:nodeId`：路线节点详情
- `/tools`：工具选择
- `/setup`：官方安装与验证路径
- `/practice`：首次实践任务
- `/updates`：来源与更新

## 维护入口

优先阅读：

1. `docs/product/learning-and-design-baseline.md`
2. `docs/project-guide.md`
3. `docs/development-guide.md`
4. `docs/content-maintenance-guide.md`
5. `docs/operations/source-policy.md`
6. `docs/operations/deployment-handoff.md`

硬规则：

> 官方文档决定事实；本站决定学习路径；社区内容只作为实践参考或痛点信号。
