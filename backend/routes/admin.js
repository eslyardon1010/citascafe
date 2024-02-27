const express = require('express')
const router = express.Router()

// Controlador
const adminControlador = require('../controllers/admin')

// * * * * * * * GET * * * * * * * *
// login
// pefil
// landing page
// ver citas
// ver barberos, ver barbero, pagina para agregar barbero
// ver clientes
// ver estadisticas del negocio

// * * * * * * POST * * * * * * * * 
router.post('/barberos/agregar', adminControlador.postAgregarBarbero)   // agregar barbero
// login

// * * * * * * PUT * * * * * * * * *
router.put('/barberos/:id', adminControlador.putBarbero)   // actualizar barbero
// cancelar cita
// actualizar perfil

// * * * * * * DELETE * * * * * * * *
router.delete('/barberos/:id', adminControlador.deleteBarbero)    // eliminar barbero

module.exports = router