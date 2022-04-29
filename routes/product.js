var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');
const multer = require('multer');
const path = require ('path');

//****** configurando multer****
let storage=multer.diskStorage({
    destination: (req,res,cb)=>{
        const rutaimagenes = path.join(__dirname,('../public/images'));
        cb(null, rutaimagenes);
    },
    filename: (req,file,cb)=>{
        const fileName=`${Date.now()}img${path.extname(file.originalname)}`;
        cb(null,fileName);
    }
})
const uploadFile = multer({storage});

//muestra detalles y productos
router.get('/allproducts', productController.allProducts);

router.get('/detalle/:productId', productController.product);

//Cración de nuevos productos
router.get('/newproduct', productController.newProduct);
router.post('/newproduct', uploadFile.single('imageProduct'), productController.saveNewProduct);


//Edición de productos
router.get('/editproduct/:productId', productController.editProduct);
router.put('/editproduct/:productId', uploadFile.single('imageProduct'), productController.updateProduct);

//eliminar productos
router.delete('/editproduct/:productId', productController.destroy);
module.exports = router;

//carrito
router.get('/carrito', productController.carrito);