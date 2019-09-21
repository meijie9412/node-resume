/*
 * @Descripttion: 路由处理
 * @Author: meijie
 * @Date: 2019-09-19 09:57:13
 * @LastEditors: meijie
 * @LastEditTime: 2019-09-20 15:28:20
 */
'use strict';

module.exports = app => {
  const { router, controller } = app;
  // 登录
  router.post('/resume/api/v1/login', app.passport.authenticate('local', { successRedirect: '/resume/api/v1/login/authCallback' })); // 登录鉴权, 使用egg-passport
  router.get('/resume/api/v1/login/authCallback', controller.v1.login.authCallback); // 鉴权后回调
  // 用户
  router.resources('user', '/resume/api/v1/user', controller.v1.user);
};
