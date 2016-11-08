var express = require('express');
var userRepo = require('../lib/users/userRepoMemory');
var userController = require('../controllers/userController')(userRepo);

module.exports = function() {
    var router = express.Router();

    router.get('/', userController.getAll);

    return router;
}();