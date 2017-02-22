'use strict';

const path = require('path');
const userDao = require(path.resolve('src/dao/user'));
const authenticate = require(path.resolve('src/util/authenticate'));
const R = require('ramda');
const userController = {

  login: function(req, res) {

    let loginData = req.body;
    const filter = {
      email: loginData.email,
      password: loginData.password,
      active: true
    };

    userDao.findOne(filter).then(function(user) {
      if (user) {
        user.setDataValue('session', authenticate.getNewToken());
        res.status(200).json(user);
      } else {
        res.status(401).end();
      }

    }).catch(function(error) {
      res.status(500).json(error);
    });

  },

  create: function(req, res) {
    let user = req.body;

    userDao.create(user).then(function(createdUser) {
      res.status(200).json(createdUser);
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
  }

};

module.exports = userController;