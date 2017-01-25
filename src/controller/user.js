'use strict';

const path = require('path');
const userDao = require(path.resolve('src/dao/user'));
const authenticate = require(path.resolve('src/util/authenticate'));
const userController = {

  login: function(req, res) {

    let loginData = req.body;
    const filter = {
      email: loginData.email,
      password: loginData.password
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

  }

};

module.exports = userController;