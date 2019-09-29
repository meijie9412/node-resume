/*
 * @Descripttion: 用户
 * @Author: meijie
 * @Date: 2019-09-26 09:53:56
 * @LastEditors: meijie
 * @LastEditTime: 2019-09-29 13:51:58
 */
'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async find(user) {
  /**
   * @msg: 查找用户
   * @param {field:value}
   */
    if (typeof user !== 'object') {
      return '参数格式错误';
    }
    const { ctx } = this;
    const findUser = await ctx.model.User.findOne({ where: user });
    return findUser;
  }
  async create(user) {
    /**
    * @msg: 创建用户
    * @param {
    *  name: string,
    *  password: string,
    *  head_img: string
    * }
    */
    const { ctx } = this;
    // 必须字段校验
    ctx.validate({
      name: 'string',
      password: 'string',
      head_img: { type: 'string', required: false },
    }, user);
    let { name: names, password, head_img } = ctx.request.body;
    // 查找用户是否已存在
    const findUser = await this.find({ name: names });
    if (findUser !== null) {
      // 当前用户已存在
      ctx.failRes({
        status: 422,
        body: { message: '当前用户已存在' },
      });
      return false;
    }
    // 检查头像
    head_img = head_img || 'head.png';
    // 创建用户
    const createUser = await ctx.model.User.create({ names, password, head_img });
    if (createUser === null) {
      ctx.failRes({
        status: 500,
        body: { message: '创建失败' },
      });
      return false;
    }
    return createUser;
  }
}
module.exports = UserService;
