const path = require('path'),
    R = require('ramda'),
    sequelize = require(path.resolve('src/util/sequelize-connection')),
    advertisementPhotoModel = require(path.resolve('src/model/advertisementPhoto')),
    breedModel = require(path.resolve('src/model/breed')),
    constants = require(path.resolve('src/util/constants')),
    advertisementCategoryModel = require(path.resolve('src/model/advertisementCategory')),
    userModel = require(path.resolve('src/model/user')),
    ageClassificationModel = require(path.resolve('src/model/ageClassification')),
    Sequelize = require('sequelize');

const advertisement = sequelize.define('advertisement', {

  id: {
    type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true
  },
  categoryId: {
    type: Sequelize.INTEGER, allowNull: false, field: 'category_id',
    references: {
      model: 'category',
      key: 'id'
    }
  },
  breedId: {
    type: Sequelize.INTEGER, allowNull: true, field: 'breed_id',
    references: {
      model: 'breed',
      key: 'id'
    }
  },
  userId: {
    type: Sequelize.INTEGER, allowNull: false, field: 'user_id',
    references: {
      model: 'user',
      key: 'id'
    }
  },
  ageClassificationId: {
    type: Sequelize.INTEGER, allowNull: true, field: 'age_classification_id',
    references: {
      model: 'age_classification',
      key: 'id'
    }
  },
  predominantColor: {
    type: Sequelize.STRING(50), allowNull: true, field: 'predominant_color'
  },
  age: {
    type: Sequelize.INTEGER, allowNull: true
  },
  isHatch: {
    type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false, field: 'is_hatch'
  },
  isVaccinated: {
    type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false, field: 'vaccinated'
  },
  state: {
    type: Sequelize.STRING(60), allowNull: false
  },
  city: {
    type: Sequelize.STRING(100), allowNull: false
  },
  price: {
    type: Sequelize.DECIMAL(15, 4), allowNull: true
  },
  phone: {
    type: Sequelize.STRING(15), allowNull: false,
    validate: {
      is: /^[1-9]{2}[0-9]{8,9}/g
    }
  },
  registerDate: {
    type: Sequelize.DATE, allowNull: false, defaultValue: sequelize.literal('NOW()'), field: 'register_date'
  },
  approved: {
    type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false
  },
  description: {
    type: Sequelize.STRING(500), allowNull: false
  }

},
    {
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
      tableName: 'advertisement'
    }
);

advertisement.hasOne(advertisementCategoryModel, {foreignKey: 'id'});
advertisement.hasOne(userModel, {foreignKey: 'id'});
advertisement.hasOne(breedModel, {foreignKey: 'id'});
advertisement.hasOne(ageClassificationModel, {as: 'ageClassification', foreignKey: 'id'});

advertisement.hasMany(advertisementPhotoModel, { as: 'photos', foreignKey: 'advertisement_id' });

advertisement.hook('beforeCreate', function(advertisementInstance) {

  if (R.all(checkIsNull)([advertisementInstance.age, advertisementInstance.ageClassificationId])) {
    return Sequelize.Promise.reject(constants.messages.advertisement.blankAge);
  }

  if (R.all(checkIsNull)([advertisementInstance.breedId, advertisementInstance.predominantColor])) {
    return Sequelize.Promise.reject(constants.messages.advertisement.blankBreed);
  }

});

advertisement.hook('beforeBulkUpdate', function(bulkedAdvertisement) {

  let advertisementInstance = bulkedAdvertisement.attributes;

  if (R.all(checkIsNull)([advertisementInstance.age, advertisementInstance.ageClassificationId])) {
    return Sequelize.Promise.reject(constants.messages.advertisement.blankAge);
  }

  if (R.all(checkIsNull)([advertisementInstance.breedId, advertisementInstance.predominantColor])) {
    return Sequelize.Promise.reject(constants.messages.advertisement.blankBreed);
  }

});

function checkIsNull(value) {
  return value == null;
}

module.exports = advertisement;