var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');
const path = require('path');

//requiero multer para poder procesar archivos
const multer = require('multer')
const storage = multer.diskStorage({
  destination: (req,file,cb) => {
    cb(null,'./public/avatars')
  },
  filename: (req,file,cb) => {
    let fileName = `${Date.now()}_img${path.extname(file.originalname)}`
      cb(null, fileName)
  }
})

const uploadFile = multer({storage})
//Requiero el paquete para comparar las contraseñas  
const bcrypt = require('bcryptjs');
//Requiero fs
const fs = require('fs');
//Requiero el paquete expres-validator
const { body } = require('express-validator');
//validacion de registro

validations = [
  body('email').notEmpty().withMessage('Tienes que escribir un email'),
  body('name').notEmpty().withMessage('Tienes que escribir un nombre'),
  body('last_name').notEmpty().withMessage('Tienes que escribir un apellido'),
  body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
]
//declaro el archivo de usuarios
let usersList = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/users.json')))


router.get('/signIn', usersController.signIn)
router.post('/signIn',usersController.access)
router.get('/signUp', usersController.signUp)
router.post('/signUp',uploadFile.single('avatar'),[validations],usersController.create)


module.exports = router;