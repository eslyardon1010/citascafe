const express = require('express')
const router = express.Router()

// Controlador
const barberoControlador = require('../controllers/barbero')

// * * * * * * * GET * * * * * * * *
// login
// pefil
// landing page
// ver todas las citas, ver una cita
router.get('/citas/:idBarbero', barberoControlador.getCitas)
// ver clientes

// * * * * * * * POST * * * * * * * *
// login

// * * * * * * * PUT * * * * * * * *
router.put('/citas/aceptar/:idCita')   // aceptrar cita
// cancelar cita
// actualizar perfil

// * * * * * * * DELETE * * * * * * * *
// eliminar cita

module.exports = router