import inquirer from 'inquirer';

export async function confirmCommit(suggestion) {
  console.log('\n💡 Sugestão:\n', suggestion, '\n');
  const { ok } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'ok',
      message: 'Confirmar commit?',
      default: true,
    }
  ]);
  return ok;
}
