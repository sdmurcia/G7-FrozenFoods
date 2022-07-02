let db = require ("../database/models/");
const { Op } = require("sequelize");

const { validationResult } = require('express-validator')

const Producto=db.Producto;

const productController = {
    'allProducts': (req,res) =>{
        Producto.findAll()
        .then(productos =>{
            let categorias=[0,0,0,0,0,0];
            
            for (let i=0; i< productos.length; i++){
                
                 if (productos[i].idCategoria===1){
                   categorias[0]=categorias[0]+1;
               } else if (productos[i].idCategoria===2){
                   categorias[1]=categorias[1]+1;
               } else if (productos[i].idCategoria===3){
                   categorias[2]=categorias[2]+1;
               } else if (productos[i].idCategoria===4){
                   categorias[3]=categorias[3]+1;
               } else if (productos[i].idCategoria===5){
                   categorias[4]=categorias[4]+1;
               } else if (productos[i].idCategoria===6){
                   categorias[5]=categorias[5]+1;
               } 
            }       
               
          
            return res.render('allProducts', {'productos':productos,'categorias':categorias})
        })
        .catch(error => res.send(error))    
    },    
    
    
    'product': (req, res) => {
        let productos= Producto.findAll()
        let producto = Producto.findByPk(req.params.productId)
         Promise.all ([productos, producto]).then(([productos, producto])=>{   //console.log(productos[5].id);
            return res.render("product", { 'productDetail': producto, 'productos': productos });
        })
        .catch(error => res.send(error))
    },
    'newProduct': (req, res) => {
        return res.render("newProduct")
    },
    'saveNewProduct': (req, res) => {
        const errors = validationResult(req);

        if (errors.isEmpty()) {
            
            let decision = ['Si', 'No'];
            function getRandomInt(max) {
                return Math.floor(Math.random() * max);
            }
            visitados= decision[getRandomInt(1)];
           Producto.create({
               producto: req.body.productName,
                descripcion: req.body.productDescription,
                precio: req.body.productPrice,
                image: req.file.filename,
                descuento: req.body.productDiscount,
                idCategoria: req.body.productCategory,
                visitados: visitados
            });
            /* quería enviar el producto creado a detalle pero me quedó grande
        let productos= Producto.findAll()
        let productToSave = Producto.findOne({where:{producto:req.body.productName}})
            
        Promise.all([productos, productToSave]).then(([productos, producto])=>{ 
            console.log(req.body.productName); 
            console.log(producto);    
        return res.send(producto);
        return res.render("product", { 'productDetail': producto, 'productos': productos });
        }).catch(error => res.send(error));*/
        return res.redirect("/product/allproducts");
    } else {
            return res.render("newProduct", { oldData: req.body, errors: errors.mapped() });
        }

    },



    'editProduct': (req, res) => {
        Producto.findByPk(req.params.productId).then(producto=>{
        return res.render("editProduct", { 'productDetail': producto })
    }).catch(error => res.send(error))
    },

    'updateProduct': (req, res) => {
        const errors = validationResult(req);
        

        if (errors.isEmpty()) {
            let productToUpdate=Producto.findByPk(req.params.productId);
            if (req.file) {
                imagen = req.file.filename;

            } else {
                imagen= productToUpdate.image;
            }
            Producto.update({
            producto : req.body.productName,
            descripcion : req.body.productDescription,
            precio : req.body.productPrice,
            descuento : req.body.productDiscount,
            categoria : req.body.productCategory,
            image: imagen 
            },
            {
                where:{id:req.params.productId}   
            });
            /* Intenté que mostrara el producto editado, pero fallé
            /* let productos=Producto.findAll();
            Promise.all([productToUpdate, productos]).then(([productToUpdate, productos])=>{        
            return res.render("product", { 'productDetail': productToUpdate, 'productos': productos });}) */
            return res.redirect("/product/allproducts");
         
        } else {
            Producto.findByPk(req.params.productId).then(producto=>{
            return res.render("editProduct", { errors: errors.mapped(), oldData: req.body,'productDetail': producto })
        }).catch(error => res.send(error))
        }
    },
    'destroy': (req, res) => {
        
        Producto.destroy({
            where: {id:req.params.productId}
        });
        
        return res.redirect("/product/allproducts");
    },
    'carrito': (req, res) => {
        Producto.findAll().then(listaProductos=>{
        return res.render("carrito", { 'Productos': listaProductos });
    });
    }
}


module.exports = productController;