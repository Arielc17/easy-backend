const express = require('express');
const mongoose = require('mongoose');

const userModel = require('../models/user');

var router = express.Router();


// Obtener lista de usuarios
router.get('/', function (req, res){
    userModel.find({},{contrasena:0})
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});


// Obtener usuario
router.get('/:idUser', function (req, res){
    console.log(req.params.idUser);
    userModel.findOne({
        _id: mongoose.Types.ObjectId(req.params.idUser)
    },{contrasena:0})
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});



//Agregar usuario
router.post('/nuevo', function (req, res){
    userModel.insertMany(
        req.body
    
    )
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});


//Obtener empresas 
router.post('/empresas', function (req, res){
    console.log('Entro a empresas')
    userModel.find({
        tipoUsuario: 'Empresa'
    },{contrasena:0})
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });

    
});


//Modificar usuarios y empresas

router.patch('/:idUser/actualizar', function (req, res){
    console.log(req.params.idUser);
    console.log(req.body.empresa.estadoEmpresa)
    userModel.updateOne(
        {
            _id: mongoose.Types.ObjectId(req.params.idUser)
        }
        ,
        
        req.body
    )
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});


//Eliminar usuarios y empresas

router.delete('/:idUser/eliminar', function (req, res){
    userModel.deleteOne(
        {
            _id: mongoose.Types.ObjectId(req.params.idUser)
        }
    )
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});

//Validar Credenciales
router.post('/validarCredenciales', function (req, res){
    console.log(req.body.correo)
    console.log(req.body.contrasena)
    userModel.findOne({
        correo: req.body.correo,
        contrasena: req.body.contrasena
    },{contrasena:0})
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});

/* Usuarios:
-obtener usuario
-obtener empresas 
-agregar usuario
-agregar empresa
-modificar usuarios y empresas
-eliminar usuarios y empresas
-validar credenciales
 */

module.exports = router;