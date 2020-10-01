const mongoose = require('mongoose')
const { dbURI  } = require('../config/environment')

const User = require('../models/user')
const Location = require('../models/location')

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  async (err, db) => { // db gives a persistent connection to db
    if (err){
      console.log(err)
      return
    }

    try {
      await mongoose.connection.db.dropDatabase() //delete db data
      console.log('Database dropped')
    } catch (err) {
      console.log(err)
      return
    }
    
    await mongoose.connection.close()
  }
)