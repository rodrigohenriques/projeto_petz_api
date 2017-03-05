const path = require('path'),
    sequelize = require(path.resolve('src/util/sequelize-connection')),
    Sequelize = require('sequelize');

const advertisement = sequelize.define('advertisement', {

  id: {
    type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true
  },
  categoryId: {
    type: Sequelize.INTEGER, allowNull: false, field: 'category_id'
  },
  breeId: {
    type: Sequelize.INTEGER, allowNull: false, field: 'bree_id'
  },
  ageClassificationId: {
    type: Sequelize.INTEGER, allowNull: false, field: 'age_classification_id'
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
  isPuppy: {
    type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false, field: 'is_puppy'
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
    type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW, field: 'register_date'
  },
  approved: {
    type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false
  }

},
    {
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
      tableName: 'advertisement'
    }
);

module.exports = advertisement;