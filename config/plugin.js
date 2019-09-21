/*
 * @Descripttion: 插件配置
 * @Author: meijie
 * @Date: 2019-09-18 17:23:46
 * @LastEditors: meijie
 * @LastEditTime: 2019-09-19 17:32:50
 */
'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  // 数据库操作
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  // 数据校验
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  // 登录鉴权
  passport: {
    enable: true,
    package: 'egg-passport',
  },
};
