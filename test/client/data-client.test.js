const expect = require('chai').expect;
const dataClient = require('../../client/data-client');
const contentMock = require('../data/content-mock');

describe('DataClient', () => {

    it('updateUserData', async() => {
        const userData = await dataClient.updateUserData('1', contentMock);
        expect(userData.content).to.not.be.empty;
    });

    it('getContent', async() => {
        const userDataContent = await dataClient.getContent('1');
        expect(userDataContent).to.not.be.empty;
    });

});