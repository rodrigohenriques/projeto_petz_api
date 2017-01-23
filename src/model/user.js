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
        type: Sequelize.TEXT, allowNull: false
    },
    address: {
        type: Sequelize.STRING(90), allowNull: false
    },
    addressNumber: {
        type: Sequelize.STRING(10), allowNull: true, field: 'address_number'
    },
    state: {
        type: Sequelize.STRING(80), allowNull: false
    },
    city: {
        type: Sequelize.STRING(80), allowNull: false
    },
    zipCode: {
        type: Sequelize.STRING(8), allowNull: false, field: 'zip_code'
    },
    phone: {
        type: Sequelize.STRING(12), allowNull: false, unique: true,
        validate: {
            is: /^[1-9]{2}[0-9]{8,9}/g
        }
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