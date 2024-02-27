const baseDeDatos = require("../utils/baseDeDatos");
const { format } = require("date-fns");

const fechaActual = new Date();
const fechaFormateada = format(fechaActual, "yyyy-MM-dd");

class Cita {
  constructor(
    fecha,
    hora,
    duracion,
    total_pagar,
    idCliente,
    idBarbero,
    servicios, 
    nombreProductor,
  ) {
    this.fecha_creacion = fechaFormateada;
    this.fecha = fecha;
    this.hora = hora;
    this.duracion = duracion;
    this.total_pagar = total_pagar;
    this.idCliente = idCliente;
    this.idBarbero = idBarbero;
    this.servicios = servicios;
    this.nombreProductor = nombreProductor;
  }

  PostCita() {
    return baseDeDatos.execute(
      "INSERT INTO cita (idCita, estado, fecha_creacion, fecha, hora, duracion, total_pagar, idCliente, idBarbero, nombreProductor) VALUES (?,?,?,?,?,?,?,?,?,?)",
      [
        null,
        0,
        this.fecha_creacion,
        this.fecha,
        this.hora,
        this.duracion,
        this.total_pagar,
        this.idCliente,
        this.idBarbero,
        this.nombreProductor,
      ]
    );
  }

  static PostCitaServicio(idCita, idServicio) {
    return baseDeDatos.execute(
      "INSERT INTO cita_servicio (idCita, idServicio) VALUES (?,?)",
      [idCita, idServicio]
    );
  }
}

module.exports = Cita;
