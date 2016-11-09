var mongo = require('mongodb').MongoClient;
var mongoDb;

exports.connect = function (url) {

    var promise = mongo.connect(url);
    promise.then(function (db) {
        mongoDb = db;
    });

    return promise;

};

exports.db = function() {
    return mongoDb;
};
