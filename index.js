const express = require('express')
const bodyParser = require('body-parser')
const passengersRouter = require('./routes/passengers')
const driverRouter=require('./routes/drivers')
const bookingsRouter=require('./routes/bookings')
const indexRouter = require('./routes/index')
require('./mongo-connection')

const app = express()
app.use(bodyParser.json())

app.set('view engine', 'pug')

app.use('/passengers', passengersRouter)
app.use('/drivers', driverRouter)
app.use('/bookings', bookingsRouter)
app.use('/', indexRouter)

module.exports = app
