const path = require('path'),
	sequelize = require(path.resolve('src/util/sequelize-connection')),
  sessionModel = require(path.resolve('src/model/session'));

const dao = {

  findOne: function(query) {
    query = query || {};
    query.expires = {
      $gt: sequelize.fn('NOW')
    };

    return sessionModel.findOne({
      where: query
    });
  },

  create: function(session) {
    return sessionModel.create(session);
  },

  incrementeToken(token) {
    return sessionModel.update(token, { returning: true, where: { id: token.id  } });
  },

  deleteInactives: function() {
    const query = {
      expires: {
        $lt: sequelize.fn('NOW')
      }
    };
    return sessionModel.destroy({where: query});
  }
};

module.exports = dao;