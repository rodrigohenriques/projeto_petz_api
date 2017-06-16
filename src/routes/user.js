'use strict';

module.exports = function(app) {
  const path = require('path');
  const constants = require(path.resolve('src/util/constants'));
  const userController = require(path.resolve('src/controller/user'));
  const router = require('express').Router();

  router.get('/api/user/:email', userController.get);
  router.post('/api/user/login', userController.login);
  router.post('/api/user', userController.create);
  router.put('/api/user/:id', userController.update);
  router.get('/api/user/report/actives', userController.countActiveUsers);

  app.use(router);

};