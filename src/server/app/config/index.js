var environmentConfig = require('./environment');
var mongoConfig = require('./mongo');
var proxyConfig = require('./proxy');

module.exports = {
    env: environmentConfig,
    mongo: mongoConfig,
    proxy: proxyConfig
};
