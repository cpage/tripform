var express = require('express');
var app = require('./app');
var logger = require('winston');

app.listen(3000, function() {
    logger.info('server listening on port 3000');
});
