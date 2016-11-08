var express = require('express');
var userController = require('../controllers/userController');

module.exports = function() {
    var router = express.Router();

    router.get('/', userController.getAll);

    return router;
}();