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
    title: '架构层',
    subtitle: '沉淀可复用流程',
    description: '把重复任务做成 pipeline、自动化检查和多 Agent 分工，而不是每次重新问一遍。',
    fitSignals: ['重复做同类任务', '想自动化项目流程', '要设计多 Agent 分工'],
  },
];

export interface Source {
  id: string;
  title: string;
  url: string;
  sourceType: SourceType;
  owner: 'Anthropic' | 'OpenAI' | 'GitHub' | 'Community' | 'Personal';
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
    title: 'Codex Overview',
    url: 'https://developers.openai.com/codex/',
    sourceType: 'Official',
    owner: 'OpenAI',
    topicTags: ['codex', 'overview'],
    lastCheckedAt: '2026-05-04',
  },
  {
    id: 'codex-cli-docs',
    title: 'Codex CLI Docs',
    url: 'https://developers.openai.com/codex/cli',
    sourceType: 'Official',
    owner: 'OpenAI',
    topicTags: ['codex', 'setup'],
    lastCheckedAt: '2026-05-04',
  },
  {
    id: 'codex-troubleshooting',
    title: 'Codex Troubleshooting',
    url: 'https://developers.openai.com/codex/troubleshooting',
    sourceType: 'Official',
    owner: 'OpenAI',
    topicTags: ['codex', 'troubleshooting'],
    lastCheckedAt: '2026-05-04',
  },
  {
    id: 'codex-changelog',
    title: 'Codex Changelog',
    url: 'https://developers.openai.com/codex/changelog',
    sourceType: 'Official',
    owner: 'OpenAI',
    topicTags: ['codex', 'updates'],
    lastCheckedAt: '2026-05-04',
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
    title: 'Codex Use Cases',
    url: 'https://developers.openai.com/codex/use-cases',
    sourceType: 'Official',
    owner: 'OpenAI',
    topicTags: ['codex', 'workflow', 'review', 'automation'],
    lastCheckedAt: '2026-05-04',
  },
  {
    id: 'claude-code-hooks',
    title: 'Claude Code Hooks',
    url: 'https://code.claude.com/docs/en/hooks',
    sourceType: 'Official',
    owner: 'Anthropic',
    topicTags: ['claude-code', 'hooks'],
    lastCheckedAt: '2026-05-04',
  },
  {
    id: 'claude-code-features-overview',
    title: 'Claude Code Features Overview',
    url: 'https://code.claude.com/docs/en/features-overview',
    sourceType: 'Official',
    owner: 'Anthropic',
    topicTags: ['claude-code', 'mcp', 'skills', 'subagents'],
    lastCheckedAt: '2026-05-04',
  },
  {
    id: 'campus-field-notes',
    title: 'Campus Field Notes',
    url: '#',
    sourceType: 'Personal Note',
    owner: 'Personal',
    topicTags: ['campus', 'workflow'],
    lastCheckedAt: '2026-05-04',
  },
  {
    id: 'node-download',
    title: 'Node.js Download',
    url: 'https://nodejs.org/en/download',
    sourceType: 'Official',
    owner: 'Community',
    topicTags: ['node', 'setup'],
    lastCheckedAt: '2026-05-04',
  },
  {
    id: 'npm-cli-versions',
    title: 'npm CLI Versions',
    url: 'https://docs.npmjs.com/about-npm-versions/',
    sourceType: 'Official',
    owner: 'Community',
    topicTags: ['npm', 'setup'],
    lastCheckedAt: '2026-05-04',
  },
  {
    id: 'npm-package-latest',
    title: 'npm Package Latest Tag',
    url: 'https://www.npmjs.com/package/npm',
    sourceType: 'Official',
    owner: 'Community',
    topicTags: ['npm', 'version'],
    lastCheckedAt: '2026-05-04',
  },
  {
    id: 'git-windows-install',
    title: 'Git for Windows Install',
    url: 'https://git-scm.com/install/windows.html',
    sourceType: 'Official',
    owner: 'GitHub',
    topicTags: ['git', 'setup', 'windows'],
    lastCheckedAt: '2026-05-04',
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

export const ROADMAP_NODES: RoadmapNode[] = [
  {
    id: 'select-tool',
    level: 'starter',
    title: '选择工具',
    description: '先按手里有没有项目目录做选择。没有项目目录选 Codex；有项目目录选 Claude Code。',
    userGoal: '在 1 分钟内选定一个工具，并进入安装验证。',
    nextStepId: 'check-env',
    tasks: ['回答使用场景', '得到推荐工具'],
    successCriteria: ['能说清自己首选 Claude Code 或 Codex，以及下一步为什么是安装验证。'],
    commonPitfalls: 0,
    sourceIds: ['claude-code-overview', 'codex-overview'],
    route: '/tools',
    stuckCategory: 'tool-choice',
    detail: {
      preflight: ['先不要安装任何工具。先判断你这次是“想试一次 AI 编程”，还是“已经有一个项目要让 AI 改”。', '打开文件管理器或 Finder，看你手上有没有一个项目文件夹。项目文件夹通常包含 README、package.json、requirements.txt、src 目录或 .git 目录。'],
      steps: ['打开文件管理器或 Finder。', '找到你准备让 AI 处理的文件夹；如果没有，就停在“没有项目文件夹”。', '有项目文件夹：本次选 Claude Code。没有项目文件夹：本次选 Codex。', '选完后不要继续刷测评，直接进入“检查电脑环境”。'],
      playbook: {
        title: '用 60 秒选定本次工具',
        badge: 'tool choice',
        blocks: [
          {
            title: '判断你有没有项目目录',
            actions: ['Windows：按 `Win + E` 打开文件资源管理器。macOS：点 Dock 里的 Finder。', '找到你准备用 AI 处理的文件夹。', '看这个文件夹里有没有 README、src、package.json、requirements.txt 或 .git。'],
            expected: ['看到这些文件或目录：按“已有项目”处理。', '没看到这些内容，或者只是想先跑通一次：按“没有项目”处理。'],
            ifFailed: ['找不到项目目录：不要继续找，直接选 Codex。', '不确定是不是项目：如果里面只有一个零散 `.py` / `.js` 文件，先选 Codex。'],
          },
          {
            title: '按结果进入下一步',
            actions: ['没有项目：点击 Codex 方向的入口。', '已有课程项目、练习仓库或 GitHub 项目：点击 Claude Code 方向的入口。', '这一步只选一个工具，不要同时装两个。'],
            expected: ['你能说出一句话：这次我选 Claude Code / Codex，因为我有 / 没有项目目录。', '下一步进入“检查电脑环境”，不是继续比较工具。'],
            ifFailed: ['还在纠结：默认选 Codex，先跑通一次。', '已经明确要改一个本地项目：选 Claude Code，不要拖延。'],
          },
        ],
      },
      differences: ['Claude Code：更适合在项目目录里连续读、改、测。', 'Codex：更适合从 OpenAI / ChatGPT 账号体系开始。'],
      prompt: '我是一名学生，想用 AI 编程工具完成一次小项目。请根据我的背景帮我选择 Claude Code 或 Codex，并告诉我下一步该检查什么。',
      doNotDo: ['不要把工具选择变成拖延开始的理由。', '不要仅凭社区测评决定长期工具。'],
    },
  },
  {
    id: 'check-env',
    level: 'starter',
    title: '检查电脑环境',
    description: '先证明这台电脑会用终端、能运行 Node、npm、Git。三项没过，不安装 AI 工具。',
    userGoal: '跑完 4 条检查命令，判断能不能进入安装。 ',
    nextStepId: 'install-tool',
    tasks: ['选择 Windows/macOS', '检查终端', '检查 Node.js 与 Git'],
    successCriteria: ['看到 4 个结果：Node 版本号、npm 版本号、Git 版本号、npm registry 查询结果。缺任何一个，都先排障。'],
    commonPitfalls: 3,
    sourceIds: ['node-download', 'npm-cli-versions', 'npm-package-latest', 'git-windows-install', 'claude-code-setup', 'codex-cli-docs'],
    route: '/setup',
    stuckCategory: 'terminal',
    detail: {
      preflight: ['你已经选定本次工具。还没选工具就回到上一步。', '这一步不安装 Claude Code，也不安装 Codex。只确认终端、Node、npm、Git 和 npm 查询能力可用。'],
      steps: ['按你的系统打开终端。Windows 用 PowerShell，macOS 用 Terminal。', '复制第一段命令，粘贴到终端，按回车。', '确认 Node、npm、Git 三行都有版本号。', '复制第二段命令，确认 npm 能查到 registry 和版本号。', '任何一条失败，都停在这里排障，不进入安装工具。'],
      commands: [
        {
          label: 'Windows 环境检查',
          command: 'node --version\nnpm --version\ngit --version',
          note: 'PowerShell：逐行输出 v24.x、11.x、git version 2.x 即可继续',
        },
        {
          label: 'macOS 环境检查',
          command: 'node --version\nnpm --version\ngit --version',
          note: 'Terminal：逐行输出 v24.x、11.x、git version 2.x 即可继续',
        },
        {
          label: 'npm registry 检查',
          command: 'npm config get registry\nnpm view npm version',
          note: '第一行应是 registry 地址，第二行应输出 npm 最新版本号',
        },
      ],
      tracks: [
        {
          id: 'windows',
          title: 'Windows',
          openTerminal: ['按键盘左下角 `Win` 键。', '输入 `PowerShell`。', '点开 `Windows PowerShell`。先不要用管理员模式。', '看到蓝色或黑色终端窗口后，把光标放在最后一行。'],
          runCommands: [
            {
              label: '第一段：检查 Node、npm、Git 是否存在',
              command: 'node --version\nnpm --version\ngit --version',
              expected: ['第一行应该是 Node 版本，例如 `v20.x.x`、`v22.x.x` 或更高。', '第二行应该是 npm 版本，例如 `10.x.x` 或 `11.x.x`。', '第三行应该是 Git 版本，例如 `git version 2.x.x.windows.x`。'],
            },
            {
              label: '第二段：检查 npm 能不能联网查询',
              command: 'npm config get registry\nnpm view npm version',
              expected: ['第一行应该是 registry 地址，例如 `https://registry.npmjs.org/`。', '第二行应该是一个 npm 版本号，例如 `10.x.x` 或 `11.x.x`。'],
            },
          ],
          success: ['`node --version` 有输出。', '`npm --version` 有输出。', '`git --version` 有输出。', '`npm view npm version` 有输出。满足这四条，进入“安装工具”。'],
          ifFailed: ['看到 `node 不是可识别命令`：先安装 Node.js LTS，安装后关闭 PowerShell 重新打开。', '看到 `npm 不是可识别命令`：Node.js 没装好，先修 Node，不要单独装 npm。', '看到 `git 不是可识别命令`：先安装 Git for Windows，安装后重开终端。', '`npm view npm version` 卡住、timeout 或 ECONNRESET：进入排障页搜索 `npm registry`。'],
        },
        {
          id: 'macos',
          title: 'macOS',
          openTerminal: ['按 `Command + Space` 打开 Spotlight。', '输入 `Terminal`。', '回车打开终端。', '看到以 `%` 或 `$` 结尾的命令行后，把光标放在最后一行。'],
          runCommands: [
            {
              label: '第一段：检查 Node、npm、Git 是否存在',
              command: 'node --version\nnpm --version\ngit --version',
              expected: ['第一行应该是 Node 版本，例如 `v20.x.x`、`v22.x.x` 或更高。', '第二行应该是 npm 版本，例如 `10.x.x` 或 `11.x.x`。', '第三行应该是 Git 版本，例如 `git version 2.x.x`。'],
            },
            {
              label: '第二段：检查 npm 能不能联网查询',
              command: 'npm config get registry\nnpm view npm version',
              expected: ['第一行应该是 registry 地址，例如 `https://registry.npmjs.org/`。', '第二行应该是一个 npm 版本号，例如 `10.x.x` 或 `11.x.x`。'],
            },
          ],
          success: ['`node --version` 有输出。', '`npm --version` 有输出。', '`git --version` 有输出。', '`npm view npm version` 有输出。满足这四条，进入“安装工具”。'],
          ifFailed: ['看到 `node: command not found`：先安装 Node.js LTS，安装后重开 Terminal。', '看到 `npm: command not found`：Node.js 没装好，先修 Node，不要单独装 npm。', '看到 `git: command not found`：按系统弹窗安装 Command Line Tools，或安装 Git。', '`npm view npm version` 卡住、timeout 或 ECONNRESET：进入排障页搜索 `npm registry`。'],
        },
      ],
      differences: ['Windows 重点看 `not recognized`。出现这个，说明命令不存在或 PATH 没配好。', 'macOS 重点看 `command not found`。出现这个，说明命令不存在或 shell 没加载。'],
      doNotDo: ['不要看到 Node、npm、Git 任意一个失败还继续装 Claude Code / Codex。', '不要把“浏览器能打开网页”当成“终端环境没问题”。'],
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
      preflight: ['上一页 4 条检查必须都通过：Node、npm、Git、npm registry。缺一条就不要安装。', '本次只安装一个工具：Claude Code 或 Codex。不要同时安装两个，排障会变复杂。'],
      steps: ['点击右侧官方来源，打开对应安装文档。', '在官方页面找到与你系统匹配的安装方式。', '复制官方页面里的安装命令，粘贴到刚才的终端窗口，按回车。', '安装结束后关闭终端，重新打开一次。', '运行版本检查命令。看到版本号才算安装完成。'],
      playbook: {
        title: '从官方页面复制安装命令，再用版本号验收',
        badge: 'install',
        blocks: [
          {
            title: '打开与你工具对应的官方安装页',
            actions: ['Claude Code 用户：点击右侧 `Claude Code Setup`。', 'Codex 用户：点击右侧 `Codex CLI Docs`。', '在官方页面确认系统要求、账号要求和安装方式。'],
            expected: ['浏览器打开的是 Anthropic 或 OpenAI 官方页面。', '你复制的安装命令来自官方页面，不来自视频评论区或旧博客。'],
            ifFailed: ['官方页面打不开：先进入“网络可达性与合规连接”。', '看不懂官方页面：先只找 install / setup / CLI 相关小节，不要复制整段说明文字。'],
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
      differences: ['Claude Code：安装方式以 Anthropic setup 页面为准。', 'Codex：安装、运行、升级以 OpenAI Codex CLI 文档为准。'],
      doNotDo: ['不要从第三方教程复制过期安装命令。', '不要把 API key 写入项目文件。'],
    },
  },
  {
    id: 'auth',
    level: 'starter',
    title: '登录与授权',
    description: '登录后回到终端确认状态。浏览器登录成功，不代表 CLI 已经拿到凭据。',
    userGoal: '让工具识别当前账号，并能进入下一步任务。',
    nextStepId: 'config-network',
    tasks: ['完成账号登录', '确认授权范围'],
    successCriteria: ['工具能识别当前账号，并能在测试目录启动一次安全任务。'],
    commonPitfalls: 2,
    sourceIds: ['claude-code-setup', 'codex-cli-docs'],
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
            ifFailed: ['提示命令不存在：回到“安装工具”查版本号。', '提示网络或连接失败：进入“网络可达性与合规连接”。'],
          },
          {
            title: '浏览器完成后回到终端看结果',
            actions: ['按终端提示打开浏览器。', '完成网页登录、授权或账号确认。', '不要只看浏览器成功页，必须切回终端看状态。'],
            expected: ['终端不再反复要求登录。', '终端进入可输入任务、选择模型、确认权限或继续下一步的状态。'],
            ifFailed: ['浏览器成功但终端仍未登录：关闭终端，重新打开后再运行工具。', '反复跳登录：记录浏览器页面和终端错误，进入排障页搜索“登录”。', '提示无订阅、无模型或无权限：进入订阅/API 排障，不要重装 CLI。'],
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
      differences: ['Claude Code：按 Anthropic / Claude 账号体系处理。', 'Codex：按 OpenAI / Codex CLI 文档处理。'],
      doNotDo: ['不要把登录失败直接归因于工具坏了。', '不要把账号、API Key 和订阅状态混为一谈。'],
    },
  },
  {
    id: 'config-network',
    level: 'starter',
    title: '网络可达性与合规连接',
    description: '把网络问题拆开测：浏览器、终端、npm、登录回调。不要把所有失败都叫“网络不行”。',
    userGoal: '定位是哪一层不可达，并选择合规处理方式。',
    nextStepId: 'create-project',
    tasks: ['检查浏览器可达性', '检查终端可达性', '区分 npm/登录/API 问题'],
    successCriteria: ['能判断当前问题属于浏览器访问、终端访问、npm registry、登录回调或校园网策略中的哪一类。'],
    commonPitfalls: 4,
    sourceIds: ['codex-troubleshooting', 'campus-field-notes'],
    route: '/troubleshooting',
    stuckCategory: 'network',
    detail: {
      preflight: ['你已经遇到访问、安装、登录或 npm 查询问题。没有问题就不要停在这里。', '先记录当前网络：校园网、宿舍网、手机热点或家庭网络。后面排障要用。'],
      steps: ['先用浏览器打开官方文档，看网页是否能打开。', '再在终端运行 npm 检查，看命令行是否能联网。', '比较两边结果：浏览器能开但终端失败，优先排终端/npm。', '登录页能打开但回不到终端，按登录回调问题处理。', '不要在本站寻找 VPN、节点或规避网络限制教程。'],
      playbook: {
        title: '把网络问题拆成浏览器、终端、npm、登录回调',
        badge: 'network',
        blocks: [
          {
            title: '先测浏览器',
            actions: ['复制右侧官方来源里的 Claude Code 或 Codex 文档链接。', '粘贴到浏览器地址栏，按回车。', '记录当前网络环境：校园网、宿舍网、手机热点或家庭网络。'],
            expected: ['官方文档能打开：说明浏览器访问至少可用。', '官方文档打不开：说明浏览器层也有问题，先不要怪 CLI。'],
            ifFailed: ['网页打不开：确认当前网络是否允许访问该服务，遵守学校网络管理规定。', '不要在本站寻找 VPN、节点、机场或规避网络限制教程。'],
          },
          {
            title: '再测终端和 npm',
            actions: ['打开 PowerShell 或 Terminal。', '复制下面两条命令，粘贴后按回车。', '把输出结果保留下来，排障时看第一行 registry 和第二行版本号。'],
            command: 'npm config get registry\nnpm view npm version',
            expected: ['第一行输出 registry 地址。', '第二行输出 npm 版本号。'],
            ifFailed: ['浏览器能开但 npm 超时：这是终端/npm 层问题，不等于 AI 工具坏了。', '看到 timeout、ECONNRESET、ENOTFOUND：进入排障页搜索 `npm registry` 或 `网络`。'],
          },
        ],
      },
      commands: [
        {
          label: 'npm 联网检查',
          command: 'npm view npm version',
          note: '能输出版本号说明 npm 查询可用',
        },
        {
          label: '查看 npm registry',
          command: 'npm config get registry',
          note: '记录输出，排障时要用',
        },
      ],
      differences: ['浏览器可达不等于 CLI 可达。', 'npm 下载失败不等于模型服务不可用。'],
      doNotDo: ['不要推荐 VPN、机场、节点或规避网络限制教程。', '不要让用户粘贴代理订阅、token 或 API key。'],
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
    sourceIds: ['claude-code-features-overview', 'codex-agent-approvals-security'],
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
    sourceIds: ['claude-code-hooks', 'codex-hooks', 'campus-field-notes'],
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
    sourceIds: ['claude-code-subagents', 'claude-code-directory', 'codex-agents-md'],
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
    description: '适合在一个项目目录里连续读代码、改文件、跑验证。',
    pros: ['要处理多文件改动', '要让 AI 先读项目再计划', '要跟踪官方 changelog'],
    cons: ['登录、网络、订阅任一异常都会卡住', '第一次使用前要先守住项目边界'],
    recommendation: '如果你的目标是改一个已有项目，先选 Claude Code。装完后从测试目录开始，不直接碰课程项目。',
    scenarios: ['已有项目要改', '愿意用终端', '需要多文件任务'],
    sourceIds: ['claude-code-overview', 'claude-code-setup'],
  },
  {
    id: 'codex',
    name: 'Codex',
    description: '适合从 OpenAI / ChatGPT 账号体系进入 CLI 编程任务。',
    pros: ['已经熟悉 ChatGPT 账号', '想先跑通一个小任务', '后续可能接 OpenAI 生态'],
    cons: ['要分清 CLI、云端任务和账号权限', '更新信息要主动看官方 changelog'],
    recommendation: '如果你还没有真实项目，只想先完成第一次 AI 编程任务，先选 Codex。跑通后再决定是否换工具。',
    scenarios: ['熟悉 ChatGPT', '先做小任务', '关注 OpenAI 生态'],
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
    symptom: '不知道能不能在教程里写“挂梯子”或具体代理方案',
    cause: '公开校内站点涉及合规风险，不应提供规避网络限制的工具、节点、协议或操作教程。',
    firstActions: ['把页面命名为“网络可达性与合规连接”', '只提供诊断方法和合规替代路径', '需要跨境联网时遵守所在地法律法规和学校网络管理规定'],
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
    symptom: '不知道 API Key 应该放哪里，担心泄露',
    cause: '把 API Key 写入代码、截图、聊天记录或仓库都会造成泄露风险。',
    firstActions: ['不要把 API Key 粘贴给排障助手', '使用环境变量或官方推荐认证方式', '泄露后立即撤销并重建 key'],
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
    symptom: '不知道应该填 API Key、订阅账号，还是直接网页登录',
    cause: '不同工具和不同模式的认证方式不同，不能混用。',
    firstActions: ['先确认你选择的是 Claude Code 还是 Codex', '只按对应官方文档配置认证', '不要把 API Key 写进项目代码'],
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

export interface PracticeTask {
  id: string;
  title: string;
  description: string;
  targetUser: string;
  estimatedMinutes: number;
  difficulty: 'Easy' | 'Medium';
  recommendedTool: 'Claude Code' | 'Codex' | 'Either';
  requiredInputs: string[];
  steps: string[];
  successCriteria: string[];
  fallbackIssueIds: string[];
  sourceIds: string[];
  tags: string[];
}

export const PRACTICE_TASKS: PracticeTask[] = [
  {
    id: 'web-tool',
    title: '生成一个网页小工具',
    description: '让 AI 创建一个本地可运行的计时器、Todo 或汇率换算页面。',
    targetUser: '想快速看到可视化结果的同学',
    estimatedMinutes: 20,
    difficulty: 'Easy',
    recommendedTool: 'Either',
    requiredInputs: ['一个空目录', '一句清楚的功能描述'],
    steps: ['描述你想要的小工具', '让 AI 创建文件', '在浏览器中打开或启动 dev server', '检查功能是否可用'],
    successCriteria: ['页面能打开', '核心交互能使用', '你能说清 AI 创建了哪些文件'],
    fallbackIssueIds: ['node-not-found', 'repo-permission-anxiety'],
    sourceIds: ['claude-code-quickstart', 'codex-cli-docs'],
    tags: ['Frontend', 'Fast feedback'],
  },
  {
    id: 'fix-bug',
    title: '修复一个简单 bug',
    description: '准备一段会报错的代码，让 AI 解释原因并给出最小修复。',
    targetUser: '已有课程代码或练习代码的同学',
    estimatedMinutes: 15,
    difficulty: 'Medium',
    recommendedTool: 'Claude Code',
    requiredInputs: ['一个可复现报错', '报错信息或测试命令'],
    steps: ['粘贴报错和目标', '要求 AI 先解释再修改', '运行原来的验证命令', '确认修复没有引入新问题'],
    successCriteria: ['原报错消失', '验证命令通过', '你能复述 bug 的根因'],
    fallbackIssueIds: ['repo-permission-anxiety'],
    sourceIds: ['claude-code-quickstart', 'campus-field-notes'],
    tags: ['Debugging', 'Course code'],
  },
  {
    id: 'explain-code',
    title: '解释一个陌生代码库',
    description: '让 AI 读取一个小项目，输出目录结构、入口文件和主要逻辑。',
    targetUser: '想读懂 GitHub 项目或课程样例的同学',
    estimatedMinutes: 20,
    difficulty: 'Easy',
    recommendedTool: 'Either',
    requiredInputs: ['一个小型项目目录', '你想弄清楚的问题'],
    steps: ['让 AI 先扫描目录', '要求它找入口文件', '要求输出三层摘要', '追问你不懂的模块'],
    successCriteria: ['能获得入口、模块和运行方式说明', '你能知道下一步该读哪个文件'],
    fallbackIssueIds: ['repo-permission-anxiety'],
    sourceIds: ['claude-code-quickstart', 'codex-cli-docs'],
    tags: ['Reading code', 'Learning'],
  },
  {
    id: 'add-tests',
    title: '给课程代码加一个测试',
    description: '选择一个小函数，让 AI 先写测试，再按测试修正实现。',
    targetUser: '会一点编程但不熟悉测试的同学',
    estimatedMinutes: 25,
    difficulty: 'Medium',
    recommendedTool: 'Claude Code',
    requiredInputs: ['一个小函数', '你期望的输入输出'],
    steps: ['说明函数目标', '要求先写一个失败测试', '运行测试', '让 AI 修到通过'],
    successCriteria: ['至少一个测试通过', '测试能解释函数预期行为'],
    fallbackIssueIds: ['node-not-found'],
    sourceIds: ['campus-field-notes'],
    tags: ['Testing', 'TDD'],
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
];

export function getSource(sourceId: string) {
  return SOURCES.find((source) => source.id === sourceId);
}
