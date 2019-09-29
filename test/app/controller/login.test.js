/*
 * @Descripttion: login 单元测试
 * @Author: meijie
 * @Date: 2019-09-19 21:54:43
 * @LastEditors: meijie
 * @LastEditTime: 2019-09-24 21:25:56
 */
'use strict';
const { user } = require('../../testData');
const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/login.test.js', () => {
  describe('POST /resume/api/v1/login', () => {
  /**
   * @msg: 账号密码登录
   * @param {
   *  name: string,
   *  password: string
   * }
   */
    it('登录', async () => {
      // 模拟 CSRF token
      app.mockCsrf();
      await app.factory.create('user');
      const res = await app.httpRequest().post('/resume/api/v1/login').send(user);
      assert(res.status === 302);
    });
    it('登录回调', async () => {
      // 模拟 CSRF token
      app.mockCsrf();
      const users = { id: 1, ...user };
      app.mockContext({
        user: users,
      });
      const res = await app.httpRequest().get('/resume/api/v1/login');
      assert(res.status === 200);
    });
  });
});
