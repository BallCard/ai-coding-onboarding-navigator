/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type OS = 'windows' | 'macos';

export type SourceType =
  | 'Official'
  | 'Official-Derived'
  | 'Community'
  | 'Community Signal'
  | 'Learning Reference'
  | 'Personal Note'
  | 'Experimental'
  | 'Outdated'
  | 'Needs Verification';

export type NodeStatus = 'not-started' | 'in-progress' | 'completed' | 'stuck';
export type RouteLevel = 'starter' | 'project' | 'advanced';

export interface RouteLevelOption {
  id: RouteLevel;
  title: string;
  subtitle: string;
  description: string;
  fitSignals: string[];
}

export const ROUTE_LEVELS: RouteLevelOption[] = [
  {
    id: 'starter',
    title: '入门层',
    subtitle: '把工具跑起来',
    description: '从选工具、检查电脑、安装登录，到完成第一次可验证代码修改。',
    fitSignals: ['还没安装', '登录/网络卡住', '想先成功一次'],
  },
  {
    id: 'project',
    title: '项目层',
    subtitle: '放进真实项目',
    description: '把规则、权限、测试、PR 和 review 串起来，让 AI 帮你处理真实仓库。',
    fitSignals: ['要读项目', '怕误改文件', '要写测试/提 PR'],
  },
  {
    id: 'advanced',
    title: '工作流层',
    subtitle: '沉淀可复用流程',
    description: '把一次次与 AI 协作的经验，沉淀成规则、检查清单、模板或自动化；这是可选进阶，不是入门门槛。',
    fitSignals: ['已经跑通一次任务', '重复做同类任务', '想减少重复沟通'],
  },
];

export interface Source {
  id: string;
  title: string;
  url: string;
  sourceType: SourceType;
  owner: 'Anthropic' | 'OpenAI' | 'Thoughtworks' | 'DORA' | 'GitHub' | 'Git' | 'Node.js' | 'Community' | 'Personal';
  topicTags: string[];
  lastCheckedAt: string;
}

export const SOURCES: Source[] = [
  {
    id: 'claude-code-overview',
    title: 'Claude Code Overview',
    url: 'https://code.claude.com/docs/en/overview',
    sourceType: 'Official',
    owner: 'Anthropic',
    topicTags: ['claude-code', 'overview'],
    lastCheckedAt: '2026-05-04',
  },
  {
    id: 'claude-code-setup',
    title: 'Claude Code Setup',
    url: 'https://code.claude.com/docs/en/setup',
    sourceType: 'Official',
    owner: 'Anthropic',
    topicTags: ['claude-code', 'setup'],
    lastCheckedAt: '2026-05-04',
  },
  {
    id: 'claude-code-quickstart',
    title: 'Claude Code Quickstart',
    url: 'https://code.claude.com/docs/en/quickstart',
    sourceType: 'Official',
    owner: 'Anthropic',
    topicTags: ['claude-code', 'practice'],
    lastCheckedAt: '2026-05-04',
  },
  {
    id: 'claude-code-changelog',
    title: 'Claude Code Changelog',
    url: 'https://code.claude.com/docs/en/changelog',
    sourceType: 'Official',
    owner: 'Anthropic',
    topicTags: ['claude-code', 'updates'],
    lastCheckedAt: '2026-05-04',
  },
  {
    id: 'claude-code-directory',
    title: 'Claude Code .claude Directory',
    url: 'https://code.claude.com/docs/en/claude-directory',
    sourceType: 'Official',
    owner: 'Anthropic',
    topicTags: ['claude-code', 'rules', 'configuration'],
    lastCheckedAt: '2026-05-04',
  },
  {
    id: 'claude-code-permissions',
    title: 'Claude Code Permissions',
    url: 'https://code.claude.com/docs/en/permissions',
    sourceType: 'Official',
    owner: 'Anthropic',
    topicTags: ['claude-code', 'permissions', 'sandbox'],
    lastCheckedAt: '2026-05-04',
  },
  {
    id: 'claude-code-commands',
    title: 'Claude Code Commands',
    url: 'https://code.claude.com/docs/en/commands',
    sourceType: 'Official',
    owner: 'Anthropic',
    topicTags: ['claude-code', 'commands'],
    lastCheckedAt: '2026-05-04',
  },
  {
    id: 'claude-code-permission-modes',
    title: 'Claude Code Permission Modes',
    url: 'https://code.claude.com/docs/en/permission-modes',
    sourceType: 'Official',
    owner: 'Anthropic',
    topicTags: ['claude-code', 'plan-mode', 'permissions'],
    lastCheckedAt: '2026-05-04',
  },
  {
    id: 'claude-code-subagents',
    title: 'Claude Code Subagents',
    url: 'https://code.claude.com/docs/en/sub-agents',
    sourceType: 'Official',
    owner: 'Anthropic',
    topicTags: ['claude-code', 'subagents', 'memory'],
    lastCheckedAt: '2026-05-04',
  },
  {
    id: 'codex-overview',
    title: 'Use Codex',
    url: 'https://developers.openai.com/api/docs/guides/code-generation#use-codex',
    sourceType: 'Official',
    owner: 'OpenAI',
    topicTags: ['codex', 'overview'],
    lastCheckedAt: '2026-08-21',
  },
  {
    id: 'codex-cli-docs',
    title: 'Codex CLI Docs',
    url: 'https://developers.openai.com/codex/cli',
    sourceType: 'Official',
    owner: 'OpenAI',
    topicTags: ['codex', 'setup'],
    lastCheckedAt: '2026-08-21',
  },
  {
    id: 'codex-troubleshooting',
    title: 'Codex Troubleshooting',
    url: 'https://learn.chatgpt.com/docs/reference/troubleshooting',
    sourceType: 'Official',
    owner: 'OpenAI',
    topicTags: ['codex', 'troubleshooting'],
    lastCheckedAt: '2026-08-21',
  },
  {
    id: 'codex-changelog',
    title: 'Codex Changelog',
    url: 'https://learn.chatgpt.com/docs/changelog',
    sourceType: 'Official',
    owner: 'OpenAI',
    topicTags: ['codex', 'updates'],
    lastCheckedAt: '2026-08-21',
  },
  {
    id: 'codex-agents-md',
    title: 'Codex AGENTS.md Docs',
    url: 'https://developers.openai.com/codex/guides/agents-md',
    sourceType: 'Official',
    owner: 'OpenAI',
    topicTags: ['codex', 'rules'],
    lastCheckedAt: '2026-05-04',
  },
  {
    id: 'codex-sandboxing',
    title: 'Codex Sandboxing',
    url: 'https://developers.openai.com/codex/concepts/sandboxing',
    sourceType: 'Official',
    owner: 'OpenAI',
    topicTags: ['codex', 'sandbox'],
    lastCheckedAt: '2026-05-04',
  },
  {
    id: 'codex-agent-approvals-security',
    title: 'Codex Agent Approvals & Security',
    url: 'https://developers.openai.com/codex/agent-approvals-security',
    sourceType: 'Official',
    owner: 'OpenAI',
    topicTags: ['codex', 'approvals', 'security'],
    lastCheckedAt: '2026-05-04',
  },
  {
    id: 'codex-rules',
    title: 'Codex Rules',
    url: 'https://developers.openai.com/codex/rules',
    sourceType: 'Official',
    owner: 'OpenAI',
    topicTags: ['codex', 'rules'],
    lastCheckedAt: '2026-05-04',
  },
  {
    id: 'codex-mcp',
    title: 'Codex MCP Docs',
    url: 'https://developers.openai.com/codex/mcp',
    sourceType: 'Official',
    owner: 'OpenAI',
    topicTags: ['codex', 'mcp'],
    lastCheckedAt: '2026-05-04',
  },
  {
    id: 'codex-skills',
    title: 'Codex Skills Docs',
    url: 'https://developers.openai.com/codex/skills',
    sourceType: 'Official',
    owner: 'OpenAI',
    topicTags: ['codex', 'skills'],
    lastCheckedAt: '2026-05-04',
  },
  {
    id: 'codex-hooks',
    title: 'Codex Hooks Docs',
    url: 'https://developers.openai.com/codex/hooks',
    sourceType: 'Official',
    owner: 'OpenAI',
    topicTags: ['codex', 'hooks'],
    lastCheckedAt: '2026-05-04',
  },
  {
    id: 'codex-use-cases',
    title: 'Codex CLI Workflows',
    url: 'https://developers.openai.com/codex/cli',
    sourceType: 'Official',
    owner: 'OpenAI',
    topicTags: ['codex', 'workflow', 'review', 'automation'],
    lastCheckedAt: '2026-08-21',
  },
  {
    id: 'codex-web-search',
    title: 'Codex Web Search',
    url: 'https://learn.chatgpt.com/docs/web-search?surface=cli',
    sourceType: 'Official',
    owner: 'OpenAI',
    topicTags: ['codex', 'web-search', 'current-information'],
    lastCheckedAt: '2026-08-20',
  },
  {
    id: 'codex-code-review',
    title: 'Codex Code Review',
    url: 'https://learn.chatgpt.com/docs/code-review?surface=cli',
    sourceType: 'Official',
    owner: 'OpenAI',
    topicTags: ['codex', 'review', 'verification'],
    lastCheckedAt: '2026-08-20',
  },
  {
    id: 'information-verification-framework',
    title: '本站信息核验框架',
    url: '#information-verification-framework',
    sourceType: 'Official-Derived',
    owner: 'Personal',
    topicTags: ['information-literacy', 'evidence', 'verification'],
    lastCheckedAt: '2026-08-20',
  },
  {
    id: 'fowler-humans-and-agents',
    title: 'Humans and Agents in Software Engineering Loops',
    url: 'https://martinfowler.com/articles/exploring-gen-ai/humans-and-agents.html',
    sourceType: 'Community Signal',
    owner: 'Thoughtworks',
    topicTags: ['human-ai-collaboration', 'agent-loop', 'verification'],
    lastCheckedAt: '2026-08-21',
  },
  {
    id: 'dora-2025-ai-amplifier',
    title: 'DORA Research 2025',
    url: 'https://dora.dev/dora-report-2025/',
    sourceType: 'Community Signal',
    owner: 'DORA',
    topicTags: ['ai-amplifier', 'software-delivery', 'organizational-systems'],
    lastCheckedAt: '2026-08-21',
  },
  {
    id: 'baoyu-claude-code-secrets',
    title: 'Claude Code 强大的秘密究竟是什么？',
    url: 'https://baoyu.ai/blog/claude-code-secrets',
    sourceType: 'Community Signal',
    owner: 'Community',
    topicTags: ['agent-system', 'context', 'tool-use'],
    lastCheckedAt: '2026-08-21',
  },
  {
    id: 'claude-code-hooks',
    title: 'Claude Code Hooks',
    url: 'https://code.claude.com/docs/en/hooks',
    sourceType: 'Official',
    owner: 'Anthropic',
    topicTags: ['claude-code', 'hooks'],
    lastCheckedAt: '2026-08-21',
  },
  {
    id: 'claude-code-features-overview',
    title: 'Claude Code Features Overview',
    url: 'https://code.claude.com/docs/en/features-overview',
    sourceType: 'Official',
    owner: 'Anthropic',
    topicTags: ['claude-code', 'mcp', 'skills', 'subagents'],
    lastCheckedAt: '2026-08-21',
  },
  {
    id: 'campus-field-notes',
    title: 'Campus Field Notes',
    url: '/updates#campus-field-notes',
    sourceType: 'Personal Note',
    owner: 'Personal',
    topicTags: ['campus', 'workflow'],
    lastCheckedAt: '2026-08-21',
  },
  {
    id: 'node-download',
    title: 'Node.js Download',
    url: 'https://nodejs.org/en/download',
    sourceType: 'Official',
    owner: 'Node.js',
    topicTags: ['node', 'setup'],
    lastCheckedAt: '2026-05-04',
  },
  {
    id: 'npm-cli-versions',
    title: 'npm CLI Versions',
    url: 'https://docs.npmjs.com/about-npm-versions/',
    sourceType: 'Official',
    owner: 'Node.js',
    topicTags: ['npm', 'setup'],
    lastCheckedAt: '2026-05-04',
  },
  {
    id: 'npm-package-latest',
    title: 'npm Package Latest Tag',
    url: 'https://www.npmjs.com/package/npm',
    sourceType: 'Official',
    owner: 'Node.js',
    topicTags: ['npm', 'version'],
    lastCheckedAt: '2026-05-04',
  },
  {
    id: 'git-windows-install',
    title: 'Git for Windows Install',
    url: 'https://git-scm.com/install/windows.html',
    sourceType: 'Official',
    owner: 'Git',
    topicTags: ['git', 'setup', 'windows'],
    lastCheckedAt: '2026-05-04',
  },
  {
    id: 'learn-claude-code',
    title: 'learn-claude-code',
    url: 'https://github.com/shareAI-lab/learn-claude-code',
    sourceType: 'Learning Reference',
    owner: 'Community',
    topicTags: ['claude-code', 'learning-path', 'beginner'],
    lastCheckedAt: '2026-05-05',
  },
  {
    id: 'claude-mem',
    title: 'claude-mem',
    url: 'https://docs.claude-mem.ai/',
    sourceType: 'Learning Reference',
    owner: 'Community',
    topicTags: ['claude-code', 'memory', 'workflow'],
    lastCheckedAt: '2026-05-05',
  },
  {
    id: 'claude-howto',
    title: 'claude-howto',
    url: 'https://github.com/luongnv89/claude-howto',
    sourceType: 'Learning Reference',
    owner: 'Community',
    topicTags: ['claude-code', 'howto', 'beginner'],
    lastCheckedAt: '2026-05-05',
  },
  {
    id: 'cc-switch',
    title: 'CC Switch',
    url: 'https://ccswitch.ai/',
    sourceType: 'Community Signal',
    owner: 'Community',
    topicTags: ['claude-code', 'beginner', 'configuration-switching'],
    lastCheckedAt: '2026-05-06',
  },
];

export interface RoadmapNode {
  id: string;
  level: RouteLevel;
  title: string;
  description: string;
  userGoal: string;
  nextStepId?: string;
  tasks: string[];
  successCriteria: string[];
  commonPitfalls: number;
  sourceIds: string[];
  route: string;
  stuckCategory: TroubleshootingCategory;
  detail?: {
    preflight: string[];
    steps: string[];
    commands?: {
      label: string;
      command: string;
      note: string;
    }[];
    playbook?: {
      title: string;
      badge: string;
      blocks: {
        title: string;
        actions: string[];
        command?: string;
        expected?: string[];
        ifFailed?: string[];
      }[];
    };
    tracks?: {
      id: OS;
      title: string;
      openTerminal: string[];
      runCommands: {
        label: string;
        command: string;
        expected: string[];
      }[];
      success: string[];
      ifFailed: string[];
    }[];
    differences: string[];
    prompt?: string;
    doNotDo: string[];
  };
}

export interface ProjectCapability {
  id: string;
  title: string;
  shortLabel: string;
  description: string;
  userImpact: string;
  nodeId: string;
}

export const PROJECT_CAPABILITIES: ProjectCapability[] = [
  {
    id: 'task-contract',
    title: 'Task Contract',
    shortLabel: 'Contract',
    description: '先定义目标、完成标准和不可做事项，避免 Agent 自己脑补任务。',
    userImpact: '用户会看到改动边界和验收方式，而不是只收到一段看似合理的回答。',
    nodeId: 'plan-before-edit',
  },
  {
    id: 'rules',
    title: 'Rules / AGENTS.md',
    shortLabel: 'Rules',
    description: '把项目结构、命令、安全边界和协作习惯写成稳定规则。',
    userImpact: '每次开工前都有共同约束，减少重复解释和误改文件。',
    nodeId: 'project-rules-deep',
  },
  {
    id: 'repo-context',
    title: 'Repo Context',
    shortLabel: 'Context',
    description: '让 Agent 先读懂目录、入口、模块关系和运行方式。',
    userImpact: '修改建立在真实仓库理解上，降低凭空猜测和大范围误改。',
    nodeId: 'read-codebase',
  },
  {
    id: 'skills',
    title: 'Skills',
    shortLabel: 'Skills',
    description: '把重复出现的项目流程沉淀成可调用的专用能力。',
    userImpact: '同类任务不用每次重讲，协作质量更稳定，启动成本更低。',
    nodeId: 'capability-map',
  },
  {
    id: 'mcp-tools',
    title: 'MCP / Tools',
    shortLabel: 'Tools',
    description: '连接浏览器、文件、GitHub、外部系统和项目数据源。',
    userImpact: 'Agent 不只聊天，还能带着上下文使用真实工具完成任务。',
    nodeId: 'capability-map',
  },
  {
    id: 'verification',
    title: 'Verification',
    shortLabel: 'Verify',
    description: '用 test、lint、build、smoke 和 review 把幻觉压回现实。',
    userImpact: '完成不靠感觉判断，而靠可复现的验证结果和可审查证据。',
    nodeId: 'bug-test-workflow',
  },
];

export interface ProjectLearningScene {
  nodeId: string;
  sceneTitle: string;
  painScene: string;
  whatBreaks: string;
  promptTitle: string;
  prompt: string;
  solidifyTitle: string;
  solidify: string;
}

export const PROJECT_LEARNING_SCENES: ProjectLearningScene[] = [
  {
    nodeId: 'project-rules-deep',
    sceneTitle: '它把“我以为”当成项目规则',
    painScene: '你给 AI 一个陌生仓库，让它修一个报错。它顺手改了目录结构、跳过验证命令，还把团队约定当成普通建议。',
    whatBreaks: '真正的问题不是模型不聪明，而是项目边界只存在于你脑子里。AI 没有读到稳定规则，就会用通用经验替代项目规则。',
    promptTitle: '先让 AI 写项目说明文件',
    prompt: '请先阅读当前项目目录，帮我生成一份项目规则文件草稿。内容必须包括：项目目标、主要目录、常用运行/测试/构建命令、允许修改的范围、禁止触碰的文件、完成任务前必须执行的验证。先不要修改业务代码。',
    solidifyTitle: '反复出现就写进规则文件',
    solidify: 'Claude Code 项目可沉淀到 CLAUDE.md；Codex 项目可沉淀到 AGENTS.md。以后每次开工先让 AI 复述它读到的规则，再让它动手。',
  },
  {
    nodeId: 'permissions-safety',
    sceneTitle: '它改得很快，但你不知道它动了什么',
    painScene: 'AI 一次性执行安装、格式化、删除临时文件、重写配置。最后页面能跑，但你完全不知道哪些动作是必要的。',
    whatBreaks: '真实项目里速度不是第一目标，可审查才是。读、写、执行没有分层时，Agent 会把低风险和高风险动作混在一起。',
    promptTitle: '先让 AI 把动作分级',
    prompt: '请先列出完成这个任务可能需要的动作，并按“只读 / 写文件 / 执行命令 / 高风险不可逆”分级。只读动作可以先做；写文件和执行命令前先说明目的、影响范围和回退方式。',
    solidifyTitle: '把批准边界写成固定规则',
    solidify: '把“哪些命令可自动执行、哪些必须确认、哪些永远不做”写入 CLAUDE.md 或 AGENTS.md。后续同类任务不用每次重新解释。',
  },
  {
    nodeId: 'read-codebase',
    sceneTitle: '它还没看懂仓库，就开始动刀',
    painScene: '你让 AI 修登录页 bug，它直接猜入口文件，在相似组件里改了一堆，最后真正的页面根本没用到那些代码。',
    whatBreaks: '陌生仓库的痛点是上下文缺失。没建立项目地图前，AI 的修改经常建立在文件名猜测上。',
    promptTitle: '先让 AI 画项目地图',
    prompt: '请先不要修改代码。请阅读项目目录，输出：启动入口、路由/页面结构、关键模块、数据流、测试或构建命令，以及你认为和本次问题最相关的 3 个文件。最后告诉我你准备先看哪个文件，为什么。',
    solidifyTitle: '把仓库地图沉淀下来',
    solidify: '如果这个项目会持续协作，把入口文件、目录职责、运行命令和常见修改位置写进规则文件，作为 Repo Context 的稳定部分。',
  },
  {
    nodeId: 'plan-before-edit',
    sceneTitle: '需求一模糊，它就开始自由发挥',
    painScene: '你说“优化一下这个页面”，AI 改了布局、颜色、文案和交互。看起来更热闹，但没有一个改动能对应你的真实目标。',
    whatBreaks: '模糊任务会诱发模型补全目标。没有任务契约时，Agent 会把“可能有用”当成“应该做”。',
    promptTitle: '先签任务契约',
    prompt: '请先把我的需求改写成任务契约，不要修改代码。契约包括：用户目标、这次只解决什么、不解决什么、可能影响哪些文件、验收标准、验证命令、需要我确认的风险点。等我确认后再开始实现。',
    solidifyTitle: '把契约模板固定下来',
    solidify: '把“先契约、再实现”的格式写成项目规则或 Skill。之后遇到模糊需求，AI 自动先产出契约，而不是直接改代码。',
  },
  {
    nodeId: 'bug-test-workflow',
    sceneTitle: '它说修好了，但你没有证据',
    painScene: 'AI 改完 bug 后给你一句“问题已解决”。你刷新页面似乎好了，但换个输入又坏，或者另一个测试悄悄失败。',
    whatBreaks: 'Bug 修复的痛点不是解释原因，而是复现和验证。没有测试或命令，AI 的“已修复”只是叙述。',
    promptTitle: '先复现，再修复',
    prompt: '请先复现这个问题，并告诉我触发条件、失败现象和最小相关代码。然后先写一个能暴露问题的测试或验证步骤，确认失败后再做最小修复。修复后运行同一个验证，并说明结果。',
    solidifyTitle: '把验证命令写进项目规则',
    solidify: '把常用 test / lint / build / smoke 命令写进规则文件。重复出现的 bug 修复流程可以沉淀成 Skill：复现、定位、最小修复、同命令验证。',
  },
  {
    nodeId: 'command-system',
    sceneTitle: '自然语言聊久了，会话开始变糊',
    painScene: '你不断提醒 AI “先别改”“解释一下”“切到计划模式”“只看这个文件”。几轮之后，它又忘了刚才的工作方式。',
    whatBreaks: '把所有控制都塞进临时对话，会让上下文越来越脏。命令和固定工作模式更适合反复触发的操作。',
    promptTitle: '让 AI 先整理你的常用控制语',
    prompt: '请根据我这个项目的工作习惯，整理一组常用操作指令：进入规划、只读分析、开始小步修改、运行验证、总结 diff、处理失败。每条指令说明适用场景和你收到后应该怎么做。',
    solidifyTitle: '把常用控制沉淀成命令或规则',
    solidify: '能被重复触发的控制语，不必每次手打。优先写进规则文件；如果工具支持命令、Skill 或模板，再进一步固化成可调用入口。',
  },
  {
    nodeId: 'github-pr-workflow',
    sceneTitle: '代码生成了，但别人看不懂为什么改',
    painScene: 'AI 帮你完成了功能，PR 里只有一堆 diff。reviewer 不知道目标、验证方式和风险，只能从头猜你的意图。',
    whatBreaks: '团队协作不是把代码扔出去。缺少 PR 说明时，AI 产出无法变成可审查、可讨论、可回滚的协作单元。',
    promptTitle: '让 AI 写 PR 叙事',
    prompt: '请根据当前 diff 帮我生成 PR 描述。必须包括：本次目标、主要改动、为什么这样改、如何验证、未覆盖风险、需要 reviewer 重点看的文件。不要夸大没有验证过的内容。',
    solidifyTitle: '把 PR 模板固定下来',
    solidify: '把 PR 描述格式写成仓库模板或项目规则。以后让 AI 先按模板总结 diff，再由你检查事实是否准确。',
  },
  {
    nodeId: 'review-ci-loop',
    sceneTitle: '失败日志太长，AI 也会被噪声淹没',
    painScene: 'CI 挂了，你把整段日志都丢给 AI。它抓住了一个表层报错，改完又挂，开始进入盲目试错循环。',
    whatBreaks: '失败反馈需要被压缩成任务输入。命令、错误摘要、相关文件、期望结果不清楚时，Agent 会在日志噪声里漂移。',
    promptTitle: '先压缩失败反馈',
    prompt: '请先根据这次失败信息整理修复输入：失败命令、核心错误、最相关文件、可能根因、最小验证方式。先不要修改代码。等你给出定位判断后，再做一处最小修复并重新运行同一个验证。',
    solidifyTitle: '把失败处理变成循环',
    solidify: '把“收集失败命令、压缩日志、定位根因、最小修复、同命令复验”写进规则或 Skill。CI 失败越常见，越值得固化。',
  },
  {
    nodeId: 'capability-map',
    sceneTitle: '工具越接越多，项目反而更乱',
    painScene: '你还没跑通基本任务，就让 AI 配 MCP、Hooks、Skills、Subagents。最后错误来源变多，连问题出在哪一层都不知道。',
    whatBreaks: '扩展能力不是装饰。只有当外部上下文、重复流程、自动检查或任务拆分反复出现，工具化才有收益。',
    promptTitle: '先让 AI 判断该不该扩展',
    prompt: '请先判断这个问题是否值得引入 MCP、Hook、Skill 或 Subagent。请按四类说明：外部上下文是否稳定需要连接、流程是否重复三次以上、是否需要自动验证、任务是否能拆分并行。若不值得，请给出更简单的做法。',
    solidifyTitle: '把重复问题再工具化',
    solidify: '先用 Prompt 跑通，再观察是否重复。重复三次以上再沉淀为 Skill；需要外部系统再接 MCP；需要自动检查再考虑 Hook。',
  },
];

const RAW_ROADMAP_NODES: RoadmapNode[] = [
  {
    id: 'select-tool',
    level: 'starter',
    title: '选择工具',
    description: '按任务形态、入口和控制方式做选择。两款工具都能处理本地项目；不要把“有没有项目目录”当成品牌结论。',
    userGoal: '在 1 分钟内选定一个工具，并进入安装验证。',
    nextStepId: 'check-env',
    tasks: ['回答使用场景', '得到推荐工具'],
    successCriteria: ['能说清自己首选 Claude Code 或 Codex，以及这个选择对应的任务、入口和权限边界。'],
    commonPitfalls: 0,
    sourceIds: ['claude-code-overview', 'codex-overview'],
    route: '/tools',
    stuckCategory: 'tool-choice',
    detail: {
      preflight: ['先不要安装任何工具。先判断你这次要完成的任务、已有的账号入口，以及你能接受的操作权限。', '项目目录只决定工作位置，不决定品牌；Claude Code 和 Codex 都支持在本地仓库中读代码、改文件、跑验证。'],
      steps: ['写下本次任务：从零做一个小实验、读懂陌生仓库、修 bug、写测试，还是做重复自动化。', '判断入口：你更自然地使用 Claude/Anthropic 账号体系，还是 OpenAI/ChatGPT 账号体系。', '判断控制面：你是否需要终端内持续操作、明确的审批/沙箱，或后续接入 Codex/Claude 的扩展能力。', '只选一个工具进入安装验证；如果没有明显偏好，选择你已有账号体系对应的工具。'],
      playbook: {
        title: '用 60 秒选定本次工具',
        badge: 'tool choice',
        blocks: [
          {
            title: '判断任务与入口',
            actions: ['写清本次任务和完成标准，不要先比较模型排行榜。', '标记你准备使用的账号入口：Claude/Anthropic 或 OpenAI/ChatGPT。', '确认任务是在本地项目、终端自动化，还是需要外部资料与工具连接。'],
            expected: ['你有一句具体任务描述和至少一个可观察的完成标准。', '你知道自己会从哪个账号/客户端入口开始。'],
            ifFailed: ['任务说不清：先把目标缩小到 15-25 分钟可验证的小任务。', '两个入口都能用：优先选你已有账号、已有授权的一侧。'],
          },
          {
            title: '按任务进入下一步',
            actions: ['需要 Claude/Anthropic 账号或 Claude Code 工作流：进入 Claude Code 方向。', '需要 OpenAI/ChatGPT 账号、Codex CLI 或 Codex 的 review/自动化工作流：进入 Codex 方向。', '两边都适合时，只安装一个，先完成同一个小任务再比较。'],
            expected: ['你能说出一句话：这次我选 Claude Code / Codex，因为任务和入口更匹配。', '下一步进入“检查电脑环境”，不是继续刷测评。'],
            ifFailed: ['还在纠结：选你已有账号体系的一侧；没有账号偏好时，先选一个并记录结果。', '不要用“已有项目”直接推导工具结论。'],
          },
        ],
      },
      differences: ['Claude Code：官方定位覆盖终端、IDE、桌面和 Web；适合按 Claude/Anthropic 账号体系进入连续项目工作。', 'Codex：官方 CLI 支持本地仓库读写、运行命令、脚本/CI、review 和可选的实时 Web Search；适合按 OpenAI/ChatGPT 账号体系进入。', '两者都不是“有项目/没项目”的固定答案，实际选择应以入口、权限和任务闭环为准。'],
      prompt: '请先比较 Claude Code 和 Codex 在本次任务中的入口、可用客户端、权限控制、外部资料获取和验证方式。不要用泛泛的“哪个更强”回答，最后只推荐一个并说明可观察的选择理由。',
      doNotDo: ['不要把工具选择变成拖延开始的理由。', '不要仅凭社区测评决定长期工具。'],
    },
  },
  {
    id: 'check-env',
    level: 'starter',
    title: '检查电脑环境',
    description: '先确认终端、官方页面和账号入口可用；只有选择 npm 安装或项目本身需要时，才检查 Node/npm。Git 是回退和审查的强烈建议，不是两款工具的统一安装前置。',
    userGoal: '根据所选安装方式跑最小检查，判断能不能进入安装。 ',
    nextStepId: 'install-tool',
    tasks: ['选择 Windows/macOS', '检查终端', '检查 Node.js 与 Git'],
    successCriteria: ['能打开所选工具的官方安装/认证页面，终端能运行基础命令；若走 npm 安装，再额外看到 Node/npm 版本和 registry 结果；Git 有版本号或已记录替代回退方案。'],
    commonPitfalls: 3,
    sourceIds: ['node-download', 'npm-cli-versions', 'npm-package-latest', 'git-windows-install', 'claude-code-setup', 'codex-cli-docs'],
    route: '/setup',
    stuckCategory: 'terminal',
    detail: {
      preflight: ['你已经选定本次工具和安装方式。还没选工具就回到上一步。', '这一步先检查终端和官方页面；Node/npm 只在你准备使用 npm 安装时检查，Git 用于回退和查看 diff。', '浏览器能打开文档不等于 CLI 登录、包下载和模型请求都正常；这些在后续步骤分别验证。'],
      steps: ['按你的系统打开终端。Windows 用 PowerShell，macOS 用 Terminal。', '运行 `git --version`；没有 Git 也可以继续安装，但第一次项目实践前应补上或准备其他回退方式。', '用浏览器打开所选工具的官方安装和认证页面。', '如果选择 npm 安装，再运行 Node/npm 和 registry 检查。', '只记录当前层的结果；不要把浏览器、npm、登录和模型请求混成一个“网络正常”。'],
      commands: [
        {
          label: 'Windows 环境检查',
          command: 'git --version',
          note: 'PowerShell：Git 用于回退和审查；没有 Git 仍可进入原生安装，但项目实践前应补齐回退方案',
        },
        {
          label: 'macOS 环境检查',
          command: 'git --version',
          note: 'Terminal：Git 用于回退和审查；没有 Git 仍可进入原生安装，但项目实践前应补齐回退方案',
        },
        {
          label: 'npm registry 检查',
          command: 'node --version\nnpm --version\nnpm config get registry\nnpm view npm version',
          note: '只有选择 npm 安装时运行；四行都应有输出',
        },
      ],
      tracks: [
        {
          id: 'windows',
          title: 'Windows',
          openTerminal: ['按键盘左下角 `Win` 键。', '输入 `PowerShell`。', '点开 `Windows PowerShell`。先不要用管理员模式。', '看到蓝色或黑色终端窗口后，把光标放在最后一行。'],
          runCommands: [
            {
              label: '先检查 Git 是否可用于回退',
              command: 'git --version',
              expected: ['应该看到 Git 版本，例如 `git version 2.x.x.windows.x`。', '如果没有 Git，记录下来，先按官方原生安装工具。'],
            },
            {
              label: '选择 npm 安装时才运行',
              command: 'npm config get registry\nnpm view npm version',
              expected: ['Node 和 npm 都有版本号。', 'registry 地址和 `npm view npm version` 都有输出。'],
            },
          ],
              success: ['Git 有输出，或你已经记录没有 Git。', '浏览器能打开官方安装/认证页面。', '若走 npm 安装，Node/npm/registry 四项有输出，进入“安装工具”。'],
              ifFailed: ['Git 缺失：可先按官方原生安装继续，但第一次实践前补 Git 或其他可回退方案。', '只有 npm 安装失败时，才进入 Node/npm 排障。', '官方页面打不开：先记录网络层，不要擅自更换第三方安装源。'],
        },
        {
          id: 'macos',
          title: 'macOS',
          openTerminal: ['按 `Command + Space` 打开 Spotlight。', '输入 `Terminal`。', '回车打开终端。', '看到以 `%` 或 `$` 结尾的命令行后，把光标放在最后一行。'],
          runCommands: [
            {
              label: '先检查 Git 是否可用于回退',
              command: 'git --version',
              expected: ['应该看到 Git 版本，例如 `git version 2.x.x`。', '如果没有 Git，记录下来，先按官方原生安装工具。'],
            },
            {
              label: '选择 npm 安装时才运行',
              command: 'npm config get registry\nnpm view npm version',
              expected: ['Node 和 npm 都有版本号。', 'registry 地址和 `npm view npm version` 都有输出。'],
            },
          ],
              success: ['Git 有输出，或你已经记录没有 Git。', '浏览器能打开官方安装/认证页面。', '若走 npm 安装，Node/npm/registry 四项有输出，进入“安装工具”。'],
              ifFailed: ['Git 缺失：可先按官方原生安装继续，但第一次实践前补 Git 或其他可回退方案。', '只有 npm 安装失败时，才进入 Node/npm 排障。', '官方页面打不开：先记录网络层，不要擅自更换第三方安装源。'],
        },
      ],
      differences: ['Windows 重点看 `not recognized`；macOS 重点看 `command not found`。', '原生安装路径通常不要求先装 Node/npm；npm 安装路径才要求 Node/npm。', '浏览器能打开文档只说明网页可达；CLI 登录、npm 下载、模型请求仍需分别验证。'],
      doNotDo: ['不要把 Node/npm/Git 的统一检查当成两款工具的硬门槛。', '不要把“浏览器能打开网页”当成“终端和模型请求都正常”。'],
    },
  },
  {
    id: 'install-tool',
    level: 'starter',
    title: '安装工具',
    description: '只按官方安装入口执行。装完必须跑版本命令，看到版本号才算安装完成。',
    userGoal: '让 `claude` 或 `codex` 命令在本机可用。',
    nextStepId: 'auth',
    tasks: ['选择工具', '执行安装', '确认命令可用'],
    successCriteria: ['能运行 `claude --version` 或 `codex --version`，且没有基础环境报错。'],
    commonPitfalls: 5,
    sourceIds: ['claude-code-setup', 'codex-cli-docs'],
    route: '/setup',
    stuckCategory: 'node-npm',
    detail: {
      preflight: ['上一页的最小检查必须通过：终端可用、官方安装/认证页面可访问；如果选 npm 安装，再确认 Node、npm 和 registry。', '本次只安装一个工具：Claude Code 或 Codex。不要同时安装两个，排障会变复杂。'],
      steps: ['点击右侧官方来源，打开对应安装文档。', '在官方页面找到与你系统匹配的安装方式。', '复制官方页面里的安装命令，粘贴到刚才的终端窗口，按回车。', '安装结束后关闭终端，重新打开一次。', '运行版本检查命令。看到版本号才算安装完成。'],
      playbook: {
        title: '从官方页面复制安装命令，再用版本号验收',
        badge: 'install',
        blocks: [
          {
            title: '打开与你工具对应的官方安装页',
            actions: ['Claude Code 用户：点击右侧 `Claude Code Setup`。', 'Codex 用户：点击右侧 `Codex CLI Docs`。', '在官方页面确认系统要求、账号要求和安装方式。'],
            expected: ['浏览器打开的是 Anthropic 或 OpenAI 官方页面。', '你复制的安装命令来自官方页面，不来自视频评论区或旧博客。'],
            ifFailed: ['官方页面打不开：先回到“检查电脑环境”，确认当前网络能访问官方服务。', '看不懂官方页面：先只找 install / setup / CLI 相关小节，不要复制整段说明文字。'],
          },
          {
            title: '安装完成后重开终端查版本号',
            actions: ['安装命令执行完后，关闭当前终端窗口。', '按上一页的方法重新打开 PowerShell 或 Terminal。', 'Claude Code 用户只运行 `claude --version`。Codex 用户只运行 `codex --version`。'],
            command: 'claude --version\ncodex --version',
            expected: ['你安装的那一个命令应该输出版本号或版本信息。', '另一个没安装的命令报错是正常的，不需要处理。', '看到版本号后再进入登录与授权。'],
            ifFailed: ['看到 `command not found` / `不是可识别命令`：先关闭终端重开一次，再查版本。', '仍然找不到命令：回到官方安装页检查 PATH 或安装位置说明。', '看到 Node/npm 相关错误：回到“检查电脑环境”。不要换第三方安装命令硬试。'],
          },
        ],
      },
      commands: [
        {
          label: 'Claude Code 安装后验证',
          command: 'claude --version',
          note: '看到版本号再继续登录',
        },
        {
          label: 'Codex 安装后验证',
          command: 'codex --version',
          note: '看到版本号再继续登录',
        },
      ],
      differences: ['Claude Code：官方 Overview 当前提供 native installer、Homebrew、WinGet 等入口；按 Anthropic setup 页面选择。', 'Codex：官方 CLI 当前提供 macOS/Linux/Windows standalone installer，也提供 npm/Homebrew 入口；按 OpenAI CLI 文档选择。'],
      doNotDo: ['安装命令以官方页面为准，第三方教程里的旧命令先不要复制。', '密钥和账号凭据只放在官方要求的位置，不写进项目文件。'],
    },
  },
  {
    id: 'auth',
    level: 'starter',
    title: '登录与授权',
    description: '登录后回到终端确认状态。浏览器登录成功，不代表 CLI 已经拿到凭据。',
    userGoal: '让工具识别当前账号，并能进入下一步任务。',
    nextStepId: 'create-project',
    tasks: ['完成账号登录', '确认授权范围'],
    successCriteria: ['工具能识别当前账号，并能在测试目录启动一次安全任务。'],
    commonPitfalls: 2,
    sourceIds: ['claude-code-setup', 'codex-cli-docs', 'cc-switch'],
    route: '/setup',
    stuckCategory: 'login',
    detail: {
      preflight: ['已经能运行 `claude --version` 或 `codex --version`。版本命令没过就不要登录。', '确认你知道当前账号体系：Claude Code 对应 Anthropic / Claude，Codex 对应 OpenAI。'],
      steps: ['打开终端，进入一个测试目录。', '运行你安装的工具命令：Claude Code 用 `claude`，Codex 用 `codex`。', '终端出现登录或授权提示后，按提示打开浏览器。', '浏览器完成登录后，回到终端看是否进入可输入任务的状态。', '如果浏览器成功但终端没变化，先关闭终端重开一次。'],
      playbook: {
        title: '从终端发起登录，最后回到终端确认',
        badge: 'auth',
        blocks: [
          {
            title: '在终端启动登录流程',
            actions: ['打开 PowerShell 或 Terminal。', '进入你准备用来测试的目录；如果还没有目录，先用桌面目录也可以。', 'Claude Code 用户运行 `claude`。Codex 用户运行 `codex`。'],
            command: 'claude\ncodex',
            expected: ['终端出现登录、授权、打开浏览器或继续操作提示。', '只运行你安装的那一条命令；另一个命令不需要运行。'],
            ifFailed: ['提示命令不存在：回到“安装工具”查版本号。', '提示网络或连接失败：回到“检查电脑环境”，先确认当前网络能访问官方服务。'],
          },
          {
            title: '浏览器完成后回到终端看结果',
            actions: ['按终端提示打开浏览器。', '完成网页登录、授权或账号确认。', '不要只看浏览器成功页，必须切回终端看状态。'],
            expected: ['终端不再反复要求登录。', '终端进入可输入任务、选择模型、确认权限或继续下一步的状态。'],
            ifFailed: ['浏览器成功但终端仍未登录：关闭终端，重新打开后再运行工具。', '反复跳登录：记录浏览器页面和终端错误，进入排障页搜索“登录”。', '提示无订阅、无模型或无权限：进入订阅/API 排障，不要重装 CLI。'],
          },
          {
            title: 'Claude Code 新手可选：用 CCSwitch 管理配置',
            actions: ['如果你使用 Claude Code，且经常在不同账号、配置或服务入口之间切换，可以了解 CCSwitch。', 'CCSwitch 是第三方辅助项目，不是 Anthropic 官方登录方式。', '新手可以把它当成“配置切换面板”，先用来减少手动改配置的混乱。'],
            expected: ['你知道当前 Claude Code 用的是哪套配置。', '切换配置后，回到终端重新确认 `claude` 能正常进入登录或任务状态。'],
            ifFailed: ['如果你还没跑通 `claude` 基础登录，先不要上 CCSwitch。', 'CCSwitch 出问题时，先回到 Claude Code 官方登录/认证流程排查。'],
          },
        ],
      },
      commands: [
        {
          label: '启动 Claude Code 登录流程',
          command: 'claude',
          note: '按终端提示继续',
        },
        {
          label: '启动 Codex 登录流程',
          command: 'codex',
          note: '按终端提示继续',
        },
      ],
      differences: ['Claude Code：按 Anthropic / Claude 账号体系处理。', 'Codex：按 OpenAI / Codex CLI 文档处理。', 'CCSwitch：第三方辅助项目，适合 Claude Code 新手管理配置，但不是官方认证入口。'],
      doNotDo: ['登录失败先分清是浏览器回调、终端状态还是账号权限，不急着重装工具。', '账号登录、密钥配置和订阅状态是三件事，按当前工具的官方文档逐项确认。', '不要把 CCSwitch 当作官方文档替代品；涉及账号和权限仍回到官方认证说明。'],
    },
  },
  {
    id: 'create-project',
    level: 'starter',
    title: '创建测试项目',
    description: '第一次不要碰课程项目。新建空目录、初始化 Git，再让 AI 修改。',
    userGoal: '准备一个改坏也能回退的练习目录。',
    nextStepId: 'project-rules',
    tasks: ['创建测试目录', '初始化 Git', '准备最小文件'],
    successCriteria: ['测试目录可打开，Git 状态清楚，工具只在该目录内工作。'],
    commonPitfalls: 1,
    sourceIds: ['claude-code-quickstart', 'codex-cli-docs'],
    route: '/practice',
    stuckCategory: 'permission',
    detail: {
      preflight: ['第一次任务不要放在课程大作业、实验报告仓库、未备份项目里。', '你需要一个改坏也能删掉的空目录。这个目录就是练习场。'],
      steps: ['打开终端。', '进入桌面或文档目录。', '复制命令创建 `ai-first-task` 文件夹并初始化 Git。', '创建一个 README 文件。', '运行 `git status`，确认你能看懂当前变化。'],
      playbook: {
        title: '创建一个改坏也能回退的测试目录',
        badge: 'test workspace',
        blocks: [
          {
            title: '创建目录并初始化 Git',
            actions: ['打开 PowerShell 或 Terminal。', '进入你想放练习项目的位置，例如桌面或文档目录。', '复制下面命令，粘贴后按回车。'],
            command: 'mkdir ai-first-task\ncd ai-first-task\ngit init\ngit status',
            expected: ['看到 Git 初始化成功，例如 `Initialized empty Git repository`。', '`git status` 显示当前在一个 Git 仓库中。'],
            ifFailed: ['`git` 不是可识别命令或 `command not found`：回到电脑环境检查，先安装 Git。', '目录已存在：换一个目录名，例如 `ai-first-task-2`。'],
          },
          {
            title: '创建一个最小文件',
            actions: ['确认终端当前目录已经是 `ai-first-task`。', '复制下面命令创建 README。', '再看一次 Git 状态。'],
            command: 'echo "# AI First Task" > README.md\ngit status',
            expected: ['`git status` 应显示 `README.md` 是新文件或 untracked file。', '这说明后面 AI 改了什么，你能通过 Git 看出来。'],
            ifFailed: ['没有看到 README.md：确认你是否在 `ai-first-task` 目录里。', 'PowerShell 显示重定向错误很少见；直接重新复制命令再执行一次。'],
          },
        ],
      },
      commands: [
        {
          label: '创建测试目录并初始化 Git',
          command: 'mkdir ai-first-task\ncd ai-first-task\ngit init\ngit status',
          note: 'Windows/macOS 都可照做',
        },
        {
          label: '创建最小说明文件',
          command: 'echo "# AI First Task" > README.md\ngit status',
          note: '确认只有 README.md 变化',
        },
      ],
      differences: ['Claude Code 和 Codex 都应在项目根目录启动。', '项目根目录应有清晰规则和验证命令。'],
      doNotDo: ['不要直接在未提交的课程项目里测试。', '不要让 AI 执行破坏性命令。'],
    },
  },
  {
    id: 'project-rules',
    level: 'starter',
    title: '配置项目规则',
    description: '写清项目目标、可改范围、验证命令和禁止事项。规则要能被执行，不写口号。',
    userGoal: '让 AI 开始前知道边界和完成标准。',
    nextStepId: 'task-one',
    tasks: ['写最小规则', '声明验证命令', '限制危险操作'],
    successCriteria: ['工具能读取项目规则，并在执行前遵守验证和权限约束。'],
    commonPitfalls: 2,
    sourceIds: ['claude-code-directory', 'codex-agents-md', 'codex-rules'],
    route: '/practice',
    stuckCategory: 'permission',
    detail: {
      preflight: ['已经创建 `ai-first-task` 测试目录，并能运行 `git status`。', '本次只允许 AI 修改这个测试目录，不允许碰课程项目或个人文件。'],
      steps: ['确认你现在用的是 Claude Code 还是 Codex。', 'Claude Code 用户创建 `CLAUDE.md`。Codex 用户创建 `AGENTS.md`。', '把规则写成可执行的边界：目标、允许修改、验证命令、禁止事项。', '第一次让 AI 先复述规则，不要直接改代码。'],
      playbook: {
        title: '先写规则文件，再让 AI 读规则',
        badge: 'rules',
        blocks: [
          {
            title: '创建对应规则文件',
            actions: ['确认终端当前目录是 `ai-first-task`。', 'Claude Code 用户只创建 `CLAUDE.md`。Codex 用户只创建 `AGENTS.md`。', '不要两个都创建，先让路径简单。'],
            command: 'echo "# Project Rules" > CLAUDE.md\necho "# Agent Instructions" > AGENTS.md',
            expected: ['目录里出现与你当前工具对应的规则文件。', 'Claude Code 用户看到 `CLAUDE.md`；Codex 用户看到 `AGENTS.md`。'],
            ifFailed: ['不知道当前目录在哪里：先运行 `pwd` 或 `cd` 查看路径，确认最后一级是 `ai-first-task`。', '两个文件都创建了也不严重：先保留当前工具对应的那个，另一个之后再清理。'],
          },
          {
            title: '第一次任务前让 AI 复述规则',
            actions: ['打开 Claude Code 或 Codex。', '把下面 Prompt 发给 AI。', '它复述正确后，再允许它计划任务。'],
            command: '请先读取项目规则文件，复述项目目标、允许修改范围和验证命令。不要直接修改代码。',
            expected: ['AI 能说出项目目标、允许修改范围、验证命令和禁止事项。'],
            ifFailed: ['AI 没读到规则：确认文件在项目根目录。', 'AI 复述很空：把规则写得更具体，例如允许修改哪些文件、运行什么命令。'],
          },
        ],
      },
      commands: [
        {
          label: '创建 Claude Code 规则文件',
          command: 'echo "# Project Rules" > CLAUDE.md',
          note: 'Claude Code',
        },
        {
          label: '创建 Codex 规则文件',
          command: 'echo "# Agent Instructions" > AGENTS.md',
          note: 'Codex',
        },
      ],
      differences: ['Claude Code 使用 CLAUDE.md / .claude 相关配置。', 'Codex 使用 AGENTS.md / rules 相关配置。'],
      prompt: '请先读取项目规则文件，复述项目目标、允许修改范围和验证命令。不要直接修改代码。',
      doNotDo: ['不要把密钥写进规则文件。', '不要写空泛规则，例如“写好代码”。'],
    },
  },
  {
    id: 'task-one',
    level: 'starter',
    title: '完成第一次任务',
    description: '只做一个小任务：先让 AI 给计划，再批准修改，最后运行验证。',
    userGoal: '完成一次能验证、能回退、能复述的 AI 编程任务。',
    nextStepId: 'troubleshoot',
    tasks: ['选择任务', '运行工具', '验证产物'],
    successCriteria: ['能得到一个可运行或可解释的结果，并能复述 AI 做了什么。'],
    commonPitfalls: 0,
    sourceIds: ['claude-code-quickstart', 'codex-cli-docs'],
    route: '/practice',
    stuckCategory: 'workflow',
    detail: {
      preflight: ['已经完成安装、登录和规则文件创建。', '当前目录是测试目录，不是课程大作业目录。', '你能运行 `git status` 看当前变化。'],
      steps: ['选择一个 10-20 分钟能完成的小任务，例如改 README、写一个小页面、解释一个小文件。', '把示例 Prompt 复制给 AI。', '先只看计划，不满意就要求缩小范围。', '确认后让 AI 修改。', '修改后运行 `git status` 和 `git diff`。', '最后确认结果能打开、能运行或能解释。'],
      playbook: {
        title: '完成一次小任务，并用 Git 看清改动',
        badge: 'first task',
        blocks: [
          {
            title: '先让 AI 给计划',
            actions: ['打开 Claude Code 或 Codex。', '确认它运行在 `ai-first-task` 目录。', '复制下面 Prompt。', 'AI 只允许先给计划，不允许直接改代码。'],
            command: '请在当前测试项目中完成一个最小可运行任务。先给计划，说明会修改哪些文件和如何验证，等待我确认后再动手。',
            expected: ['AI 输出计划、会修改的文件范围和验证方式。', '计划应该很小，通常只涉及 1-3 个文件。'],
            ifFailed: ['AI 直接开始改：让它停止，要求先给计划。', '计划太大：要求它缩小到 10-20 分钟能完成的一步。'],
          },
          {
            title: '修改后检查 diff',
            actions: ['AI 修改后，回到终端。', '复制下面命令。', '先看改了哪些文件，再决定是否继续。'],
            command: 'git status\ngit diff',
            expected: ['你能看到新增或修改的文件。', 'diff 能解释 AI 改了什么。'],
            ifFailed: ['看不懂 diff：让 AI 用三句话解释每个文件为什么改。', '改动太多：要求它缩小任务范围，必要时回退。'],
          },
        ],
      },
      commands: [
        {
          label: '检查 AI 修改了哪些文件',
          command: 'git status\ngit diff',
          note: '修改后必须看',
        },
      ],
      differences: ['Claude Code 更适合连续项目修改。', 'Codex 更适合 OpenAI 生态用户快速上手。'],
      prompt: '请在当前测试项目中完成一个最小可运行任务。先给计划，说明会修改哪些文件和如何验证，等待我确认后再动手。',
      doNotDo: ['不要一次要求 AI 做大型项目。', '不要跳过验证步骤。'],
    },
  },
  {
    id: 'troubleshoot',
    level: 'starter',
    title: '遇到问题进入排障',
    description: '把报错原文或症状贴进搜索框。先试前三个动作，再决定找谁帮忙。',
    userGoal: '把当前卡点变成一个可执行的下一步。',
    tasks: ['搜索症状', '尝试前 1-3 个动作', '判断是否需要人工帮助'],
    successCriteria: ['能明确当前属于网络、登录、权限、终端或订阅/API 中的哪类问题。'],
    commonPitfalls: 6,
    sourceIds: ['codex-troubleshooting', 'campus-field-notes'],
    route: '/troubleshooting',
    stuckCategory: 'workflow',
    detail: {
      preflight: ['你已经在前面的步骤遇到具体问题。没有具体报错时，先回到当前步骤继续做。', '先准备三样东西：工具名、系统、报错原文。不要只写“它不行”。'],
      steps: ['复制终端里最关键的 3-10 行报错。', '打开排障页。', '在搜索框输入报错关键词，例如 `command not found`、`not recognized`、`timeout`、`login`。', '先按卡片里的前 1-3 个动作做。', '做完后回到原步骤重新验证。'],
      playbook: {
        title: '把“卡住了”变成可执行排障输入',
        badge: 'troubleshoot',
        blocks: [
          {
            title: '先整理报错信息',
            actions: ['看终端最后几行，不要截整屏。', '记录工具名：Claude Code 或 Codex。', '记录系统：Windows 或 macOS。', '复制最关键的报错关键词。'],
            command: '工具：Claude Code / Codex\n系统：Windows / macOS\n报错关键词：把终端里的 command not found / not recognized / timeout / login / permission denied 等原文贴在这里',
            expected: ['你手上有一段能搜索的报错原文。', '你知道问题发生在安装、登录、网络、权限还是第一次任务。'],
            ifFailed: ['找不到报错：重新执行刚才失败的命令，让错误再出现一次。', '只有截图没有文字：优先手动抄关键词，不要让别人猜。'],
          },
          {
            title: '搜索并执行前三个动作',
            actions: ['打开排障页。', '把报错关键词粘贴进搜索框。', '只先执行卡片里的前 1-3 个动作。', '执行后回到原页面重新跑同一个验证命令。'],
            expected: ['你能得到一个下一步动作，例如重开终端、检查 PATH、查 npm registry、确认账号权限。', '如果动作有效，原来的验证命令会从失败变成有输出。'],
            ifFailed: ['没有匹配卡片：搜索更短的关键词，例如只搜 `timeout` 或 `login`。', '前三个动作都失败：把工具名、系统、报错原文和你试过的动作发给人工帮助者。'],
          },
        ],
      },
      commands: [
        {
          label: '排障输入模板',
          command: '工具：Claude Code / Codex\n系统：Windows / macOS\n我正在做哪一步：安装 / 登录 / 网络 / 创建测试项目 / 第一次任务\n报错原文：\n我已经试过：',
          note: '发给排障助手或人工帮助者',
        },
      ],
      differences: ['Windows 常见关键词：`not recognized`、`.ps1`、PATH。', 'macOS 常见关键词：`command not found`、`permission denied`、zsh。'],
      prompt: '请根据下面信息帮我定位问题类型。先判断属于终端、Node/npm、网络、登录、权限还是订阅/API，不要直接让我重装。\n\n工具：\n系统：\n当前步骤：\n报错原文：\n我已经试过：',
      doNotDo: ['不要只说“报错了”，必须保留原文。', '不要反复重装 CLI 来解决账号、网络或权限问题。'],
    },
  },
  {
    id: 'project-rules-deep',
    level: 'project',
    title: '项目规则体系',
    description: '痛点：每次都重新解释项目，既浪费 token，也容易让 AI 忽略团队规范。规则文件把稳定信息前置。',
    userGoal: '把项目结构、验证命令和边界沉淀下来，减少重复说明和错误改动。',
    nextStepId: 'permissions-safety',
    tasks: ['补项目结构', '写验证命令', '声明安全边界'],
    successCriteria: ['Agent 开始任务前能引用项目规则，并按规则选择验证方式。'],
    commonPitfalls: 3,
    sourceIds: ['claude-code-directory', 'codex-agents-md', 'codex-rules'],
    route: '/practice',
    stuckCategory: 'permission',
  },
  {
    id: 'permissions-safety',
    level: 'project',
    title: '权限 / Approval / Sandbox',
    description: '痛点：真实项目最怕“改得很快但不知道改了什么”。权限设计让速度服从可控性。',
    userGoal: '把读、写、执行分层管理，让低风险动作顺畅，高风险动作可审查。',
    nextStepId: 'read-codebase',
    tasks: ['区分读写执行', '保留危险操作确认', '列出 sandbox 边界'],
    successCriteria: ['能指出哪些命令可以自动批准，哪些必须手动确认。'],
    commonPitfalls: 4,
    sourceIds: ['claude-code-permissions', 'codex-sandboxing', 'codex-agent-approvals-security'],
    route: '/practice',
    stuckCategory: 'permission',
  },
  {
    id: 'read-codebase',
    level: 'project',
    title: '读陌生仓库',
    description: '痛点：直接让 AI 改陌生仓库，会把 token 花在猜测上。先建立项目地图，后续修改才更稳。',
    userGoal: '先形成入口、模块和运行方式的共同上下文，再进入修改。',
    nextStepId: 'bug-test-workflow',
    tasks: ['扫描目录', '找入口文件', '总结模块关系'],
    successCriteria: ['能说出项目从哪个文件启动、主要模块做什么、如何运行验证。'],
    commonPitfalls: 2,
    sourceIds: ['claude-code-quickstart', 'codex-cli-docs'],
    route: '/practice',
    stuckCategory: 'workflow',
  },
  {
    id: 'plan-before-edit',
    level: 'project',
    title: '先规划，再修改',
    description: '痛点：大段直接修改会让 review 成本暴涨。计划先行可以提前发现范围过大、验证缺失和风险点。',
    userGoal: '把一次模糊需求拆成小步、可验证、可回退的修改任务。',
    nextStepId: 'bug-test-workflow',
    tasks: ['读上下文', '提出计划', '列风险', '选择批准方式'],
    successCriteria: ['能在改动前看到计划、影响范围和验证命令。'],
    commonPitfalls: 3,
    sourceIds: ['claude-code-permission-modes', 'codex-agent-approvals-security'],
    route: '/practice',
    stuckCategory: 'workflow',
  },
  {
    id: 'bug-test-workflow',
    level: 'project',
    title: '修 Bug / 写测试',
    description: '痛点：AI 很容易“看起来修了”，但没有复现和测试就无法证明。测试把回答变成证据。',
    userGoal: '让 bug 修复从口头解释变成可复现、可验证的工程闭环。',
    nextStepId: 'command-system',
    tasks: ['复现问题', '先计划再修改', '运行测试'],
    successCriteria: ['原问题消失，验证命令通过，diff 可人工 review。'],
    commonPitfalls: 5,
    sourceIds: ['campus-field-notes', 'codex-agent-approvals-security'],
    route: '/practice',
    stuckCategory: 'workflow',
  },
  {
    id: 'command-system',
    level: 'project',
    title: '命令系统与常用操作',
    description: '痛点：把所有控制都塞进自然语言，会让会话越来越乱。命令系统是更稳定的控制面板。',
    userGoal: '用命令管理模型、权限、上下文和工作模式，减少无效对话轮次。',
    nextStepId: 'github-pr-workflow',
    tasks: ['查看命令列表', '管理上下文', '管理权限', '触发工作流'],
    successCriteria: ['能用命令完成查看帮助、管理权限或进入规划流程中的至少一项。'],
    commonPitfalls: 2,
    sourceIds: ['claude-code-commands', 'codex-cli-docs'],
    route: '/practice',
    stuckCategory: 'workflow',
  },
  {
    id: 'github-pr-workflow',
    level: 'project',
    title: 'GitHub / PR 工作流',
    description: '痛点：AI 生成代码不等于团队可合并代码。PR 把意图、验证和风险交代清楚。',
    userGoal: '把 AI 产出转成可审查、可讨论、可回滚的协作单元。',
    nextStepId: 'review-ci-loop',
    tasks: ['创建分支', '检查 diff', '提交 PR', '处理 review'],
    successCriteria: ['PR 能说明改了什么、如何验证、还有什么风险。'],
    commonPitfalls: 4,
    sourceIds: ['campus-field-notes'],
    route: '/practice',
    stuckCategory: 'workflow',
  },
  {
    id: 'review-ci-loop',
    level: 'project',
    title: 'Review / CI 反馈循环',
    description: '痛点：失败日志很长，直接丢给 AI 会浪费上下文。先压缩成命令、错误、文件、期望结果。',
    userGoal: '把测试失败和 review 意见转成高质量修复输入，减少来回试错。',
    nextStepId: 'capability-map',
    tasks: ['收集失败信息', '让 AI 定位原因', '小步修复', '再次验证'],
    successCriteria: ['一次失败能被转化成清晰的下一轮修复任务，而不是盲目重试。'],
    commonPitfalls: 4,
    sourceIds: ['claude-code-commands', 'codex-use-cases'],
    route: '/practice',
    stuckCategory: 'workflow',
  },
  {
    id: 'capability-map',
    level: 'project',
    title: '扩展工具：MCP / Hooks / Skills / Subagents',
    description: '痛点：扩展不是越多越强。只有当外部上下文、自动检查、流程复用或任务拆分反复出现时，才值得引入。',
    userGoal: '按项目问题选择扩展工具，而不是为了“高级”而配置。 ',
    tasks: ['连接上下文', '触发检查', '复用流程', '拆分任务'],
    successCriteria: ['能为一个真实项目卡点选择 MCP、Hooks、Skills 或 Subagents 中的一个，并说明原因。'],
    commonPitfalls: 4,
    sourceIds: ['codex-mcp', 'codex-hooks', 'codex-skills', 'claude-code-features-overview'],
    route: '/advanced',
    stuckCategory: 'workflow',
  },
  {
    id: 'agentic-thinking',
    level: 'advanced',
    title: 'Agentic Thinking',
    description: '核心变化：你不再只是写 prompt，而是在设计一个能执行、能检查、能复盘的任务系统。',
    userGoal: '把模糊需求拆成目标、输入、步骤、检查点和完成标准。',
    nextStepId: 'pipeline-design',
    tasks: ['定义目标', '拆分任务', '设计验证', '保留反馈'],
    successCriteria: ['能把一个模糊需求拆成输入、步骤、检查点和完成标准。'],
    commonPitfalls: 3,
    sourceIds: ['claude-code-features-overview', 'codex-agent-approvals-security', 'fowler-humans-and-agents', 'dora-2025-ai-amplifier'],
    route: '/advanced',
    stuckCategory: 'workflow',
  },
  {
    id: 'information-evidence-chain',
    level: 'advanced',
    title: '信息获取与证据链',
    description: '核心习惯：让 AI 区分仓库事实、官方文档、实时资料、社区信号和自己的推断，不把“搜到”当成“证实”。',
    userGoal: '为一个需要外部资料的任务建立可追溯的信息输入和验证闭环。',
    nextStepId: 'pipeline-design',
    tasks: ['定义问题', '分层找资料', '记录证据', '标记不确定性'],
    successCriteria: ['能把任务中的事实、推断和待核验项分开，并为关键结论保留来源、检查日期和适用范围。'],
    commonPitfalls: 4,
    sourceIds: ['codex-web-search', 'claude-code-overview', 'information-verification-framework', 'dora-2025-ai-amplifier'],
    route: '/advanced',
    stuckCategory: 'workflow',
  },
  {
    id: 'pipeline-design',
    level: 'advanced',
    title: 'Pipeline 设计',
    description: '价值：固定 pipeline 可以减少重复沟通，把 token 花在新问题上，而不是每次重建上下文。',
    userGoal: '把常见开发任务固定成输入、处理、验证、产出、复盘五段。',
    nextStepId: 'context-memory-architecture',
    tasks: ['输入标准化', '任务分阶段', '验证前置', '输出归档'],
    successCriteria: ['能画出一个从需求到 PR 的最小 pipeline，并知道每一步谁负责。'],
    commonPitfalls: 4,
    sourceIds: ['claude-code-hooks', 'codex-hooks', 'campus-field-notes', 'fowler-humans-and-agents'],
    route: '/advanced',
    stuckCategory: 'workflow',
  },
  {
    id: 'context-memory-architecture',
    level: 'advanced',
    title: '上下文与记忆架构',
    description: '价值：上下文放错位置会浪费 token 或污染判断。稳定事实、临时信息、长期经验要分开放。',
    userGoal: '决定哪些信息进规则文件，哪些留在会话，哪些沉淀成模板。',
    nextStepId: 'automation-boundaries',
    tasks: ['定义事实来源', '区分临时上下文', '沉淀长期记忆', '控制过期信息'],
    successCriteria: ['能说明项目规则、会话上下文、agent memory 分别适合放什么。'],
    commonPitfalls: 3,
    sourceIds: ['claude-code-subagents', 'claude-code-directory', 'codex-agents-md', 'baoyu-claude-code-secrets'],
    route: '/advanced',
    stuckCategory: 'workflow',
  },
  {
    id: 'automation-boundaries',
    level: 'advanced',
    title: '自动化边界',
    description: '关键判断：自动化的收益来自重复和低风险，不来自把所有控制权交出去。',
    userGoal: '把可逆低风险步骤自动化，把高风险不可逆步骤保留人工确认。',
    nextStepId: 'multi-agent-collaboration',
    tasks: ['识别可逆步骤', '识别高风险步骤', '设置批准点'],
    successCriteria: ['能区分低风险重复动作和高风险不可逆动作。'],
    commonPitfalls: 2,
    sourceIds: ['claude-code-permissions', 'codex-sandboxing', 'codex-agent-approvals-security'],
    route: '/advanced',
    stuckCategory: 'workflow',
  },
  {
    id: 'multi-agent-collaboration',
    level: 'advanced',
    title: '多 Agent 协作',
    description: '价值：多 Agent 不是更多聊天窗口，而是让探索、实现、验证互相制衡，降低单一会话盲区。',
    userGoal: '为复杂任务设计角色分工、交付物和整合点。',
    nextStepId: 'evaluation-loop',
    tasks: ['拆分角色', '定义交付物', '设置整合点', '避免重复工作'],
    successCriteria: ['能为一个项目设计主 Agent、代码阅读 Agent、验证 Agent 的分工。'],
    commonPitfalls: 3,
    sourceIds: ['claude-code-features-overview'],
    route: '/advanced',
    stuckCategory: 'workflow',
  },
  {
    id: 'evaluation-loop',
    level: 'advanced',
    title: '评估与反馈循环',
    description: '价值：没有评估，AI 协作只是在生成内容；有评估，才能持续改进流程。',
    userGoal: '为每类任务设置自动验证、人工 review 和失败复盘。',
    nextStepId: 'workflow-retrospective',
    tasks: ['定义指标', '运行验证', '记录失败', '改进提示/规则'],
    successCriteria: ['能为一个任务设计至少一个自动验证点和一个人工 review 点。'],
    commonPitfalls: 3,
    sourceIds: ['codex-use-cases', 'campus-field-notes'],
    route: '/advanced',
    stuckCategory: 'workflow',
  },
  {
    id: 'workflow-retrospective',
    level: 'advanced',
    title: '工作流复盘与沉淀',
    description: '价值：一次成功如果没有沉淀，下次还会重新摸索。复盘把经验变成流程资产。',
    userGoal: '把有效提示、验证命令、失败原因和规则更新沉淀为模板。',
    tasks: ['记录有效提示', '沉淀规则', '更新检查清单', '形成复用模板'],
    successCriteria: ['能把一次成功任务转化成下次可复用的流程资产。'],
    commonPitfalls: 2,
    sourceIds: ['campus-field-notes'],
    route: '/advanced',
    stuckCategory: 'workflow',
  },
];

const WORKFLOW_DETAIL_BY_ID: Record<string, NonNullable<RoadmapNode['detail']>> = {
  'project-rules-deep': {
    preflight: [
      '先看项目里是否已有 AGENTS.md、CLAUDE.md、README、package.json 或测试脚本。已有规则先遵守，不另起一套。',
      '规则文件只写稳定信息：项目目标、目录结构、验证命令、禁止事项和完成标准。临时需求留在本次对话里。',
    ],
    steps: [
      '痛点：AI 会把“我以为”当成项目规则，尤其在陌生仓库里容易忽略验证命令和团队边界。',
      '机制：把稳定约束放进规则文件，减少每次开工前重复解释，也降低模型临场脑补。',
      '操作：写清项目目的、主要目录、允许修改范围、常用验证命令、禁止提交密钥和大范围重构。',
      '验证：新开一次会话，让 AI 先复述规则和本次任务边界；复述不准确时先改规则，不让它动代码。',
      '沉淀：同类问题重复出现三次，就把新的失败处理和验证命令补进规则文件。',
    ],
    commands: [
      {
        label: '规则文件最小骨架',
        command: '# Project Goal\n\n# Directory Map\n\n# Verify Commands\n\n# Editing Boundaries\n\n# Do Not Do\n\n# Completion Criteria',
        note: '复制到 AGENTS.md 或 CLAUDE.md 后再填内容',
      },
    ],
    differences: [
      'Claude Code 用户优先维护 CLAUDE.md 和 .claude 目录规则。',
      'Codex 用户优先维护 AGENTS.md，并让任务从项目根目录启动。',
    ],
    prompt: '请先阅读本项目规则文件和 README。不要修改文件。输出：1. 项目目标；2. 你认为本次任务允许修改的文件范围；3. 需要运行的验证命令；4. 你不会做的高风险动作。等我确认后再继续。',
    doNotDo: [
      '不要把一次性需求写进长期规则，否则下次任务会被旧上下文污染。',
      '不要在规则文件里写密钥、账号、个人路径或真实隐私。',
    ],
  },
  'permissions-safety': {
    preflight: [
      '先确认当前仓库是否有未提交变更。真实项目里，权限策略必须和 Git 状态一起看。',
      '把动作分成读、写、执行、删除、联网、提交六类；风险越高，越需要人工确认。',
    ],
    steps: [
      '痛点：AI 改得越快，用户越容易放弃审查；权限边界就是把速度压回可控范围。',
      '机制：低风险读操作可以顺畅，高风险写入、删除、安装、联网和提交必须留下确认点。',
      '操作：开工前声明允许读哪些目录、允许改哪些文件、哪些命令需要先问。',
      '验证：每轮修改后看 git status 和 git diff，确认没有越界文件。',
      '升级：需要删除、迁移、部署、写密钥、推送远端时，停止自动执行，转人工确认。',
    ],
    commands: [
      {
        label: '修改后审查',
        command: 'git status\ngit diff',
        note: '每轮 AI 修改后先看这里',
      },
    ],
    differences: [
      'Claude Code 的权限模式适合把计划、编辑和执行拆开控制。',
      'Codex 的 sandbox 与 approval 适合限制文件系统和命令执行边界。',
    ],
    prompt: '本次任务请遵守：只读全仓库；只允许修改我指定的文件；运行安装、删除、迁移、部署、git push 前必须先说明原因并等待确认。开始前先列出你预计需要的权限。',
    doNotDo: [
      '不要为了省一次确认就批准删除、重置、批量移动或远端推送。',
      '不要把 sandbox 当成项目规则；sandbox 控制能不能做，规则控制应不应该做。',
    ],
  },
  'read-codebase': {
    preflight: [
      '先从项目根目录开始，不要只贴一个文件让 AI 猜全局结构。',
      '读仓库阶段只建立地图，不做修改；目标是减少后续误改和重复解释。',
    ],
    steps: [
      '痛点：陌生仓库里直接改代码，AI 会用通用经验填补缺失上下文，容易改错入口或重复造轮子。',
      '机制：先建立项目地图，把目录、入口、数据流、验证命令和风险文件放进共同上下文。',
      '操作：让 AI 扫描 README、manifest、src 入口、测试目录和配置文件，只输出结构摘要。',
      '验证：要求它指出“我还不知道什么”，而不是假装已经理解所有模块。',
      '沉淀：把稳定的目录地图和运行命令补进规则文件，后续任务不用重新读一遍。',
    ],
    commands: [
      {
        label: '人工快速看仓库',
        command: 'git status\nls\nnpm run',
        note: 'Windows 下可用 Get-ChildItem 替代 ls',
      },
    ],
    differences: [
      '前端项目重点看 package.json、src、routes、components 和测试脚本。',
      '后端项目重点看入口文件、路由、数据库迁移、环境变量和测试目录。',
    ],
    prompt: '请先阅读这个仓库，不要修改文件。输出四段：入口文件在哪里；主要模块分别做什么；运行和验证命令是什么；如果要改代码，最可能影响哪些文件。',
    doNotDo: [
      '不要让 AI 在没读项目规则和 manifest 的情况下直接改业务代码。',
      '不要接受“这是一个典型 React 项目”这种空泛摘要，必须落到具体文件。',
    ],
  },
  'plan-before-edit': {
    preflight: [
      '先把需求压成一句目标和一个完成标准；说不清完成标准时不要进入编辑。',
      '计划阶段只允许读文件和列方案，不允许直接写代码。',
    ],
    steps: [
      '痛点：AI 可以一次改很多文件，但你的 review 带宽没有变；计划先行是为了降低审查成本。',
      '机制：先锁目标、文件范围、风险、验证命令，再决定是否授权修改。',
      '操作：要求 AI 输出计划、会改哪些文件、不会改哪些文件、如何验证。',
      '验证：计划里没有验证命令、文件范围过大或目标漂移时，退回重写计划。',
      '执行：批准后只做一小步，完成后立刻看 diff 和运行验证。',
    ],
    commands: [
      {
        label: '计划通过后的审查',
        command: 'git status\ngit diff\nnpm run lint',
        note: '按项目实际命令替换 lint',
      },
    ],
    differences: [
      '小文案改动可以短计划；跨模块改动必须列风险和回滚方式。',
      '修 bug 必须先复现；加功能必须先定义验收。',
    ],
    prompt: '请先给计划，不要改文件。计划必须包含：目标、需要阅读的文件、预计修改的文件、风险点、验证命令、完成标准。等我确认后再实施第一小步。',
    doNotDo: [
      '不要接受“我会优化代码”这种没有范围的计划。',
      '不要在计划还没说明验证方式时允许 AI 编辑。',
    ],
  },
  'bug-test-workflow': {
    preflight: [
      '先保留原始报错、复现步骤和当前 Git 状态。没有复现，就没有可靠修复。',
      '如果项目已有测试，优先让失败测试或最小复现锁定问题。',
    ],
    steps: [
      '痛点：AI 很擅长给出看似合理的修复解释，但解释不能证明 bug 消失。',
      '机制：复现 -> 定位 -> 最小修改 -> 验证，把修复从口头判断变成证据链。',
      '操作：先让 AI 解释失败原因和相关文件，再要求写最小修复，不做顺手重构。',
      '验证：运行原失败命令、相关测试、类型检查或页面 smoke test。',
      '沉淀：把失败原因和复现命令补进排障卡或项目规则。',
    ],
    commands: [
      {
        label: 'bug 修复基本闭环',
        command: 'git status\nnpm run lint\nnpm run build',
        note: '按项目实际测试命令补充',
      },
    ],
    differences: [
      '前端 bug 要看截图、控制台、路由和浏览器尺寸。',
      '后端 bug 要看请求、响应、日志、数据状态和测试夹具。',
    ],
    prompt: '这是报错和复现步骤。请先判断最可能原因，列出相关文件和最小修复计划。不要顺手重构。修复后必须告诉我运行哪个命令证明问题消失。',
    doNotDo: [
      '不要因为代码能编译就宣布 bug 修好。',
      '不要让 AI 同时修多个无关问题，diff 会变得无法 review。',
    ],
  },
  'command-system': {
    preflight: [
      '先区分自然语言任务和工具命令：自然语言描述目标，命令负责切换状态、查看帮助、管理权限和验证。',
      '不要把所有控制都写成长 prompt；可重复控制应沉淀成命令或规则。',
    ],
    steps: [
      '痛点：对话越长，上下文越乱；命令系统给协作提供稳定控制面板。',
      '机制：用命令查看帮助、切换模式、压缩上下文、触发验证，减少临场口头解释。',
      '操作：记录本项目常用命令：启动、测试、构建、类型检查、排障和 review。',
      '验证：让 AI 执行任务前先引用这些命令，执行后汇报命令结果。',
      '沉淀：重复三次的命令组合写进 README、规则文件或自定义 command。',
    ],
    commands: [
      {
        label: '项目命令清单模板',
        command: 'npm run dev\nnpm run lint\nnpm run build\nnode scripts/smoke-test.mjs',
        note: '替换成当前项目真实命令',
      },
    ],
    differences: [
      'Claude Code 可围绕 slash commands 和项目命令组织工作流。',
      'Codex 可围绕 CLI 配置、rules、approvals 和验证命令组织工作流。',
    ],
    prompt: '请先读取项目可用命令，输出启动、测试、构建、排障四类命令。后续每次修改后，按任务风险选择最小验证命令。',
    doNotDo: [
      '不要让 AI 自己发明不存在的 npm script。',
      '不要把高风险命令加入自动执行清单。',
    ],
  },
  'github-pr-workflow': {
    preflight: [
      '先确认当前分支、未提交变更和远端状态。PR 是协作单元，不是生成代码后的附属品。',
      '没有明确验证结果和风险说明时，不进入可合并状态。',
    ],
    steps: [
      '痛点：AI 产出代码不等于团队可合并代码；PR 要交代意图、影响面、验证和风险。',
      '机制：分支、commit、PR 描述和 review 把一次 AI 修改变成可审查记录。',
      '操作：每个 PR 只承载一个目标，描述改了什么、为什么改、怎么验。',
      '验证：附上实际运行过的命令和结果；没跑的命令要明说原因。',
      '反馈：review 意见先分类，再让 AI 逐条处理，不要把整段评论直接丢回去。',
    ],
    commands: [
      {
        label: 'PR 前检查',
        command: 'git status\ngit diff --stat\ngit log --oneline -5',
        note: '确认范围和提交历史',
      },
    ],
    differences: [
      '个人项目也要写 PR 式总结，用来训练可审查习惯。',
      '团队项目必须把风险和未验证项写清楚，不能只写 generated by AI。',
    ],
    prompt: '请根据当前 diff 起草 PR 描述，包含 Summary、Validation、Risks。不要夸大已经验证的内容；没有运行的检查列入 Not run。',
    doNotDo: [
      '不要把多个无关需求塞进一个 PR。',
      '不要让 AI 自动 push 或 merge，除非用户明确要求。',
    ],
  },
  'review-ci-loop': {
    preflight: [
      '先收集失败命令、关键日志、涉及文件和期望结果。CI 失败不是让 AI 猜谜。',
      'review 意见先判断是否 actionable，不清楚的意见要先澄清。',
    ],
    steps: [
      '痛点：把整段 CI 日志直接丢给 AI，会浪费上下文并放大误判。',
      '机制：压缩失败信息，保留命令、错误、文件、期望，再进入修复。',
      '操作：把失败分成测试失败、类型失败、构建失败、lint 失败、review 需求变更。',
      '验证：修复后本地跑同一条失败命令，再跑相关回归检查。',
      '沉淀：重复出现的 CI 失败写入排障卡或项目规则。',
    ],
    commands: [
      {
        label: 'CI 失败输入模板',
        command: '失败命令：\n关键错误：\n相关文件：\n期望结果：\n我已经尝试：',
        note: '先压缩，再交给 AI',
      },
    ],
    differences: [
      '测试失败优先复现同一条测试命令。',
      'review 反馈优先定位具体行和具体要求。',
    ],
    prompt: '下面是 CI 或 review 反馈。请先分类，再给最小修复计划。不要改无关文件。修复后必须重新运行同一条失败命令。',
    doNotDo: [
      '不要把完整超长日志原样塞进上下文。',
      '不要为了让 CI 过而删除测试、注释断言或绕过类型检查。',
    ],
  },
  'capability-map': {
    preflight: [
      '先确认问题是否真的重复出现。MCP、Hooks、Skills、Subagents 都是成本，不是装饰。',
      '只有当外部上下文、自动检查、流程复用或任务拆分反复出现时，才引入扩展能力。',
    ],
    steps: [
      '痛点：初学者容易把扩展能力当成高级配置清单，结果增加复杂度却没有减少问题。',
      '机制：按问题选择能力：接外部系统用 MCP，动作前后检查用 Hooks，复用流程用 Skills，分工用 Subagents。',
      '操作：先写出当前卡点，再判断它属于上下文、检查、复用还是分工。',
      '验证：引入扩展后，必须减少重复操作、降低错误率或提升可审查性。',
      '沉淀：扩展配置要写入项目文档，说明触发条件、边界和验证方式。',
    ],
    commands: [
      {
        label: '能力选择矩阵',
        command: '外部上下文 -> MCP\n动作前后检查 -> Hooks\n重复流程 -> Skills\n并行分工 -> Subagents',
        note: '先判断问题，再选能力',
      },
    ],
    differences: [
      'MCP 解决“Agent 缺真实上下文或工具”。',
      'Skills 解决“同类工作反复讲”。',
    ],
    prompt: '我现在的重复卡点是：____。请判断它更适合 MCP、Hooks、Skills 还是 Subagents。必须说明为什么、成本是什么、如何验证它真的有用。',
    doNotDo: [
      '不要为了高级感同时启用所有扩展。',
      '不要让扩展绕过权限、验证和人工确认。',
    ],
  },
  'agentic-thinking': {
    preflight: [
      '先把需求从一句愿望改写成任务系统：目标、输入、动作、验证、复盘。',
      '不要急着选工具；先判断这个任务是否需要 Agent，而不只是一次问答。',
    ],
    steps: [
      '本质：Agentic Thinking 不是会写 prompt，而是会设计能行动、能检查、能沉淀的任务系统。',
      '结构：把模糊目标拆成输入、步骤、工具、权限、检查点和完成标准。',
      '练习：选一个重复三次的学习或开发任务，写出它的最小执行闭环。',
      '验证：闭环必须包含一个可观察结果，比如测试通过、文件生成、页面可打开或 PR 描述完整。',
      '沉淀：把跑通的闭环写成规则、模板或 checklist，下次从系统开始，不从聊天开始。',
    ],
    commands: [
      {
        label: '任务系统骨架',
        command: 'Goal:\nInput:\nSteps:\nTools:\nPermission Boundary:\nVerification:\nRetrospective:',
        note: '用于拆解重复任务',
      },
    ],
    differences: [
      'Chatbot 主要产出回答；Agent 系统产出可验证动作。',
      '工具越多不等于越 agentic；闭环越清楚才越可靠。',
    ],
    prompt: '请把这个模糊需求拆成 Agent 任务系统：目标、输入、步骤、需要的工具、权限边界、验证方式、复盘沉淀。不要直接开始执行。',
    doNotDo: [
      '不要把 Agentic Thinking 简化成“多写几个 prompt”。',
      '不要在没有验证点的情况下设计自动化任务。',
    ],
  },
  'information-evidence-chain': {
    preflight: [
      '先把问题写成一个需要做决定的句子，并标出哪些结论会改变代码、配置或账号操作。',
      '把输入分成四类：当前仓库事实、官方产品事实、时间敏感的外部事实、个人/社区经验。不同类别不能互相替代。',
    ],
    steps: [
      '问题定义：写清需要确认的具体断言、适用版本/系统和检查日期。',
      '资料分层：先查仓库 README/脚本和官方文档；只有找不到路径或需要痛点线索时再看社区内容。',
      '证据记录：保存 URL、页面标题、关键段落、检查日期，以及它支持或不支持的结论。',
      '交叉核验：至少用第二个独立来源或本地可复现检查确认高风险结论。',
      '交付标记：把输出分成“已证实事实 / 基于事实的建议 / 推断 / Needs Verification”，再让 AI 进入实现。',
    ],
    commands: [
      {
        label: '证据记录模板',
        command: 'Claim:\nSource:\nChecked at:\nApplies to:\nEvidence:\nWhat it does not prove:\nStatus: Official / Derived / Personal / Needs Verification',
        note: '每个会影响安装、权限、代码或账号的关键结论留一条记录',
      },
    ],
    differences: [
      'Codex CLI 官方文档提供可选的实时 Web Search；启用搜索不等于自动获得可信结论，仍要检查来源和日期。',
      'Claude Code 官方定位强调读取代码库、文件和工具；外部资料接入可以通过官方文档、Web 工具或 MCP，但每种输入都要保留来源边界。',
      '仓库里的 README、脚本和测试是“本项目事实”；它们不能证明第三方产品当前行为。',
    ],
    prompt: '请把这个任务需要的外部信息分成：仓库事实、官方产品事实、时间敏感事实、社区信号和你的推断。对每条关键结论给出来源、检查日期、适用范围和仍然未知的部分。没有证据的地方标记 Needs Verification，不要直接据此修改代码。',
    doNotDo: [
      '不要把搜索结果摘要、模型记忆或单篇社区文章当成产品事实。',
      '不要把“官方页面能打开”当成“当前版本、当前账号和当前网络都适用”。',
      '不要把未验证的经验写进 CLAUDE.md、AGENTS.md 或自动化流程。',
    ],
  },
  'pipeline-design': {
    preflight: [
      '先选一个高频任务，不要从通用大系统开始。',
      'pipeline 的目标是减少重复沟通，把上下文成本花在新问题上。',
    ],
    steps: [
      '本质：pipeline 是过程意识，把每次临场协作变成固定输入、固定步骤和固定输出。',
      '结构：输入标准化、上下文读取、计划、执行、验证、交付、复盘。',
      '练习：把“修一个 bug”画成最小 pipeline，标出人负责什么、AI 负责什么。',
      '验证：每一步都有退出条件；验证失败时回到上一环，而不是继续往后推。',
      '沉淀：把 pipeline 写进规则文件、脚本、Skill 或团队 checklist。',
    ],
    commands: [
      {
        label: '最小 pipeline',
        command: 'Input -> Context -> Plan -> Execute -> Verify -> Deliver -> Retrospective',
        note: '每个箭头都要有退出条件',
      },
    ],
    differences: [
      '开发 pipeline 重验证和 diff。',
      '知识管理 pipeline 重来源、结构和复用。',
    ],
    prompt: '请为这个重复任务设计最小 pipeline。必须列出每一步输入、输出、负责人、失败时回到哪里，以及最终沉淀成什么资产。',
    doNotDo: [
      '不要把 pipeline 写成漂亮流程图却没有验证点。',
      '不要自动化仍然需要人判断的高风险步骤。',
    ],
  },
  'context-memory-architecture': {
    preflight: [
      '先把信息分成稳定事实、临时任务、长期经验和外部来源。',
      '上下文不是越多越好；放错位置会浪费 token，也会污染判断。',
    ],
    steps: [
      '本质：context 是信息组织，memory 是经验沉淀；两者都服务于更低的重复沟通成本。',
      '结构：稳定项目事实进规则文件，临时需求留在会话，长期方法沉淀成模板或 Skill。',
      '练习：列出一个项目中 10 条信息，分别判断放进规则、会话、文档还是不放。',
      '验证：新会话能否靠规则文件理解项目；旧经验是否不会误导新任务。',
      '沉淀：定期清理过期上下文，把有效经验写成可复用资产。',
    ],
    commands: [
      {
        label: '上下文分类表',
        command: 'Stable facts -> rules\nTemporary task -> chat\nRepeated method -> template/skill\nExternal facts -> source list',
        note: '先分类再放置',
      },
    ],
    differences: [
      '项目规则适合稳定事实，不适合临时偏好。',
      '记忆适合沉淀方法，不适合保存未经验证的事实。',
    ],
    prompt: '请帮我整理当前任务上下文。把信息分成：稳定项目事实、临时任务信息、需要查证的外部事实、可沉淀的长期经验。说明每类应放在哪里。',
    doNotDo: [
      '不要把过期版本号、一次性需求写入长期规则。',
      '不要把未验证的社区经验当成项目事实保存。',
    ],
  },
  'automation-boundaries': {
    preflight: [
      '先判断动作是否可逆、是否低风险、是否有明确验证。',
      '自动化边界的核心不是“能不能做”，而是“错了代价多大”。',
    ],
    steps: [
      '本质：自动化收益来自重复和低风险，不来自把控制权全部交出去。',
      '结构：低风险读取和检查可自动化；删除、迁移、部署、支付、推送必须保留人工确认。',
      '练习：把一个工作流里的步骤按可逆性、影响范围和验证难度分级。',
      '验证：自动化后的流程必须能记录执行结果，并在失败时停下。',
      '沉淀：把自动化边界写进规则、approval policy 或 checklist。',
    ],
    commands: [
      {
        label: '风险分级',
        command: 'Low: read/search/status\nMedium: edit/test/install\nHigh: delete/migrate/deploy/push/secrets',
        note: '高风险默认人工确认',
      },
    ],
    differences: [
      '低风险重复任务适合脚本化。',
      '高风险不可逆任务适合人机共同确认。',
    ],
    prompt: '请为这个流程划定自动化边界。按低/中/高风险列出步骤，说明哪些可自动执行，哪些必须人工确认，失败时如何停止。',
    doNotDo: [
      '不要自动执行删除、重置、部署、付款、推送和密钥操作。',
      '不要把“我相信 AI”当成风险评估。',
    ],
  },
  'multi-agent-collaboration': {
    preflight: [
      '先确认任务是否真的可以并行。强耦合任务拆成多 Agent 只会增加整合成本。',
      '每个 Agent 必须有清晰输入、输出和文件边界。',
    ],
    steps: [
      '本质：multi-agent 是分工，不是多开聊天窗口；它用角色边界减少盲区。',
      '结构：探索者读代码，执行者改文件，验证者跑检查，主 Agent 负责整合。',
      '练习：为一个中等复杂任务设计三个角色和交付物，明确谁不能改哪些文件。',
      '验证：主 Agent 必须 review 子任务输出，不能直接相信“完成”。',
      '沉淀：把稳定分工写成任务模板，下一次直接复用。',
    ],
    commands: [
      {
        label: '分工模板',
        command: 'Explorer: answer specific codebase questions\nWorker: edit owned files\nVerifier: run checks and report evidence\nLead: integrate and decide',
        note: '分工必须带交付物',
      },
    ],
    differences: [
      '独立模块适合并行 worker。',
      '同一文件里的复杂改动更适合单 Agent 深做。',
    ],
    prompt: '请为这个任务设计多 Agent 分工。列出每个角色的输入、输出、拥有的文件范围、不能做的事，以及最后由谁整合。',
    doNotDo: [
      '不要让多个 Agent 同时改同一批文件。',
      '不要把最关键、最模糊的判断外包给子 Agent。',
    ],
  },
  'evaluation-loop': {
    preflight: [
      '先定义什么结果算好，不要等 AI 生成后再凭感觉判断。',
      '评估要同时包含自动验证和人工 review。',
    ],
    steps: [
      '本质：evaluation 是反馈设计；没有评估，AI 协作只是连续生成。',
      '结构：每类任务至少有一个机器检查、一个人工标准和一个失败复盘入口。',
      '练习：为一个任务写出通过标准、失败标准和重试策略。',
      '验证：每次失败都能转化成下一轮更好的输入，而不是重复“再试一次”。',
      '沉淀：把评估标准写进 checklist、测试、PR 模板或规则文件。',
    ],
    commands: [
      {
        label: '评估闭环',
        command: 'Metric -> Check -> Failure reason -> Next prompt/rule update',
        note: '失败要能改进流程',
      },
    ],
    differences: [
      '代码任务评估看测试、构建、diff 和 review。',
      '写作任务评估看结构、来源、受众匹配和可执行性。',
    ],
    prompt: '请为这个任务设计评估闭环。列出自动检查、人工 review 标准、失败分类和下一轮如何修正提示或规则。',
    doNotDo: [
      '不要用“看起来不错”作为完成标准。',
      '不要只记录成功，不记录失败原因。',
    ],
  },
  'workflow-retrospective': {
    preflight: [
      '先收集本次任务的输入、有效 prompt、失败点、验证命令和最终 diff。',
      '复盘只沉淀可复用经验，不保存一次性情绪和临时细节。',
    ],
    steps: [
      '本质：retrospective 是方法形成；一次成功只有沉淀后才会降低下次成本。',
      '结构：记录目标、做法、验证、失败、规则更新和下次可复用模板。',
      '练习：把刚完成的一次 AI 协作写成 8 行复盘。',
      '验证：下次同类任务能直接复用这份复盘，而不必重新摸索。',
      '沉淀：稳定经验进规则文件，长流程进 Skill，具体案例进 field note。',
    ],
    commands: [
      {
        label: '8 行复盘模板',
        command: 'Goal:\nInput:\nWhat worked:\nWhat failed:\nVerification:\nDiff/risk:\nRule update:\nNext reuse:',
        note: '任务结束后立刻写',
      },
    ],
    differences: [
      '项目规则沉淀稳定约束。',
      'field note 记录校园场景和个人经验，必须标注验证日期。',
    ],
    prompt: '请根据本次任务生成工作流复盘。只沉淀可复用经验，输出目标、有效做法、失败原因、验证命令、需要更新的规则和下次复用模板。',
    doNotDo: [
      '不要把所有聊天记录原样保存成记忆。',
      '不要把未经验证的一次成功包装成长期规则。',
    ],
  },
};

const WORKFLOW_SUCCESS_CRITERIA: Record<string, string[]> = {
  'project-rules-deep': [
    'Agent 开始任务前能引用项目规则，并按规则选择验证方式。',
    '规则文件能让新会话说清项目目标、可改范围、验证命令和禁止事项。',
  ],
  'permissions-safety': [
    '能指出哪些命令可以自动批准，哪些必须手动确认。',
    '每轮修改后能用 git status 和 git diff 检查是否越界。',
  ],
  'read-codebase': [
    '能说出项目从哪个文件启动、主要模块做什么、如何运行验证。',
    'AI 在修改前能列出仍不确定的信息，而不是凭经验猜。',
  ],
  'plan-before-edit': [
    '能在改动前看到计划、影响范围和验证命令。',
    '计划过大、无验证或目标漂移时，用户能要求缩小范围。',
  ],
  'bug-test-workflow': [
    '原问题消失，验证命令通过，diff 可人工 review。',
    '修复记录包含复现方式、最小改动和回归检查。',
  ],
  'command-system': [
    '能用命令完成查看帮助、管理权限或进入规划流程中的至少一项。',
    '项目常用启动、测试、构建、排障命令有稳定记录。',
  ],
  'github-pr-workflow': [
    'PR 能说明改了什么、如何验证、还有什么风险。',
    'review 或 CI 反馈能被拆成可执行的下一轮修复任务。',
  ],
  'review-ci-loop': [
    '一次失败能被转化成清晰的下一轮修复任务，而不是盲目重试。',
    '修复后能重新运行同一条失败命令并记录结果。',
  ],
  'capability-map': [
    '能为一个真实项目卡点选择 MCP、Hooks、Skills 或 Subagents 中的一个，并说明原因。',
    '引入扩展后能说明它减少了什么重复成本或风险。',
  ],
  'agentic-thinking': [
    '能把一个模糊需求拆成输入、步骤、检查点和完成标准。',
    '能区分一次问答和一个可执行任务系统。',
  ],
  'information-evidence-chain': [
    '能把事实、建议、推断和待核验项分开。',
    '关键结论有来源、检查日期和适用范围。',
  ],
  'pipeline-design': [
    '能画出一个从需求到 PR 的最小 pipeline，并知道每一步谁负责。',
    'pipeline 中每一步都有输入、输出和失败返回点。',
  ],
  'context-memory-architecture': [
    '能说明项目规则、会话上下文、agent memory 分别适合放什么。',
    '能识别并清理过期上下文，避免长期记忆污染新任务。',
  ],
  'automation-boundaries': [
    '能区分低风险重复动作和高风险不可逆动作。',
    '能为自动化流程设置人工确认点和失败停止条件。',
  ],
  'multi-agent-collaboration': [
    '能为一个项目设计主 Agent、代码阅读 Agent、验证 Agent 的分工。',
    '每个角色都有明确输入、输出、文件边界和整合点。',
  ],
  'evaluation-loop': [
    '能为一个任务设计至少一个自动验证点和一个人工 review 点。',
    '每次失败都能更新提示、规则或检查清单。',
  ],
  'workflow-retrospective': [
    '能把一次成功任务转化成下次可复用的流程资产。',
    '复盘结果能明确进入规则文件、模板、Skill 或 field note 中的哪一种。',
  ],
};

const WORKFLOW_LEARNING_REFERENCES: Partial<Record<RouteLevel, string[]>> = {
  project: ['learn-claude-code', 'claude-howto'],
  advanced: ['learn-claude-code', 'claude-mem', 'claude-howto'],
};

const WORKFLOW_OFFICIAL_FALLBACKS: Record<string, string[]> = {
  'github-pr-workflow': ['codex-use-cases', 'claude-code-commands'],
  'workflow-retrospective': ['codex-use-cases', 'claude-code-commands'],
};

export const ROADMAP_NODES: RoadmapNode[] = RAW_ROADMAP_NODES.map((node) => {
  const detail = node.detail ?? WORKFLOW_DETAIL_BY_ID[node.id];
  const extraSourceIds = WORKFLOW_LEARNING_REFERENCES[node.level] ?? [];
  const officialFallbacks = WORKFLOW_OFFICIAL_FALLBACKS[node.id] ?? [];
  const mergedSourceIds = [...node.sourceIds, ...officialFallbacks, ...extraSourceIds].filter((sourceId, index, all) => all.indexOf(sourceId) === index);
  const successCriteria = WORKFLOW_SUCCESS_CRITERIA[node.id] ?? node.successCriteria;

  return {
    ...node,
    detail,
    sourceIds: mergedSourceIds,
    successCriteria,
  };
});

export interface ToolOption {
  id: 'claude-code' | 'codex';
  name: string;
  description: string;
  pros: string[];
  cons: string[];
  recommendation: string;
  scenarios: string[];
  sourceIds: string[];
}

export const TOOLS: ToolOption[] = [
  {
    id: 'claude-code',
    name: 'Claude Code',
    description: '覆盖终端、IDE、桌面和 Web；适合从 Claude/Anthropic 账号体系进入连续项目工作。',
    pros: ['想在 Claude 生态内工作', '需要终端或 IDE 中的项目协作', '希望逐步加入 CLAUDE.md、Skills、MCP 等扩展'],
    cons: ['账号、订阅和网络入口需要单独确认', '权限模式和项目边界仍需人工管理'],
    recommendation: '当 Claude/Anthropic 是你更自然的入口，或你想使用 Claude Code 的项目规则与扩展体系时选它；这不是“已有项目”的唯一答案。',
    scenarios: ['Claude/Anthropic 账号', '终端或 IDE 工作', '需要项目规则与扩展'],
    sourceIds: ['claude-code-overview', 'claude-code-setup'],
  },
  {
    id: 'codex',
    name: 'Codex',
    description: '覆盖本地仓库、终端脚本/CI、review 和可选的实时 Web Search；适合从 OpenAI/ChatGPT 账号体系进入。',
    pros: ['已经熟悉 OpenAI/ChatGPT 账号', '想在 CLI 中读写仓库并运行本地工具', '需要 review、脚本或当前资料检索入口'],
    cons: ['要分清 CLI、云端任务和账号权限', '实时资料仍需检查来源与适用范围'],
    recommendation: '当 OpenAI/ChatGPT 是你更自然的入口，或任务需要 Codex CLI 的本地闭环、review、脚本/CI 或当前资料检索时选它；没有项目也不是必要条件。',
    scenarios: ['OpenAI/ChatGPT 账号', 'CLI / CI / review', '需要当前资料检索'],
    sourceIds: ['codex-overview', 'codex-cli-docs'],
  },
];

export type TroubleshootingCategory =
  | 'all'
  | 'tool-choice'
  | 'network'
  | 'login'
  | 'subscription'
  | 'api-key'
  | 'node-npm'
  | 'terminal'
  | 'permission'
  | 'windows'
  | 'macos'
  | 'workflow';

export interface TroubleshootingItem {
  id: string;
  category: TroubleshootingCategory;
  os: 'all' | 'windows' | 'macos';
  symptom: string;
  cause: string;
  firstActions: string[];
  escalation: 'self-serve' | 'ask-campus-helper' | 'official-support';
  sourceIds: string[];
  sourceType: SourceType;
  lastVerifiedAt: string;
}

export interface TroubleshootingCheck {
  title: string;
  action: string;
  expected: string;
  ifFailed: string;
}

export interface TroubleshootingDetail {
  diagnosticGoal: string;
  evidenceToCollect: string[];
  checks: TroubleshootingCheck[];
  decisionRule: string;
  prevention: string[];
}

export const TROUBLESHOOTING_DATA: TroubleshootingItem[] = [
  {
    id: 'node-not-found',
    category: 'node-npm',
    os: 'all',
    symptom: '终端提示 node、npm 或 npx 不是可识别命令',
    cause: 'Node.js 没有安装成功，或安装路径没有进入当前终端 PATH。',
    firstActions: ['重新打开终端', '运行 `node --version` 和 `npm --version`', '确认 Node.js 使用 LTS 版本'],
    escalation: 'self-serve',
    sourceIds: ['claude-code-setup', 'codex-cli-docs'],
    sourceType: 'Official',
    lastVerifiedAt: '2026-05-04',
  },
  {
    id: 'powershell-script-policy',
    category: 'terminal',
    os: 'windows',
    symptom: 'PowerShell 提示禁止运行脚本或无法加载 .ps1 文件',
    cause: 'Windows PowerShell 执行策略限制了脚本运行。',
    firstActions: ['优先换用 PowerShell 7 或 Windows Terminal', '查看当前执行策略', '确认风险后再调整执行策略'],
    escalation: 'ask-campus-helper',
    sourceIds: ['campus-field-notes'],
    sourceType: 'Personal Note',
    lastVerifiedAt: '2026-05-04',
  },
  {
    id: 'login-loop',
    category: 'login',
    os: 'all',
    symptom: '浏览器完成登录后，终端仍然显示未登录或反复要求登录',
    cause: '本地凭据没有写入、浏览器回跳失败，或终端会话没有刷新。',
    firstActions: ['关闭并重开终端', '确认默认浏览器能打开回调页', '查看官方登录/认证说明'],
    escalation: 'official-support',
    sourceIds: ['claude-code-setup', 'codex-cli-docs'],
    sourceType: 'Official',
    lastVerifiedAt: '2026-05-04',
  },
  {
    id: 'network-timeout',
    category: 'network',
    os: 'all',
    symptom: '请求超时、连接失败、模型不可达，或浏览器能访问但终端不行',
    cause: '浏览器网络、终端网络、npm registry、登录回调和校园网策略是不同层的问题，不能混在一起排查。',
    firstActions: ['先确认浏览器能打开官方文档页面', '再用终端访问同一官方域名做对照', '如果只终端失败，优先检查终端网络设置和学校网络规则'],
    escalation: 'ask-campus-helper',
    sourceIds: ['codex-troubleshooting', 'campus-field-notes'],
    sourceType: 'Personal Note',
    lastVerifiedAt: '2026-05-04',
  },
  {
    id: 'compliance-boundary',
    category: 'network',
    os: 'all',
    symptom: '网络访问受限，不知道下一步该查哪里',
    cause: '公开校内站点只提供可达性诊断和合规处理路径，不提供绕过网络管理的具体做法。',
    firstActions: ['先判断问题发生在浏览器、终端、npm 还是登录回调', '记录当前网络环境和失败现象', '需要跨境联网时遵守所在地法律法规和学校网络管理规定'],
    escalation: 'ask-campus-helper',
    sourceIds: ['campus-field-notes'],
    sourceType: 'Personal Note',
    lastVerifiedAt: '2026-05-04',
  },
  {
    id: 'browser-terminal-split',
    category: 'network',
    os: 'all',
    symptom: '浏览器可以打开官方页面，但 CLI 仍然报网络错误',
    cause: '浏览器和终端可能使用不同的网络环境。AI 编程工具通常运行在终端或本地进程里。',
    firstActions: ['记录浏览器是否能访问官方文档', '记录终端错误原文', '不要直接更换未知来源工具，先定位是终端环境问题还是服务认证问题'],
    escalation: 'self-serve',
    sourceIds: ['campus-field-notes'],
    sourceType: 'Personal Note',
    lastVerifiedAt: '2026-05-04',
  },
  {
    id: 'npm-registry-diagnostic',
    category: 'node-npm',
    os: 'all',
    symptom: 'npm install 很慢、超时或 registry 连接失败',
    cause: 'npm 下载失败不一定是 AI 工具本身问题，可能只是 registry 可达性或校园网限制。',
    firstActions: ['运行 `npm config get registry` 查看当前 registry', '优先使用官方或学校允许的镜像源', '安装失败时保留完整错误日志再排查'],
    escalation: 'self-serve',
    sourceIds: ['campus-field-notes'],
    sourceType: 'Personal Note',
    lastVerifiedAt: '2026-05-04',
  },
  {
    id: 'path-command-not-found',
    category: 'terminal',
    os: 'all',
    symptom: '安装完成后仍提示 claude 或 codex 不是可识别命令',
    cause: '工具安装目录没有进入 PATH，或当前终端还没刷新环境变量。',
    firstActions: ['关闭并重新打开终端', '运行版本命令确认 Node/npm 正常', '查看官方安装文档中的 PATH 说明'],
    escalation: 'self-serve',
    sourceIds: ['claude-code-setup', 'codex-cli-docs'],
    sourceType: 'Official',
    lastVerifiedAt: '2026-05-04',
  },
  {
    id: 'node-version-too-old',
    category: 'node-npm',
    os: 'all',
    symptom: '安装时报 Node 版本过低或依赖无法解析',
    cause: '本机 Node.js 版本不满足 CLI 或依赖要求。',
    firstActions: ['运行 `node --version`', '切换到 LTS 版本', '重新打开终端后再次安装'],
    escalation: 'self-serve',
    sourceIds: ['codex-cli-docs', 'campus-field-notes'],
    sourceType: 'Personal Note',
    lastVerifiedAt: '2026-05-04',
  },
  {
    id: 'macos-shell-profile',
    category: 'terminal',
    os: 'macos',
    symptom: 'macOS 重开终端后命令又找不到',
    cause: 'shell profile 没有正确加载 PATH 或 Node 管理器初始化脚本。',
    firstActions: ['确认当前 shell 是 zsh 还是 bash', '检查 shell profile 是否加载 Node/npm 路径', '重开终端再运行版本命令'],
    escalation: 'ask-campus-helper',
    sourceIds: ['campus-field-notes'],
    sourceType: 'Personal Note',
    lastVerifiedAt: '2026-05-04',
  },
  {
    id: 'macos-permission-denied',
    category: 'permission',
    os: 'macos',
    symptom: 'macOS 安装或运行时报 permission denied',
    cause: '目标目录权限、shell 启动文件权限或安装目录权限不匹配。',
    firstActions: ['不要盲目 sudo', '确认报错路径', '优先按官方安装路径重新检查目录权限'],
    escalation: 'ask-campus-helper',
    sourceIds: ['claude-code-setup', 'campus-field-notes'],
    sourceType: 'Personal Note',
    lastVerifiedAt: '2026-05-04',
  },
  {
    id: 'subscription-not-available',
    category: 'subscription',
    os: 'all',
    symptom: '登录成功但提示没有可用订阅、模型或权限',
    cause: '账号登录成功不代表具备对应工具或模型访问权限。',
    firstActions: ['确认当前登录账号', '查看官方账号/订阅要求', '不要反复重装 CLI'],
    escalation: 'official-support',
    sourceIds: ['claude-code-setup', 'codex-cli-docs'],
    sourceType: 'Official',
    lastVerifiedAt: '2026-05-04',
  },
  {
    id: 'api-key-leak-risk',
    category: 'api-key',
    os: 'all',
    symptom: '不知道密钥应该放哪里，担心泄露',
    cause: '把密钥写入代码、截图、聊天记录或仓库都会造成泄露风险。',
    firstActions: ['排障时只描述错误现象，不提供真实密钥', '使用环境变量或官方推荐认证方式', '泄露后立即撤销并重建密钥'],
    escalation: 'official-support',
    sourceIds: ['codex-cli-docs', 'campus-field-notes'],
    sourceType: 'Official',
    lastVerifiedAt: '2026-05-04',
  },
  {
    id: 'rules-not-applied',
    category: 'permission',
    os: 'all',
    symptom: '已经写了 CLAUDE.md 或 AGENTS.md，但 AI 还是不按规则做',
    cause: '规则文件可能不在项目根目录，内容太空泛，或当前工具没有读取到对应文件。',
    firstActions: ['确认规则文件在项目根目录', '让 AI 先复述它读到的规则', '把规则改成具体命令和边界'],
    escalation: 'self-serve',
    sourceIds: ['claude-code-directory', 'codex-agents-md', 'codex-rules'],
    sourceType: 'Official',
    lastVerifiedAt: '2026-05-04',
  },
  {
    id: 'ai-changes-too-much',
    category: 'workflow',
    os: 'all',
    symptom: 'AI 一次改了太多文件，看不懂 diff',
    cause: '任务边界不清，缺少计划确认和小步验证。',
    firstActions: ['要求 AI 先列计划，不要直接修改', '限制一次只改一个目标', '用 Git diff 人工检查后再继续'],
    escalation: 'self-serve',
    sourceIds: ['codex-agent-approvals-security', 'campus-field-notes'],
    sourceType: 'Personal Note',
    lastVerifiedAt: '2026-05-04',
  },
  {
    id: 'git-not-initialized',
    category: 'workflow',
    os: 'all',
    symptom: '不知道 AI 改了什么，也无法回退',
    cause: '项目没有初始化 Git，或修改前没有干净工作区。',
    firstActions: ['运行 `git status`', '初始化测试仓库或保存当前改动', '让 AI 修改前说明会改哪些文件'],
    escalation: 'self-serve',
    sourceIds: ['campus-field-notes'],
    sourceType: 'Personal Note',
    lastVerifiedAt: '2026-05-04',
  },
  {
    id: 'pr-description-missing',
    category: 'workflow',
    os: 'all',
    symptom: 'PR 不知道怎么写，reviewer 看不懂改动',
    cause: 'AI 生成了代码，但没有把意图、验证和风险整理成审查材料。',
    firstActions: ['让 AI 总结改动范围', '列出验证命令和结果', '写明未解决风险或后续事项'],
    escalation: 'self-serve',
    sourceIds: ['codex-use-cases', 'campus-field-notes'],
    sourceType: 'Personal Note',
    lastVerifiedAt: '2026-05-04',
  },
  {
    id: 'ci-failure-loop',
    category: 'workflow',
    os: 'all',
    symptom: 'CI 或测试失败后不知道该把什么发给 AI',
    cause: '失败日志没有被压缩成可执行的修复输入。',
    firstActions: ['复制失败命令、错误摘要和相关文件名', '要求 AI 先定位原因，不要直接大改', '修复后重新运行同一验证命令'],
    escalation: 'self-serve',
    sourceIds: ['codex-use-cases', 'campus-field-notes'],
    sourceType: 'Personal Note',
    lastVerifiedAt: '2026-05-04',
  },
  {
    id: 'mcp-too-early',
    category: 'workflow',
    os: 'all',
    symptom: '还没跑通第一次任务，就想配置 MCP / Hooks / Skills',
    cause: '过早引入扩展工具会增加变量，反而难以定位基础问题。',
    firstActions: ['先完成入门层首次任务', '再进入项目层扩展工具', '只为明确重复问题引入扩展工具'],
    escalation: 'self-serve',
    sourceIds: ['codex-mcp', 'codex-hooks', 'codex-skills', 'claude-code-features-overview'],
    sourceType: 'Official',
    lastVerifiedAt: '2026-05-04',
  },
  {
    id: 'api-key-confusion',
    category: 'api-key',
    os: 'all',
    symptom: '不知道应该配置密钥、订阅账号，还是直接网页登录',
    cause: '不同工具和不同模式的认证方式不同，不能混用。',
    firstActions: ['先确认你选择的是 Claude Code 还是 Codex', '只按对应官方文档配置认证', '密钥和账号凭据不写进项目代码'],
    escalation: 'self-serve',
    sourceIds: ['claude-code-setup', 'codex-cli-docs'],
    sourceType: 'Official',
    lastVerifiedAt: '2026-05-04',
  },
  {
    id: 'repo-permission-anxiety',
    category: 'permission',
    os: 'all',
    symptom: '担心 AI 改坏课程项目或误删文件',
    cause: '第一次实践不应该直接在重要项目里进行。',
    firstActions: ['创建独立测试目录', '先初始化 Git', '让 AI 在执行前说明计划和验证命令'],
    escalation: 'self-serve',
    sourceIds: ['codex-agents-md', 'campus-field-notes'],
    sourceType: 'Personal Note',
    lastVerifiedAt: '2026-05-04',
  },
];

export const TROUBLESHOOTING_DETAILS: Record<string, TroubleshootingDetail> = {
  'node-not-found': {
    diagnosticGoal: '确认问题是 Node/npm 本身不可用，还是当前终端没有刷新 PATH。',
    evidenceToCollect: ['系统类型和终端名称', '`node --version` 输出', '`npm --version` 输出', '安装后是否重开过终端'],
    checks: [
      { title: '重开终端再测', action: '关闭所有终端窗口，重新打开 PowerShell / Terminal，再运行版本命令。', expected: '能看到类似 `v20.x.x` 和 `10.x.x` 的版本号。', ifFailed: '继续检查 Node 是否安装，以及安装目录是否进入 PATH。' },
      { title: '确认安装来源', action: '打开系统应用列表或包管理器记录，确认安装的是 Node.js LTS。', expected: '能看到 Node.js LTS 已安装。', ifFailed: '回到 Node 官方下载页或学校允许的软件源重新安装 LTS。' },
      { title: '区分 node 和 npm', action: '分别运行 `node --version`、`npm --version`、`npx --version`。', expected: '三条命令都能输出版本。', ifFailed: '只缺 npm/npx 时，优先修 Node 安装完整性；三条都缺时，优先修 PATH。' },
    ],
    decisionRule: '版本命令不稳定前，先不要安装 Claude Code 或 Codex。',
    prevention: ['安装工具前先保存环境检查输出。', '安装后重开终端再继续下一步。'],
  },
  'powershell-script-policy': {
    diagnosticGoal: '确认是 PowerShell 执行策略拦截脚本，而不是命令拼写或文件路径错误。',
    evidenceToCollect: ['完整报错原文', 'PowerShell 版本', '当前执行策略', '触发报错的命令'],
    checks: [
      { title: '确认报错类型', action: '查看报错里是否出现 execution policy、running scripts、.ps1 之类字样。', expected: '报错明确指向脚本执行策略。', ifFailed: '如果是 command not found 或路径不存在，转到终端/PATH 排障。' },
      { title: '查看当前策略', action: '运行 `Get-ExecutionPolicy -List`。', expected: '能看到不同作用域的执行策略。', ifFailed: '复制报错给排障助手，不继续改系统设置。' },
      { title: '换终端验证', action: '优先用 Windows Terminal 或 PowerShell 7 重新执行同一命令。', expected: '同一命令能运行，或报错更明确。', ifFailed: '找懂 Windows 终端的同学一起看策略和命令来源。' },
    ],
    decisionRule: '只有确认脚本来源可信、且知道影响范围时，才调整执行策略。',
    prevention: ['保存官方安装命令来源。', '不在不懂命令作用时运行高权限脚本。'],
  },
  'login-loop': {
    diagnosticGoal: '确认登录卡在浏览器回调、本地凭据写入，还是账号权限。',
    evidenceToCollect: ['工具名称', '登录后浏览器页面提示', '终端最新提示', '是否切换过账号'],
    checks: [
      { title: '重开会话', action: '关闭终端，重新打开项目目录，再运行工具登录状态或启动命令。', expected: '终端能识别已登录状态，或给出新的明确错误。', ifFailed: '继续检查浏览器回调和账号权限。' },
      { title: '确认浏览器回调', action: '登录后观察浏览器是否出现授权成功或回到本地应用的页面。', expected: '浏览器显示成功，终端同步更新。', ifFailed: '换默认浏览器或复制官方登录 URL 手动完成。' },
      { title: '确认账号权限', action: '核对当前网页登录账号是否就是准备使用工具的账号。', expected: '账号、组织或订阅入口一致。', ifFailed: '退出错误账号，按官方认证说明重新登录。' },
    ],
    decisionRule: '浏览器成功不等于 CLI 成功，以终端状态为准。',
    prevention: ['同一轮排障只使用一个账号。', '登录失败时保留终端和浏览器两侧提示。'],
  },
  'network-timeout': {
    diagnosticGoal: '把网络问题拆成浏览器、终端、npm registry、登录回调四个层次。',
    evidenceToCollect: ['当前网络环境', '浏览器访问官方文档结果', '终端报错原文', '失败发生在哪一步'],
    checks: [
      { title: '浏览器基线', action: '用浏览器打开 Claude Code 或 Codex 官方文档。', expected: '官方页面能打开。', ifFailed: '先处理浏览器网络或学校网络访问策略。' },
      { title: '终端对照', action: '在终端运行当前步骤需要的版本、安装或登录命令，并保留完整错误。', expected: '终端能访问对应服务，或报出明确超时/解析错误。', ifFailed: '说明问题可能只发生在终端网络环境。' },
      { title: '分离 npm 问题', action: '如果卡在安装，先运行 `npm config get registry`，再判断是否是 registry 连接失败。', expected: '能区分 npm 下载失败和 AI 服务连接失败。', ifFailed: '转到 npm registry 排障卡。' },
    ],
    decisionRule: '不要把所有“连不上”都归为同一个原因；先定位失败层级。',
    prevention: ['每次只改一个网络变量。', '记录失败发生在浏览器、终端、npm 还是登录回调。'],
  },
  'compliance-boundary': {
    diagnosticGoal: '给出合规的可达性诊断边界，避免把排障写成绕过网络管理教程。',
    evidenceToCollect: ['失败页面或报错原文', '是否在校园网', '失败服务类型', '学校网络规则相关说明'],
    checks: [
      { title: '定位服务类型', action: '判断失败发生在官方文档、npm 下载、账号登录还是模型请求。', expected: '能说出具体卡点。', ifFailed: '先回到网络分层排障。' },
      { title: '记录环境', action: '记录校内网、宿舍网、实验室网或个人热点等环境差异。', expected: '知道是否只在某个环境失败。', ifFailed: '不要继续猜测，换成可验证记录。' },
      { title: '走合规支持', action: '需要外部服务访问时，按学校网络规定、课程要求或官方支持路径处理。', expected: '有明确的处理渠道。', ifFailed: '向课程助教或校内技术同学咨询可允许的方式。' },
    ],
    decisionRule: '本站只做定位和合规路径，不提供绕过网络管理的具体步骤。',
    prevention: ['公开文案避免写具体绕过方案。', '把网络经验标记为 Personal Note 或 Needs Verification。'],
  },
  'browser-terminal-split': {
    diagnosticGoal: '确认浏览器可访问但 CLI 失败时，是否是终端环境没有继承同一网络配置。',
    evidenceToCollect: ['浏览器访问截图或描述', '终端完整报错', '使用的 shell', '是否在 IDE 内置终端运行'],
    checks: [
      { title: '同一网络下对照', action: '保持网络不变，分别在浏览器和终端执行当前步骤。', expected: '能看到两边是否表现不同。', ifFailed: '先固定网络环境，不要同时换网络和工具。' },
      { title: '换终端', action: '从 IDE 内置终端切到系统终端，重新运行同一命令。', expected: '如果系统终端正常，问题多半在 IDE 终端环境。', ifFailed: '继续保留终端错误原文。' },
      { title: '检查环境变量', action: '查看终端里与网络相关的环境变量是否缺失或错误。', expected: '能解释为什么浏览器和终端表现不同。', ifFailed: '找校内同学协助判断终端环境。' },
    ],
    decisionRule: 'AI 编程工具跑在终端或本地进程里，浏览器能打开只能证明一半。',
    prevention: ['优先在同一个终端完成安装、登录和首次任务。', '不要在多个终端混着排障。'],
  },
  'npm-registry-diagnostic': {
    diagnosticGoal: '确认安装失败是否来自 npm registry 可达性，而不是 Claude Code/Codex 本身。',
    evidenceToCollect: ['`npm config get registry` 输出', 'npm install 完整错误', 'Node/npm 版本', '是否只下载某个包失败'],
    checks: [
      { title: '查看 registry', action: '运行 `npm config get registry`。', expected: '输出一个 registry URL。', ifFailed: '先修 npm 命令可用性。' },
      { title: '确认错误类型', action: '查看错误里是否有 timeout、ENOTFOUND、ECONNRESET、403 等字样。', expected: '能区分网络、权限和包不存在。', ifFailed: '保留完整日志，不截断关键行。' },
      { title: '重新运行最小命令', action: '只重试失败的安装命令，不同时更换 Node、registry 和项目目录。', expected: '同一条命令能稳定得到同类错误或成功输出。', ifFailed: '变量太多时回到环境检查页。' },
    ],
    decisionRule: 'npm 下载没通前，继续安装 AI CLI 只会制造更多错误。',
    prevention: ['安装前先跑 Node/npm 版本检查。', '保留 npm 错误日志。'],
  },
  'path-command-not-found': {
    diagnosticGoal: '确认 CLI 已安装但命令不可见时，是安装目录、PATH，还是终端缓存问题。',
    evidenceToCollect: ['安装命令输出', '命令不可识别原文', 'Node/npm 版本', '重开终端后结果'],
    checks: [
      { title: '重开终端', action: '关闭终端后重新打开，再运行对应命令。', expected: '命令可识别或错误变化。', ifFailed: '继续检查安装位置。' },
      { title: '确认安装完成', action: '查看安装命令最后是否成功结束，有没有 permission 或 path 相关错误。', expected: '安装输出没有失败提示。', ifFailed: '回到对应官方安装页重新核对命令。' },
      { title: '确认依赖命令', action: '先运行 Node/npm 版本命令，再运行 AI 工具命令。', expected: '依赖命令正常，AI 工具命令也能进入帮助或登录。', ifFailed: '依赖正常但工具缺失时，重新安装对应 CLI。' },
    ],
    decisionRule: 'PATH 问题要先重开终端，再判断是否安装失败。',
    prevention: ['安装日志不要立刻关闭。', '每次安装后运行一次版本或帮助命令。'],
  },
  'node-version-too-old': {
    diagnosticGoal: '确认报错是否由 Node 版本低于工具要求导致。',
    evidenceToCollect: ['`node --version` 输出', '安装报错中要求的版本', 'Node 安装方式', '是否存在多个 Node 版本'],
    checks: [
      { title: '读取当前版本', action: '运行 `node --version`。', expected: '输出当前 Node 主版本。', ifFailed: '先转到 node-not-found。' },
      { title: '对照报错要求', action: '查找报错中的 required、engine、unsupported 关键字。', expected: '能看到工具或依赖需要的最低版本。', ifFailed: '如果没有版本提示，继续看 npm registry 或权限错误。' },
      { title: '切换后重开终端', action: '安装或切换到 LTS 后，重开终端再运行版本命令。', expected: '版本输出变为新的 LTS。', ifFailed: '可能存在多个 Node 版本管理器冲突。' },
    ],
    decisionRule: '版本不满足时，不要靠反复 npm install 解决。',
    prevention: ['记录当前 Node 版本。', '课程或团队项目统一 Node 主版本。'],
  },
  'macos-shell-profile': {
    diagnosticGoal: '确认 macOS 命令时有时无是否来自 shell profile 没加载。',
    evidenceToCollect: ['当前 shell', '重开终端前后命令结果', 'Node 安装方式', 'profile 文件最近改动'],
    checks: [
      { title: '确认 shell', action: '运行 `echo $SHELL`。', expected: '看到 zsh 或 bash 路径。', ifFailed: '先确认当前终端是否正常执行基础命令。' },
      { title: '重开后对照', action: '重开 Terminal，再运行 `node --version` 和工具命令。', expected: '重开终端后仍能看到版本号或工具帮助输出。', ifFailed: '说明 profile 或 PATH 初始化可能有问题。' },
      { title: '按安装方式检查', action: '根据 Homebrew、nvm 或官方安装方式检查对应初始化语句。', expected: 'profile 中加载了正确路径。', ifFailed: '找熟悉 macOS shell 的同学一起看。' },
    ],
    decisionRule: '重开终端后失效，优先看 shell profile，而不是重装工具。',
    prevention: ['只保留一种主要 Node 管理方式。', '改 profile 前先备份。'],
  },
  'macos-permission-denied': {
    diagnosticGoal: '确认 permission denied 是目录权限、文件执行权限，还是安装路径选择问题。',
    evidenceToCollect: ['完整 permission denied 报错', '报错路径', '执行的命令', '是否使用 sudo'],
    checks: [
      { title: '读报错路径', action: '从报错中找出被拒绝的具体文件或目录。', expected: '能定位到被拒绝访问的具体文件或目录路径。', ifFailed: '复制完整报错，不只复制最后一行。' },
      { title: '避免盲目提权', action: '先判断命令是否真的需要系统级权限。', expected: '优先使用用户目录或官方建议路径。', ifFailed: '停止继续加 sudo，找同学协助。' },
      { title: '重新按官方路径检查', action: '回到官方安装说明，确认安装目录和 shell 配置。', expected: '目录权限和官方路径一致。', ifFailed: '可能需要清理错误安装残留。' },
    ],
    decisionRule: '不知道报错路径含义时，先不要用 sudo 继续试。',
    prevention: ['用户级工具优先安装在用户目录。', '记录每次使用 sudo 的原因。'],
  },
  'subscription-not-available': {
    diagnosticGoal: '确认登录成功后不可用是订阅、组织权限、模型权限还是地区/产品入口限制。',
    evidenceToCollect: ['当前账号', '工具提示原文', '订阅或组织页面状态', '使用的是 Claude Code 还是 Codex'],
    checks: [
      { title: '确认账号一致', action: '浏览器和 CLI 使用同一个账号重新检查。', expected: '账号邮箱或组织一致。', ifFailed: '退出错误账号后重新登录。' },
      { title: '查看官方权限说明', action: '打开对应工具官方认证或订阅说明。', expected: '能确认当前账号是否满足入口要求。', ifFailed: '不要继续重装 CLI。' },
      { title: '区分登录和授权', action: '记录“已登录”和“可使用模型/工具”两个状态。', expected: '知道卡在账号权限，而非安装。', ifFailed: '联系官方支持或组织管理员。' },
    ],
    decisionRule: '账号登录成功不代表产品权限已经开通。',
    prevention: ['安装前确认使用哪类账号。', '团队或课程统一说明账号入口。'],
  },
  'api-key-leak-risk': {
    diagnosticGoal: '确认密钥是否被写入不该出现的位置，并给出止损动作。',
    evidenceToCollect: ['密钥是否完整暴露', '出现位置', '是否进入 Git 历史', '使用的平台'],
    checks: [
      { title: '确认暴露范围', action: '检查密钥是否出现在代码、截图、聊天记录、提交记录或日志里。', expected: '知道密钥是否已经离开本机。', ifFailed: '无法确认时，直接按已经泄露处理。' },
      { title: '立即撤销', action: '如果密钥已暴露，到官方控制台撤销并重建。', expected: '旧密钥失效，新密钥只放在官方建议位置。', ifFailed: '联系官方支持处理账号安全。' },
      { title: '清理项目', action: '从项目文件和提交中移除密钥痕迹，并检查 `.gitignore`。', expected: '仓库不再包含真实密钥。', ifFailed: '找懂 Git 的同学协助清理历史。' },
    ],
    decisionRule: '密钥完整暴露后，撤销比隐藏更重要。',
    prevention: ['排障时只贴错误码和前后文。', '密钥放环境变量或官方认证位置。'],
  },
  'rules-not-applied': {
    diagnosticGoal: '确认规则文件是否在根目录、是否被工具读取、内容是否足够可执行。',
    evidenceToCollect: ['规则文件名和路径', '项目根目录', 'AI 复述的规则内容', '本次任务提示'],
    checks: [
      { title: '确认位置', action: '在项目根目录查看是否存在 CLAUDE.md 或 AGENTS.md。', expected: '规则文件和工具要求匹配。', ifFailed: '把规则文件移到项目根目录。' },
      { title: '要求复述', action: '让 AI 先读取规则并复述目标、可改范围、验证命令。', expected: '复述内容具体且引用当前项目。', ifFailed: '说明工具没读到，或规则太空。' },
      { title: '改成硬约束', action: '把规则写成具体命令、目录和禁止事项。', expected: '下一轮计划会引用这些约束。', ifFailed: '转到项目规则实践项目重写规则。' },
    ],
    decisionRule: '规则能被复述并影响计划，才算生效。',
    prevention: ['规则只写稳定事实。', '每次新任务先让 AI 复述规则。'],
  },
  'ai-changes-too-much': {
    diagnosticGoal: '确认大 diff 来自任务过大、计划缺失，还是权限批准过宽。',
    evidenceToCollect: ['git diff 文件数', '原始任务描述', 'AI 修改前是否给计划', '批准过哪些命令'],
    checks: [
      { title: '看 diff 范围', action: '运行 `git diff --stat` 或查看变更文件列表。', expected: '知道改了多少文件。', ifFailed: '先初始化 Git 或保存当前状态。' },
      { title: '缩小任务', action: '要求 AI 停止继续修改，只说明已改内容和下一步最小修复。', expected: '任务收敛到一个目标。', ifFailed: '回退测试目录或手动选择保留文件。' },
      { title: '恢复计划确认', action: '后续每轮要求先列计划、影响文件和验证命令。', expected: '修改前能审查范围。', ifFailed: '降低自动批准权限。' },
    ],
    decisionRule: '看不懂 diff 时，不继续让 AI 改。',
    prevention: ['一次只给一个目标。', '每轮修改前要求计划和文件范围。'],
  },
  'git-not-initialized': {
    diagnosticGoal: '确认项目是否缺少 Git 基线，导致无法比较和回退。',
    evidenceToCollect: ['`git status` 输出', '是否课程/重要项目', '当前未保存文件', '是否已有远程仓库'],
    checks: [
      { title: '查看状态', action: '运行 `git status`。', expected: '能看到干净工作区、未跟踪文件或不是 Git 仓库。', ifFailed: '如果没有 git 命令，先安装 Git。' },
      { title: '建立练习基线', action: '测试目录可以初始化 Git；重要项目先备份或确认仓库状态。', expected: '修改前有可比较基线。', ifFailed: '不要把第一次实践放进重要项目。' },
      { title: '每轮检查', action: 'AI 修改后运行 `git diff` 或查看变更面板。', expected: '知道改了哪些文件。', ifFailed: '停止继续生成，先恢复可审查状态。' },
    ],
    decisionRule: '没有可回退基线，就不让 AI 大范围改文件。',
    prevention: ['第一次任务用测试目录。', '真实项目修改前保持工作区可审查。'],
  },
  'pr-description-missing': {
    diagnosticGoal: '把 AI 代码产出转成同伴能 review 的变更说明。',
    evidenceToCollect: ['变更文件列表', '验证命令和结果', '未解决问题', '本次任务目标'],
    checks: [
      { title: '提取变更', action: '让 AI 按文件分组总结 diff。', expected: '每条总结能对应具体文件。', ifFailed: '先给它更小的 diff 范围。' },
      { title: '补验证', action: '列出已运行和未运行的验证命令。', expected: 'reviewer 能判断可信度。', ifFailed: '先运行最小验证命令。' },
      { title: '写风险', action: '要求写出风险、未验证项和回滚方式。', expected: 'PR 描述不是只说“完成了”。', ifFailed: '人工补充不确定项。' },
    ],
    decisionRule: '没有验证和风险说明的 PR，不适合作为 AI 协作交付物。',
    prevention: ['每次任务结束时生成 PR 式总结。', '保留验证命令输出。'],
  },
  'ci-failure-loop': {
    diagnosticGoal: '把 CI 失败日志压缩成 AI 能处理的修复输入。',
    evidenceToCollect: ['失败命令', '第一条关键错误', '相关文件名', '最近一次改动'],
    checks: [
      { title: '找第一处错误', action: '从 CI 日志中找到最早的 error，而不是最后的失败总结。', expected: '能定位到具体命令或文件。', ifFailed: '下载完整日志再看。' },
      { title: '给最小上下文', action: '把失败命令、错误摘要、相关文件和最近 diff 给 AI。', expected: 'AI 能先判断原因。', ifFailed: '不要让 AI 直接全仓扫描。' },
      { title: '复跑同一命令', action: '修复后重新运行同一条失败命令。', expected: '同一条失败命令不再出现原来的错误。', ifFailed: '把新错误作为下一轮，而不是扩大任务。' },
    ],
    decisionRule: 'CI 失败要按“同一命令复现/修复/复跑”闭环处理。',
    prevention: ['保留 CI 日志链接。', '每次修复只针对一个失败。'],
  },
  'mcp-too-early': {
    diagnosticGoal: '确认当前卡点是否真的需要 MCP/Hooks/Skills，还是基础链路没跑通。',
    evidenceToCollect: ['是否完成第一次任务', '想配置的扩展名称', '要解决的重复问题', '当前失败步骤'],
    checks: [
      { title: '回到基础链路', action: '确认工具选择、环境检查、登录、测试项目是否都已完成。', expected: '基础链路已经跑通。', ifFailed: '先回入门层，不配置扩展。' },
      { title: '说明扩展目的', action: '写一句话：这个扩展减少什么重复动作或风险。', expected: '能说清扩展要减少的重复动作或风险。', ifFailed: '说明只是为了“高级感”，先不做。' },
      { title: '只加一个变量', action: '一次只配置 MCP、Hooks、Skills 或 Subagents 中的一个。', expected: '出错时能定位是哪个扩展导致。', ifFailed: '撤回最近新增扩展。' },
    ],
    decisionRule: '扩展工具只为明确重复问题服务。',
    prevention: ['先完成项目层任务，再进入能力地图。', '扩展配置写入项目文档。'],
  },
  'api-key-confusion': {
    diagnosticGoal: '区分网页登录、订阅账号、API key 和组织权限，不混用认证路径。',
    evidenceToCollect: ['选择的工具', '使用方式', '账号页面状态', '报错原文'],
    checks: [
      { title: '先选工具', action: '确认本次是 Claude Code 还是 Codex。', expected: '只打开对应官方认证说明。', ifFailed: '回到工具选择页。' },
      { title: '确认模式', action: '判断当前入口要求网页登录、订阅权限还是 API key。', expected: '知道应该配置哪一种认证。', ifFailed: '不要同时尝试多种认证。' },
      { title: '检查保存位置', action: '只按官方说明保存凭据或登录状态。', expected: '项目代码里没有真实凭据。', ifFailed: '按密钥泄露排障处理。' },
    ],
    decisionRule: '认证问题先分工具和模式，再看凭据。',
    prevention: ['一个项目只记录一种主要认证路径。', '排障截图遮挡敏感信息。'],
  },
  'repo-permission-anxiety': {
    diagnosticGoal: '把“怕改坏项目”转化成可回退、可审查、可验证的练习边界。',
    evidenceToCollect: ['项目是否重要', '是否初始化 Git', '当前未提交改动', 'AI 准备修改的文件范围'],
    checks: [
      { title: '换到测试目录', action: '第一次任务放进独立测试目录，不碰课程项目。', expected: '改坏也能删除重来。', ifFailed: '停止当前实践，先建测试目录。' },
      { title: '建立 Git 基线', action: '运行 `git status`，必要时初始化测试仓库。', expected: '修改前状态清楚。', ifFailed: '先解决 Git 或文件备份问题。' },
      { title: '要求计划确认', action: '让 AI 修改前说明目标、文件范围和验证命令。', expected: '你能判断是否允许它继续。', ifFailed: '拒绝本轮修改，缩小任务。' },
    ],
    decisionRule: '能回退、能审查、能验证后，再让 AI 动手。',
    prevention: ['重要项目先备份或提交。', '第一次实践只做小任务。'],
  },
};

export interface PracticeTask {
  id: string;
  title: string;
  description: string;
  projectBrief: string;
  targetUser: string;
  estimatedMinutes: number;
  difficulty: 'Easy' | 'Medium';
  recommendedTool: 'Claude Code' | 'Codex' | 'Either';
  requiredInputs: string[];
  steps: string[];
  deliverables: string[];
  successCriteria: string[];
  detailSteps: {
    title: string;
    purpose: string;
    actions: string[];
    check: string;
  }[];
  reflectionPrompts: string[];
  fallbackIssueIds: string[];
  sourceIds: string[];
  tags: string[];
}

export const PRACTICE_TASKS: PracticeTask[] = [
  {
    id: 'web-tool',
    title: '生成一个网页小工具',
    description: '让 AI 创建一个本地可运行的计时器、Todo 或汇率换算页面。',
    projectBrief: '从零生成一个本地网页小工具，练习“描述目标 -> 让 Agent 建文件 -> 浏览器验收”的最短闭环。',
    targetUser: '想快速看到可视化结果的同学',
    estimatedMinutes: 20,
    difficulty: 'Easy',
    recommendedTool: 'Either',
    requiredInputs: ['一个空目录', '一句清楚的功能描述'],
    steps: ['描述你想要的小工具', '让 AI 创建文件', '在浏览器中打开或启动 dev server', '检查功能是否可用'],
    deliverables: ['一个可打开的 HTML/前端页面', '一段说明 AI 创建了哪些文件的总结', '至少 3 条人工验收记录'],
    successCriteria: ['页面能打开', '核心交互能使用', '你能说清 AI 创建了哪些文件'],
    detailSteps: [
      {
        title: '限定功能',
        purpose: '防止第一次任务膨胀成完整产品。',
        actions: ['只选一个功能：计时器、Todo、单位换算或课程 ddl 提醒。', '写清输入、按钮、输出三个元素。', '要求 AI 先列文件计划，再创建文件。'],
        check: '计划里最多 3 个文件；你能一眼看懂每个文件负责什么。',
      },
      {
        title: '生成并运行',
        purpose: '把结果放进浏览器验证，而不是停在聊天窗口。',
        actions: ['在测试目录启动 Claude Code 或 Codex。', '让 AI 创建最小页面和必要样式。', '按它给出的命令或直接打开 HTML 运行。'],
        check: '浏览器能看到页面，核心按钮或输入框能正常反馈。',
      },
      {
        title: '人工验收',
        purpose: '训练“结果是否可用”而不是“AI 是否写完”。',
        actions: ['至少试 3 组输入。', '记录一个不符合预期的点。', '让 AI 做一次小修，不追加新功能。'],
        check: '修完后原来的 3 组输入仍然可用。',
      },
    ],
    reflectionPrompts: ['这次任务里，AI 最容易脑补的地方是什么？', '下一次你会怎样把需求写得更小？'],
    fallbackIssueIds: ['node-not-found', 'repo-permission-anxiety'],
    sourceIds: ['claude-code-quickstart', 'codex-cli-docs', 'learn-claude-code', 'claude-howto'],
    tags: ['Frontend', 'Fast feedback'],
  },
  {
    id: 'fix-bug',
    title: '修复一个简单 bug',
    description: '准备一段会报错的代码，让 AI 解释原因并给出最小修复。',
    projectBrief: '用一个可复现的小 bug 练习“先解释根因，再做最小修改，最后跑原验证命令”。',
    targetUser: '已有课程代码或练习代码的同学',
    estimatedMinutes: 15,
    difficulty: 'Medium',
    recommendedTool: 'Claude Code',
    requiredInputs: ['一个可复现报错', '报错信息或测试命令'],
    steps: ['粘贴报错和目标', '要求 AI 先解释再修改', '运行原来的验证命令', '确认修复没有引入新问题'],
    deliverables: ['一段 bug 根因说明', '一个最小代码修改', '原报错消失的验证记录'],
    successCriteria: ['原报错消失', '验证命令通过', '你能复述 bug 的根因'],
    detailSteps: [
      {
        title: '固定复现方式',
        purpose: '没有复现，就没有可控修复。',
        actions: ['复制完整报错原文。', '写清运行了哪个命令或点了哪个按钮。', '要求 AI 先复述复现路径，不要立刻改代码。'],
        check: 'AI 能说出“怎么触发这个 bug”，而不是只说可能原因。',
      },
      {
        title: '只改根因',
        purpose: '避免 AI 顺手重构，扩大风险。',
        actions: ['要求 AI 给 2 个可能根因，并选择最可能的一个。', '限制本次只修改相关文件。', '修改前先说明验证命令。'],
        check: 'diff 足够小，修改能对应到根因解释。',
      },
      {
        title: '回到原命令',
        purpose: '用同一把尺子判断修复是否成立。',
        actions: ['重新运行最初失败的命令。', '如果仍失败，把新报错作为下一轮输入。', '如果通过，让 AI 写 3 行修复总结。'],
        check: '原报错消失，且总结能说明改了什么、为什么。',
      },
    ],
    reflectionPrompts: ['这次 bug 是代码问题、环境问题，还是需求没说清？', '有没有一个测试可以防止它下次再出现？'],
    fallbackIssueIds: ['repo-permission-anxiety'],
    sourceIds: ['claude-code-quickstart', 'campus-field-notes', 'learn-claude-code'],
    tags: ['Debugging', 'Course code'],
  },
  {
    id: 'explain-code',
    title: '解释一个陌生代码库',
    description: '让 AI 读取一个小项目，输出目录结构、入口文件和主要逻辑。',
    projectBrief: '把陌生仓库先变成项目地图，再决定读哪个文件、改哪个模块。',
    targetUser: '想读懂 GitHub 项目或课程样例的同学',
    estimatedMinutes: 20,
    difficulty: 'Easy',
    recommendedTool: 'Either',
    requiredInputs: ['一个小型项目目录', '你想弄清楚的问题'],
    steps: ['让 AI 先扫描目录', '要求它找入口文件', '要求输出三层摘要', '追问你不懂的模块'],
    deliverables: ['一张项目入口地图', '主要目录职责说明', '下一步阅读清单'],
    successCriteria: ['能获得入口、模块和运行方式说明', '你能知道下一步该读哪个文件'],
    detailSteps: [
      {
        title: '先问结构',
        purpose: '减少 AI 对项目类型的猜测。',
        actions: ['从项目根目录启动工具。', '要求 AI 只读目录、README 和 manifest 文件。', '让它输出入口文件、运行命令和主要目录。'],
        check: '输出里出现具体文件名，而不是“典型前端项目”这类空话。',
      },
      {
        title: '追问数据流',
        purpose: '从文件清单进入代码理解。',
        actions: ['选择一个用户动作或函数调用。', '让 AI 沿调用链解释 3 到 5 个关键文件。', '要求它标记不确定的地方。'],
        check: '你能说出请求/数据/状态从哪里来，到哪里去。',
      },
      {
        title: '形成阅读路线',
        purpose: '把一次解释转成你自己的学习路径。',
        actions: ['让 AI 给出 5 个最该读的文件。', '每个文件只写一句为什么要读。', '把结果保存到项目笔记或规则草稿。'],
        check: '下一次打开项目时，你知道先读哪个文件。',
      },
    ],
    reflectionPrompts: ['AI 的解释里哪些是确定事实，哪些只是推断？', '如果让新同学接手这个项目，你会把哪些信息写进 README？'],
    fallbackIssueIds: ['repo-permission-anxiety'],
    sourceIds: ['claude-code-quickstart', 'codex-cli-docs', 'learn-claude-code', 'claude-howto'],
    tags: ['Reading code', 'Learning'],
  },
  {
    id: 'add-tests',
    title: '给课程代码加一个测试',
    description: '选择一个小函数，让 AI 先写测试，再按测试修正实现。',
    projectBrief: '用一个小函数练习“先定义行为，再写测试，再修实现”的可验证工作流。',
    targetUser: '会一点编程但不熟悉测试的同学',
    estimatedMinutes: 25,
    difficulty: 'Medium',
    recommendedTool: 'Claude Code',
    requiredInputs: ['一个小函数', '你期望的输入输出'],
    steps: ['说明函数目标', '要求先写一个失败测试', '运行测试', '让 AI 修到通过'],
    deliverables: ['一个测试用例', '一次测试运行记录', '函数行为说明'],
    successCriteria: ['至少一个测试通过', '测试能解释函数预期行为'],
    detailSteps: [
      {
        title: '选小函数',
        purpose: '测试练习要从边界清楚的函数开始。',
        actions: ['选择输入输出明确的函数。', '写 2 个正常输入和 1 个边界输入。', '让 AI 先复述预期行为。'],
        check: '预期行为能用表格或列表说清楚。',
      },
      {
        title: '先写测试',
        purpose: '让测试约束实现，而不是事后装饰。',
        actions: ['要求 AI 根据预期行为写测试。', '先运行测试，确认失败原因合理。', '不要同时修改实现和测试。'],
        check: '失败信息指向当前实现缺口，而不是测试环境错误。',
      },
      {
        title: '修到通过',
        purpose: '完成一个最小闭环。',
        actions: ['让 AI 只修改函数实现。', '重新运行同一条测试命令。', '让 AI 解释测试覆盖了什么、没覆盖什么。'],
        check: '测试通过，并且你知道它没有覆盖哪些情况。',
      },
    ],
    reflectionPrompts: ['测试让需求更清楚了吗？', '你是否发现原函数有隐藏边界条件？'],
    fallbackIssueIds: ['node-not-found'],
    sourceIds: ['claude-code-quickstart', 'campus-field-notes', 'learn-claude-code'],
    tags: ['Testing', 'TDD'],
  },
  {
    id: 'repo-rules',
    title: '把项目说明沉淀成规则文件',
    description: '读取 README、运行脚本和目录结构，生成一版可执行的 CLAUDE.md 或 AGENTS.md。',
    projectBrief: '把一次性的项目解释变成稳定规则，减少后续每次都重新说背景、命令和边界。',
    targetUser: '已经有课程项目或社团项目的同学',
    estimatedMinutes: 30,
    difficulty: 'Medium',
    recommendedTool: 'Either',
    requiredInputs: ['一个已有项目目录', 'README 或 package.json / requirements.txt', '你能确认的验证命令'],
    steps: ['让 AI 只读取项目说明和脚本', '生成规则文件草稿', '人工删掉不确定内容', '让 AI 复述规则并开始下一步任务'],
    deliverables: ['一份 CLAUDE.md 或 AGENTS.md 草稿', '项目验证命令清单', '禁止修改范围'],
    successCriteria: ['规则文件能说明项目目标、验证命令和编辑边界', '新会话能先引用规则再开始计划'],
    detailSteps: [
      {
        title: '收集稳定信息',
        purpose: '规则文件只放长期有效的信息。',
        actions: ['让 AI 读取 README、manifest 文件和脚本列表。', '要求它列出确定信息和不确定信息。', '不确定信息先不要写进规则。'],
        check: '草稿里没有“可能、应该、大概”这类未经确认的项目事实。',
      },
      {
        title: '写成可执行规则',
        purpose: '规则要能影响 Agent 行为。',
        actions: ['补项目目标、常用命令、可改范围、禁止事项。', '每条命令写清什么时候运行。', '要求 AI 不要添加官方文档没有支持的工具事实。'],
        check: '另开一次会话，AI 能复述这些规则。',
      },
      {
        title: '用任务验证规则',
        purpose: '规则不是文档装饰，必须能约束下一次修改。',
        actions: ['给 AI 一个小修改任务。', '要求它先引用规则中的验证命令。', '完成后检查它有没有越界修改。'],
        check: '任务开始前出现规则引用，任务结束后有验证记录。',
      },
    ],
    reflectionPrompts: ['哪些信息应该留在对话里，而不是写进规则？', '这份规则能不能让另一个同学少问 3 个问题？'],
    fallbackIssueIds: ['repo-permission-anxiety'],
    sourceIds: ['claude-code-directory', 'codex-agents-md', 'codex-rules', 'learn-claude-code', 'claude-howto'],
    tags: ['Rules', 'Context'],
  },
  {
    id: 'review-pr',
    title: '做一次 PR 式自查',
    description: '让 AI 把本次改动整理成可审查说明：改了什么、怎么验证、还有什么风险。',
    projectBrief: '即使没有真的提交 PR，也用 PR 的方式训练可审查的 AI 编程习惯。',
    targetUser: '准备参加课程组队项目或开源协作的同学',
    estimatedMinutes: 25,
    difficulty: 'Medium',
    recommendedTool: 'Either',
    requiredInputs: ['一组本地改动', 'git diff 或文件变更摘要', '已运行或准备运行的验证命令'],
    steps: ['让 AI 阅读 diff', '生成变更摘要', '列出验证命令和未验证项', '人工决定是否继续修改'],
    deliverables: ['PR 摘要草稿', '验证记录', '风险和后续事项清单'],
    successCriteria: ['摘要能让同伴知道为什么改', '未验证项被明确写出'],
    detailSteps: [
      {
        title: '先看 diff',
        purpose: '让 AI 基于真实改动说话。',
        actions: ['运行或复制当前 diff 摘要。', '让 AI 按文件分组说明变化。', '要求它不要评价没看到的代码。'],
        check: '摘要里的每个判断都能对应到具体文件或命令。',
      },
      {
        title: '补验证记录',
        purpose: '把“我觉得可以”变成“我验证过什么”。',
        actions: ['列出已经运行的命令。', '列出没有运行但应该运行的命令。', '让 AI 判断最小必要验证。'],
        check: '说明里同时有已验证项和未验证项。',
      },
      {
        title: '形成审查材料',
        purpose: '让队友可以快速判断风险。',
        actions: ['生成 5 行以内摘要。', '写出风险、回滚方式和下一步。', '人工删掉夸张或不确定表述。'],
        check: '另一个同学看摘要后，能知道是否可以继续 review。',
      },
    ],
    reflectionPrompts: ['AI 生成的总结有没有掩盖风险？', '哪些验证应该在修改前就确定？'],
    fallbackIssueIds: ['repo-permission-anxiety'],
    sourceIds: ['claude-code-quickstart', 'codex-cli-docs', 'learn-claude-code'],
    tags: ['Review', 'Git'],
  },
];

export interface RuleTemplate {
  id: string;
  tool: 'Claude Code' | 'Codex';
  filename: 'CLAUDE.md' | 'AGENTS.md';
  purpose: string;
  sections: string[];
  starterText: string;
  sourceIds: string[];
}

export const RULE_TEMPLATES: RuleTemplate[] = [
  {
    id: 'claude-md-minimal',
    tool: 'Claude Code',
    filename: 'CLAUDE.md',
    purpose: '让 Claude Code 读取项目结构、常用命令和不可触碰边界。',
    sections: ['Project overview', 'Run and verify commands', 'Editing boundaries', 'Style rules'],
    starterText: [
      '# Project Guide',
      '',
      '## Goal',
      'Describe what this project is for.',
      '',
      '## Verify',
      '- Run the smallest relevant test before claiming success.',
      '- Do not skip failing commands; explain the failure.',
      '',
      '## Boundaries',
      '- Do not edit secrets or environment files.',
      '- Ask before destructive file operations.',
    ].join('\n'),
    sourceIds: ['claude-code-directory', 'claude-code-permissions'],
  },
  {
    id: 'agents-md-minimal',
    tool: 'Codex',
    filename: 'AGENTS.md',
    purpose: '让 Codex 在每次任务前读取一致的项目规则、验证命令和审批边界。',
    sections: ['Project goal', 'Commands', 'Safety rules', 'Completion criteria'],
    starterText: [
      '# Agent Instructions',
      '',
      '## Project Goal',
      'Describe what this repository is for.',
      '',
      '## Commands',
      '- Use the existing package manager and scripts.',
      '- Run the relevant verification command after edits.',
      '',
      '## Safety',
      '- Do not commit secrets.',
      '- Ask before running destructive commands.',
    ].join('\n'),
    sourceIds: ['codex-agents-md', 'codex-rules', 'codex-agent-approvals-security'],
  },
];

export interface SafetyGuide {
  id: string;
  title: string;
  summary: string;
  beginnerRule: string;
  sourceIds: string[];
}

export const SAFETY_GUIDES: SafetyGuide[] = [
  {
    id: 'permissions-are-boundaries',
    title: '权限不是烦人的弹窗',
    summary: '写入文件、运行命令、访问外部资源都可能改变项目状态。第一次使用时应该保留人工确认。',
    beginnerRule: '新手默认选择需要确认的模式，直到你能判断每个命令会改什么。',
    sourceIds: ['claude-code-permissions', 'codex-agent-approvals-security'],
  },
  {
    id: 'sandbox-is-not-project-rules',
    title: '沙箱和项目规则不是一回事',
    summary: '项目规则告诉 Agent 应该怎么做；沙箱和审批限制 Agent 能实际做什么。',
    beginnerRule: '规则写清方向，权限守住边界，两者都要有。',
    sourceIds: ['claude-code-permissions', 'codex-sandboxing'],
  },
  {
    id: 'first-task-in-test-dir',
    title: '第一次任务不要放在重要课程项目里',
    summary: '先在测试目录中验证工具行为，再把规则和验证流程迁移到真实项目。',
    beginnerRule: '先建测试目录，初始化 Git，再让 Agent 动手。',
    sourceIds: ['campus-field-notes', 'codex-agent-approvals-security'],
  },
];

export interface UpdateRecord {
  id: string;
  title: string;
  sourceId: string;
  detectedAt: string;
  impactArea: 'install' | 'auth' | 'network' | 'permissions' | 'configuration' | 'workflow' | 'troubleshooting';
  impactSummary: string;
  userActionRequired: boolean;
  status: 'candidate' | 'reviewed' | 'published' | 'ignored';
}

export const UPDATES: UpdateRecord[] = [
  {
    id: 'claude-code-changelog-source-added',
    title: 'Claude Code changelog 已加入更新雷达',
    sourceId: 'claude-code-changelog',
    detectedAt: '2026-05-04',
    impactArea: 'workflow',
    impactSummary: '后续 Claude Code 的权限、安装、MCP、hook、Windows/macOS 变化都应从这里进入待审核更新。',
    userActionRequired: false,
    status: 'published',
  },
  {
    id: 'codex-changelog-source-added',
    title: 'Codex changelog 已加入更新雷达',
    sourceId: 'codex-changelog',
    detectedAt: '2026-05-04',
    impactArea: 'workflow',
    impactSummary: '后续 Codex CLI、云端任务和账号相关变化应先进入候选更新，再由人工判断是否影响校内用户。',
    userActionRequired: false,
    status: 'published',
  },
  {
    id: 'codex-troubleshooting-source-added',
    title: 'Codex troubleshooting 已接入排障来源',
    sourceId: 'codex-troubleshooting',
    detectedAt: '2026-05-04',
    impactArea: 'troubleshooting',
    impactSummary: '排障页中的 Codex 相关事实优先引用官方 troubleshooting 页面，社区经验只能作为补充。',
    userActionRequired: false,
    status: 'reviewed',
  },
  {
    id: 'tool-selection-evidence-review',
    title: '工具选择逻辑已从二选一改为任务与控制面判断',
    sourceId: 'codex-cli-docs',
    detectedAt: '2026-08-20',
    impactArea: 'workflow',
    impactSummary: 'Claude Code 和 Codex 的官方文档都支持本地项目工作；“有项目选 Claude、没项目选 Codex”不是可持续事实。页面现在要求用户比较账号入口、客户端、权限、外部资料和验证闭环。',
    userActionRequired: true,
    status: 'published',
  },
  {
    id: 'native-install-prerequisite-review',
    title: '原生安装路径已从环境前置中分离 Node/npm',
    sourceId: 'codex-cli-docs',
    detectedAt: '2026-08-20',
    impactArea: 'install',
    impactSummary: '两款工具官方文档当前都提供原生安装入口；Node/npm 只在 npm 安装或项目本身需要时检查，Git 作为回退与审查能力保留为建议项。',
    userActionRequired: true,
    status: 'published',
  },
  {
    id: 'information-evidence-chain-added',
    title: '新增信息获取与证据链路线',
    sourceId: 'information-verification-framework',
    detectedAt: '2026-08-20',
    impactArea: 'workflow',
    impactSummary: '新增一条工作流层路线，要求把仓库事实、官方文档、时间敏感资料、社区信号和 AI 推断分开，并为高风险结论记录来源、日期和适用范围。',
    userActionRequired: true,
    status: 'published',
  },
  {
    id: 'human-agent-loop-framework-added',
    title: '人机协作闭环加入工作流层',
    sourceId: 'fowler-humans-and-agents',
    detectedAt: '2026-08-21',
    impactArea: 'workflow',
    impactSummary: '新增 why loop / how loop / on the loop 的解释：人保留目标、边界和验收设计权，AI 负责探索、执行和反馈处理；这是一套跨工具的工作方法，不是某个品牌的排名。',
    userActionRequired: true,
    status: 'published',
  },
  {
    id: 'ai-amplifier-system-context-added',
    title: 'AI 工具收益改用“系统放大器”解释',
    sourceId: 'dora-2025-ai-amplifier',
    detectedAt: '2026-08-21',
    impactArea: 'workflow',
    impactSummary: '根据 DORA 2025 的研究表述，AI 更像放大器：上下文、测试、协作和反馈系统本身薄弱时，工具也会放大浪费和风险。页面不再把工具能力写成脱离流程的魔法。',
    userActionRequired: false,
    status: 'published',
  },
  {
    id: 'community-agent-system-signal-added',
    title: '社区观察被标为信号，不再作为产品事实',
    sourceId: 'baoyu-claude-code-secrets',
    detectedAt: '2026-08-21',
    impactArea: 'workflow',
    impactSummary: '吸收社区对“模型 + 工具 + 上下文 + 任务拆分 + 验证”的观察，但保留 Community Signal 标记；涉及具体产品能力时仍回到官方文档核验。',
    userActionRequired: false,
    status: 'published',
  },
];

export function getSource(sourceId: string) {
  return SOURCES.find((source) => source.id === sourceId);
}
