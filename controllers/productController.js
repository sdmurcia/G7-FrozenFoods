// aca van todos los productos(con 6-8 estamos bien)
const listaProductos = [
    {
        id:1,
        titulo: "x",
        descripcion: "lorem",
        precio: "5",
        img: "albondigas.jpg"
    }
]

const productController = {
    product: (req,res) => {
        res.render("product", {listaProductos: listaProductos})
    }
}

module.exports = productController;