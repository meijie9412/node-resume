/*
 * @Descripttion: Controller 基类
 * @Author: meijie
 * @Date: 2019-09-18 17:57:54
 * @LastEditors: meijie
 * @LastEditTime: 2019-09-25 09:48:55
 */
'use strict';

const { Controller } = require('egg');
class BaseController extends Controller {
  // success(data) {
  //   /**
  //    * @msg: 成功返回
  //    * @param {
  //    *  status: String,
  //    *  body: any
  //    * }
  //    */
  //   const { ctx } = this;
  //   ctx.status = ctx.successStatus[ctx.method] || 200;
  //   ctx.body = data.body;
  // }
  // fail(data) {
  //   /**
  //    * @msg: 错误返回
  //    * @param {
  //     *  status: String,
  //     *  body: {
  //     *   error: String,
  //     *   detail?: object|array|string
  //     * }
  //     */
  //   const { ctx } = this;
  //   ctx.status = data.status || 400;
  //   const failStatus = ctx.failStatus[ctx.status] || { message: '' };
  //   data.body.message = data.body.message || failStatus.message;
  //   ctx.body = data.body;
  // }
}
module.exports = BaseController;
