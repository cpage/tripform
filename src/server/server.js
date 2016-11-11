var express = require('express');
var logger = require('winston');
var db = require('./app/db');
var config = require('./app/config');
var port = process.env.PORT || config.env.defaultPort;

db.connect(config.mongo.url).then(function (results) {
    var app = require('./app');
    app.listen(port, function () {
        logger.info('server listening on port ' + port);
    });
}).catch(function (err) {
    logger.error('error connecting to db' + err + '. Stack tracke: ' + err.stackTrace);
});