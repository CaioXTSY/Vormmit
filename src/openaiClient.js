const { Configuration, OpenAIApi } = require('openai');

async function generateCommitMessage(prompt, model = 'gpt-4o-mini') {
  try {
    const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
    const openai = new OpenAIApi(configuration);

    const res = await openai.createChatCompletion({
      model,
      messages: [{ role: 'user', content: prompt }]
    });
    return res.data.choices[0].message.content.trim();
  } catch (err) {
    console.error('Erro ao gerar mensagem de commit:', err.message);
    process.exit(1);
  }
}

module.exports = { generateCommitMessage };
