const res = require("express/lib/response");
const fs = require('fs');
const bcrypt = require('bcryptjs');
const path = require('path');

//función que trae los errores desde la ruta.
const { validationResult } = require('express-validator');


const usersController = {
    signIn: (req, res) => {
        res.render("signIn");
    },
    signUp: (req,res) => {
        res.render("signUp")
    },
    carrito: (req,res) => {
        res.render("carrito")
    },
    create: (req, res) => {
          let user = {
            nombre: req.body.name,
            apellido: req.body.last_name,
            email: req.body.email,
            password: req.body.password
          }
          console.log(user);
          let archivoUsers = fs.readFileSync(path.resolve(__dirname, '../data/users.json'), {
            encoding: 'utf-8'
          });
          let users;
          if (archivoUsers == "") {
            users = [];
          } else {
            users = JSON.parse(archivoUsers);
          };
    
          users.push(user);
          usersJSON = JSON.stringify(users, null, 2);
          fs.writeFileSync(path.resolve(__dirname, '../data/users.json'), usersJSON);
          res.redirect('/users/signIn');
        },
      access: (req,res) =>{
        const errors = validationResult(req);
        //return res.send(errors.mapped());
        
          let archivoUsuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/users.json')));
          let usuarioLogueado = archivoUsuarios.find(usuario => usuario.email == req.body.email)
          //return res.send(usuarioLogueado);
          req.session.usuario = usuarioLogueado;  //Guardar del lado del servidor
          return res.redirect('/'); 
  
        }        
        
}

module.exports = usersController