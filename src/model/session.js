const path = require('path'),
    sequelize = require(path.resolve('src/util/sequelize-connection')),
    Sequelize = require('sequelize');

const session = sequelize.define('session', {

  id: {
    type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true
  },
  token: {
    type: Sequelize.TEXT, allowNull: false
  },
  expires: {
    type: Sequelize.DATE, allowNull: false
  }
},
    {
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
      tableName: 'session'
    }
);

module.exports = session;