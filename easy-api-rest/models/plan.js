const mongoose = require('mongoose');
const schema = mongoose.Schema;

const plansEsquema = new schema({
    nombrePlan: String,
    cantidadPaginas: Number,
    cantidadProductos: Number,
    almacenamiento: Number,
    anchoBanda: Number,
    precio: Number
    }
);

module.exports = mongoose.model("plans", plansEsquema);