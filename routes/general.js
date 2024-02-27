const router = require('./routes/routes');
const express = require('express')

// Controlador
const controladorGeneral = require('../controllers/general')

// * * * * * * * * GET * * * * * * * * *
router.get('/barberos', controladorGeneral.getBarberos)   //obtener todos los barberos
router.get('/servicios', controladorGeneral.getServicios)   //obtener todos los servicios
router.get('/clientes', controladorGeneral.getClientes)   // obtener todos los clientes
router.get('/datos/:idToken', controladorGeneral.getDatos)  // obtener todos los datos de un barbero con ayuda de su id
router.get('/horario/:idBarbero/:idDia', controladorGeneral.getHorarioBarbero)  // obtener el horario de un dia de un barbero
router.get('/citas/:idBarbero/:fecha', controladorGeneral.getCitas)    // obtener las citas de un barbero
router.get('/citas', controladorGeneral.getCitasDeClientes)    // obtener las citas de un barbero

// * * * * * * * * POST * * * * * * * * *
router.post('/login', controladorGeneral.postLogin)

// * * * * * * * * PUT * * * * * * * * *
router.put('/perfil', controladorGeneral.putPerfil)   // actualizar pefil
router.put('/cita/:idCita', controladorGeneral.putCita)  // cancelar cita

module.exports = router