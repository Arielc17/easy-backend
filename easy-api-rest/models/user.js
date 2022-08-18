const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userEsquema = new schema({
    nombre: String,
    apellidos: String,
    tipoUsuario: String,
    correo: String,
    estado: String,
    contrasena: String,
    empresa:{
        _id: mongoose.Types.ObjectId,
        nombreEmpresa: String,
        estadoEmpresa: String
        }
    
    }
);

module.exports = mongoose.model("users", userEsquema);