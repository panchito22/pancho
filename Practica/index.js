
const mongo =require('mongoose')
const app = require('./app')
const config =require('./config')

mongo.connect(config.db,(err,res)=>{
    if (err)throw err
console.log('conexion establecida');
    app.listen(config.port,(req,res)=>{

        console.log(`App listening on port ${config.port}`);
        
        });
});
