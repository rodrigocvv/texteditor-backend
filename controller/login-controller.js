const jwt = require('jsonwebtoken');
const passport = require('passport');

const googleLoginClient = require('../client/google-login-client');

function doLogin(req, res, next) {
    var loginStrategy = passport.authenticate('local', { session: false }, (err, user, info) => {
        // console.log('user: ' + JSON.stringify(user));
        if (err || !user) {
            return res.status(400).json({
                message: 'Something is not right',
                user: user
            });
        } else {
            // console.log('User => ' + JSON.stringify(user));
            const googleUserDB = {
                sub: user.sub,
                email: user.email,
                name: user.name,
                picture: user.picture
            };
            googleLoginClient.registerLoginByGoogle(googleUserDB).then(googleId => {
                req.login(user, { session: false }, (err) => {
                    if (err) {
                        res.send(err);
                    }
                    const token = jwt.sign({ id: googleId, provider: 'google' }, process.env.JWT_SECRET);
                    return res.json({ token });
                });

            });
        }
    });
    return loginStrategy(req, res, next);
}

module.exports = {
    doLogin
}