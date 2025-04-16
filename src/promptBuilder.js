export function buildPrompt(diff, config, patterns) {
  const typeList = patterns.types.join(', ');
  const defaultType = config.default_type || 'feat';
  const language = config.language || 'pt-br';

  return `
Você é um assistente que cria mensagens de commit seguindo o Conventional Commits.
IMPORTANTE: Retorne apenas a mensagem final de commit em texto simples, sem nenhum formato markdown (não inclua "\`\`\`" ou outras marcações).
Tipos válidos: ${typeList}.
Tipo padrão: ${defaultType}.
Idioma: ${language}.

Aqui está o diff:
${diff}
`;
}
