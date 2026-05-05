# Gemini UI Prompt

Use this prompt to generate the first UI direction. Ask Gemini for a wireframe and design system first, not final implementation code.

```text
你是一个高级产品设计师和前端 UI 设计师。请为一个面向中国高校学生的“AI 编程上手导航站”设计首版 UI。

最高优先级：
请使用 Anthropic brand-guidelines 风格作为主要视觉参考。如果你的环境支持 Agent Skill，请应用 `brand-guidelines` skill；如果不支持，请严格按下面的 Anthropic-inspired design tokens 执行。

重要边界：
- 这是一个独立校内项目，不是 Anthropic 官方产品。
- 不要使用 Anthropic / Claude 官方 logo。
- 不要声称与 Anthropic 官方有关联。
- 不要像素级复制某个官网页面。
- 目标是复用 Anthropic brand-guidelines 的视觉语言：颜色、字体、留白、克制的信息组织、文档化产品气质。

Anthropic-inspired design tokens:

颜色：
- Dark: #141413，用于主文字、深色区域、关键标题
- Light: #faf9f5，用于主背景、浅色大底
- Mid Gray: #b0aea5，用于次级文字、辅助线、弱状态
- Light Gray: #e8e6dc，用于分割线、浅卡片底、hover 背景
- Orange Accent: #d97757，用于主要 CTA、当前步骤、关键进度
- Blue Accent: #6a9bcc，用于信息提示、来源链接、辅助状态
- Green Accent: #788c5d，用于完成状态、成功验证、低风险提示

字体：
- Headings: Poppins，fallback Arial / system sans-serif
- Body: Lora，fallback Georgia / system serif
- Code / command: monospace
- 中文字体 fallback 使用系统中文字体，但要保持 Anthropic 风格的克制、清晰、阅读感

字体规则：
- 页面大标题用 Poppins 风格，克制，不要过大
- 正文可用 Lora 风格，但中文较长段落要保证可读，可以 fallback 到系统中文 serif/sans
- 操作按钮、标签、导航用 sans-serif
- 命令、路径、代码片段用 monospace

视觉风格：
- Warm minimalism
- Editorial documentation style
- Calm technical product
- Research-lab clarity
- Off-white background
- Subtle borders
- Low-saturation accents
- Dense but breathable information
- Few decorative elements
- Practical, trustworthy, quiet

布局规则：
- 大面积使用 #faf9f5 暖白背景
- 使用 #141413 做主文字，不要用纯黑
- 细边框优先于强阴影
- 卡片圆角保持小到中等，不要糖果风大圆角
- 组件之间留白充足，但不要空洞
- 用不对称布局和负空间制造高级感，但核心任务路径必须清晰
- 页面整体像“Anthropic 文档页 + Claude Code 产品页 + 操作导航台”的结合

项目定位：
这个网站不是普通教程站，也不是官网介绍页，而是一个帮助校内学生从 0 开始使用 AI 编程工具的可视化导航系统。用户可能不知道 Claude Code / Codex 是什么，也可能已经听说过，但卡在安装、网络、订阅、API、电脑环境、权限、配置文件、第一次项目实践等环节。

目标用户：
- 中国高校学生
- 不限专业、不限背景
- 使用 Windows 或 macOS
- 想开始 AI 编程，但不知道从哪里开始
- 常见问题包括：工具怎么选、电脑环境怎么配、订阅/API 怎么处理、网络问题怎么排查、安装后怎么验证、第一次任务怎么跑通

核心产品目标：
让用户在 1 小时内完成：
1. 选择 Claude Code 或 Codex
2. 确认自己的电脑环境
3. 完成安装和登录
4. 解决基础网络 / 订阅 / API / 权限问题
5. 跑通一次最小 AI 编程任务
6. 知道后续遇到问题该查哪里

首屏要求：
不要做营销型 hero。
不要做博客首页。
不要做大段介绍。
首屏应该直接是一个“上手路径面板”，让用户一眼知道自己现在处在哪一步。

页面 1：首页 / AI 编程上手路线图

核心是一个可视化路径图 / flow map。

路径节点：
1. 选择工具
2. 检查电脑环境
3. 安装工具
4. 登录与授权
5. 订阅 / API / 网络配置
6. 创建测试项目
7. 配置项目规则
8. 完成第一次 AI 编程任务
9. 遇到问题进入排障

每个节点显示：
- 当前任务
- 完成标准
- 常见卡点数量
- 推荐下一步
- source badge

每个节点有两个操作：
- 我完成了
- 我卡住了

交互：
- “我完成了”将节点变为 Green Accent 完成态
- 当前节点使用 Orange Accent
- 信息提示使用 Blue Accent
- “我卡住了”进入排障系统，并自动带上当前节点上下文

首页视觉建议：
- 主背景 #faf9f5
- 左侧或中部为大路线图
- 右侧为“你现在可能处在这里”的上下文面板
- 下方为 Windows / macOS 快速入口、常见卡点、最近更新
- 使用细线连接路线图节点，线条颜色用 #b0aea5 或 #e8e6dc
- 当前节点可使用 #d97757 的细边框或左侧标记，而不是大面积色块

页面 2：工具选择页

目标：
帮助学生选择 Claude Code 或 Codex。

不要做复杂参数评测。
不要写成长篇测评文章。
要设计成“我适合哪个？”的决策卡片。

场景卡片：
- 我主要想写课程项目
- 我想改已有代码
- 我主要用终端
- 我更想用 ChatGPT 账号体系
- 我更关心官方文档和生态
- 我只是想先跑通一次

输出区：
- 推荐工具
- 推荐理由
- 下一步路径
- 官方来源入口

视觉：
- 使用 editorial split layout
- 左侧是选择问题
- 右侧是推荐结果
- 卡片使用 #faf9f5 / #e8e6dc / 细边框
- 推荐结果用 #d97757 做小面积强调

页面 3：安装与验证页

支持 Windows 和 macOS 两条路径。

页面重点不是复写官方安装教程，而是：
- 官方文档入口
- 校内补充说明
- 安装前检查
- 安装后验证
- 常见失败原因

设计为 checklist。
每一步有状态：
- 未开始
- 进行中
- 已完成
- 卡住了

安装成功标准示例：
- 终端命令可运行
- 登录状态正常
- 能在测试目录启动一次任务
- 没有基础环境报错

视觉：
- OS 切换使用 segmented control
- checklist 使用左侧细线 stepper
- 完成态使用 #788c5d
- 卡住态可使用 #d97757，但不要做刺眼红色警告
- 官方来源入口用小型 source badge + link

页面 4：卡点排障页

这个页面像一个问题搜索和分流系统。

筛选类型：
- 网络
- 登录
- 订阅
- API Key
- npm / Node
- PowerShell / Terminal
- 权限
- Windows
- macOS

问题卡片显示：
- 症状
- 可能原因
- 优先尝试的解决路径
- 是否需要人工帮助
- 信息来源类型

搜索框支持症状式搜索：
- npm 装不上
- 登录失败
- API key 怎么填
- Windows 终端报错
- macOS 权限问题
- 订阅不可用
- 网络连接失败

视觉：
- 搜索框像文档站 command palette，但不要过度拟态
- 左侧筛选，右侧结果
- 移动端筛选变为横向滚动标签
- source badge 必须始终可见

页面 5：第一次实践页

目标：
让用户完成一次最小 AI 编程成功体验。

任务选择卡：
- 生成一个网页小工具
- 修复一个简单 bug
- 解释一个陌生代码库
- 给课程代码加测试
- 整理一个脚本工具

每个任务卡片包含：
- 适合人群
- 预计时间
- 推荐工具
- 开始前需要准备什么
- 成功标准
- 开始按钮

视觉：
- 卡片像 Anthropic 文档里的 resource card
- 不要做彩色大图标堆叠
- 使用小型符号、细边框、清晰标题

页面 6：来源与更新页

目标：
建立可信度。

展示信息来源分层：
- Official
- Community
- Personal Note
- Needs Verification
- Outdated

每条记录包含：
- 来源链接
- 更新时间
- 影响范围
- 是否需要用户行动

视觉：
- 像可信资料库，不像新闻流
- 使用 table / list hybrid
- Official 使用深色或 Green Accent 小标签
- Needs Verification 使用 Orange Accent 小标签
- Outdated 使用 Mid Gray

核心组件清单：
- RoadmapNode
- SourceBadge
- StatusPill
- OSSelector
- ChecklistStep
- TroubleshootingSearch
- IssueCard
- PracticeTaskCard
- UpdateRecordRow
- ContextPanel
- CommandSnippet

组件状态：
- default
- active
- completed
- blocked
- needs verification
- outdated

移动端要求：
- 路线图在移动端改为纵向 stepper
- 每个节点保持“任务 / 成功标准 / 我完成了 / 我卡住了”
- 排障筛选改为横向滚动标签
- checklist 保持单列
- 不要让长文字挤压按钮

请输出：
1. Anthropic-inspired design system tokens
2. 产品 UI 总体设计说明
3. 首页 wireframe
4. 每个页面的布局结构
5. 核心组件清单
6. 关键交互说明
7. 推荐配色、字体、间距、卡片样式
8. 移动端适配方案
9. 可以交给前端实现的页面结构说明

强限制：
- 不要生成营销型落地页
- 不要设计成普通博客
- 不要大量复制官方文档内容
- 不要出现“本站功能介绍”式的大段说明
- 不要默认用户是专业程序员
- 不要默认用户只用 Windows，必须同时支持 Windows 和 macOS
- 不要使用 Anthropic / Claude 官方 logo
- 不要声称这是 Anthropic 官方产品
- 不要像素级复制 Anthropic 官网
- 必须保留 source badge 和完成标准
```
