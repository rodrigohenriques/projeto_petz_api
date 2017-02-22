let request = require('supertest'),
	path = require('path'),
	userDao = require(path.resolve('src/dao/user')),
	mocks = require(path.resolve('test/mocks')),
	assert = require('chai').assert,
	R = require('ramda'),
	app = require(path.resolve('src/index'));

describe('API', function() {

	describe('Login Resource', function() {

		const _validUser = R.clone(mocks.fullUser);

		afterEach(function(done) {

			userDao.deleteOne({email:_validUser.email}).then(function() {
					done();
			}).catch();
		});

		it('not should make login sending invalid data', function(done) {

			let _invalidLoginData = {
				email: '0900',
				password: '81dc9bdb52d04dc20036dbd8313ed055'
			};

			request(app)
				.post('/api/user/login')
				.send(_invalidLoginData)
				.expect(401, done);

		});

	});

});