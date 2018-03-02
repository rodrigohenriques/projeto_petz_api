'use strict';

const moment = require('moment');
const uuidV4 = require('uuid/v4');
const path = require('path');
const sessionDao = require(path.resolve('src/dao/session'));

function checkIsUserOperationAllowed(req) {
  return (req.originalUrl.indexOf('/api/user') > -1 && req.method === 'GET') ||
    (req.originalUrl.indexOf('/api/user') > -1 && req.method === 'POST') ||
    (req.originalUrl.indexOf('/api/user') > -1 && req.method === 'PUT');
}

let authentication = {


  checkToken: function(req, res, next) {
    let token = req.headers['x-access-token'] ||  null;
    let requestURL = req.originalUrl;

    if (requestURL === '/api/user/login' || checkIsUserOperationAllowed(req)) {
      next();
    } else if (!token) {
      res.status(401).end();
    } else {
      sessionDao.findOne({token: token}).then(function(fetchedData) {
        if (!fetchedData) {
          res.status(400).end();
        } else {
          let sessionTime = moment(fetchedData.expires);
          let nowTime = moment();

          if (sessionTime.isSameOrBefore(nowTime)) {
            res.status(401).end();
          } else {
            let session = {
              token: fetchedData.token,
              expires: moment().add(5, 'minutes')
            };

            sessionDao.deleteInactives()
	            .then(function() {})
	            .catch(function(error) {
              console.log(error);
            });
            next();
          }

        }

      }).catch(function(error) {
        res.status(500).json(error);
      });

    }

  },

  getNewToken: function() {
    let session = {
      token: uuidV4(),
      expires: moment().add(5, 'minutes')
    };
    return sessionDao.create(session);
  }

};

module.exports = authentication;
