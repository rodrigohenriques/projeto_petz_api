const path = require('path'),
    model = require(path.resolve('src/model/ageClassification'));

const dao = {

  get: function() {
    return model.findAll({});
  },

};

module.exports = dao;