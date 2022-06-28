const path = require("path");
const { body } = require("express-validator");

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

module.exports=validationsNewProduct;