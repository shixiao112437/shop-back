'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller,middleware } = app;
  const token = middleware.toten(app.config.jwt)
  router.post('/rigister', controller.auth.rigister); // 注册
  router.post('/login', controller.auth.login); // 登录
  router.post('/saveinfo',token, controller.auth.saveinfo); // 保存用户信息
  router.get('/authInfo',token, controller.auth.getAuthInfo); // 获取用户信息
  router.get('/musiclist', controller.music.getMusciList); // 获取音乐列表
  router.get('/categories', controller.shop.getGategories); // 获取商品分类
  router.get('/carousel', controller.carousel.getCarousel); // 获取轮播图
  router.get('/verific', controller.auth.getVerific); // 获取轮播图
  router.post('/checkVerific', controller.auth.checkVerific); // 获取轮播图


















  // 城市列表
  router.get('/citylist', controller.city.getList);
};
