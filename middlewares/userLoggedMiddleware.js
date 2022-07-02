let db = require("../database/models/");
const Usuario = db.Usuario;

async function userLoggedMiddleware(req, res, next) {

    res.locals.isLogged = false;
    let userFromCookie=false;
    let emailInCookie = req.cookies.userEmail;
    if(emailInCookie){
    userFromCookie= await Usuario.findOne({ where: { email: emailInCookie } });
    };

        if (userFromCookie) {
            req.session.userLogged = userFromCookie;
        }

        if (req.session.userLogged) {
            res.locals.isLogged = true;
            res.locals.userLogged = req.session.userLogged;
        }
    

    next();



}
module.exports = userLoggedMiddleware;