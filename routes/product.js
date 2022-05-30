var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');
const multer = require('multer');
const path = require ('path');
const { body } = require('express-validator');



//****** configurando multer****
let storage=multer.diskStorage({
    destination: (req,res,cb)=>{
        const rutaimagenes = path.join(__dirname,('../public/images/products'));
        cb(null, rutaimagenes);
    },
    filename: (req,file,cb)=>{
        const fileName=`${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null,fileName);
    }
})
const uploadFile = multer({storage});
//*****configurando validaciones de express-validator */
const validationsNewProduct = [
    body('productName').notEmpty().withMessage('Escribe un nombre'),
    body('productCategory').notEmpty().withMessage('Selecciona la categoría'),
    body('productDescription').notEmpty().withMessage('Escribe la descripción'),
    body('productPrice').notEmpty().withMessage('Escribe el precio'),
    body('productDiscount').notEmpty().withMessage('Escribe el descuento'),
    body('imageProduct').custom((value, {req})=>{
        let file = req.file;
        let acceptedExtensions = ['.jpg','.png','.gif'];
        
        if(!file){
            throw new Error ('Tienes que subir una imagen');
        } else{
            let fileExtensions=path.extname(file.originalname);
        if (!acceptedExtensions.includes(fileExtensions)){
            throw new Error (`Los formatos aceptados son: ${acceptedExtensions.join(', ')}`);
        }
    }
        return true;
    })
];

const validationsEditProduct = [
    body('productName').notEmpty().withMessage('Escribe un nombre'),
    body('productCategory').notEmpty().withMessage('Selecciona la categoría'),
    body('productDescription').notEmpty().withMessage('Escribe la descripción'),
    body('productPrice').notEmpty().withMessage('Escribe el precio'),
    body('productDiscount').notEmpty().withMessage('Escribe el descuento'),
  ];



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