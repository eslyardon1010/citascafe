const Usuario = require("../models/usuario");

exports.getCitas = (req, res) => {
  Usuario.GetCitasBarbero(req.params.idBarbero)
    .then((respuesta) => {
      res.send(respuesta[0])
    })
    .catch((err) => {
      res.status(500).send(err);
    });
}