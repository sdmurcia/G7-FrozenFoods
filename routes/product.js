var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.product)

module.exports = router;