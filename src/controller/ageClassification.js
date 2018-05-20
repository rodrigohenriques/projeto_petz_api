'use strict';

const path = require('path');
const ageClassificationDao = require(path.resolve('src/dao/ageClassification'));
const ageClassificationController = {

  getAll: function(req, res) {

    ageClassificationDao.get({}).then(function(fetchedData) {
      res.status(200).json(fetchedData);
    }).catch(function(error) {
      res.status(500).json(error);
    });
  }

};

module.exports = ageClassificationController;