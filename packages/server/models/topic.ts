import { DataTypes, Model } from 'sequelize'

export class Topic extends Model {
  public id!: number
  public title!: string
  public userId!: number
  public createdAt!: Date
}

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
