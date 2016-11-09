var express = require('express');
var logger = require('winston');
var db = require('./app/db');
var config = require('./app/config');

db.connect(config.mongo.url).then(function (results) {
    var app = require('./app');
    app.listen(3000, function () {
        logger.info('server listening on port 3000');
    });
}).catch(function (err) {
    logger.error('error connecting to db' + err + '. Stack tracke: ' + err.stackTrace);
});