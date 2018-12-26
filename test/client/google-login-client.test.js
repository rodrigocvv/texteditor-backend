const expect = require('chai').expect;
const googleLoginClient = require('../../client/google-login-client');

describe('GoogleLoginClient', () => {

    it('findByGoogleId', async() => {
        const userData = await googleLoginClient.findByGoogleId('1');
        expect(userData).to.not.be.empty;
    });

});
