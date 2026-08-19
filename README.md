# AI Coding Onboarding Navigator

面向校内学生的 AI 编程上手导航站。

目标不是做教程合集，而是帮助学生从“完全不知道怎么开始”走到“能用 Claude Code 或 Codex 完成一次可验证的 AI 编程任务”，并继续理解真实项目工作流、Agentic Thinking、pipeline、多 Agent 协作等进阶能力。

## 当前状态

已完成可交接 MVP。

包含：

- 三层路线图：
  - 入门层：从 0 到第一次跑通
  - 项目层：从跑通到真实项目
  - 架构层：从工具使用到 Agentic Thinking
- 每个路线图节点的详情页
- 三层协作入口：`/starter`、`/project`、`/advanced`
- Claude Code / Codex 工具选择页
- Windows/macOS 安装验证页
- 排障数据库
- 首次实践页
- 进阶架构页
- 官方来源与更新页
- 悬浮排障助手
- 受控 API 助手预留

## 快速启动

进入前端项目：

```powershell
cd D:\Workspace\projects\ai-coding-onboarding-navigator\ui\ai-programming-onboarding-navigator
```

安装依赖：

```powershell
npm install
```

启动 Vite 前端：

```powershell
npm run dev
```

访问：

```text
http://localhost:3000
```

三层独立入口：

```text
http://localhost:3000/starter
http://localhost:3000/project
http://localhost:3000/advanced
```

说明：`/advanced` 就是架构层入口。不要再新建或恢复 `/architecture` 作为并行入口。

启动预留 API 服务端：

```powershell
npm run build
npm run dev:full
```

API 默认地址：

```text
http://localhost:3001/api/troubleshooting-assistant
```

## 验证命令

```powershell
# 内容契约测试
.\node_modules\.bin\tsx.cmd src\content.test.ts

# TypeScript 检查
npm run lint

# 生产构建
npm run build

# HTTP 路由 smoke test
node scripts\smoke-test.mjs

# Chrome headless 渲染 smoke test
powershell.exe -ExecutionPolicy Bypass -File scripts\browser-smoke.ps1
```

## 项目结构

```text
AGENTS.md
README.md
docs/
  README.md
  project-guide.md
  development-guide.md
  content-maintenance-guide.md
  operations/
    source-policy.md
  product/
    checkpoints.md
    content-model.md
    handoff-summary.md
    mvp-prd.md
    official-chain-gap-map.md
    troubleshooting-ai-assistant.md
    ui-v1-review.md
  sources/
    official-sources.md
    community-signals.md
ui/
  ai-programming-onboarding-navigator/
    README.md
    src/
      App.tsx
      constants.ts
      components/
        FloatingAssistant.tsx
      pages/
        Home.tsx
        RoadmapDetail.tsx
        ToolSelection.tsx
        SetupVerification.tsx
        Troubleshooting.tsx
        FirstTask.tsx
        Advanced.tsx
        Updates.tsx
      content.test.ts
    server/
      index.ts
    scripts/
      smoke-test.mjs
      browser-smoke.ps1
```

## Source Policy

硬规则：

> 官方文档决定事实；本站决定路径；社区内容只作为痛点线索。

详见：

- `docs/operations/source-policy.md`
- `docs/sources/official-sources.md`

## 项目文档

交接和维护优先阅读：

1. `docs/project-guide.md`：产品定位、用户分层、页面地图、MVP 范围。
2. `docs/development-guide.md`：本地运行、脚本、架构、API 预留、验证流程。
3. `docs/content-maintenance-guide.md`：路线节点、排障卡、来源、实践任务的维护规则。
4. `docs/operations/source-policy.md`：官方来源优先和发布边界。

## API 助手预留

当前悬浮排障助手默认使用本地排障数据库。

服务端已预留：

- `POST /api/troubleshooting-assistant`
- `OPENAI_API_KEY`
- `OPENAI_MODEL`

当前行为：

- 未配置 `OPENAI_API_KEY`：返回本地排障建议
- 配置了 `OPENAI_API_KEY`：返回 `501 openai_assistant_not_enabled`

下一步接真实 OpenAI Responses API 时，必须遵守：

- API key 只放服务端
- 不在前端暴露 key
- 不记录用户 secret
- 不推荐 VPN、节点、机场、规避网络限制教程
- 回答必须基于本站结构化内容和官方来源

## 下一步建议

1. 找 3-5 个校内学生做真实任务测试。
2. 记录他们在哪一步卡住。
3. 根据反馈补排障卡和详情页操作稿。
4. 再接真实 AI 助手 API。
5. 最后做发布前视觉和移动端优化。
