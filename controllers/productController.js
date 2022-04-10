const listaProductos=require('./Listaproductos');

const productController = {
    'product': (req,res) => {
        let producto=listaProductos.find(productos=>productos.id==req.params.productId);
        /*console.log(listaProductos);*/
        res.render("product", {'productDetail':producto, 'Productos':listaProductos});
    },
    'newProduct': (req,res) => {
        res.render("newProduct")
    },
    'editProduct': (req,res) => {
        res.render("editProduct")
    },
}

module.exports = productController;