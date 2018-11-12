const db = require("../db");

function insertUserData(userData) {
    return new Promise((resolve, reject) => {
        const UserData = db.mongoose.model('userData', db.userDataSchema, 'userData');
        let userDataDB = new UserData(userData);
        userDataDB.save(function (err, result) {
            if (err) {
                console.error('Erro nao executar o método insertUserData => ' + err);
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

function saveUser(user) {
    return new Promise((resolve, reject) => {
        const UserData = db.mongoose.model('userData', db.userDataSchema, 'userData');
        let userData = new UserData(user);
        userData.save(function (err, result) {
            if (err) {
                console.error('Erro nao executar o método saveUser => ' + err);
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

function findByUserId(userId) {
    return new Promise((resolve, reject) => {
        const UserData = db.mongoose.model('userData', db.userDataSchema, 'userData');
        UserData.findOne({ 'userId': userId }, 'userId userName content', (err, userData) => {
            if (err) {
                reject(err);
            } else {
                resolve(userData);
            }
        });
    });
}

function findByGoogleId(googleId) {
    return new Promise((resolve, reject) => {
        const UserData = db.mongoose.model('userData', db.userDataSchema, 'userData');
        UserData.findOne({ 'googleUser.sub': googleId }, 'googleUser lastAccessDate createDate content', (err, userData) => {
            if (err) {
                reject(err);
            } else {
                resolve(userData);
            }
        });
    });
}


module.exports = {
    insertUserData,
    findByUserId,
    saveUser,
    findByGoogleId
}