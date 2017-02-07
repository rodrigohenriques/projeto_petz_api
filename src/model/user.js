const path = require('path'),
    sequelize = require(path.resolve('src/util/sequelize-connection')),
    Sequelize = require('sequelize');

const user = sequelize.define('user', {

  id: {
    type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true
  },
  name: {
    type: Sequelize.STRING(80), allowNull: false
  },
  email: {
    type: Sequelize.STRING(100), allowNull: false, unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.TEXT, allowNull: true
  },
  address: {
    type: Sequelize.STRING(90), allowNull: true
  },
  addressNumber: {
    type: Sequelize.STRING(10), allowNull: true, field: 'address_number'
  },
  state: {
    type: Sequelize.STRING(80), allowNull: true
  },
  city: {
    type: Sequelize.STRING(80), allowNull: true
  },
  zipCode: {
    type: Sequelize.STRING(8), allowNull: true, field: 'zip_code'
  },
  phone: {
    type: Sequelize.STRING(12), allowNull: true,
    validate: {
      is: /^[1-9]{2}[0-9]{8,9}/g
    }
  },
  registerAt: {
    type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW, field: 'register_at'
  },
  lastUpdate: {
    type: Sequelize.DATE, allowNull: true, field: 'last_update'
  },
  active: {
    type: Sequelize.BOOLEAN, allowNull: true, defaultValue: false
  }

},
    {
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
      tableName: 'user'
    }
);

module.exports = user;