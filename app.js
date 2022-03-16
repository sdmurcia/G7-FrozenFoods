const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("public"));
app.listen(3050,(req,res)=>{
    console.log("Servidor corriendo");
})
app.get("/home",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/home.html"))
})
