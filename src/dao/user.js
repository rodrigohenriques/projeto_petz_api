const path = require('path'),
  R = require('ramda'),
	sequelize = require(path.resolve('src/util/sequelize-connection')),
  userModel = require(path.resolve('src/model/user'));

const dao = {

  findOne: function(query) {
    query = query || {};

    return userModel.findOne({
      where: query
    });
  },

  create: function(user) {
    const newUser = R.pick(['name', 'email'], user);
    return userModel.create(newUser);
  },

  deleteOne: function(query) {
    return userModel.destroy({where: query});
  },

  update: function(newObject, filter) {
    newObject = R.omit(['id'], newObject);

    return userModel.update(newObject, { returning: true, where: filter });
  },

  countActives: function() {

    const _filter = {
      active: true
    };

    return userModel.count({where: _filter});
  }

};

module.exports = dao;