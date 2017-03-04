const path = require('path'),
    sequelize = require(path.resolve('src/util/sequelize-connection')),
    Sequelize = require('sequelize');

const ageClassification = sequelize.define('age_classification', {

  id: {
    type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true
  },
  name: {
    type: Sequelize.STRING(20), allowNull: false, unique: true
  }
},
    {
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
      tableName: 'age_classification'
    }
);

module.exports = ageClassification;