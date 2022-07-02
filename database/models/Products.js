module.exports = function(sequelize,dataTypes){
let alias = "Producto";

let cols ={
    id: {
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
    idCategoria: {
    type: dataTypes.INTEGER
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

Product.associate = function(models){
    Product.belongsTo(models.Categoria, {
        as : 'category',
        foreignKey : 'idCategoria'
    })
}


return Product;
}