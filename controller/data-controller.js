const userDataClient = require('../client/data-client');


function updateUserData(req, res) {
    const content = req.body.content;
    const googleId = req.user.sub;
    // console.log('Content => ' + JSON.stringify(content));
    userDataClient.updateUserData(googleId, content).then(userDB => {
        if (userDB) {
            // console.log('retornondo => ' + JSON.stringify(userDB.content));
            res.send(userDB.content);
        } else {
            res.sendStatus(401);
        }
    }).catch(error => res.sendStatus(401));
}

function getUserData(req, res) {
    userDataClient.getContent(req.user.sub).then(result => {
        if (result){
            // result.forEach(element => {
            //     delete element['_id'];
            // });
            res.send(result);
        } else {
            res.send([]);
        }
    });
}


module.exports = {
    updateUserData,
    getUserData
}