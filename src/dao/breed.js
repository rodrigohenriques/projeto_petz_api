const path = require('path'),
  R = require('ramda'),
    breedModel = require(path.resolve('src/model/breed'));

const dao = {

  find: function(query) {
    query = query || {};

    return breedModel.find({
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