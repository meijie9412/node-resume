'use strict';

const { Controller } = require('egg');
class BaseController extends Controller {
  success(data) {
    this.ctx.status = 200;
    this.ctx.body = {
      code: 200,
      data,
    };
  }
  fail(data) {
    this.ctx.status = data.code || 400;
    this.ctx.body = data;
  }
}
module.exports = BaseController;
