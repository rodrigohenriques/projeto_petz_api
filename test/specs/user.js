const path = require('path'),
    assert = require('chai').assert,
    R = require('ramda'),
    mocks = require(path.resolve('test/mocks')),
    userDao = require(path.resolve('src/dao/user'));

describe('User Spec', function() {

    const _fullUser = mocks.fullUser;
		const _minimalUser = mocks.minimalUser;

    before(function() {
        userDao.deleteOne({email: _fullUser.email}).then(function() {

	        userDao.deleteOne({email: _minimalUser.email}).then(function() {
		        return;
	        }).catch(function(err) {
		        console.error(err);
	        });

        }).catch(function(err) {
            console.error(err);
        });
    });

    after(function() {
        userDao.deleteOne({email: _fullUser.email}).then(function() {

	        userDao.deleteOne({email: _minimalUser.email}).then(function() {
		        return;
	        }).catch(function(err) {
		        console.error(err);
	        });

        }).catch(function(err) {
            console.error(err);
        });
    });

    it('not should create user passing blank user', function(done) {
        const _invalidUser = {};

        userDao.create(_invalidUser).then(function() {
        }).catch(function() {
            done();
        });
    });

    it('should create valid full user', function(done) {
      const _user = _fullUser;

	    userDao.create(_user).then(function() {
		    userDao.deleteOne({email: _fullUser.email}).then(function() {
        done();
      });
    });
    });

		it('should create valid minimal user', function(done) {
			const _user = _minimalUser;

			userDao.create(_user).then(function() {
				userDao.deleteOne({email: _minimalUser.email}).then(function() {
					done();
				});

			});
		});


		it('should create valid user and find then', function(done) {
			var _user = R.clone(_fullUser);
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