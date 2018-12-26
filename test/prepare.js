const prepare = require('mocha-prepare');
const mongoUnit = require('mongo-unit');
const testData = require('./data/testData');

prepare(done => mongoUnit.start()
    .then(testMongoUrl => {
        // console.log('Url do mongo de teste => ' + testMongoUrl);
        process.env.MONGO_TEST_URL = testMongoUrl;
        mongoUnit.load(testData);
        done();
    })
);
