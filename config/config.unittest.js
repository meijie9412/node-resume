/*
 * @Descripttion: 测试环境配置
 * @Author: meijie
 * @Date: 2019-09-19 14:11:25
 * @LastEditors: meijie
 * @LastEditTime: 2019-09-19 14:13:54
 */
'use strict';

module.exports = () => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // sequelize 配置
  config.sequelize = {
    dialect: 'mysql',
    host: 'localhost',
    port: '3306',
    password: '123456',
    database: 'resume_test',
  };

  return config;
};
