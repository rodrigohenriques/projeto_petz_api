let Sequelize = require('sequelize'),
    constants = require('./constants');
let sequelize = new Sequelize(constants.db.database, constants.db.username, constants.db.password, {
  host: constants.db.host,
  dialect: 'postgres',
  logging: false,
  pool: {
    max: 20,
    min: 8,
    idle: 10000
  }
});

module.exports = sequelize;