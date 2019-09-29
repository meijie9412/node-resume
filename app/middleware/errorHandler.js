/*
 * @Descripttion: 统一错误处理中间件
 * @Author: meijie
 * @Date: 2019-09-19 10:24:25
 * @LastEditors: meijie
 * @LastEditTime: 2019-09-25 10:00:23
 */
'use strict';

module.exports = () => {
  return async function errorHandler(ctx, next) {
    try {
      await next();
    } catch (err) {
      // 触发error事件, 框架会记录一条错误日志
      ctx.app.emit('error', err, ctx);
      const status = err.status || 500;
      // 生产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
      const error = status === 500 && ctx.app.config.env === 'prod'
        ? '服务器发生异常, 请稍后重试!'
        : err.message;

      // 从 error 对象上读出各个属性，设置到响应中
      const body = {
        error,
      };
      if (status === 422) {
        // 客户端传递的参数异常
        body.detail = err.errors;
      }
      ctx.failRes({
        status,
        body,
      });
    }
  };
};

