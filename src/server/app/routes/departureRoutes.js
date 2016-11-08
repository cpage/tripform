var express = require('express');
var departureController = require('../controllers/departureController');

var router = express.Router();

module.exports = router;

router.get('/', departureController.getAll);
