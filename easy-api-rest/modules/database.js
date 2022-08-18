var mongoose = require('mongoose');

var servidor = 'admin-easy:WEpwBXDlFC6S45YW@easy-cms.iliuumk.mongodb.net';
var db = 'easy-db';

class Database{
    constructor(){
        mongoose.connect(`mongodb+srv://${servidor}/${db}`)
        .then(()=>{
            console.log('Se conecto a mongo');
        }).catch((error)=>{
            console.log(error);
        });
    }
}

module.exports = new Database();