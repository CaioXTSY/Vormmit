const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

function loadConfig() {
  try {
    const configPath = path.resolve(__dirname, '..', 'config.yml');
    const configFile = fs.readFileSync(configPath, 'utf8');
    const config = yaml.load(configFile);
    return config;
  } catch (err) {
    console.error('Erro ao carregar o config.yml:', err.message);
    process.exit(1);
  }
}

module.exports = { loadConfig };
