module.exports = (sequelize,DataTypes) => {
    let alias = 'Categoria';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull : false
        },
        categoria: DataTypes.STRING,
    }
    
    let config ={
        tableName: 'categorias',
        timestamps: false
    }
    
    const Category = sequelize.define(alias, cols, config);
    Category.associate = function(models){
        Category.hasMany(models.Producto, {
            as : 'products',
            foreignKey : 'idCategoria'
        })
    }
    return Category;
}