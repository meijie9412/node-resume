/*
 * @Descripttion: users 修改 ,添加password
 * @Author: meijie
 * @Date: 2019-09-20 17:49:39
 * @LastEditors: meijie
 * @LastEditTime: 2019-09-20 19:55:55
 */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { STRING } = Sequelize;
    await queryInterface.addColumn('users', 'password', STRING, {
      after: 'name',
    });
  },

  down: async (queryInterface, Sequelize) => {
    console.log(Sequelize);
    await queryInterface.removeColumn('users', 'password');
  },
};
