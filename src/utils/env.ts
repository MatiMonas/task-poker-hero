import dotenv from 'dotenv';
dotenv.config();

const requiredVariables = [
  'DISCORD_BOT_TOKEN',
  'MONGO_USER',
  'MONGO_PASSWORD',
  'MONGO_HOST',
  'MONGO_PORT',
  'MONGO_DB',
  'BASE_URL',
] as const;

type Env = {
  [key in typeof requiredVariables[number]]: string;
} & {
  PORT: number;
  DISCORD_GUILD_TESTING_ID: string;
  NODE_ENV: string;
};

export const env: Env = {} as Env;

for (const variable of requiredVariables) {
  const value = process.env[variable];
  if (!value) {
    console.error(`[error] No ${variable} enviroment variable in .env file`);
    process.exit(1);
  }
  env[variable] = value;
}

env.PORT = Number(process.env.PORT) || 8080;
env.DISCORD_GUILD_TESTING_ID = process.env.DISCORD_GUILD_TESTING_ID || '';
env.NODE_ENV = process.env.NODE_ENV ?? 'development';
export default env;
