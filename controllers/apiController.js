


let db = require("../database/models/");
const { Op } = require("sequelize");
const Usuario = db.Usuario;
const Producto=db.Producto;

const apiController = {
    'allUsers': (req,res) =>{
        Usuario.findAll({
            attributes: {exclude: ['lastName','password','avatar']}
        })      
                .then(usuarios => {
                return res.status(200).json({
                count: usuarios.length,    
                data: usuarios,
                status: 200
                })
            }).catch(error => res.send(error))
    },
    'userDetail': (req, res) => {
        db.Usuario.findByPk(req.params.id,{
            attributes: {exclude: ['password']}
        })
        .then(usuario => {
            return res.status(200).json({
                data: usuario,
                status: 200
                })
        }).catch(error => res.send(error))        
    },
    'allProducts': (req, res) => {
        Producto.findAll({
            include: ['category'],
            attributes: {exclude: ['precio','image','descuento', 'idcategoria', 'visitados']}
        })
            .then(productos => {
                return res.status(200).json({
                count: productos.length,    
                data: productos,
                status: 200
                })
            }).catch(error => res.send(error))
    },
    'productDetail': (req, res) => {
        db.Producto.findByPk(req.params.id,
            {
                include : ['category']
            })
            .then(producto => {
                return res.status(200).json({
                    data: producto,
                    status: 200
                    })
            }).catch(error => res.send(error));
    },

}


module.exports = apiController;