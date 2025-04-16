const inquirer = require('inquirer');

async function confirmCommit(suggestion) {
  console.log('\n💡 Sugestão:\n', suggestion, '\n');
  const { ok } = await inquirer.prompt([{
    type: 'confirm',
    name: 'ok',
    message: 'Confirmar commit?',
    default: true
  }]);
  return ok;
}

module.exports = { confirmCommit };
