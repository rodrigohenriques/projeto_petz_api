'use strict';

const path = require('path');
const advertisementDao = require(path.resolve('src/dao/advertisement'));
const R = require('ramda');
const Sequelize = require('sequelize');
const Promise = Sequelize.Promise;
const advertisementPhotoDao = require(path.resolve('src/dao/advertisementPhoto'));
const constants = require(path.resolve('src/util/constants'));

const advertisementController = {

  create: function(req, res) {
    let _advertisement = req.body;
    _advertisement = R.omit(['registerDate'], _advertisement);

    advertisementDao.create(_advertisement).then(function(createdAdvertisement) {

      let photoPromises = [];
      let photos = _advertisement.photos || [];

      photos.forEach(function(photo) {
        photo.advertisementId = createdAdvertisement.id;
        photoPromises.push(advertisementPhotoDao.create(photo));
      });

      Promise.all(photoPromises).then(function() {

        advertisementDao.findOne({id: createdAdvertisement.id}).then(function(fetched) {
          res.status(200).json(fetched);
        }).catch(function(error) {
          res.status(500).json(error);
        });

      }).catch(function(errors) {
        res.status(500).json(errors);
      });

    }).catch(function(error) {
      res.status(500).json(error);
    });
  },

  update: function(req, res) {

    const _advertisementId = req.params.id;
    const advertisement = req.body;
    const filter = {
      id: _advertisementId
    };

    advertisementDao.update(advertisement, filter).then(function() {

      let photoPromises = [];
      let photos = advertisement.photos || [];

      photos.forEach(function(photo) {
        photoPromises.push(advertisementPhotoDao.update(photo, { id: photo.id }));
      });

      Promise.all(photoPromises).then(function() {
        res.status(200).json(advertisement);
      }).catch(function(errors) {
        res.status(500).json(errors);
      });

    }).catch(function(error) {
      res.status(500).json(error);
    });

  },

  remove: function(req, res) {

    const _advertisementId = req.params.id;
    const advertisement = {
      approved: false
    };
    const filter = {
      id: _advertisementId
    };

    advertisementDao.update(advertisement, filter).then(function() {

      res.status(200).json();

    }).catch(function(error) {
      res.status(500).json(error);
    });

  },

  get: function(req, res) {
    let id = req.params.id || '';

    advertisementDao.findOne({id: id}).then(function(fetchedData) {
      res.status(200).json(fetchedData);
    }).catch(function(error) {
      res.status(500).json(error);
    });
  },

  getAllActive: function(req, res) {
    let filter = handleFilter(req.params);

    advertisementDao.findActives(filter).then(function(fetchedRows) {
      res.status(200).json(fetchedRows);
    }).catch(function(error) {
      res.status(500).json(error);
    });
  }

};

let handleFilter = (paramsObj) => {
  let filter = {
    limit: (paramsObj.limit || constants.app.limitPerRequest)
      > constants.app.limitPerRequest ? constants.app.limitPerRequest : paramsObj.limit,
    offset: (paramsObj.page || 0) < 0 ? 0 : paramsObj.page - 1
  };

  return R.mergeAll(filter, R.pick(['breedId', 'ageClassificationId'], paramsObj));

};

module.exports = advertisementController;