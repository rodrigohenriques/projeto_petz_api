const path = require('path'),
    assert = require('chai').assert,
		mocks = require(path.resolve('test/mocks')),
    breedDao = require(path.resolve('src/dao/breed'));

describe('Breed Spec', function() {

	let breedOthers = mocks.breedOthers;

	it('should findAll breeds', function(done) {

		breedDao.find().then(function(fetchedBreeds) {
				assert.ok(Array.isArray(fetchedBreeds));
				assert.ok(fetchedBreeds.length > 0);
				done();

		});
	});

	it('should find breed', function(done) {

		breedDao.findOne({id: breedOthers.id}).then(function(fetchedBreed) {
			assert.isObject(fetchedBreed);
			assert.ok(fetchedBreed.id == breedOthers.id);
			assert.ok(fetchedBreed.name == breedOthers.name);
			done();

		});
	});

});