import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function loadConfig(): any {
  try {
    const configPath = path.resolve(__dirname, '..', 'config.yml');
    const configFile = fs.readFileSync(configPath, 'utf8');
    const config = yaml.load(configFile);
    return config;
  } catch (err: any) {
    console.error('Erro ao carregar o config.yml:', err.message);
    process.exit(1);
  }
}
