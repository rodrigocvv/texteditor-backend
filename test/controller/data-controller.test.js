const expect = require('chai').expect;
const dataController = require('../../controller/data-controller');
const sinon = require("sinon");

//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../app');
const should = chai.should();

chai.use(chaiHttp);

describe('DataController', () => {



    it('getUserData', async() => {
        
        
        
        
            
        chai.request(app)
        .get('/data')
        .end((err, res) => {
              res.should.have.status(200);
              console.log('response => ' + JSON.stringify(res));
              //res.body.should.be.a('array');
              //res.body.length.should.be.eql(0);
              done();
        });        
        
        
        
        
        
        // const req = {
        //     user: {
        //         sub: '1'
        //     }
        // };
        // let res = {
        //     send: sinon.spy()
        // };
    
        
        // const userContent = await dataController.getUserData(req, res);
        
        
        // expect(res.send.calledOnce).to.be.true;
        // console.log('Retorno = > ' + res.send.firstCall.args[0]);
        // console.log('Retorno = > ' + JSON.stringify(res));
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