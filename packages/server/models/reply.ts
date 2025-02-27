import { DataTypes, Model } from 'sequelize'

export class Reply extends Model {
  public id!: number
  public text!: string
  public commentId!: number
  public userId!: number
  public createdAt!: Date
}

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
