const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser')
var database = require('./modules/database');
const morgan = require("morgan");


var usersRouter = require('./routers/users-router');
var plansRouter = require('./routers/plans-router');
var templatesRouter = require('./routers/templates-router');


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Rutas

app.use('/users',usersRouter);
app.use('/plans',plansRouter);
app.use('/templates',templatesRouter);

const PORT = process.env.PORT | 8888;
app.listen(PORT, ()=>{
    console.log("Servidor iniciado en puerto 8888");
});

