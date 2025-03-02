import { DataTypes, Model, Sequelize } from 'sequelize'

export class Topic extends Model {
  public id!: number
  public title!: string
  public userId!: number
  public fileUrl!: string | null // Новое поле для URL файла
  public createdAt!: Date
}

export function initTopic(sequelize: Sequelize) {
  Topic.init(
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
        // Добавляем поле для хранения URL файла
        type: DataTypes.STRING,
        allowNull: true, // Может быть null, если файла нет
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      tableName: 'topics',
      timestamps: false,
    }
  )
}
