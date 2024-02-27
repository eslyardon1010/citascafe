//Modelos
const Usuario = require("../models/usuario");
require('dotenv').config()

//Metodo para agregar un barbero a la base de datos
exports.postAgregarBarbero = (req, res, next) => {
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
    .AgregarBarbero()
    .then(() => {
      res.end();
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
exports.putBarbero = (req, res) => {
  const usuario = new Usuario(
    req.body.nombre,
    req.body.ap_paterno,
    req.body.ap_materno,
    req.body.email,
    req.body.password,
    req.body.telefono,
    req.body.foto
  );
  usuario
    .ActualizarBarbero(req.params.id)
    .then(() => {
      res.end();
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

exports.deleteBarbero = (req, res) => {
  Usuario.BorrarBarbero(req.params.id)
    .then((respuesta) => {
      res.json(respuesta[0]);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
