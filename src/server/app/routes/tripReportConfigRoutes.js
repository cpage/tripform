var express = require('express');
var tripReportConfigController = require('../controllers/tripReportConfigController');
var auth = require('../lib/auth');

var router = express.Router();

module.exports = router;

router.use(auth.validAuth);
router.get('/', tripReportConfigController.getAll);
router.get('/:id', tripReportConfigController.getById);
router.post('/', tripReportConfigController.create);
router.put('/:id', tripReportConfigController.update);
router.delete('/:id', tripReportConfigController.delete);