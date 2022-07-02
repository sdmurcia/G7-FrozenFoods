const res = require("express/lib/response");
const fs = require("fs");
const bcryptjs = require("bcryptjs");
const path = require("path");

//bases de datos
let db = require("../database/models/");
const { Op } = require("sequelize");
const Usuario = db.Usuario;

//función que trae los errores desde la ruta.
const { validationResult } = require("express-validator");
const req = require("express/lib/request");

const usersController = {
	signIn: (req, res) => {
		res.render("signIn", { req: req });
	},
	signUp: (req, res) => {
		res.render("signUp");
	},

	create:  (req, res) => {
		const resultValidation = validationResult(req);
		if (resultValidation.errors.length > 0) {
			return res.render("signUp", {
				errors: resultValidation.mapped(),
				oldData: req.body
			})
		}

		Usuario.findOne({ where: { email: req.body.email } }).then((userInDB) => {
			console.log(userInDB);
			if (userInDB != null) {
				console.log(userInDB);
				return res.render('signUp', {
					errors: {
						email: {
							msg: 'Este email no está disponible'
						}
					},
					oldData: req.body
				});
			} else {
				Usuario.create({
					email: req.body.email,
					name: req.body.name,
					lastName: req.body.last_name,
					password: bcryptjs.hashSync(req.body.password, 10),
					avatar: req.file.filename
				})


				return res.redirect('/users/signIn');

			}
		});



	},
	access: (req, res) => {
		Usuario.findOne({ where: { email: req.body.email } }).then((userToLogin) => {



			if (userToLogin) {
				let passwordCompare = bcryptjs.compareSync(req.body.password, userToLogin.password);
				if (passwordCompare) {
					delete userToLogin.password;
					req.session.userLogged = userToLogin;
					console.log(req.session.userLogged);

					if (req.body.rememberMe) {
						res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 2 })
					}

					return res.redirect('/users/profile');
				} else {
					return res.render('signIn', {
						errors: {
							password: {
								msg: 'La contraseña es incorrecta'
							}
						}
					});
				}
			} else {

				return res.render('signIn', {
					errors: {
						email: {
							msg: 'email no registrado'
						}
					}
				})
			};
		})
	},
	profile: (req, res) => {
		return res.render('profile', {
			user: req.session.userLogged
		});
	},
	logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/users/SignIn');
	},
	destroy: (req, res)=>{
		Usuario.destroy({
            where: {id:req.params.userId}
        });
        res.clearCookie('userEmail');
		req.session.destroy();
		
        return res.redirect('/users/SignUp');
	}
};

module.exports = usersController;
