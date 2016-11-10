var environmentConfig = require('./environment');
var mongoConfig = require('./mongo');
var proxyConfig = require('./proxy');
var authConfig = require('./authConfig');

module.exports = {
    env: environmentConfig,
    mongo: mongoConfig,
    proxy: proxyConfig,
    auth: authConfig
};
