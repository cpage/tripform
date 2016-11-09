var express = require('express');
var logger = require('winston');

var userRepo = require('../lib/users/userRepoMongo');
var User = require('../models/userModel').User;

module.exports = function () {
    var router = express.Router();

    router.post('/', function (req, res) {
        var username = req.body.username;
        var password = req.body.password;

        userRepo.getUserByUsername(username)
            .then(function (u) {
                if (u) {
                    var user = new User(u);
                    return res.json({valid: user.validatePassword(password)});
                } else {
                    return res.json({message: 'user does not exist'});
                }
            })
            .catch(function(err) {
               var msg = 'error validating password: ' + err;
               logger.error(msg);
               res.status(500).json({message: msg}); 
            });
    });

    return router;
} ();