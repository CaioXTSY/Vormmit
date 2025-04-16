import { Configuration, OpenAIApi } from 'openai';

export async function generateCommitMessage(prompt: string, model: string = 'gpt-4o-mini'): Promise<string> {
  try {
    const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
    const openai = new OpenAIApi(configuration);
    const res = await openai.createChatCompletion({
      model,
      messages: [{ role: 'user', content: prompt }]
    });
    const suggestion = res.data.choices[0].message?.content?.trim();
    if (!suggestion) {
      throw new Error('Nenhuma sugestão retornada pela API.');
    }
    return suggestion;
  } catch (err: any) {
    console.error('Erro ao gerar mensagem de commit:', err.message);
    process.exit(1);
  }
}
