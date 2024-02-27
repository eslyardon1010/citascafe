//* * * * * * * * * * * * * REQUIRES * * * * * * * * * * *
// paquetes
const express = require("express")
const cors = require('cors')
const baseDeDatos = require('./utils/baseDeDatos')
// routes
const clienteRoutes = require('./routes/cliente')
const adminRoutes = require('./routes/admin')
const generalRoutes = require('./routes/general')
const barberoRoutes = require('./routes/barbero')

// * * * * * * * * * * * * * * USE * * * * * * * * * * *
const app = express()
app.use(cors())
app.use(express.json())   // Analiza las solicitudes JSON entrantes y coloca los datos analizados en formato req.body.
// routes
app.use('/cliente', clienteRoutes)
app.use('/admin', adminRoutes)
app.use('/barbero', barberoRoutes)
app.use(generalRoutes)
const controladorGeneral = require('./controllers/general')

app.get('/', (req, res, next) => {
  app.post('/login', (req, res, next) => {
    console.log('Handling login request');
    controladorGeneral.postLogin(req, res, next);
  });
})



app.listen(3000)