let db = require ("../database/models/index");
const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator')

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let leerDbProducts = () => {
     let products1 = db.Producto.findAll();
     let products = JSON.parse((JSON.stringify(products1, null, 4)));
    if (products == '') {
        products = [];
    } 
    return products;
}
let leerJSON = () => {
    
    let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
    if (products == '') {
        products = [];
    } 
    return products;
}

const productController = {
    'allProducts': (req, res) => {
        let listaProductos = leerDbProducts();

        let acompanamientos = listaProductos.filter(productos => productos.categoria == "Acompañamientos")
        let arroces = listaProductos.filter(productos => productos.categoria == "Arroces");
        let carnes = listaProductos.filter(productos => productos.categoria == "Carnes");
        let vegetariano = listaProductos.filter(productos => productos.categoria == "Vegetariano");
        let sopas = listaProductos.filter(productos => productos.categoria == "Cremas, sopas y cazuelas");
        let postres = listaProductos.filter(productos => productos.categoria == "Postres");


       return res.render("allProducts", { 'acompanamientos': acompanamientos, 'arroces': arroces, 'carnes': carnes, 'vegetariano': vegetariano, 'sopas': sopas, 'postres': postres, 'Productos': listaProductos });
     //return res.send(acompanamientos);   
    },
    'product': (req, res) => {
        let listaProductos = leerJSON();
        let producto = listaProductos.find(productos => productos.id == req.params.productId);
        /*console.log(listaProductos);*/
       return res.render("product", { 'productDetail': producto, 'Productos': listaProductos });
    },
    'newProduct': (req, res) => {
        return res.render("newProduct")
    },
    'saveNewProduct': (req, res) => {
        const errors = validationResult(req);

        if (errors.isEmpty()) {
            let listaProductos = leerJSON();
            let decision = ['Si', 'No'];
            function getRandomInt(max) {
                return Math.floor(Math.random() * max);
            }
            let visitados = decision[getRandomInt(1)];
            const nuevoProducto = {
                "id": listaProductos[listaProductos.length - 1].id + 1,
                "producto": req.body.productName,
                "descripcion": req.body.productDescription,
                "precio": req.body.productPrice,
                "image": req.file.filename,
                "descuento": req.body.productDiscount,
                "categoria": req.body.productCategory,
                "Visitados": visitados
            };
           db.Producto.create({
               producto: req.body.productName,
                descripcion: req.body.productDescription,
                precio: req.body.productPrice,
                image: req.file.filename,
                descuento: req.body.productDiscount,
                categoria: req.body.productCategory,
                visitados: visitados
            });  
            listaProductos.push(nuevoProducto);
            let productsJSON = JSON.stringify(listaProductos, null, 4);
            fs.writeFileSync(productsFilePath, productsJSON);
            let idProducto = nuevoProducto.id;
            return res.redirect(`/product/detalle/${idProducto}`);
        } else {
            return res.render("newProduct", { oldData: req.body, errors: errors.mapped() });
        }

    },



    'editProduct': (req, res) => {
        let listaProductos = leerJSON();
        let producto = listaProductos.find(productos => productos.id == req.params.productId);
        return res.render("editProduct", { 'productDetail': producto })

    },

    'updateProduct': (req, res) => {
        const errors = validationResult(req);
        let listaProductos = leerJSON();

        if (errors.isEmpty()) {
            
            let index = listaProductos.findIndex(producto => producto.id == req.params.productId);
            listaProductos[index].producto = req.body.productName;
            listaProductos[index].descripcion = req.body.productDescription;
            listaProductos[index].precio = req.body.productPrice;
            listaProductos[index].descuento = req.body.productDiscount;
            listaProductos[index].categoria = req.body.productCategory;

            if (req.file) {
                listaProductos[index].image = req.file.filename

            } else {
                listaProductos[index].image = listaProductos[index].image;
            }
            let productsJSON = JSON.stringify(listaProductos, null, 4)
            fs.writeFileSync(productsFilePath, productsJSON)
            let idProducto = listaProductos[index].id
            
            return res.redirect(`/product/detalle/${idProducto}`);
        } else {
            let producto = listaProductos.find(productos => productos.id == req.params.productId);
            return res.render("editProduct", { errors: errors.mapped(), oldData: req.body,'productDetail': producto })
        }
    },
    'destroy': (req, res) => {
        let listaProductos = leerJSON();
        let index = listaProductos.findIndex(producto => producto.id == req.params.productId);
        listaProductos.splice(index, 1);
        let productsJSON = JSON.stringify(listaProductos, null, 4)
        fs.writeFileSync(productsFilePath, productsJSON);
        return res.redirect("/product/allproducts");
    },
    'carrito': (req, res) => {
        let listaProductos = leerJSON();
        return res.render("carrito", { 'Productos': listaProductos });

    }
}


module.exports = productController;