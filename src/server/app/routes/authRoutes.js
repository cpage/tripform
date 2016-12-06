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
    });

    router.post('/logout', function (req, res) {
        var message = '';
        if (req.user) {
            message = `User ${req.user.username} has been logged out`;
        } else {
            message = 'Session wiped.';
        }

        req.session.destroy();

        res.json({
            message: message
        });

    });
    return router;
} ();