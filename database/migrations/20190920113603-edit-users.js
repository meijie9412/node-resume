/*
 * @Descripttion: users 修改 ,删除age ,修改时间字段类型
 * @Author: meijie
 * @Date: 2019-09-20 17:49:39
 * @LastEditors: meijie
 * @LastEditTime: 2019-09-20 19:47:34
 */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { TIMESTAMP } = Sequelize;
    await queryInterface.removeColumn('users', 'age');
    await queryInterface.changeColumn('users', 'created_at', TIMESTAMP);
    await queryInterface.changeColumn('users', 'updated_at', TIMESTAMP);
  },

  down: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE } = Sequelize;
    await queryInterface.addColumn('users', 'age', INTEGER, {
      after: 'name',
    });
    await queryInterface.changeColumn('users', 'created_at', DATE);
    await queryInterface.changeColumn('users', 'updated_at', DATE);
  },
};
