import assert from 'node:assert/strict';
import {
  PRACTICE_TASKS,
  PROJECT_CAPABILITIES,
  PROJECT_LEARNING_SCENES,
  ROADMAP_NODES,
  RULE_TEMPLATES,
  SAFETY_GUIDES,
  SOURCES,
  SOURCE_RECORDS,
  SOURCE_SITES,
  TOOLS,
  UPDATES,
} from './constants';

function testToolSelectionScope() {
  assert.deepEqual(
    TOOLS.map((tool) => tool.name),
    ['Claude Code', 'Codex']
  );
}

function testRoadmapContract() {
  assert.equal(ROADMAP_NODES.filter((node) => node.level === 'starter').length, 7);
  assert.ok(ROADMAP_NODES.filter((node) => node.level === 'project').length >= 4);
  assert.ok(ROADMAP_NODES.filter((node) => node.level === 'advanced').length >= 4);

  for (const node of ROADMAP_NODES) {
    assert.ok(node.detail, `${node.id} needs a full detail page`);
    assert.ok(node.successCriteria.length > 0, `${node.id} needs success criteria`);
    assert.ok(node.sourceIds.length > 0, `${node.id} needs sources`);
  }
}

function testLearningReferencesAreSupplemental() {
  const learningReferenceIds = new Set(
    SOURCES.filter((source) => source.sourceType === 'Learning Reference').map((source) => source.id)
  );

  assert.ok(learningReferenceIds.has('learn-claude-code'), 'learn-claude-code should be recorded as a learning reference');
  assert.ok(learningReferenceIds.has('claude-mem'), 'claude-mem should be recorded as a learning reference');
  assert.ok(learningReferenceIds.has('claude-howto'), 'claude-howto should be recorded as a learning reference');

  const sourceTypeById = new Map(SOURCES.map((source) => [source.id, source.sourceType]));

  for (const node of ROADMAP_NODES) {
    const usesLearningReference = node.sourceIds.some((sourceId) => learningReferenceIds.has(sourceId));
    if (!usesLearningReference) continue;

    const hasOfficialSource = node.sourceIds.some((sourceId) => sourceTypeById.get(sourceId) === 'Official');
    assert.ok(hasOfficialSource, `${node.id} uses Learning Reference and must also cite an Official source`);
  }
}

function testProjectCapabilityMapIsClassicAndActionable() {
  assert.deepEqual(
    PROJECT_CAPABILITIES.map((capability) => capability.title),
    ['Task Contract', 'Rules / AGENTS.md', 'Repo Context', 'Skills', 'MCP / Tools', 'Verification']
  );

  const projectNodeIds = new Set(ROADMAP_NODES.filter((node) => node.level === 'project').map((node) => node.id));

  for (const capability of PROJECT_CAPABILITIES) {
    assert.ok(capability.shortLabel.length <= 18, `${capability.id} needs a compact visual label`);
    assert.ok(capability.description.length >= 18, `${capability.id} needs a clear description`);
    assert.ok(capability.userImpact.length >= 18, `${capability.id} needs a user impact statement`);
    assert.ok(projectNodeIds.has(capability.nodeId), `${capability.id} must link to a project roadmap node`);
  }
}

function testProjectDetailsTeachThroughPromptedScenes() {
  const projectNodes = ROADMAP_NODES.filter((node) => node.level === 'project');
  const scenesByNodeId = new Map(PROJECT_LEARNING_SCENES.map((scene) => [scene.nodeId, scene]));

  for (const node of projectNodes) {
    const scene = scenesByNodeId.get(node.id);
    assert.ok(scene, `${node.id} needs a project learning scene`);
    assert.ok(scene!.painScene.includes('AI') || scene!.painScene.includes('Agent'), `${node.id} scene should show AI failure`);
    assert.ok(scene!.prompt.includes('请') || scene!.prompt.includes('先'), `${node.id} needs a usable prompt`);
    assert.ok(scene!.solidify.length >= 12, `${node.id} needs a way to solidify repeated prompts`);
  }
}

function testStarterDetailPlaybooksAreActionable() {
  const starterNodes = ROADMAP_NODES.filter((node) => node.level === 'starter');

  for (const node of starterNodes) {
    assert.ok(node.detail, `${node.id} needs a beginner detail playbook`);
    assert.ok(node.detail.preflight.length >= 2, `${node.id} needs preflight checks`);
    assert.ok(node.detail.steps.length >= 3, `${node.id} needs concrete ordered steps`);
    assert.ok(node.detail.doNotDo.length >= 2, `${node.id} needs safety boundaries`);

    const hasTrackCommands = node.detail.tracks?.some((track) =>
      track.runCommands.some((command) => command.expected.length >= 2) &&
      track.success.length >= 2 &&
      track.ifFailed.length >= 2
    );
    const hasPlaybookFeedback = node.detail.playbook?.blocks.every((block) =>
      block.actions.length >= 2 &&
      block.expected &&
      block.expected.length >= 1 &&
      block.ifFailed &&
      block.ifFailed.length >= 1
    );

    assert.ok(
      hasTrackCommands || hasPlaybookFeedback,
      `${node.id} needs expected feedback and failure guidance in each beginner path`
    );
  }
}

function testProjectAndAdvancedDetailsAreSubstantial() {
  const workflowNodes = ROADMAP_NODES.filter((node) => node.level === 'project' || node.level === 'advanced');

  for (const node of workflowNodes) {
    assert.ok(node.detail, `${node.id} needs detail content`);
    assert.ok(node.detail.preflight.length >= 2, `${node.id} needs preflight framing`);
    assert.ok(node.detail.steps.length >= 4, `${node.id} needs at least four execution steps`);
    assert.ok(node.detail.doNotDo.length >= 2, `${node.id} needs safety boundaries`);
    assert.ok(node.successCriteria.length >= 2, `${node.id} needs at least two success criteria`);
  }
}

function testUserFacingCopyDoesNotExposeInternalPolicyVoice() {
  const visiblePayload = JSON.stringify({
    ROADMAP_NODES,
    TOOLS,
    PRACTICE_TASKS,
    RULE_TEMPLATES,
    SAFETY_GUIDES,
    UPDATES,
  });

  const bannedInternalVoice = [
    '不要推荐',
    '不要让用户',
    '让用户粘贴',
    '用户粘贴',
    '规避网络限制教程',
    'VPN、机场、节点',
    'VPN、节点',
    '代理订阅',
    '不要输入 API Key',
    '不要把 API Key',
    'token 或 API key',
  ];

  for (const phrase of bannedInternalVoice) {
    assert.equal(visiblePayload.includes(phrase), false, `user-facing copy should not expose internal policy voice: ${phrase}`);
  }
}

function testKnownSources() {
  const knownSourceIds = new Set(SOURCES.map((source) => source.id));
  const assertKnownSources = (ids: string[], label: string) => {
    for (const id of ids) {
      assert.ok(knownSourceIds.has(id), `${label} references unknown source ${id}`);
    }
  };

  for (const node of ROADMAP_NODES) assertKnownSources(node.sourceIds, node.id);
  for (const task of PRACTICE_TASKS) assertKnownSources(task.sourceIds, task.id);
  for (const update of UPDATES) assertKnownSources([update.sourceId], update.id);
  for (const template of RULE_TEMPLATES) assertKnownSources(template.sourceIds, template.id);
  for (const guide of SAFETY_GUIDES) assertKnownSources(guide.sourceIds, guide.id);
}

function testSourceAggregationContract() {
  assert.equal(SOURCE_RECORDS.length, SOURCES.length, 'every source needs a review record');
  assert.ok(SOURCE_SITES.length >= 3, 'sources should be grouped into a small number of sites');

  for (const source of SOURCE_RECORDS) {
    assert.ok(source.evidenceUse.length >= 8, `${source.id} needs an evidence use`);
    assert.ok(source.applicableScope.length >= 8, `${source.id} needs an applicable scope`);
    assert.ok(source.reviewStatus, `${source.id} needs a review status`);
    assert.ok(SOURCE_SITES.some((site) => site.ownerIds.includes(source.owner)), `${source.id} needs a site group`);
  }
}

function testInstallationFoundationSources() {
  const sourceIds = new Set(SOURCES.map((source) => source.id));
  assert.ok(sourceIds.has('claude-code-setup'), 'installation gate needs the official Claude Code setup source');
  assert.ok(sourceIds.has('khazix-codex-wechat-guide'), 'installation gate needs the supplied Codex guide');
  assert.ok(sourceIds.has('khazix-workbuddy-wechat-guide'), 'installation gate needs the supplied WorkBuddy guide');
}

function testPracticeProjectsHaveDetails() {
  assert.ok(PRACTICE_TASKS.length >= 6, 'practice layer should include multiple project options');

  for (const task of PRACTICE_TASKS) {
    assert.ok(task.projectBrief.length >= 20, `${task.id} needs a concrete project brief`);
    assert.ok(task.deliverables.length >= 2, `${task.id} needs deliverables`);
    assert.ok(task.successCriteria.length >= 3, `${task.id} needs at least three observable acceptance criteria`);
    assert.ok(task.detailSteps.length >= 3, `${task.id} needs a detail page execution path`);
    assert.ok(task.reflectionPrompts.length >= 2, `${task.id} needs reflection prompts`);

    for (const step of task.detailSteps) {
      assert.ok(step.actions.length >= 2, `${task.id}/${step.title} needs concrete actions`);
      assert.ok(step.check.length >= 10, `${task.id}/${step.title} needs an observable check`);
    }
  }
}

function testMvpRuleAndSafetyCoverage() {
  assert.equal(RULE_TEMPLATES.length, 2);
  assert.deepEqual(
    RULE_TEMPLATES.map((template) => template.filename),
    ['CLAUDE.md', 'AGENTS.md']
  );
  assert.ok(SAFETY_GUIDES.length >= 3);
}

testToolSelectionScope();
testRoadmapContract();
testLearningReferencesAreSupplemental();
testProjectCapabilityMapIsClassicAndActionable();
testProjectDetailsTeachThroughPromptedScenes();
testStarterDetailPlaybooksAreActionable();
testProjectAndAdvancedDetailsAreSubstantial();
testUserFacingCopyDoesNotExposeInternalPolicyVoice();
testKnownSources();
testSourceAggregationContract();
testInstallationFoundationSources();
testPracticeProjectsHaveDetails();
testMvpRuleAndSafetyCoverage();

console.log('content contract checks passed');
