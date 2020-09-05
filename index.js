const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const routes = require('./routes')
const mongoose = require('mongoose')
const dbData = require('./configDB')

const app = express()

app.use(morgan('combined'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})

app.use('/', routes)

mongoose.connect(dbData().url, { useNewUrlParser: true }, (err, res) => {
  if(err) console.log('Error conecting to database: ' + err)
  return true
})

app.listen(8501, () => console.log('Escuchando en el puerto 8501'))

module.exports = { app }