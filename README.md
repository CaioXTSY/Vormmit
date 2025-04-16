# 📦 Vormmit

> CLI para gerar mensagens de commit automáticas seguindo Conventional Commits, usando OpenAI.

---

## 📖 Sumário

- [Sobre](#-sobre)  
- [Pré-requisitos](#-pré-requisitos)  
- [Instalação](#-instalação)  
- [Uso](#-uso)  
- [Configuração](#-configuração)  
- [Estrutura de Arquivos](#-estrutura-de-arquivos)  
- [Desenvolvimento](#-desenvolvimento)  
- [Comandos Disponíveis](#-comandos-disponíveis)  
- [Contribuição](#-contribuição)  
- [Licença](#-licença)  

---

## 🔍 Sobre

Vormmit é uma ferramenta de linha de comando que:

1. Adiciona automaticamente (`git add .`) as alterações no repositório.  
2. Gera uma mensagem de commit seguindo o [Conventional Commits](https://www.conventionalcommits.org/) usando a API do OpenAI.  
3. Exibe a sugestão para confirmação.  
4. Executa o commit com a mensagem aprovada.  

---

## ⚙️ Pré-requisitos

- **Node.js** ≥ 16  
- **npm** ≥ 8  
- Conta e chave de API do OpenAI  
- Repositório Git inicializado

---

## 🚀 Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/vormmit.git
   cd vormmit
   ```

2. Instale dependências:
   ```bash
   npm install
   ```

3. Compile o TypeScript:
   ```bash
   npm run build
   ```

4. Instale globalmente (link):
   ```bash
   npm link
   ```

---

## 💻 Uso

No diretório de qualquer repositório Git com alterações pendentes:

```bash
vormmit
```

Fluxo:

1. `vormmit` → adiciona todas as mudanças (`git add .`)  
2. Obtém o diff staged  
3. Gera mensagem de commit via OpenAI  
4. Exibe e pergunta “Confirmar commit?”  
5. Se “sim”, executa `git commit -m "<mensagem>"`

---

## 🛠️ Configuração

Personalize o comportamento editando o arquivo `config.yml` na raiz:

```yaml
# Idioma da mensagem (pt-br ou en)
language: pt-br

# Modelo OpenAI
model: gpt-4o-mini

# Tipo padrão de commit (feat, fix, chore etc.)
default_type: feat
```

Defina sua chave de API em `.env`:

```dotenv
OPENAI_API_KEY=seu_token_aqui
```

---

## 📂 Estrutura de Arquivos

```plaintext
.
├── config.yml          # configurações do CLI
├── .env                # variável OPENAI_API_KEY
├── package.json        # metadados e scripts
├── tsconfig.json       # configuração do compilador TS
├── dist/               # saída compilada (JS)
│   └── *.js
└── src/                # código-fonte em TypeScript
    ├── index.ts        # ponto de entrada (shebang + orquestração)
    ├── cli.ts          # interação com usuário (Inquirer)
    ├── commit_patterns.ts  # tipos válidos de Conventional Commits
    ├── config.ts       # carrega config.yml
    ├── gitHelper.ts    # autoStage, getStagedDiff, commit
    ├── openaiClient.ts # gera mensagem via OpenAI
    └── promptBuilder.ts # constrói prompt para API
```

---

## 🛠️ Desenvolvimento

- **Build:**  
  ```bash
  npm run build
  ```

- **Link local (global):**  
  ```bash
  npm link
  ```

- **Execução sem link:**  
  ```bash
  npm start
  ```

---

## 📋 Comandos Disponíveis

| Comando                  | Descrição                                    |
| ------------------------ | -------------------------------------------- |
| `vormmit`                | Gera e confirma mensagem de commit           |
| `npm run build`          | Compila TS → JS em `dist/`                   |
| `npm start`              | Executa `node ./dist/index.js`               |
| `npm link`               | Registra o CLI globalmente (`vormmit`)       |
| `npm unlink -g vormmit`  | Remove o link global                         |
| `npm uninstall -g vormmit` | Desinstala globalmente                     |

---

## 🤝 Contribuição

1. Fork este repositório  
2. Crie uma branch feature:  
   ```bash
   git checkout -b feature/nome-da-feature
   ```
3. Faça suas alterações e commit:  
   ```bash
   git commit -m "feat: descrição da feature"
   ```
4. Push para sua branch:  
   ```bash
   git push origin feature/nome-da-feature
   ```
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
