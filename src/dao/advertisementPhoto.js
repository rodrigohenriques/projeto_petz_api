const path = require('path'),
	R = require('ramda'),
	advertisementPhotoModel = require(path.resolve('src/model/advertisementPhoto'));

const dao = {

  create: function(advertisementPhoto) {
    return advertisementPhotoModel.create(advertisementPhoto);
  },

  update: function(newObject, filter) {

    newObject = R.omit(['id'], newObject);

    return advertisementPhotoModel.update(newObject, { returning: true, where: filter });

  }

};

module.exports = dao;