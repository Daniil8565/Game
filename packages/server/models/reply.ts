import { DataTypes, Model, Sequelize } from 'sequelize'

export class Reply extends Model {
  public id!: number
  public text!: string
  public commentId!: number
  public userId!: number
  public fileUrl!: string | null // Новое поле для URL файла
  public createdAt!: Date
}

export function initReply(sequelize: Sequelize) {
  Reply.init(
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
      tableName: 'replies',
      timestamps: false,
    }
  )
}
