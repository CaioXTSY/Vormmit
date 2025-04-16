import simpleGit from 'simple-git';

const git = simpleGit();

export async function autoStage(): Promise<void> {
  try {
    await git.add('.');
  } catch (err: any) {
    console.error('Erro ao adicionar arquivos ao staging:', err.message);
    process.exit(1);
  }
}

export async function getStagedDiff(): Promise<string> {
  try {
    return await git.diff(['--cached']);
  } catch (err: any) {
    console.error('Erro ao obter diff:', err.message);
    process.exit(1);
  }
}

export async function commit(message: string): Promise<void> {
  try {
    await git.commit(message);
  } catch (err: any) {
    console.error('Erro ao realizar commit:', err.message);
    process.exit(1);
  }
}
