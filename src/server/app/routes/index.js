var express = require('express');

module.exports = function(app) {
    app.use('/api/departures/', require('./departureRoutes'));
    app.use('/api/users/', require('./userRoutes'));
};
