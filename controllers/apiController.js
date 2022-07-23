let db = require("../database/models/");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const { promiseImpl } = require("ejs");
const Usuario = db.Usuario;
const Producto = db.Producto;




const apiController = {
    'allUsers': (req, res) => {
        Usuario.findAll({
            attributes: { exclude: ['password', 'avatar'] }
        })
            .then(usuarios => {
                let users1 = [];
                for (let i = 0; i < usuarios.length; i++) {
                    users1[i] = {
                        id: usuarios[i].id,
                        nombre: usuarios[i].name,
                        apellido: usuarios[i].lastName,
                        email: usuarios[i].email,
                        detail: `http://localhost:3050/api/users/${usuarios[i].id}`
                    }
                }
                return res.status(200).json({
                    count: usuarios.length,
                    users: users1,
                    status: 200
                })
            }).catch(error => res.send(error))
    },
    'userDetail': (req, res) => {
        db.Usuario.findByPk(req.params.id, {
            attributes: { exclude: ['password'] }
        })
            .then(usuario => {
                return res.status(200).json({
                    id: usuario.id,
                    name: usuario.name,
                    lastName: usuario.lastName,
                    email: usuario.email,
                    avatar: usuario.avatar,
                    VerImagen: `http://localhost:3050/images/avatars/${usuario.avatar}`,
                    status: 200
                })
            }).catch(error => res.send(error))
    },
    'allProducts': (req, res) => {
        let contador=Producto.findAll({
            include: ['category'],
            group: ['category.categoria'],
            attributes: ['category.categoria', [sequelize.fn('COUNT', 'category.categoria'), 'Total']],
          });
        let productos=Producto.findAll({
            include: ['category'],
            attributes: { exclude: ['descuento', 'idcategoria', 'visitados'] }
        });
        Promise.all ([productos, contador])
               .then(([productos, contador]) => {
                //console.log(contador[0].dataValues.category.dataValues.categoria + " y " + contador[0].dataValues.Total);
                let allProducts = [];
                let countByCat=[];
                for (let i = 0; i < productos.length; i++) {
                    allProducts[i] = {
                        id: productos[i].id,
                        name: productos[i].producto,
                        description: productos[i].descripcion,
                        image: productos[i].image,
                        price: productos[i].precio,
                        relation : productos[i].category,
                        detail: `http://localhost:3050/api/products/${productos[i].id}`
                    }
                };
                for (let i = 0; i < contador.length; i++) {
                    countByCat[i] = {
                        Categoria:contador[i].dataValues.category.dataValues.categoria,
                        Total:contador[i].dataValues.Total
                    };
                }   
                return res.status(200).json({
                    count: productos.length,
                    countByCategory: countByCat,
                    products: allProducts,
                    status: 200
                })
            }).catch(error => res.send(error))
    },
    'productDetail': (req, res) => {
        db.Producto.findByPk(req.params.id,
            {
                include: ['category']
            })
            .then(producto => {
                return res.status(200).json({
                    data: {
                        id: producto.id,
                        name: producto.producto,
                        description: producto.descripcion,
                        price: producto.precio,
                        image: producto.image,
                        discount: producto.descuento,
                        IdCategory: producto.idCategoria,
                        relation:producto.category,
                        VerImagen: `http://localhost:3050/images/products/${producto.image}`,
                    },
                    status: 200
                })
            }).catch(error => res.send(error));
    },

}


module.exports = apiController;