var Sequelize = require('sequelize'),
    constants = require('./constants');
var sequelize = new Sequelize(constants.db.database, constants.db.username, constants.db.password, {
  host: constants.db.host,
  dialect: 'postgres',
  logging: false,
  pool: {
    max: 20,
    min: 5,
    idle: 10000
  }
});

module.exports = sequelize;