module.exports = function(sequelize,dataTypes){
    let alias = "Usuario";
    
    let cols ={
        id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
        email: {
        type: dataTypes.STRING
        },
        name: {
        type: dataTypes.STRING
        },
        lastName: {
        type: dataTypes.STRING
        },
        password: {
        type: dataTypes.STRING
        },
        avatar: {
        type: dataTypes.STRING
        }
    }
    
    let config ={
    tableName: "usuarios",
    timestamps: false
    }
    
    let User=sequelize.define(alias,cols,config);
    return User;
    }