const userDataService = require("../services/user-data-service");

function getContent(googleId) {
    return new Promise((resolve, reject) => {
        userDataService.findByGoogleId(googleId).then(userDB => {
            console.log('Retorno => ' + JSON.stringify(userDB));
            resolve(userDB.content);
        }, error => {
            reject(error);
        });
    }, error => {
        reject(error);
    });
}

function updateUserData(googleId, content) {
    return new Promise((resolve, reject) => {
        userDataService.findByGoogleId(googleId).then(userDB => {
            if (!userDB) {
                reject('Usuário com googleId = ' + googleId + ' não encontrado!');
            } else {
                userDB.content = content;
                userDataService.saveUser(userDB).then(userSaved => {
                    resolve(userSaved);
                }, error => {
                    reject(error);
                });
            }
        }, error => {
            reject(error);
        });
    });
}

function findByUserId(userId) {
    return new Promise((resolve, reject) => {
        userDataService.findByUserId(userId).then(userDB => {
            resolve(userDB)
        }, error => {
            reject(error);
        });
    });
}

module.exports = {
    findByUserId,
    updateUserData,
    getContent
}