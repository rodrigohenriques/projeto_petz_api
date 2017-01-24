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

    it('not should create user passing blank user', function(done) {
        var _invalidUser = {};

        userDao.create(_invalidUser).then(function() {
        }).catch(function() {
            done();
        });
    });

    it('should create valid user', function(done) {
    var _user = _validUser;
	    userDao.create(_user).then(function() {
		    userDao.deleteOne({email: _validUser.email}).then(function() {
        done();
      });
    });
    });


		it('should create valid user and find then', function(done) {
			var _user = R.clone(_validUser);
			userDao.create(_user).then(function() {
				userDao.findOne({email: _user.email}).then(function(fetchedUser) {
					assert.ok(fetchedUser.name === _user.name);
					assert.ok(fetchedUser.email === _user.email);
					assert.ok(fetchedUser.phone === _user.phone);
					done();
				});

			});
		});


});