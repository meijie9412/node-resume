/*
 * @Descripttion: 请求上下文扩展
 * @Author: meijie
 * @Date: 2019-09-23 22:36:12
 * @LastEditors: meijie
 * @LastEditTime: 2019-09-25 10:17:35
 */
'use strict';
const { successStatus, failStatus } = require('./status');
const SUCCESS_STATUS = Symbol('context#successStatus');
const FAIL_STATUS = Symbol('context#failStatus');

module.exports = {
  get successStatus() {
    // 成功状态
    if (!this[SUCCESS_STATUS]) {
      this[SUCCESS_STATUS] = successStatus;
    }
    return this[SUCCESS_STATUS];
  },
  get failStatus() {
    // 失败状态
    if (!this[FAIL_STATUS]) {
      this[FAIL_STATUS] = failStatus;
    }
    return this[FAIL_STATUS];
  },
  successRes(res) {
  /**
   * @msg: 请求成功响应
   * @param res: any // 返回参数
   */
    try {
      this.status = this.successStatus[this.method] || 200;
      this.body = res;
    } catch (err) {
      this.status = 500;
      this.body = { error: err, message: '服务器异常' };
    }
  },
  failRes(res) {
    /**
     * @msg: 请求失败响应
     * @param {
     *  status: Number,
     *  body:{
     *    error: String
     *    message: String,
     *    details: Array
     *  }
     * }
     */
    try {
      this.status = res.status || 500;
      if (!res.body.message) {
        const failStatus = this.failStatus[this.status] || { message: '服务器异常' };
        res.body.message = failStatus.message;
      }
      this.body = res;
    } catch (err) {
      this.status = 500;
      this.body = { error: err, message: '服务器异常' };
    }
  },
};
