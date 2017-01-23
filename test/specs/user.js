const path = require('path'),
    assert = require('chai').assert,
    R = require('ramda'),
    mocks = require(path.resolve('test/mocks')),
    userDao = require(path.resolve('src/dao/user'));

describe('User Spec', function() {

    const _validUser = mocks.validUser;

    before(function() {
        userDao.deleteOne({email: _validUser.email}).then(function() {
            return;
        }).catch(function(err) {
            console.error(err);
        });
    });

    after(function() {
        userDao.deleteOne({email: _validUser.email}).then(function() {
            return;
        }).catch(function(err) {
            console.error(err);
        });
    });

    it('not should create client passing blank client', function(done) {
        var _invalidClient = {};

        userDao.create(_invalidClient).then(function() {
        }).catch(function() {
            done();
        });
    });


});