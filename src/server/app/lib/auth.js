var passport = require('passport');
var passportJWT = require('passport-jwt');
var userRepo = require('./users/userRepoMongo');
var authConfig = require('../config').auth;
var ExtractJwt = passportJWT.ExtractJwt;
var Strategy = passportJWT.Strategy;
var params = {
    secretOrKey: authConfig.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeader()
};

module.exports = function () {
    var strategy = new Strategy(params, function (payload, done) {
        var user = userRepo.getUserById(payload.id).then(function (user) {
            if (user) {
                return done(null, user);
            } else {
                return done(new Error('User not found'), null);
            }
        });
    });
    passport.use(strategy);
    return {
        initialize: function () {
            return passport.initialize();
        },
        authenticate: function () {
            if(authConfig.isEnabled)
                return passport.authenticate('jwt', authConfig.jwtOptions);
            
            return function(req, res, next) {
                return next();
            };
        }
    };
} ();