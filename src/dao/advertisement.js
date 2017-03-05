const path = require('path'),
    advertisementPhotoModel = require(path.resolve('src/model/advertisementPhoto')),
    breedModel = require(path.resolve('src/model/breed')),
    userModel = require(path.resolve('src/model/user')),
    advertisementCategoryModel = require(path.resolve('src/model/advertisementCategory')),
    ageClassificationModel = require(path.resolve('src/model/ageClassification')),
    advertisementModel = require(path.resolve('src/model/advertisement'));

const dao = {

  findOne: function(query) {
    query = query || {};

    return advertisementModel.findOne({
      where: query,
      attributes: ['id', 'age', 'isHatch', 'isPuppy', 'state', 'city', 'price', 'phone', 'registerDate', 'approved'],
      include: [breedModel, advertisementCategoryModel,
        {
          model: userModel,
          attributes: ['id', 'name', 'email', 'phone']
        },
        {
          model: advertisementPhotoModel,
          as: 'photos',
          attributes: ['id', 'photo', 'registerDate']
        },
        {
          model: ageClassificationModel,
          as: 'ageClassification'
        }
      ]
    });
  },

  findActives: function() {
    let query = {
      approved: true
    };

    return advertisementModel.findAll({
      where: query,
      attributes: ['id', 'age', 'isHatch', 'isPuppy', 'state', 'city', 'price', 'phone', 'registerDate', 'approved'],
      include: [breedModel, advertisementCategoryModel,
        {
          model: userModel,
          attributes: ['id', 'name', 'email', 'phone']
        },
        {
          model: advertisementPhotoModel,
          as: 'photos',
          attributes: ['id', 'photo', 'registerDate']
        },
        {
          model: ageClassificationModel,
          as: 'ageClassification'
        }
      ]
    });
  }

};

module.exports = dao;