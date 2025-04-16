import 'dotenv/config';
import { loadConfig } from './config.js';
import * as gitHelper from './gitHelper.js';
import { generateCommitMessage } from './openaiClient.js';
import { buildPrompt } from './promptBuilder.js';
import { confirmCommit } from './cli.js';
import patterns from './commit_patterns.js';

(async () => {
  const userConfig = loadConfig();
  await gitHelper.autoStage();
  const diff = await gitHelper.getStagedDiff();
  if (!diff.trim()) {
    console.log('⚠️  Nada staged para commitar.');
    process.exit(0);
  }
  const prompt = buildPrompt(diff, userConfig, patterns);
  const suggestion = await generateCommitMessage(prompt, userConfig.model);
  const confirmed = await confirmCommit(suggestion);
  if (confirmed) {
    await gitHelper.commit(suggestion);
    console.log('✅ Commit realizado!');
  } else {
    console.log('❌ Commit cancelado.');
  }
})();