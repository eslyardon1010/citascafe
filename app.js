//* * * * * * * * * * * * * REQUIRES * * * * * * * * * * *
// paquetes
const express = require("express")
const cors = require('cors')
const baseDeDatos = require('./backend/utils/baseDeDatos')
// routes
const clienteRoutes = require('./backend/routes/cliente')
const adminRoutes = require('./backend/routes/admin')
const generalRoutes = require('./backend/routes/general')
const barberoRoutes = require('./backend/routes/barbero')

// * * * * * * * * * * * * * * USE * * * * * * * * * * *
const app = express()
app.use(cors())
app.use(express.json())   // Analiza las solicitudes JSON entrantes y coloca los datos analizados en formato req.body.
// routes
app.use('/cliente', clienteRoutes)
app.use('/admin', adminRoutes)
app.use('/barbero', barberoRoutes)
app.use(generalRoutes)

app.get('/', (req, res, next) => {
  res.send('Todo funciona')
})


app.listen(3000)