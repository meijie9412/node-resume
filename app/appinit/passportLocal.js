/*
 * @Descripttion: 登录鉴权, 账号密码登录
 * @Author: meijie
 * @Date: 2019-09-21 17:07:50
 * @LastEditors: meijie
 * @LastEditTime: 2019-09-24 22:44:52
 */
'use strict';

const querystring = require('querystring'); // 序列化
const LocalStrategy = require('passport-local').Strategy;

module.exports = app => {
  // 挂载 strategy
  app.passport.use(new LocalStrategy({
    usernameField: 'name',
    passReqToCallback: true,
  }, (req, name, password, done) => {
    // format user
    const user = {
      provider: 'local',
      name,
      password,
    };
    app.passport.doVerify(req, user, done);
  }));
  app.passport.verify(async (ctx, user) => {
    /**
     * @msg: 检查用户
     */
    // 检验参数
    ctx.validate({ name: 'string', password: 'string' }, user);
    // 数据库查找当前登录用户
    const findUser = await ctx.model.User.findOne({ where: { name: user.name } });
    if (findUser === null) {
      // 当前用户不存在
      return { status: 422, body: { message: '当前用户不存在' } };
    }
    if (findUser.password !== user.password) {
      // 密码不正确
      return { status: 422, body: { message: '密码不正确' } };
    }
    return findUser;
  });
  app.passport.serializeUser(async (ctx, user) => {
    /**
     * @msg: 将用户信息序列化后存进 session 里面，一般需要精简，只保存个别字段
     */
    if (!user.id) {
      return user;
    }
    const sessionUser = querystring.stringify({ userId: user.id });
    return sessionUser;
  });
  app.passport.deserializeUser(async (ctx, user) => {
    /**
     * @msg: 反序列化后把用户信息从 session 中取出来，反查数据库拿到完整信息
     */
    if (typeof user !== 'string') {
      return user;
    }
    user = querystring.parse(user);
    const findUser = await ctx.model.User.findByPk(user.userId);
    if (findUser === null) {
      return { status: 500, body: { message: '服务器异常,请稍后重试!' } };
    }
    return findUser;
  });
};
