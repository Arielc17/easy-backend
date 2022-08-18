const mongoose = require('mongoose');
const schema = mongoose.Schema;

const templatesEsquema = new schema({
    titulo: String,
    descripcion: String,
    css: String,
    javascript: String,
    imagenes: Array
    }
);

module.exports = mongoose.model("templates", templatesEsquema);