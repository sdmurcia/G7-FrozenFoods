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
//declaro el archivo de usuarios
let usersList = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/users.json')))


router.get('/signIn', usersController.signIn)
router.post('/signIn',usersController.access)
router.get('/signUp', usersController.signUp)
router.post('/signUp',usersController.create)


module.exports = router;