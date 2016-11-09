var logger = require('winston');

module.exports = function (userRepo) {
    var repo = userRepo;
    var getAll = function (req, res) {
        repo.getAll()
            .then(function (users) {
                res.json(users);
            });
    };

    var createUser = function (req, res) {
        repo.createUser(req.body)
            .then(function (results) {
                res.status(201).json(results);
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
        getUserById: getUserById,
        deleteUser: deleteUser,
        getUserForRequest: getUserForRequest
    };
};