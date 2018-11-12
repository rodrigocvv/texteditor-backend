const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const DB_URL = 'mongodb://' + process.env.DB_TEXTEDITOR_USER + ':' + process.env.DB_TEXTEDITOR_PASSWORD + '@' + process.env.DB_TEXTEDITOR_URL;

mongoose.connect(DB_URL, {
    useNewUrlParser: true
});

var userContentSchema = new mongoose.Schema({
    createDate: Date,
    title: String,
    text: String,
});

var googleUserSchema = new mongoose.Schema({
    sub: String,
    email: String,
    name: String,
    picture: String
});

let userDataSchema = new mongoose.Schema({
    googleUser: googleUserSchema,
    lastAccessDate: Date,
    createDate: Date,
    content: [userContentSchema]
}, { collection: 'usersData' }
);


module.exports = {
    mongoose,
    userDataSchema,
}