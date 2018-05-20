'use strict';

module.exports = function(app) {
  const path = require('path');
  const ageClassificationController = require(path.resolve('src/controller/ageClassification'));
  const router = require('express').Router();

  router.get('/api/ageClassification', ageClassificationController.getAll);

  app.use(router);

};