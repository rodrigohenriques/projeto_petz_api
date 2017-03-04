'use strict';

const path = require('path');
const breedDao = require(path.resolve('src/dao/breed'));
const authenticate = require(path.resolve('src/util/authenticate'));
const breedController = {

  get: function(req, res) {
    let id = req.params.id || '';

    breedDao.findOne({id: id}).then(function(fetchedBreed) {
      res.status(200).json(fetchedBreed);
    }).catch(function(error) {
      res.status(500).json(error);
    });
  },

  getAll: function(req, res) {

    breedDao.find({}).then(function(fetchedBreeds) {
      res.status(200).json(fetchedBreeds);
    }).catch(function(error) {
      res.status(500).json(error);
    });
  }

};

module.exports = breedController;