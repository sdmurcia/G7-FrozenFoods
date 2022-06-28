module.exports = function(sequelize,dataTypes){
let alias = "Producto";

let cols ={
    id_prod: {
    type: dataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
    producto: {
    type: dataTypes.STRING
    },
    descripcion: {
    type: dataTypes.STRING
    },
    precio: {
    type: dataTypes.DOUBLE
    },
    image: {
    type: dataTypes.STRING
    },
    descuento: {
    type: dataTypes.DOUBLE
    },
    categoria: {
    type: dataTypes.STRING
    },
    visitados: {
    type: dataTypes.STRING
    }
}

let config ={
tableName: "productos",
timestamps: false
}

let Product=sequelize.define(alias,cols,config);
return Product;
}