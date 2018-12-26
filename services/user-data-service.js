const db = require("../db");

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

function findAll() {
    return new Promise((resolve, reject) => {
        const UserData = db.mongoose.model('userData', db.userDataSchema, 'userData');
        UserData.find({}, 'googleUser lastAccessDate createDate content', (err, userDataList) => {
            if (err) {
                reject(err);
            } else {
                resolve(userDataList);
            }
        });
    });
}


module.exports = {
    saveUser,
    findByGoogleId,
    findAll
}