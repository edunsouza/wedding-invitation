const { readFileSync } = require('fs');
const crypto = require('crypto');

const loadEnv = () => {
  try {
    const env = readFileSync('./.env', { encoding: 'utf-8' });
    env.split('\n').forEach(line => {
      const [key, value] = line.split('=');
      process.env[key] = value;
    });
  } catch (error) {
    console.error('error loading env:', error);
  }
};

const isLocal = () => process.env.NODE_ENV === 'local';

const md5 = data => crypto.createHash('md5').update(data).digest('hex');

const uuid = () => crypto.randomUUID();

module.exports = {
  loadEnv,
  isLocal,
  md5,
  uuid,
};