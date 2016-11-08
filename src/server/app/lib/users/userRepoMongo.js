var Promise = require('promise');
var User = require('../../models/userModel');
var mongo = require('mongodb').MongoClient;
var config = require('../../config');
var Promise = require('promise');

module.exports = function () {

    var connectPromise = new Promise(function(resolve, reject) {
        mongo.connect(config.mongo.url, function(err, db) {
            if(err) return reject(err);
            resolve(db);
            db.collection('users').find({}).toArray();
        })
    });

    var getAll = function() {
        connectPromise.then(function(db) {
            db.
        })
    }

} ();