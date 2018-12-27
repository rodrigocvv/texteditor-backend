const expect = require('chai').expect;
const googleLoginClient = require('../../client/google-login-client');
const userDataMock = require('../data/insertData2');

describe('GoogleLoginClient', () => {

    it('findByGoogleId', async() => {
        const userData = await googleLoginClient.findByGoogleId('1');
        expect(userData).to.not.be.empty;
    });

    it('registerLoginByGoogle', async() => {
        const googleId = await googleLoginClient.registerLoginByGoogle(userDataMock.googleUser);
        expect(googleId).to.not.be.undefined;
    });    

    it('registerAccessByIdGoogle', async() => {
        const userData = await googleLoginClient.registerAccessByIdGoogle(userDataMock.googleUser.sub);
        expect(userData).to.not.be.undefined;
    });    

});
