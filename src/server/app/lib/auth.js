var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var userRepo = require('./users/userRepoMongo');
var User = require('../models/userModel').User;
var authConfig = require('../config').auth;
var logger = require('winston');

module.exports = function () {
    return {
        initialize: function (app) {
            app.use(passport.initialize());
            app.use(passport.session());

            passport.serializeUser(function(user, done) {
                done(null, user._id);
            });

            passport.deserializeUser(function(id, done) {
                userRepo.getUserById(id).then(function(data) {
                    if(!data) {
                        return done(null, false);
                    }

                    return done(null, new User(data));
                });
            });

            passport.use(new Strategy(function (username, password, done) {
                userRepo.getUserByUsername(username).then(function (data) {
                    if (!data) {
                        logger.info('[LocalStrategy] username not found, return false');
                        return done(null, false);
                    }

                    var user = new User(data);
                    if (!user.validatePassword(password)) {
                        logger.info('[LocalStrategy] passwords don\'t match, return false');
                        return done(null, false);
                    }


                    logger.debug('[LocalStrategy] all good, returning the user');
                    return done(null, user);
                });
            }));

        },
        authenticate: function () {
            if (authConfig.isEnabled)
                return passport.authenticate('local');

            return function (req, res, next) {
                return next();
            };
        },
        validAuth: function(req, res, next) {
            if(req.isAuthenticated()) {
                return next();
            }
            res.sendStatus(401);
        }
    };
} ();