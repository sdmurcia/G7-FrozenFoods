var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');
const path = require('path');

//Requiero el paquete para comparar las contraseñas  
const bcrypt = require('bcryptjs');
//Requiero fs
const fs = require('fs');
//Requiero el paquete expres-validator
const { body } = require('express-validator');
//validacion de registro

// middlewares
const validations = require('../middlewares/validationRegister');
const uploadFile = require('../middlewares/multerMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');


//declaro el archivo de usuarios
let usersList = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/users.json')))


router.get('/signIn', guestMiddleware, usersController.signIn)
router.post('/signIn',usersController.access)
router.get('/signUp', guestMiddleware, usersController.signUp)
router.post('/signUp',uploadFile.single('avatar'),[validations],usersController.create)
// Perfil de Usuario
router.get('/profile', authMiddleware, usersController.profile);

// Logout
router.get('/logout', usersController.logout);

//Delete
router.delete('/profile/:userId', usersController.destroy);

module.exports = router;