var User = require('../../models/userModel');
var ObjectID = require('mongodb').ObjectID;
var config = require('../../config');
//var m = require('mongodb').Db;
//var db = new m('', {});
//db.collection('users').deleteOne()

exports.getAll = function () {
    return getUsersCollection().find({}).toArray();;
};

exports.getUserById = function(id) {
    var oid = new ObjectID(id);
    var coll = getUsersCollection();
    coll.find({_id: oid});
    return getUsersCollection().find({_id: oid}).limit(1).next();
};

exports.getUserByUsername = function(username) {
    return getUsersCollection().find({username: username}).limit(1).next();
};

exports.createUser = function(user) {
    return getUsersCollection().insertOne(user);
};

exports.deleteUser = function(id) {
    return getUsersCollection().deleteOne({_id: new ObjectID(id)});

};

var getUsersCollection = function() {
    return require('../../db').db().collection('users');
};
