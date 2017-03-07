'use strict';

module.exports = function(app) {
  const path = require('path');
  const advertisementController = require(path.resolve('src/controller/advertisement'));
  const router = require('express').Router();

  router.delete('/api/advertisement/:id', advertisementController.remove);
  router.put('/api/advertisement/:id', advertisementController.update);
  router.post('/api/advertisement', advertisementController.create);
  router.get('/api/advertisement/:id', advertisementController.get);
  router.get('/api/advertisement/filter/active', advertisementController.getAllActive);

  app.use(router);

};