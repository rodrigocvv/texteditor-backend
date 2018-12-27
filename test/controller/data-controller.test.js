const expect = require('chai').expect;
const dataController = require('../../controller/data-controller');
const sinon = require("sinon");

describe('DataController', () => {



    it('getUserData', async() => {
        const req = {
            user: {
                sub: '1'
            }
        };
        let res = {
            send: sinon.spy()
        };
    
        const userContent = await dataController.getUserData(req, res);
        // expect(res.send.calledOnce).to.be.true;
        // console.log('Retorno = > ' + res.send.firstCall.args[0]);
        console.log('Retorno = > ' + JSON.stringify(res));
        // expect(res.send.firstCall.args[0]).to.equal("bla");
    });    

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