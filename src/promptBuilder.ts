export function buildPrompt(diff: string, config: any, patterns: any): string {
  const typeList: string = patterns.types.join(', ');
  const defaultType: string = config.default_type || 'feat';
  const language: string = config.language || 'pt-br';

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
