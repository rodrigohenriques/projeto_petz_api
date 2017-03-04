const path = require('path'),
    sequelize = require(path.resolve('src/util/sequelize-connection')),
    Sequelize = require('sequelize');

const breed = sequelize.define('breed', {

  id: {
    type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true
  },
  name: {
    type: Sequelize.STRING(100), allowNull: false, unique: true
  }
},
    {
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
      tableName: 'breed'
    }
);

module.exports = breed;