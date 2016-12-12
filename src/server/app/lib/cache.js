var cacheManager = require('cache-manager');

module.exports = cacheManager.caching({
    store: 'memory',
    ttl: 1000 * 60 * 10,
    max: 1000
});