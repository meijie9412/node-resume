/*
 * @Descripttion: 全局初始化对象, 增加登录鉴权
 * @Author: meijie
 * @Date: 2019-09-19 18:00:34
 * @LastEditors: meijie
 * @LastEditTime: 2019-09-21 00:19:38
 */
'use strict';

const LocalStrategy = require('passport-local').Strategy;// 账号密码登录方式

module.exports = app => {
  // 挂载 strategy
  app.passport.use(new LocalStrategy({
    passReqToCallback: true,
  }, (req, username, password, done) => {
    // format user
    const user = {
      provider: 'local',
      username,
      password,
    };
    app.passport.doVerify(req, user, done);
  }));

  // 处理用户信息
  app.passport.verify(async (ctx, user) => {
    console.log(user);
    console.log(ctx);
    return user;
  });
  app.passport.serializeUser(async (ctx, user) => {
    console.log(user);
    console.log(ctx);
    return user.username;
  });
  app.passport.deserializeUser(async (ctx, user) => {
    /**
     * @msg: 反序列化后把用户信息从 session 中取出来，反查数据库拿到完整信息
     */
    return user;
  });
};
