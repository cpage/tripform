var User = require('../../models/userModel');
var Promise = require('promise');

module.exports = function () {
    var getAll = function () {
        return new Promise(function (resolve, reject) {
            var users = [
                new User({
                    username: 'cpage1'
                }),
                new User({
                    username: 'cpage3'
                }),
                new User({
                    username: 'cpage5'
                })
            ];
            resolve(users);

        });

    };

    return {
        getAll: getAll
    };
} ();
