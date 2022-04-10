const res = require("express/lib/response");

// aca van a estar todos los usuarios, con su informacion y los productos que tenga en el carrito. Estos datos todavía no son enviados al view.
const users = [
    {
        id:1,
        nombre:"x",
        domicilio:"x",
        carrito:"x",
        email:"x",
        contraseña:"x"
    }
]

const usersController = {
    signIn: (req, res) => {
        res.render("signIn");
    },
    signUp: (req,res) => {
        res.render("signUp")
    },
    carrito: (req,res) => {
        res.render("carrito")
    }
}

module.exports = usersController