import { Sequelize } from 'sequelize'
import config from '../config/config'
import { Topic } from './topic'
import { Comment } from './comment'
import { Reply } from './reply'

const env = process.env.NODE_ENV || 'development'
const dbConfig = config[env as keyof typeof config]

const sequelize = new Sequelize({
  dialect: dbConfig.dialect,
  host: dbConfig.host,
  port: dbConfig.port,
  username: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.database,
})

// Инициализация моделей
Topic.init(sequelize)
Comment.init(sequelize)
Reply.init(sequelize)

// Связи
Topic.hasMany(Comment, { foreignKey: 'topicId' })
Comment.belongsTo(Topic, { foreignKey: 'topicId' })
Comment.hasMany(Reply, { foreignKey: 'commentId' })
Reply.belongsTo(Comment, { foreignKey: 'commentId' })

export { sequelize, Topic, Comment, Reply }
