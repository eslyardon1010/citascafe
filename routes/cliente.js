const express = require('express')
const router = express.Router()

// Controllers
const controladorCliente = require('../controllers/cliente')

// * * * * * * * GET * * * * * * * *
// login
// pefil
// landing page
// pagina register
// pagina agendar cita
// ver citas
router.get('/citas/:idCliente', controladorCliente.getCitas)

// * * * * * * * * * POST * * * * * * * * * * *
router.post('/register', controladorCliente.postRegister)
router.post('/agendar-cita', controladorCliente.postCita)  // agendar cita
router.post('/agregar-servicio', controladorCliente.postCitaServicio)  // agregar servicio a tabla cita_servicio
// login

// * * * * * * * * * PUT * * * * * * * * * * *
// cancelar cita
// actualizar perfil

// * * * * * * * * * DELETE * * * * * * * * * * *
router.delete('/citas/:idCita')   // eliminar cita
router.delete('/perfil/:idCliente', controladorCliente.deleteCliente)    // eliminar cuenta

module.exports = router;