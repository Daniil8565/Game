import * as dotenv from 'dotenv'

dotenv.config()

const config = {
  development: {
    username: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || '',
    database: process.env.POSTGRES_DB || 'postgres',
    host: 'postgres', // Имя сервиса из docker-compose.yml
    port: Number(process.env.POSTGRES_PORT) || 5432,
    dialect: 'postgres' as const, // Используем строковый литерал как тип
  },
}

export default config
