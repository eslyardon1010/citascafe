const Usuario = require("../models/usuario");
const Cita = require("../models/cita");
require('dotenv').config()

exports.getCitas = (req, res) => {
  Usuario.VerCitas(req.params.idCliente)
    .then((respuesta) => {
      console.log(respuesta[0]);
      res.send(respuesta[0])
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

exports.postRegister = (req, res) => {
  const usuario = new Usuario(
    req.body.nombre,
    req.body.ap_paterno,
    req.body.ap_materno,
    req.body.email,
    req.body.password,
    req.body.telefono,
    `https://api.multiavatar.com/${req.body.nombre}.png?apikey=${process.env.MULTIAVATAR_API_KEY}`
  );
  usuario
    .AgregarCliente()
    .then((respuesta) => {
      res.end();
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

exports.postCita = (req, res) => {
  const cita = new Cita(
    req.body.fecha,
    req.body.hora,
    req.body.duracion,
    req.body.total_pagar,
    req.body.idCliente,
    req.body.idBarbero,
    req.body.servicios
  );
  cita
    .PostCita()
    .then((respuesta) => {
      res.send(respuesta[0]);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

exports.postCitaServicio = (req, res) => {
  Cita.PostCitaServicio(req.body.idCita, req.body.idServicio)
    .then((respuesta) => {
      res.send(respuesta[0]);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

exports.deleteCliente = (req, res) => {
  Usuario.BorrarPerfilCliente(req.params.idCliente)
    .then((resultado) => {
      // Modifique la res que se envia al frontend porque me di cuenta que siempre mostraba el mensaje de que se elimino un usuario aunque no se alla eliminado. Esto es porque lo que valida el then catch es que la consulta se ejecuta mas no que elimine algo
      res.json(resultado[0]);
    })
    .catch((err) => {
      res.status(500);
    });
};