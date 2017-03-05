const path = require('path'),
    sequelize = require(path.resolve('src/util/sequelize-connection')),
    Sequelize = require('sequelize');

const advertisementCategory = sequelize.define('category', {

  id: {
    type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true
  },
  name: {
    type: Sequelize.STRING(25), allowNull: false, unique: true
  }
},
    {
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
      tableName: 'advertisement_category'
    }
);

module.exports = advertisementCategory;