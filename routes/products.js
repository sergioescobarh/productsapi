var express = require('express');
var router = express.Router();
var controller = require('../controllers/productsController');
/* GET product listing. */
router.get('/list', controller.list);
router.get('/:id',controller.showOne);
router.get('/search',controller.search);
router.post('/', controller.store);
router.delete('/:id', controller.delete);
router.put('/:id', controller.update)
module.exports = router;
