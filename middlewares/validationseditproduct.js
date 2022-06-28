const path = require("path");
const { body } = require("express-validator");

const validationsEditProduct = [
    body('productName').notEmpty().withMessage('Escribe un nombre'),
    body('productCategory').notEmpty().withMessage('Selecciona la categoría'),
    body('productDescription').notEmpty().withMessage('Escribe la descripción'),
    body('productPrice').notEmpty().withMessage('Escribe el precio'),
    body('productDiscount').notEmpty().withMessage('Escribe el descuento'),
  ];

module.exports=validationsEditProduct;