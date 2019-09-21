/*
 * @Descripttion: login 单元测试
 * @Author: meijie
 * @Date: 2019-09-19 21:54:43
 * @LastEditors: meijie
 * @LastEditTime: 2019-09-19 22:03:33
 */
'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/login.test.js', () => {
  describe('POST /resume/api/v1/login', () => {
  /**
   * @msg: 账号密码登录
   * @param {
   *  username: string,
   *  password: string
   * }
   */
    it('should work', async () => {
      app.mockCsrf();
      const res = await app.httpRequest().post('/resume/api/v1/login').send({
        username: 'meijie',
        password: '123456',
      });
      assert(res.status === 201);
      assert(res.body.id);
    });
  });
});
