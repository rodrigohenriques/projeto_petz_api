const path = require('path'),
    advertisementPhotoModel = require(path.resolve('src/model/advertisementPhoto')),
    breedModel = require(path.resolve('src/model/breed')),
    advertisementCategoryModel = require(path.resolve('src/model/advertisementCategory')),
    ageClassificationModel = require(path.resolve('src/model/ageClassification')),
    advertisementModel = require(path.resolve('src/model/advertisement'));

const dao = {

  findOne: function(query) {
    query = query || {};

    return advertisementModel.findOne({
      where: query,
      include: [breedModel, advertisementPhotoModel, advertisementCategoryModel, ageClassificationModel]
    });
  },

  findActives: function() {
    let query = {
      approved: true
    };

    return advertisementModel.findOne({
      where: query,
      include: [breedModel, advertisementPhotoModel, advertisementCategoryModel, ageClassificationModel]
    });
  }

};

module.exports = dao;