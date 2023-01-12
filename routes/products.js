var express = require('express');
var router = express.Router();
var controller = require('../controllers/productsController');
/* GET users listing. */
router.get('/list', controller.list);

module.exports = router;
