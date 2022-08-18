const express = require('express');
const mongoose = require('mongoose');

var router = express.Router();

const planModel = require('../models/plan');

// Obtener lista de planes
router.get('/', function (req, res){
    planModel.find({},{})
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});


// Obtener plan
router.get('/:idPlan', function (req, res){
    console.log(req.params.idPlan);
    planModel.findOne({
        _id: mongoose.Types.ObjectId(req.params.idPlan)
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



//Agregar un plan
router.post('/nuevo', function (req, res){
    planModel.insertMany(
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

//Modificar Plan

router.patch('/:idPlan/actualizar', function (req, res){
    console.log(req.params.idPlan);
    planModel.updateOne(
        {
            _id: mongoose.Types.ObjectId(req.params.idPlan)
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

router.delete('/:idPlan/eliminar', function (req, res){
    planModel.deleteOne(
        {
            _id: mongoose.Types.ObjectId(req.params.idPlan)
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

/* planes:
-Obtener planes
-Obtener plan
-agregar planes
-modificar planes
-eliminar planes
 */

module.exports = router;