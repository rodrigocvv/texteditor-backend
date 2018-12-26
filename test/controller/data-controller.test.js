const expect = require('chai').expect;
const testMongoUrl = process.env.MONGO_TEST_URL;
// const mongoUnit = require('mongo-unit');
const userDataService = require('../../services/user-data-service');

describe('DataController', () => {

    // const testData = require('./data/testData.json');

    // afterEach(() => mongoUnit.drop());

    // it('getUserData', () => {
    //     const userDataMock = {
    //         "googleUser": {
    //             "sub": "1",
    //             "email": "teste@teste.com",
    //             "name": "Rodrigo Teste"
    //         },
    //         "createDate": "1542630243"
    //     };
    //     userDataService.insertUserData(userDataMock).then(newUser => {
    //         // console.log('Usuario inserido com sucesso => ' + JSON.stringify(newUser));
    //         expect(newUser != null && newUser._id != null, 'New user added').to.be.true;
    //     });



    // });

});