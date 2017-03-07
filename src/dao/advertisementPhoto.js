const path = require('path'),
	advertisementPhotoModel = require(path.resolve('src/model/advertisementPhoto'));

const dao = {

  create: function(advertisementPhoto) {
    return advertisementPhotoModel.create(advertisementPhoto);
  }

};

module.exports = dao;