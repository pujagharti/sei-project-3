const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const app = express()


const logger = require('./lib/logger')
const errorHandler = require('./lib/errorHandler')
const { dbURI, port } = require('./config/environment')
const router = require('./config/router')

  

mongoose.connect(dbURI,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err)
      return
    }
    console.log('mongo connected')
  })

app.use((req, res, next) => {
  console.log(`🚨 Incoming Request: Method: ${req.method}  URL: ${req.url}`)
  next()
}) 

app.use(express.json())

app.use(logger)

app.use('/api', router)

app.use(errorHandler)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'prontend', 'build', 'index.html'))
})


app.listen(port, () => console.log(`Listening on localhost:${port} 🌈 `))