'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.home.index);
  router.get('/init', controller.home.init);


  router.post('/api/login', controller.api.login);
  router.post('/api/logout', controller.api.logout);
  router.post('/api/reg', controller.api.reg);
  router.get('/api/isLogin', controller.api.isLogin);
  router.get('/api/getInfo', controller.api.getInfo);
  router.post('/api/setInfo', controller.api.setInfo);
  router.post('/api/userList', controller.api.userList);
  router.post('/api/delUser', controller.api.delUser);
 
  router.post('/api/getCode', controller.api.getCode);
  
  router.post('/api/addScore', controller.api.addScore);


  router.post('/common/upload', controller.common.upload);


};
