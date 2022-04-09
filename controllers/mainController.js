const main = {
    titulo: 'Frozeen Food',
    descripcion: 'E-commerce de productos congelados, pueden ir desde menus elaborados hasta productos crudos congelados. Personas que consumen los productos en el día a día, amas de casa con hijos de 6 a 18 años o adultos mayores.',

}


const listaProductos = [
    {
        id: 1,
        producto: 'Wok de vegetales',
        descripcion: 'Arroz con  mix de vegetales con jengibre, ajo y salsa de soya',
        precio: '5 USD',
        image: './images/wok-vege.jpg',
    },
    {
        id: 2,
        producto: '10 Albondigas',
        descripcion: 'carne de res molida especial, miga de pan, huevo , sal, albahaca y salsa napòlitana.',
        precio: '$2',
        image: './images/albondigas.jpg', 
    },
    {
        id: 3,
        producto: 'Alitas',
        descripcion: 'Alitas de pollo marinadas con paprika, miel, mostaza, comino y sal',
        precio: '$3',
        image: './images/alitas.jpg', 
    },    
    {
        id: 5,
        producto: 'Goulash',
        descripcion: ' Carne de res en cubos marinada con finas hierbas , zanahoria , cocido en sus jugos a temperatura controlada ',
        precio: '$3',
        image: './images/goulash.jpg', 
    },    
]
const direccionesController = require('direccionesController');
const usuariosController = {
    index: (req,res) => {
        res.render("index", { main: main, menu: listaProductos});
    },
    detalle: (req,res) => {
        let producto = listaProductos.find(producto => producto.id == req.params.menuId);
        console.log(producto)
        res.render("detalleMenu", { producto: producto});
    },
};

module.exports = usuariosController;