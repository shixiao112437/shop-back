/* eslint valid-jsdoc: "off" */

'use strict';

const params = require("../app/middleware/params");

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1611816598532_3967';

  // add your middleware config here
  config.middleware = ['params'];

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    credentials: true,
  };
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    // 允许访问接口的白名单
    domainWhiteList: ['http://localhost:3000'],
  };
  config.mongoose = {
    url: 'mongodb://127.0.0.1/shop',
    option: {}
  },
    config.jwt = {
      secret: "1124371411"
    }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
