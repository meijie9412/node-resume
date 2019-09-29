/*
 * @Descripttion: login
 * @Author: meijie
 * @Date: 2019-09-20 13:44:11
 * @LastEditors: meijie
 * @LastEditTime: 2019-09-25 10:04:07
 */

'use strict';

const BaseController = require('../base_controller');

class LoginController extends BaseController {
  async index() {
    /**
     * @msg: 鉴权成功回调, 返回用户信息
     *
     */
    const { ctx } = this;
    if (ctx.user.status) {
      ctx.failRes(ctx.user);
    } else {
      ctx.successRes(ctx.user);
    }
  }
}

module.exports = LoginController;
