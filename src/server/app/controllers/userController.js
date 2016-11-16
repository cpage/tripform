var logger = require('winston');
var User = require('../models/userModel').User;

module.exports = function (userRepo) {
    var repo = userRepo;
    var getAll = function (req, res) {
        repo.getAll()
            .then(function (users) {
                res.json(users.map(function (u) { delete u.password; return u; }));
            });
    };

    var createUser = function (req, res) {
        var u = new User(req.body);

        u.updatePassword(req.body.password);
        repo.createUser(u)
            .then(function (results) {
                delete results.ops[0].password;
                res.status(201).json(results.ops[0]);
            })
            .catch(function (err) {
                logger.error('error creating user for ' + req.body + '. Error: ' + err);
                res.status(400).send('Unable to create user');
            });
    };

    var getUserById = function (req, res) {
        res.json(req.user);
    };

    var getUserForRequest = function (req, res, next, id) {
        repo.getUserById(id).then(function (user) {
            if (user) {
                req.user = user;
                next();
            } else {
                res.status(404).json({ message: 'User ' + req.params.id + ' not found.' });
            }
        })
            .catch(function (err) {
                next(err);
            });
    };

    var updateUser = function (req, res) {
        var user = new User(req.body);
        user.updatePassword(req.body.password);
        repo.updateUser(user)
            .then(function (results) {
                delete user.password;
                res.json(user);
            })
            .catch(function (err) {
                logger.error('error updating user id ' + user._id + '. Error: ' + err);
                res.status(500).send(err);
            });
    };

    var deleteUser = function (req, res) {
        var userId = req.user._id;
        repo.deleteUser(userId)
            .then(function (results) {
                res.json(results);
            })
            .catch(function (err) {
                logger.error('error deleting user id ' + userId + '. Error: ' + err);
                res.status(500).send(err);
            });
    };

    return {
        getAll: getAll,
        createUser: createUser,
        updateUser: updateUser,
        getUserById: getUserById,
        deleteUser: deleteUser,
        getUserForRequest: getUserForRequest
    };
};