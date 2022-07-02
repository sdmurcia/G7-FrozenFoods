let db = require ("../database/models/index");
const Producto=db.Producto;
const { Op } = require("sequelize");




const main = {
    titulo: 'Frozeen Food',
    descripcion: 'E-commerce de productos congelados, pueden ir desde menus elaborados hasta productos crudos congelados. Personas que consumen los productos en el día a día, amas de casa con hijos de 6 a 18 años o adultos mayores.',

}
const mainController = {
    'index': (req,res) => {
        
        let ultimosVisitados=Producto.findAll({where:{Visitados:"Si"}});
        let enOferta=Producto.findAll({where:{descuento:{[Op.ne]:[0,'']}}});
        Promise.all([ultimosVisitados, enOferta]).then(([ultimosVisitados, enOferta])=>{
            res.render("index", {'visitados':ultimosVisitados, 'enOferta':enOferta});
        })
        
    },
};

module.exports = mainController;