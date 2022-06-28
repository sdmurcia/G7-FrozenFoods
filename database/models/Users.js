module.exports = function(sequelize,dataTypes){
    let alias = "Usuario";
    
    let cols ={
        id_users: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
        name: {
        type: dataTypes.STRING
        },
        last_name: {
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