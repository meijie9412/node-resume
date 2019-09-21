/*
 * @Descripttion: 创建测试数据
 * @Author: meijie
 * @Date: 2019-09-19 14:29:09
 * @LastEditors: meijie
 * @LastEditTime: 2019-09-19 14:30:43
 */

'use strict';

const { factory } = require('factory-girl');

module.exports = app => {
  app.factory = factory;

  // 定义user 和默认数据
  factory.define('use', app.model.User, {
    name: factory.sequence('User.name', n => `name_${n}`),
    age: 25,
    head_img: 'head.png',
  });
};
