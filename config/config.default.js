/*
 * @Descripttion: 默认配置文件
 * @Author: meijie
 * @Date: 2019-09-17 13:44:59
 * @LastEditors: meijie
 * @LastEditTime: 2019-09-20 10:37:58
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

  // add your middleware config here
  config.middleware = [ 'errorHandler' ];

  config.errorHandler = {
    match: '/resume/api',
  };
  // 关闭csrf验证
  config.security = {
    csrf: {
      enable: false,
    },
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
