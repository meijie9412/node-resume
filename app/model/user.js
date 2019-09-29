/*
 * @Descripttion: user 数据库操作model
 * @Author: meijie
 * @Date: 2019-09-19 11:58:19
 * @LastEditors: meijie
 * @LastEditTime: 2019-09-22 15:51:21
 */
'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    password: STRING(255),
    head_img: STRING(100),
    created_at: DATE,
    updated_at: DATE,
  });
  return User;
};
