const express = require('express');
const mongoose = require('mongoose');

const templateModel = require('../models/template');

var router = express.Router();


// Obtener lista de Plantillas
router.get('/', function (req, res){
    templateModel.find({},{})
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});


// Obtener Plantilla
router.get('/:idTemplate', function (req, res){
    console.log(req.params.idTemplate);
    templateModel.findOne({
        _id: mongoose.Types.ObjectId(req.params.idTemplate)
    },)
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});



//Agregar Plantilla
router.post('/nuevo', function (req, res){
    templateModel.insertMany(
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




//Modificar Plantilla

router.patch('/:idTemplate/actualizar', function (req, res){
    console.log(req.params.idTemplate);
    templateModel.updateOne(
        {
            _id: mongoose.Types.ObjectId(req.params.idTemplate)
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


//Eliminar Plantilla

router.delete('/:idTemplate/eliminar', function (req, res){
    templateModel.deleteOne(
        {
            _id: mongoose.Types.ObjectId(req.params.idTemplate)
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



/* plantilas:
-Obtener plantillas
-agregar plantillas
-modificar plantillas
-eliminar plantillas
 */

module.exports = router;