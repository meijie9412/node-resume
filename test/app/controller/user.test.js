/*
 * @Descripttion: user 单元测试
 * @Author: meijie
 * @Date: 2019-09-19 14:28:43
 * @LastEditors: meijie
 * @LastEditTime: 2019-09-24 21:23:38
 */
'use strict';
const { user } = require('../../testData');
const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/user.test.js', () => {
  describe('POST /resume/api/v1/user', () => {
    /**
     * @msg: 创建用户
     * @param {
     *  age: number,
     *  name: string,
     *  head_img: string,
     * }
     */
    it('新增用户', async () => {
      app.mockCsrf();
      const res = await app.httpRequest().post('/resume/api/v1/user').send(user);
      assert(res.status === 201);
      assert(res.body.id);
    });
  });
});
