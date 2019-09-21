/*
 * @Descripttion: 用户处理控制器
 * @Author: meijie
 * @Date: 2019-09-19 10:33:10
 * @LastEditors: meijie
 * @LastEditTime: 2019-09-19 22:36:43
 */
'use strict';

const BaseController = require('../base_controller.js');

class UserController extends BaseController {
  async create() {
    /**
     * @msg: 创建用户
     * @param {
     *  name: string,
     *  age: number,
     *  head_img: string
     * }
     */
    const { ctx } = this;
    let { name, age, head_img } = ctx.request.body;
    head_img = head_img || 'head.png';
    const user = await ctx.model.User.create({ name, age, head_img });
    ctx.status = 201;
    ctx.body = user;

  }
}

module.exports = UserController;
