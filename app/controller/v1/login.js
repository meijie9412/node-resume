/*
 * @Descripttion: login
 * @Author: meijie
 * @Date: 2019-09-20 13:44:11
 * @LastEditors: meijie
 * @LastEditTime: 2019-09-20 17:15:34
 */

'use strict';

const BaseController = require('../base_controller');

class LoginController extends BaseController {
  async authCallback() {
    /**
     * @msg: 鉴权成功回调
     *
     */
    console.log(this.ctx.isAuthenticated());
    this.ctx.body = {
      err: '00000',
      dat: 'ok',
    };
    this.ctx.status = 200;
  }
}

module.exports = LoginController;
