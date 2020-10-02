const mongoose = require('mongoose')
const { dbURI  } = require('../config/environment')

const User = require('../models/user')
const Location = require('../models/location')
const userData = require('./data/users')
const locationData = require('./data/locations')

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
      const users = await User.create(userData)
      console.log(`${users.length} user created`)

      const locationWithUsers = locationData.map(location => {
        location.local = users[(Math.floor(Math.random() * (users.length - 1)))]._id
        return location
      })
      const locations = await Location.create(locationWithUsers)
      console.log(`${locations.length} location created`)
      // console.log(locations)

    } catch (err) {
      console.log(err)
      return
    }
    
    await mongoose.connection.close()
  }
)