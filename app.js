const express = require('express');
const app = express();
const path = require('path');
const port = 3050;


app.use(express.static(path.join(__dirname, 'public')));;
app.listen(process.env.PORT||port, () => {
  console.log(`Está corriendo el servidor en el puerto: ${port}`)
})
//view engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs')

const indexRouter = require('./routes/index');
const productRouter = require("./routes/product");
const usersRouter = require("./routes/users");
const carritoRouter = require("./routes/carrito")

app.use("/", indexRouter);
app.use("/product", productRouter);
app.use("/users", usersRouter);
app.use("/carrito", carritoRouter);
