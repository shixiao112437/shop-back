'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller,middleware } = app;
  const token = middleware.toten(app.config.jwt)
  router.post('/rigister', controller.auth.rigister);
  router.post('/login', controller.auth.login);
  router.post('/saveinfo',token, controller.auth.saveinfo);
  router.get('/musiclist', controller.music.getMusciList);


















  // 城市列表
  router.get('/citylist', controller.city.getList);
};
