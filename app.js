const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv').config()


// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
    origin: '*'
}))

const { mongoConn } = require('./databases/configuration')
mongoConn()

const tipoProyecto = require('./routes/tipoProyecto')
/*const estado = require('./routes/estado')
const usuario = require('./routes/usuario')
const marca = require('./routes/marca')
const inventario = require('./routes/inventario')*/

// middlewares
app.use('/api/tiposproyectos', tipoProyecto)
/*app.use('/api/estados', estado)
app.use('/api/usuarios', usuario)
app.use('/api/marcas', marca)
app.use('/api/inventarios', inventario)*/

module.exports = app