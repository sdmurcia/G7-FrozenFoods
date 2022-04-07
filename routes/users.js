var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/signIn', usersController.signIn)
router.get('/signUp', usersController.signUp)
router.get('/carrito', usersController.carrito)

module.exports = router;