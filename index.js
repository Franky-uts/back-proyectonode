//declaracion de constantes 
const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const { application } = require('express')
require('dotenv').config()

const app = express()
//capturar el body
app.use(bodyparser.urlencoded({
    extended:false
}))
app.use(bodyparser.json())
//conexion a la base de datos 

//importar Rutas

//Ruta del Middleware
app.get('/',(rep,res) => {
    res.json ({
        estado:true,
        mensaje: 'works fine!!!'
    })
} )
//Iniciar servidor
const PORT = process.env.PORT||3001
app.listen(PORT, () =>{
    console.log(`Servidor Corriendo: ${PORT}`)
})