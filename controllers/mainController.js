const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let leerJSON=()=>{
    //*****se le da manejo si el archivo está vacío */
let products;
if(products==''){
products=[];
}else{
products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
}
return products;
}


const main = {
    titulo: 'Frozeen Food',
    descripcion: 'E-commerce de productos congelados, pueden ir desde menus elaborados hasta productos crudos congelados. Personas que consumen los productos en el día a día, amas de casa con hijos de 6 a 18 años o adultos mayores.',

}
const mainController = {
    'index': (req,res) => {
        let listaProductos=leerJSON();
        let ultimosVisitados=listaProductos.filter(productos=>productos.Visitados=="Si");
        let enOferta=listaProductos.filter(productos=>productos.descuento!="0" && productos.descuento!="");
           
        
        res.render("index", {'Productos':listaProductos, 'visitados':ultimosVisitados, 'enOferta':enOferta});
    },
};

module.exports = mainController;