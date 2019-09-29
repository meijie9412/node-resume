/*
 * @Descripttion: 全局初始化对象
 * @Author: meijie
 * @Date: 2019-09-19 18:00:34
 * @LastEditors: meijie
 * @LastEditTime: 2019-09-23 17:37:10
 */
'use strict';


module.exports = app => {
  // 增加登录鉴权
  require('./app/appinit/passportLocal')(app);
  // 自定义 validator
  // require('./app/appinit/validatorRule')(app);
};
