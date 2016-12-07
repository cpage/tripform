var User = require('../../models/userModel');
var ObjectID = require('mongodb').ObjectID;
var config = require('../../config');
// var m = require('mongodb').Db;
// var db = new m('', {});
// db.collection('users').update()

exports.getAll = function () {
    return getUsersCollection().find({}).toArray();
};

exports.getUserById = function (id) {
    var oid = new ObjectID(id);
    return getUsersCollection().find({ _id: oid }).limit(1).next();
};

exports.getUserByUsername = function (username) {
    return getUsersCollection().find({ username: username }).limit(1).next();
};

exports.getUsersByTeam = function(team) {
    return getUsersCollection().find({ p15Team: team}).toArray();
};

exports.createUser = function (user) {
    return getUsersCollection().insertOne(user);
};

exports.updateUser = function (user) {
    user._id = new ObjectID(user._id);
    if(user.password === '') {
        delete user.password;
    }
    return getUsersCollection().updateOne({ _id: user._id },
        {
            $set: user
        });

};

exports.deleteUser = function (id) {
    return getUsersCollection().deleteOne({ _id: new ObjectID(id) });

};

var getUsersCollection = function () {
    return require('../../db').db().collection('users');
};
