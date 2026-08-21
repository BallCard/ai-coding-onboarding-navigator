# 内容审查与更新记录（2026-08-21）

这次审查只讨论内容，不评价视觉实现。审查对象是 `src/constants.ts`、来源清单、页面文案和维护规则。

## 结论先行

### 1. 工具选择不能再用“有没有项目目录”作品牌分流

原逻辑是：没有项目选 Codex，有项目选 Claude Code。这个判断把“工作位置”误当成“工具能力”，也会制造错误预期。Claude Code 官方 Overview 当前覆盖终端、IDE、桌面和 Web；Codex CLI 官方文档明确支持在本地仓库中检查文件、编辑、运行命令、脚本/CI 和 review。

更新后的选择变量是：

- 账号与入口：Claude/Anthropic 还是 OpenAI/ChatGPT；
- 工作面：终端、IDE、桌面、Web；
- 任务形态：读代码、改代码、review、脚本/CI、外部资料；
- 控制面：审批、沙箱、规则文件和外部工具连接；
- 验证闭环：用户能否在本地复现结果。

我的判断：新手最需要的不是“选对品牌”，而是用一个入口完成一次可验证闭环。选择页应该帮助用户停止比较，而不是制造伪精确的长期推荐。

### 2. Node/npm 不应是所有人的统一前置条件

原流程要求所有人先通过 Node、npm、Git 和 npm registry 检查，再安装工具。官方文档现在为 Claude Code 和 Codex 都提供原生安装入口；Node/npm 只在 npm 安装或项目本身需要时成为前置。Git 仍然很重要，因为它提供 diff、checkpoint 和回退能力，但它不是原生安装的共同硬门槛。

更新后的环境检查分层：

- 必须：终端可用、官方安装/认证页面可访问；
- 按路径：选择 npm 安装时才检查 Node/npm/registry；
- 强烈建议：Git 或其他可回退方案；
- 后续验证：登录、包下载、模型请求分别判断，不把“网页能打开”当成全链路正常。

### 3. “会搜索”不等于“知道事实”

AI 工具可以读取仓库、调用工具或进行 Web Search，但检索结果仍可能过期、越权或不适用当前版本。新增“信息获取与证据链”路线，要求把输入分成：仓库事实、官方产品事实、时间敏感事实、社区信号和模型推断。

关键教学立场：

- 官方资料决定产品事实；
- 本站负责把事实组织成学生可执行的路径；
- 社区内容只用于发现痛点和搜索词；
- 搜索结果是线索，不是证据；
- 高风险结论必须记录来源、日期、适用范围，并用第二来源或本地检查复核；
- 未验证的经验不能写入 `CLAUDE.md`、`AGENTS.md` 或自动化流程。

### 4. Claude Code 和 Codex 是样本，不是边界

v2 不再把网站叙事写成“两款产品的终点比较”。OpenCode、Z Code、Grok Build、Cursor、Copilot 等同类工具可以有不同的入口和权限实现，但都要回答同一组问题：

- 人是否说清了目标、优先级和完成标准；
- AI 是否拿到了真实、适用、可追溯的上下文；
- 哪些动作可以执行，哪些动作必须人工确认；
- 结果如何通过测试、构建、diff、运行结果或用户反馈验证；
- 重复经验应该沉淀成规则、模板、Skill、测试还是自动化。

因此，工具选择页保留 Claude Code/Codex 两条官方维护路径，工作流层则明确迁移到“AI 辅助编程”的共同机制。

### 5. 人机关系改为“on the loop”

Martin Fowler 的 `why loop / how loop / on the loop` 区分被吸收为本站的教学框架：

- 人保留 why：目标、价值判断、风险承受、优先级和验收标准；
- AI 承担 how：检索、归纳、生成、执行、比较和反馈处理；
- 人设计 loop：上下文、工具、权限、验证、停止条件和复盘。

这不要求新手先学会完整 Agent 架构。它只要求新手在第一次任务中保留三个动作：先说清目标，执行前看范围，执行后看证据。

### 6. AI 是放大器，不是责任转移器

DORA 2025 将 AI 描述为会放大组织既有优势和弱点的力量。本站将其转译为低风险的学习判断：如果项目没有清晰目标、测试、协作和反馈，换一个工具不会自动修复这些缺口；工具越能行动，越需要边界和验证。

宝玉文章保留为 `Community Signal`，只吸收“模型、工具、上下文、任务拆分和验证共同构成 Agent 系统”的观察，不把其中的品牌强弱判断当成事实。

## 本次核对的官方资料

- [Claude Code Overview](https://code.claude.com/docs/en/overview)：多入口、读取代码库、编辑文件、运行命令和工具集成。
- [Claude Code Permissions](https://code.claude.com/docs/en/permissions)：权限规则、模式与隔离边界要分开理解。
- [Claude Code Extend Claude Code](https://code.claude.com/docs/en/features-overview)：CLAUDE.md、Skills、MCP、Hooks、Subagents 的触发条件不同，应按问题逐步加入。
- [Claude Code .claude directory](https://code.claude.com/docs/en/claude-directory)：项目规则、设置、Skills、Hooks 和 MCP 的落点不同。
- [Use Codex](https://developers.openai.com/api/docs/guides/code-generation#use-codex)：Codex 作为 coding agent 的产品入口与工作面。
- [Codex CLI](https://developers.openai.com/codex/cli)：本地仓库、命令执行、脚本/CI、review、Web Search 和 MCP 等工作面。
- [Codex AGENTS.md](https://developers.openai.com/codex/guides/agents-md)：规则按全局到项目、再到子目录分层加载。
- [Codex Sandbox](https://developers.openai.com/codex/concepts/sandboxing)：沙箱是技术边界，approval 是暂停决策，两者不是同一件事。
- [Codex MCP](https://developers.openai.com/codex/mcp)：外部工具连接需要配置、认证和工具级审批，不能把 MCP 当成“自动获得可信资料”。
- [ChatGPT & Codex Changelog](https://learn.chatgpt.com/docs/changelog)：更新雷达入口。

## AI 辅助编程的原则来源

- [Martin Fowler: Humans and Agents in Software Engineering Loops](https://martinfowler.com/articles/exploring-gen-ai/humans-and-agents.html)：why/how/on-the-loop 与验证回路。`Community Signal`，用于思想框架，不是产品事实来源。
- [DORA Research 2025](https://dora.dev/dora-report-2025/)：AI 作为放大器，需要结合交付系统理解。`Community Signal`，保留研究范围和日期。
- [宝玉：Claude Code 强大的秘密究竟是什么？](https://baoyu.ai/blog/claude-code-secrets)：模型、工具、上下文与验证的社区观察。`Community Signal`，具体产品判断仍需官方核验。

维护动作：原登记的 Codex use-case URL 已从来源注册表移除并改指向当前 Codex CLI 页面；以后来源更新必须先检查链接可达和页面内容，再更新产品文案。

## 保留的争议

我没有把某一款工具宣布为“默认最佳”。如果真实用户测试显示校内学生几乎都已有某一侧账号、或某一侧在校园网络/设备上的成功率显著更高，可以把这个事实作为 `Personal Note` 或经验证的本地推荐加入；在没有数据前，品牌优劣判断只是营销式猜测。
