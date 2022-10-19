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
const uri = `mongodb+srv://${process.env.username}:${process.env.password}@cluster0.cc0lwjh.mongodb.net/${process.env.dbname = Practica
}?retryWrites=true&w=majority`
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado a BD')
}).catch(e => {
    console.error('error: ',e)
} )

//importar Rutas
const authRoutes = require('./routes/auth')

//Ruta del Middleware
app.use('./api/user',authRoutes)


app.get('/',(rep,res) => {
    res.json ({
        estado:true,
        mensaje: 'works fine!!!'
    })
})
//Iniciar servidor
const PORT = process.env.PORT||3001
app.listen(PORT, () =>{
    console.log(`Servidor Corriendo: ${PORT}`)
})