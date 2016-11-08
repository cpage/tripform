var User = require('../models/userModel');

module.exports = function () {

    var getAll = function (req, res) {
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

        res.json(users);
    };

    return {
        getAll: getAll
    };
} ();