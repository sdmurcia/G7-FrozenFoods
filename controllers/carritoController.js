const listaProductos=require('./Listaproductos')
const carritoController = {
    carrito: (req, res) => {
        res.render("carrito", {'Productos':listaProductos});
        
    }
}

module.exports = carritoController