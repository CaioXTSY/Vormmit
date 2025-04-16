function buildPrompt(diff, config, patterns) {
    const typeList = patterns.types.join(', ');
    const defaultType = config.default_type || 'feat';
    const language = config.language || 'pt-br';
  
    return `
  Você é um assistente que cria mensagens de commit seguindo o Conventional Commits.
  Tipos válidos: ${typeList}.
  Tipo padrão: ${defaultType}.
  Idioma: ${language}.
  
  Aqui está o diff:
  ${diff}
  `;
  }
  
  module.exports = { buildPrompt };
  