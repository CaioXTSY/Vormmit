const simpleGit = require('simple-git');
const git = simpleGit();

async function autoStage() {
  try {
    await git.add('.');
  } catch (err) {
    console.error('Erro ao adicionar arquivos ao staging:', err.message);
    process.exit(1);
  }
}

async function getStagedDiff() {
  try {
    return await git.diff(['--cached']);
  } catch (err) {
    console.error('Erro ao obter diff:', err.message);
    process.exit(1);
  }
}

async function commit(message) {
  try {
    await git.commit(message);
  } catch (err) {
    console.error('Erro ao realizar commit:', err.message);
    process.exit(1);
  }
}

module.exports = { autoStage, getStagedDiff, commit };
