const userDataService = require("../services/user-data-service");

function getContent(googleId) {
    return new Promise((resolve, reject) => {
        userDataService.findByGoogleId(googleId).then(userDB => {
            // console.log('Retorno => ' + JSON.stringify(userDB));
            if (userDB) {
                resolve(userDB.content);
            } else {
                resolve([]);
            }
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


module.exports = {
    updateUserData,
    getContent
}