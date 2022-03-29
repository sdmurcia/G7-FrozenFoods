const express = require('express');
const app = express();
const path = require('path');
const port = 3050;
app.use(express.static('./public'));
app.listen(process.env.PORT||port, () => {
  console.log(`Está corriendo el servidor en el puerto: ${port}`)
})
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './views/index.html'))
})
app.get('/footer', (req, res) => {
  res.sendFile(path.join(__dirname, './views/footer.html'))
})
app.get('/header', (req, res) => {
  res.sendFile(path.join(__dirname, './views/header.html'))
})
app.get('/sign-in', (req, res) => {
  res.sendFile(path.join(__dirname, './views/sign-in.html'))
})
app.get('/sign-up', (req, res) => {
  res.sendFile(path.join(__dirname, './views/sign-up.html'))
})
app.get('/estructura', (req, res) => {
    res.sendFile(path.join(__dirname,'./views/estructura.html'))
  })

