/*
 * @Descripttion: 鉴权处理中间件
 * @Author: meijie
 * @Date: 2019-09-23 11:14:43
 * @LastEditors: meijie
 * @LastEditTime: 2019-09-25 10:01:48
 */
'use strict';

module.exports = () => {
  return async function authHandler(ctx, next) {
    // 测试环境不做校验
    if (ctx.isAuthenticated() || ctx.app.config.env === 'unittest') {
      // 已登录授权
      await next();
    } else {
      // 触发error事件, 框架会记录一条错误日志
      const message = '鉴权失败,用户未登录';
      ctx.app.emit('error', message, ctx);
      ctx.failRes({
        status: 404,
        body: {
          message,
        },
      });
    }
  };
};
