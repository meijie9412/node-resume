/*
 * @Descripttion: 创建测试数据
 * @Author: meijie
 * @Date: 2019-09-19 14:29:09
 * @LastEditors: meijie
 * @LastEditTime: 2019-09-24 16:27:04
 */

'use strict';

const { factory } = require('factory-girl');

module.exports = app => {
  // 可以通过 app.factory 访问 factory 实例
  app.factory = factory;

  // 定义user 和默认数据
  factory.define('user', app.model.User, {
    name: 'meijie',
    password: '123456',
    head_img: 'head.png',
  });
};
