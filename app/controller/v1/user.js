/*
 * @Descripttion: 用户处理控制器
 * @Author: meijie
 * @Date: 2019-09-19 10:33:10
 * @LastEditors: meijie
 * @LastEditTime: 2019-09-29 13:53:46
 */
'use strict';

const BaseController = require('../base_controller.js');

class UserController extends BaseController {
  async create() {
    /**
     * @msg: 创建用户
     * @param {
     *  name: string,
     *  password: string,
     *  head_img: string
     * }
     */
    const { ctx } = this;
    const user = await ctx.service.user.create(ctx.request.body);
    if (user) {
      ctx.successRes(user);
    }
  }
}

module.exports = UserController;
