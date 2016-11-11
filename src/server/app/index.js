var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var passport = require('passport');
var auth = require('./lib/auth');

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(morgan('dev'));

require('./routes')(app);
app.use(auth.initialize());

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