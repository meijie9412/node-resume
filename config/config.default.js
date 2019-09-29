/*
 * @Descripttion: 默认配置文件
 * @Author: meijie
 * @Date: 2019-09-17 13:44:59
 * @LastEditors: meijie
 * @LastEditTime: 2019-09-23 16:11:30
 */
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_19941220abcd';

  // 配置中间件
  config.middleware = [ 'errorHandler', 'authHandler' ];

  config.errorHandler = {
    match: '/resume/api',
  };
  config.authHandler = {
    ignore: '/resume/api/v1/login',
  };
  // 暂时关闭csrf验证
  config.security = {
    csrf: {
      enable: false,
    },
  };
  // session 配置
  config.session = {
    renew: true, // 延长用户 Session 有效期
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
