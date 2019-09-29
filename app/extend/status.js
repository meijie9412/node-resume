/*
 * @Descripttion: 接口返回状态说明, 英文信息转换
 * @Author: meijie
 * @Date: 2019-09-23 18:51:01
 * @LastEditors: meijie
 * @LastEditTime: 2019-09-25 10:06:47
 */
/**
 *1xx：相关信息
  2xx：操作成功
  3xx：重定向
  4xx：客户端错误
  5xx：服务器错误
 */
'use strict';

const successStatus = {
  GET: 200,
  PUT: 200,
  POST: 201,
  DELETE: 204,
};

const failStatus = {
  400: {
    error: 'Bad Request',
    message: '无效请求,请检查重试!',
  },
  401: {
    error: 'Unauthorized',
    message: '授权失败!',
  },
  404: {
    error: 'Not Found',
    message: '请求不可用, 或未授权!',
  },
  422: {
    error: 'Validation Failed',
    message: '请求参数错误!',
  },
  500: {
    message: '服务器异常,请稍后重试!',
  },
};
module.exports = {
  successStatus,
  failStatus,
};
