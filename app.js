const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const authRoute = require('./routes/auth-route');
const dataRoute = require('./routes/data-route');

require('./passport');
const passport = require('passport');

app.use(cors());
app.use(bodyParser.json());

app.use('/auth', authRoute);
app.use('/data', passport.authenticate('jwt', {session: false}), dataRoute);

const port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('texteditor-backend listening on port ' + port + '!');
});