const path = require('path'),
  R = require('ramda'),
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
  }

};

module.exports = dao;