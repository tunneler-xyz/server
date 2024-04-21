import path from 'node:path';
import fs from 'node:fs';
import logUtils from '@utils/log.utils';
const Log = logUtils.processor('config/index.ts');

if (!fs.existsSync(path.join(__dirname, '/../../dynamic/.env'))) {
  Log.error(new Error('Env File not found!'));
  process.exit();
}

process.loadEnvFile(path.join(__dirname, '/../../dynamic/.env'));

export default {
  db: {
    host: process.env.DB_HOST ?? 'localhost',
    port: parseInt(process.env.DB_PORT ?? '3306', 10),
    username: process.env.DB_USER ?? 'root',
    password: process.env.DB_PASS ?? '',
    database: process.env.DB_NAME ?? 'dev_tunnel_server'
  },
  redis: {
    host: process.env.REDIS_HOST ?? 'localhost',
    port: parseInt(process.env.REDIS_PORT ?? '6379', 10),
    username: process.env.REDIS_USER ?? '',
    password: process.env.REDIS_PASS ?? '',
    database: parseInt(process.env.REDIS_DB_NAME ?? '0', 10)
  },
  environment: process.env.ENVIRONMENT
};
