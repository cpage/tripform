var express = require('express');
var logger = require('winston');
var auth = require('../lib/auth');
var authConfig = require('../config').auth;
var userRepo = require('../lib/users/userRepoMongo');
var User = require('../models/userModel').User;

module.exports = function () {
    var router = express.Router();

    router.post('/', auth.authenticate(), function (req, res) {
        res.json({ message: 'logged in as ' + req.user.username });
        /*
        var username = req.body.username;
        var password = req.body.password;

        userRepo.getUserByUsername(username)
            .then(function (u) {
                if (u) {
                    var user = new User(u);
                    if (user.validatePassword(password)) {
                        var payload = { id: user._id };
                        var token = jwt.encode(payload, authConfig.jwtSecret);
                        return res.json({ valid: true, token: token });
                    }
                    return res.json({ valid: false, token: '' });
                } else {
                    return res.json({ message: 'user does not exist' });
                }
            })
            .catch(function (err) {
                var msg = 'error validating password: ' + err;
                logger.error(msg);
                res.status(500).json({ message: msg });
            });
            */
    });

    return router;
} ();