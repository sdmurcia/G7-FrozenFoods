const listaProductos=require('../data/Listaproductos');
const main = {
    titulo: 'Frozeen Food',
    descripcion: 'E-commerce de productos congelados, pueden ir desde menus elaborados hasta productos crudos congelados. Personas que consumen los productos en el día a día, amas de casa con hijos de 6 a 18 años o adultos mayores.',

}
const mainController = {
    'index': (req,res) => {
        res.render("index", {'Productos':listaProductos});
    },
};

module.exports = mainController;