/*
 * @Descripttion: users 创建
 * @Author: meijie
 * @Date: 2019-09-20 17:43:38
 * @LastEditors: meijie
 * @LastEditTime: 2019-09-20 17:49:37
 */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('users', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(30),
      age: INTEGER,
      head_img: STRING(100),
      created_at: DATE,
      updated_at: DATE,
    });
  },
  down: async queryInterface => {
    await queryInterface.dropTable('users');
  },
};
