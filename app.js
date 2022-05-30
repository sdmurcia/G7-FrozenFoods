const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require("method-override")
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');
//requiero los paquetes para trabajar con session y cookies
const session = require('express-session');
const cookieParser = require('cookie-parser');

//URL encode  - para usar req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
//Middleware de aplicación, para usar delete y put
app.use(methodOverride('_method'));

//requerimos middlewares de session y cookies
app.use(session({
  secret : 'topSecret',
  resave: false,
  saveUninitialized: false,
}))
app.use(cookieParser());

app.use(userLoggedMiddleware);

//declaramos archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));;
//view engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs')

const indexRouter = require('./routes/index');
const productRouter = require("./routes/product");
const usersRouter = require("./routes/users");


//rutas
app.use("/", indexRouter);
app.use("/product", productRouter);
app.use("/users", usersRouter);


//Levantar servidor en puerto 3050
const port = 3050;
app.listen(process.env.PORT||port, () => {
  console.log(`Está corriendo el servidor en el puerto: ${port}`)
})