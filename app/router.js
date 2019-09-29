/*
 * @Descripttion: 路由处理
 * @Author: meijie
 * @Date: 2019-09-19 09:57:13
 * @LastEditors: meijie
 * @LastEditTime: 2019-09-24 11:12:06
 */
'use strict';

module.exports = app => {
  const { router, controller } = app;
  // 登录
  controller.v1.login.create = app.passport.authenticate(
    'local',
    { successRedirect: '/resume/api/v1/login' }
  );
  router.resources('login', '/resume/api/v1/login', controller.v1.login);

  // 用户
  router.resources('user', '/resume/api/v1/user', controller.v1.user);
};
