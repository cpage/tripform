var express = require('express');

module.exports = function(app) {
    app.use('/api/departures/', require('./departureRoutes'));
    app.use('/api/users/', require('./userRoutes'));
    app.use('/api/auth/', require('./authRoutes'));
    app.use('/api/tripReportConfigs', require('./tripReportConfigRoutes'));
};
