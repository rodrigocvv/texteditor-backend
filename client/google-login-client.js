const userDataService = require("../services/user-data-service");

function registerLoginByGoogle(googleUser) {
    return new Promise((resolve, reject) => {
        findByGoogleId(googleUser.sub).then(userData => {
            if (!userData) {
                insertGoogleUser(googleUser).then(newUserData => {
                    resolve(newUserData.googleUser.sub);
                });
            } else {
                resolve(userData.googleUser.sub);
            }
        });
    });
}

function registerAccessByIdGoogle(googleId) {
    return new Promise((resolve, reject) => {
        findByGoogleId(googleId).then(userData => {
            if (!userData) {
                reject('user not found!');
            } else {
                userData.lastAccessDate = new Date();
                userDataService.saveUser(userData).then(userDataUpdated => {
                    resolve(userDataUpdated);
                }, error => {
                    reject(error);
                });
            }
        });
    });
}

function insertGoogleUser(googleUser) {
    return new Promise((resolve, reject) => {
        const userData = {
            googleUser: googleUser,
            createDate: new Date()
        };
        userDataService.insertUserData(userData).then(userDB => {
            resolve(userDB);
        }, error => {
            reject(error);
        });
    });
}

function findByGoogleId(userId) {
    return new Promise((resolve, reject) => {
        userDataService.findByGoogleId(userId).then(userDB => {
            resolve(userDB)
        }, error => {
            reject(error);
        });
    });
}

module.exports = {
    registerLoginByGoogle,
    findByGoogleId,
    registerAccessByIdGoogle
}