'use strict';

module.exports = function(app) {
  const path = require('path');
  const constants = require(path.resolve('src/util/constants'));
  const userController = require(path.resolve('src/controller/user'));
  const router = require('express').Router();

  router.post('/api/user/login', userController.login);
  router.post('/api/user', userController.create);

  app.use(router);

};