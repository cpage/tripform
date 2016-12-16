var repo = require('../lib/tripReportConfig');
var _ = require('lodash');
var memCache = require('../lib/cache');

var getAllConfigs = function () {

    return memCache.wrap('tripReportConfigs', function () {
        return repo.getAll();
    });
};

var invalidateCache = function() {
    memCache.del('tripReportConfigs');
};

exports.getAll = function (req, res) {
    return getAllConfigs().then(function (configs) { return res.json(configs); });
};

exports.getById = function (req, res) {

    return getAllConfigs().then(function (configs) {
        var idToFind = parseInt(req.params.id);
        configs.forEach(function (config) {
            if (config._id === idToFind) {
                return res.json(config);
            }
        });
    });

};

exports.create = function (req, res) {
    return repo.create(req.body).then(function (results) {
        invalidateCache();
        return res.status(201).json(results.ops[0]);
    });
};

exports.update = function (req, res) {
    return repo.update(req.body).then(function (results) {
        invalidateCache();
        res.json(req.body);
    });
};

exports.delete = function (req, res) {
    return repo.delete(parseInt(req.params.id)).then(function (results) {
        invalidateCache();
        res.json(results);
    });
};


