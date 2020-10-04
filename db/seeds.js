const mongoose = require('mongoose')
const { dbURI  } = require('../config/environment')

const User = require('../models/user')
const Location = require('../models/location')
const userData = require('./data/users')
const locationData = require('./data/locations')
const commentData = require('./data/comments')

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
      
      const commentWithUsers = commentData.map(comment => {
        comment.local = users[(Math.floor(Math.random() * (users.length - 1)))]._id
        return comment
      })
      for (let index = 0; index < commentWithUsers.length; index++){
        const random = Math.floor(Math.random() * (locations.length - 1))
        const location = await Location.findOne().skip(random)
        const locationById = await Location.findById(location._id)
        await locationById.comments.push(commentWithUsers[index])
        await locationById.save()
      }
      console.log(`${commentWithUsers.length} comments created`)
      const locationsResult = await Location.find()
      locationsResult.forEach(location => {
        console.log(location.placeName, 'comments: ', location.comments)
      })
    
    } catch (err) {
      console.log(err)
      return
    }
    
    await mongoose.connection.close()
  }
)