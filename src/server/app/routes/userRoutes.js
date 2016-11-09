var express = require('express');
var userRepo = require('../lib/users/userRepoMongo');
var userController = require('../controllers/userController')(userRepo);

module.exports = function() {
    var router = express.Router();

    router.param('id', userController.getUserForRequest)
    router.get('/', userController.getAll);
    router.post('/', userController.createUser);
    router.get('/:id', userController.getUserById);
    router.delete('/:id', userController.deleteUser);

    return router;
}();