import inquirer from 'inquirer';

export async function confirmCommit(suggestion: string): Promise<boolean> {
  console.log('\n💡 Sugestão:\n', suggestion, '\n');
  const answers = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'ok',
      message: 'Confirmar commit?',
      default: true
    }
  ]);
  return answers.ok;
}
