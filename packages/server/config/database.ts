import * as dotenv from 'dotenv'

dotenv.config()

const config = {
  development: {
    username: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'postgres',
    database: process.env.POSTGRES_DB || 'postgres',
    host: '127.0.0.1',
    port: parseInt(process.env.POSTGRES_PORT || '5432'),
    dialect: 'postgres' as const,
  },
  production: {
    username: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'postgres',
    database: process.env.POSTGRES_DB || 'postgres',
    host: process.env.POSTGRES_HOST || 'postgres', // Для контейнера
    port: parseInt(process.env.POSTGRES_PORT || '5432'),
    dialect: 'postgres' as const,
  },
}

export default config
