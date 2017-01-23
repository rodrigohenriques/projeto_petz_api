const path = require('path'),
    userModel = require(path.resolve('src/model/user'));

var dao = {

    findOne: function(query) {
        query = query || {};

        return userModel.findOne({
            where: query
        });
    },

    create: function(user) {
        return userModel.create(user);
    },

    deleteOne: function(query) {
        return userModel.destroy({where: query});
    }

};

module.exports = dao;