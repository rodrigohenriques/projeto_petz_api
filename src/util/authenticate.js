'use strict';

const moment = require('moment');
const uuidV4 = require('uuid/v4');
const R = require('ramda');

let sessions = [];

function checkisUserOperationAllowed(req) {
  return (req.originalUrl.indexOf('/api/user') > -1 && req.method === 'GET') ||
    (req.originalUrl.indexOf('/api/user') > -1 && req.method === 'POST');
}

let authentication = {


  checkToken: function(req, res, next) {
    let token = req.headers['x-access-token'] ||  null;
    let requestURL = req.originalUrl;

    if (requestURL === '/api/user/login' || checkisUserOperationAllowed(req)) {
      next();
    } else if (!token) {
      res.status(401).end();
    } else {
      let fetchedSession = R.find(R.propEq('token', token))(sessions);

      if (!fetchedSession) {
        res.status(400).end();
      } else {

        let sessionTime = moment(fetchedSession.expires);
        let nowTime = moment();

        if (sessionTime.isSameOrBefore(nowTime)) {
          res.status(401).end();
        } else {

          sessions = R.reject(function(item) {
            return item.token == fetchedSession.token;
          }, sessions);

          sessions.push({
            token: fetchedSession.token,
            expires: moment().add(60, 'seconds')
          });

          next();
        }

      }

    }

  },

  getNewToken: function() {
    let session = {
      token: uuidV4(),
      expires: moment().add(60, 'seconds')
    };

    sessions.push(session);

    return session;
  }


};

module.exports = authentication;
