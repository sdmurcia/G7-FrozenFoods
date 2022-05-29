const path = require("path");
const { body } = require("express-validator");

module.exports = [
  body("email").notEmpty().withMessage("Tienes que escribir un email"),
  body("name").notEmpty().withMessage("Tienes que escribir un nombre"),
  body("last_name").notEmpty().withMessage("Tienes que escribir un apellido"),
  body("password").notEmpty().withMessage("Tienes que escribir una contraseña"),
];
