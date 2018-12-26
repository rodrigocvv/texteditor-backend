const expect = require('chai').expect;
const userDataService = require('../../services/user-data-service');
const userData = require('../data/insertData');

describe('UserDataService', () => {
    
    it('findAll', async() => {
        const allData = await userDataService.findAll();
        expect(allData).to.not.be.empty;
    });

    it('saveUser', async() => {
        const newUserData = await userDataService.saveUser(userData);
        expect(newUserData._id).to.not.be.undefined;
    });

    it('findByGoogleId', async() => {
        const insertedUser = await userDataService.findByGoogleId(userData.googleUser.sub);
        expect(insertedUser).to.not.be.undefined;
    });    

});
