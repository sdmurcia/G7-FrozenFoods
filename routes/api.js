var express = require('express');
var router = express.Router();
const apiController = require('../controllers/apiController');




//Peticiones de usuarios
router.get('/users', apiController.allUsers);
router.get('/users/:id', apiController.userDetail);


//Peticiones de productos
router.get('/products', apiController.allProducts);
router.get('/products/:id', apiController.productDetail);





module.exports = router;