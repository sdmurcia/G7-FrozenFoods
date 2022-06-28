var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');
const path = require ('path');




//******requiriendo Middlewares****
const uploadFile = require('../middlewares/multerprodMiddleware');
const validationsNewProduct = require('../middlewares/validationnewproduct');
const validationsEditProduct = require('../middlewares/validationseditproduct');



//muestra detalles y productos
router.get('/allproducts', productController.allProducts);

router.get('/detalle/:productId', productController.product);

//Cración de nuevos productos
router.get('/newproduct', productController.newProduct);
router.post('/newproduct', uploadFile.single('imageProduct'), validationsNewProduct, productController.saveNewProduct);


//Edición de productos
router.get('/editproduct/:productId', productController.editProduct);
router.put('/editproduct/:productId', uploadFile.single('imageProduct'), validationsEditProduct, productController.updateProduct);

//eliminar productos
router.delete('/editproduct/:productId', productController.destroy);


//carrito
router.get('/carrito', productController.carrito);

module.exports = router;