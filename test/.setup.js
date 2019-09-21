/*
 * @Descripttion: 测试完后清理数据
 * @Author: meijie
 * @Date: 2019-09-19 15:07:44
 * @LastEditors: meijie
 * @LastEditTime: 2019-09-19 16:54:46
 */
'use static';

const { app } = require('egg-mock/bootstrap');
const factories = require('./factories');

before(() => factories(app));
afterEach(async () => {
  // clear database after each test case
  await Promise.all([
    app.model.User.destroy({ truncate: true, force: true }),
  ]);
});