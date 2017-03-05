'use strict';

const path = require('path');
const advertisementDao = require(path.resolve('src/dao/advertisement'));
const advertisementController = {

  get: function(req, res) {
    let id = req.params.id || '';

    advertisementDao.findOne({id: id}).then(function(fetchedData) {
      res.status(200).json(fetchedData);
    }).catch(function(error) {
      res.status(500).json(error);
    });
  },

  getAllActive: function(req, res) {

    advertisementDao.findActives().then(function(fetchedRows) {
      res.status(200).json(fetchedRows);
    }).catch(function(error) {
      res.status(500).json(error);
    });
  }

};

module.exports = advertisementController;