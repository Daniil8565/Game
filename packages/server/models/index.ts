import { Sequelize } from 'sequelize'
import config from '../config/config'
import { Comment, initComment } from './comment'
import { initReply, Reply } from './reply'
import { initTopic, Topic } from './topic'

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
initTopic(sequelize)
initComment(sequelize)
initReply(sequelize)

// Связи
Topic.hasMany(Comment, { foreignKey: 'topicId' })
Comment.belongsTo(Topic, { foreignKey: 'topicId' })
Comment.hasMany(Reply, { foreignKey: 'commentId' })
Reply.belongsTo(Comment, { foreignKey: 'commentId' })

export { Comment, Reply, sequelize, Topic }
