var express = require('express');
var departureController = require('../controllers/departureController');
var auth = require('../lib/auth');

var router = express.Router();

module.exports = router;

router.use(auth.validAuth);
router.get('/', departureController.getAll);
router.get('/my', departureController.getMyDepartures);
