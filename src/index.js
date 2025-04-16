require('dotenv').config();

const configLoader = require('./config');
const gitHelper = require('./gitHelper');
const openaiClient = require('./openaiClient');
const promptBuilder = require('./promptBuilder');
const cli = require('./cli');
const patterns = require('./commit_patterns');

(async () => {
  const userConfig = configLoader.loadConfig();

  const diff = await gitHelper.getStagedDiff();
  if (!diff.trim()) {
    console.log('⚠️  Nada staged para commitar.');
    process.exit(0);
  }

  const prompt = promptBuilder.buildPrompt(diff, userConfig, patterns);

  const suggestion = await openaiClient.generateCommitMessage(prompt, userConfig.model);

  const confirmed = await cli.confirmCommit(suggestion);
  if (confirmed) {
    await gitHelper.commit(suggestion);
    console.log('✅ Commit realizado!');
  } else {
    console.log('❌ Commit cancelado.');
  }
})();
