var express = require('express');
var session = require('express-session');
var MongoSessionStore = require('connect-mongodb-session')(session);

var bodyParser = require('body-parser');
var morgan = require('morgan');
var auth = require('./lib/auth');

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
//app.use(morgan('dev'));
app.use(session({
    name: 'appSession',
    secret: 'superdupersecret',
    store: new MongoSessionStore({
        uri: 'mongodb://localhost:27017/tripform',
        collection: 'sessions'
    }),
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        maxAge: 60 * 60 * 1000        
    }

}));

auth.initialize(app);
require('./routes')(app);


app.use(express.static('./src/client/'));
app.use(express.static('./'));
app.use(express.static('./tmp'));
// Any invalid calls for templateUrls are under app/* and should return 404
// app.use('/app/*', function (req, res, next) {
//     four0four.send404(req, res);
// });
// Any deep link calls should return index.html
app.use('/*', express.static('./src/client/index.html'));


module.exports = app;