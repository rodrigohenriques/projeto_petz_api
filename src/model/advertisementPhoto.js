const path = require('path'),
    sequelize = require(path.resolve('src/util/sequelize-connection')),
    Sequelize = require('sequelize');

const advertisementPhoto = sequelize.define('advertisement_photo', {

  id: {
    type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true
  },
  advertisementId: {
    type: Sequelize.INTEGER, allowNull: false, field: 'advertisement_Id',
    references: {
      model: 'advertisement',
      key: 'id'
    }
  },
  photo: {
    type: Sequelize.TEXT, allowNull: false
  },
  registerDate: {
    type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW, field: 'register_date'
  }
},
    {
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
      tableName: 'advertisement_photo'
    }
);

module.exports = advertisementPhoto;