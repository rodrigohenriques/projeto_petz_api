'use strict';

const path = require('path');
const userDao = require(path.resolve('src/dao/user'));
const authenticate = require(path.resolve('src/util/authenticate'));
const decoratorError = require(path.resolve('src/util/sequelizeErrorDecorator'));
const md5 = require('md5');
const userController = {

  login: function(req, res) {

    let loginData = req.body;
    const filter = {
      email: loginData.email,
      password: md5(loginData.password),
      active: true
    };

    userDao.findOne(filter).then(function(user) {
      if (user) {
	      authenticate.getNewToken().then(function(session) {
		      user.setDataValue('session', session);
		      res.status(200).json(user);
        }).catch(function(error) {
		      res.status(500).json(error);
	      });

      } else {
        res.status(401).end();
      }

    }).catch(function(error) {
      res.status(500).json(error);
    });

  },

  create: function(req, res) {
    let user = req.body;
    user.password = md5(user.password);
    user.active = true;

    userDao.create(user).then(function(createdUser) {
      res.status(200).json(createdUser);
    }).catch(function(error) {
      if (decoratorError.isSequelizeError(error)) {
        res.status(400).json(decoratorError.decorateUserErrors(error));
      } else {
        res.status(500).json(error);
      }

    });

  },

  update: function(req, res) {
    const filter = {
      id: req.params.id || 0
    };
    const input = req.body;

    userDao.update(input, filter).then(function() {
      res.status(200).end();
    }).catch(function(error) {
      res.status(500).json(error);
    });
  },

  get: function(req, res) {
    let email = req.params.email || '';

    userDao.findOne({email: email}).then(function(fetchedUser) {
      res.status(200).json(fetchedUser);
    }).catch(function(error) {
      res.status(500).json(error);
    });
  },

  countActiveUsers: function(req, res) {
    userDao.countActives().then(function(result) {
      res.status(200).json(result);
    }).catch(function(error) {
      res.status(500).json(error);
    });
  }

};

module.exports = userController;
