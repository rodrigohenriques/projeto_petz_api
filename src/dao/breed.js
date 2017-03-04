const path = require('path'),
    breedModel = require(path.resolve('src/model/breed'));

const dao = {

  find: function(query) {
    query = query || {};

    return breedModel.findAll({
      where: query
    });
  },

  findOne: function(query) {
    query = query || {};

    return breedModel.findOne({
      where: query
    });
  }
};

module.exports = dao;