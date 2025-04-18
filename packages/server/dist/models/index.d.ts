import { Sequelize } from 'sequelize'
declare const sequelize: Sequelize
declare const Topic: import('sequelize').ModelCtor<
  import('sequelize').Model<any, any>
>
declare const Reply: import('sequelize').ModelCtor<
  import('sequelize').Model<any, any>
>
declare const Comment: import('sequelize').ModelCtor<
  import('sequelize').Model<any, any>
>
export { Comment, Reply, sequelize, Topic }
//# sourceMappingURL=index.d.ts.map
