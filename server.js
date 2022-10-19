const express = require('express')
const mysql = require('mysql2');
const myconn = require('express-myconnection')


const app = express()
app.set("port", process.env.PORT || 9000);

const dbOptions = {
    host: 'localhost',
    port: 2604,
    user: 'root',
    password: 'root',
    database: 'library' 
}

//*  middlewares
app.use(myconn(mysql, dbOptions, 'single')) // pasamos la isntancia de sql, parametro de configuracion, estrategias de conexion
app.use(express.json()) 
// *****************

const routes = require('./routes')
app.use('/', routes)

app.listen(9000, ()=> {
    console.log(`escuchando en el puerto:`, app.get("port"));
});