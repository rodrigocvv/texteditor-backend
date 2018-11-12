const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const gal = require('google-auth-library');
const googleLoginClient = require('./client/google-login-client');


passport.use(new LocalStrategy({
    usernameField: 'token',
    passwordField: 'appId'
},
    function (token, appId, done) {
        validateGoogleToken(token).then(user => {
            // console.log('JSON Validado => ' + response);
            if (user){
                return done(null, user);
            } else {
                return done('Falha ao autenticar', null);
            }
        });
    }
));


function validateGoogleToken(googleToken) {
    return new Promise((resolve, reject) => {
        let returnValue = false;
        let CLIENT_ID = process.env.GOOGLE_TEXTEDITOR_CLIENT_ID;
        let SECRET_ID = process.env.GOOGLE_TEXTEDITOR_SECRET;
        const client = new gal.OAuth2Client(
            CLIENT_ID,
            SECRET_ID
        );
        client.verifyIdToken({
            idToken: googleToken,
            audience: CLIENT_ID
        }, (err, login) => {
            if (login != null) {
                var payload = login.getPayload();
                // console.log('Retorno do google => ' + JSON.stringify(payload));
                // var userid = payload['sub'];
                resolve(payload);
            } else {
                console.log('Erro => ' + err);
                resolve(null);
            }
        });
    });

}

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
},
    function (jwtPayload, cb) {
        // console.log('id do google => ' + jwtPayload.id);
        googleLoginClient.findByGoogleId(jwtPayload.id).then(userData => {
            if (!userData){
                return cb('User not found!');
            } else {
                googleLoginClient.registerAccessByIdGoogle(jwtPayload.id).then(userDataUpdated => {
                    return cb(null, userDataUpdated.googleUser);
                });
            }
        }), error => {
            return cb(error);
        };
    }
));
