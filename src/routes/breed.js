'use strict';

module.exports = function(app) {
  const path = require('path');
  const breedController = require(path.resolve('src/controller/breed'));
  const router = require('express').Router();

  router.get('/api/breed/:id', breedController.get);
  router.get('/api/breed', breedController.getAll);

  app.use(router);

};