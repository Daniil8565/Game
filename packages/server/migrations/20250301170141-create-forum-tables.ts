import { DataTypes, QueryInterface } from 'sequelize'

export default {
  // Функция up создаёт таблицы в базе данных
  up: async (queryInterface: QueryInterface) => {
    // Создаём таблицу topics
    await queryInterface.createTable('topics', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true, // Автоувеличение для уникального ID
        primaryKey: true, // Первичный ключ
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false, // Заголовок обязателен
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false, // ID пользователя обязателен
      },
      fileUrl: {
        type: DataTypes.STRING,
        allowNull: true, // URL файла необязателен
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW, // Дата создания по умолчанию
      },
    })

    // Создаём таблицу comments
    await queryInterface.createTable('comments', {
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
        references: { model: 'topics', key: 'id' }, // Связь с таблицей topics
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
    })

    // Создаём таблицу replies
    await queryInterface.createTable('replies', {
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
        references: { model: 'comments', key: 'id' }, // Связь с таблицей comments
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
    })
  },

  // Функция down удаляет таблицы при откате миграции
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('replies')
    await queryInterface.dropTable('comments')
    await queryInterface.dropTable('topics')
  },
}
