import { DataTypes, Model, Sequelize } from 'sequelize'

export class Comment extends Model {
  public id!: number
  public text!: string
  public topicId!: number
  public userId!: number
  public fileUrl!: string | null // Новое поле для URL файла
  public createdAt!: Date
}

export function initComment(sequelize: Sequelize) {
  Comment.init(
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
        // Добавляем поле для хранения URL файла
        type: DataTypes.STRING,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      tableName: 'comments',
      timestamps: false,
    }
  )
}
