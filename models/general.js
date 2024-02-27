const baseDeDatos = require("../utils/baseDeDatos");
const CryptoJS = require("crypto-js");

class General {
  constructor() {}

  static Login(email, password) {
    const hash = CryptoJS.SHA256(password);
    const hashString = hash.toString(CryptoJS.enc.Hex);

    return baseDeDatos.execute(
      "SELECT * FROM usuario WHERE email = ? AND password = ?",
      [email, hashString]
    );
  }

  static PutPerfil(
    idUsuario,
    password,
    nombre,
    ap_paterno,
    ap_materno,
    telefono,
    foto
  ) {
    if (password != "") {
      const hash = CryptoJS.SHA256(password);
      const hashString = hash.toString(CryptoJS.enc.Hex);

      return baseDeDatos.execute(
        "UPDATE usuario SET nombre = ?, ap_paterno = ?, ap_materno = ?, password = ?, telefono = ?, foto = ? WHERE idUsuario = ?",
        [nombre, ap_paterno, ap_materno, hashString, telefono, foto, idUsuario]
      );
    } else {
      return baseDeDatos.execute(
        "UPDATE usuario SET nombre = ?, ap_paterno = ?, ap_materno = ?, telefono = ?, foto = ? WHERE idUsuario = ?",
        [nombre, ap_paterno, ap_materno, telefono, foto, idUsuario]
      );
    }
  }

  static PutCita(idCita, estado) {
    return baseDeDatos.execute("UPDATE cita SET estado = ? WHERE idCita = ?", [
      estado,
      idCita,
    ]);
  }
}

module.exports = General;
