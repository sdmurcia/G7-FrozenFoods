var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');

router.get('/detalle/:productId', productController.product);
router.get('/newproduct', productController.newProduct);
router.get('/editproduct', productController.editProduct);

module.exports = router;