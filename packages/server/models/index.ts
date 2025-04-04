import { DataTypes, Sequelize } from 'sequelize'

// import * as dotenv from 'dotenv'
// import config from '../config/database'

// dotenv.config()

// const env = process.env.NODE_ENV || 'development'
// const dbConfig = config[env as keyof typeof config]
import * as dotenv from 'dotenv'

dotenv.config()

const dbConfig = {
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

// if (!dbConfig) {
//   throw new Error(`Database configuration for environment "${env}" not found.`)
// }

const sequelize = new Sequelize({
  dialect: dbConfig.production.dialect,
  host: dbConfig.production.host,
  port: dbConfig.production.port,
  username: dbConfig.production.username,
  password: dbConfig.production.password,
  database: dbConfig.production.database,
})

const Topic = sequelize.define(
  'Topic',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fileUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: 'topics',
    timestamps: false,
  }
)
const Reply = sequelize.define(
  'Reply',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    commentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fileUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: 'replies',
    timestamps: false,
  }
)

const Comment = sequelize.define(
  'Comment',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    topicId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fileUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: 'comments',
    timestamps: false,
  }
)

try {
  sequelize.sync({ alter: true })
} catch (error) {
  console.error('Error with database:', error)
}

export { Comment, Reply, sequelize, Topic }
