
const mongoose = require('mongoose')
const { dbURI  } = require('../config/environment')

// const faker = require('faker')
const User = require('../models/user')
const Location = require('../models/location')
const locationData = require('./data/locations')

const faker = require('faker/locale/fr')

mongoose.connect(
  dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, 
  async (err) => {
    
    if (err) return console.log(err) // ! Any error in connnection will log here

    try {
      
      await mongoose.connection.db.dropDatabase()

      console.log('🚨 Database dropped 🚨')

      const users = [] // ! an array to push my 100 fake users into
      /* const randomBoolean = () => {
        return Math.random() >= 0.6
      } */
      for (let index = 0; index < 100; index++) { // ! looping to created 300 users
        const username = faker.internet.userName() // ! generating a fake username
        const firstName = faker.name.firstName() // ! A fake first name
        const lastName = faker.name.lastName() // ! A fake last name
        const email = `${firstName}.${lastName}@email.com` // ! concatenating them together to make the email
        const userimage = faker.image.imageUrl()  // ! and a fake profile image
        const password = faker.internet.password()
        const bio = faker.lorem.paragraph()
        // const isLocal = randomBoolean()
        const userTelephone = faker.phone.phoneNumber() 

        users.push({
          username,
          email,
          userimage,
          password, // ! setting all the passwords the same
          passwordConfirmation: password,
          bio,
          // isLocal,
          userTelephone 
        })
      }
      
      
      const createdUsers = await User.create(users) // ! then pass that users array


      console.log(`❇️ Created ${createdUsers.length} ❇️`)
      console.log(createdUsers)

      const locationWithUsers = locationData.map(location => {  // create location
        location.local = createdUsers[(Math.floor(Math.random() * (createdUsers.length - 1)))]._id
        return location
      })
      const locations = await Location.create(locationWithUsers)
      console.log(`${locations.length} locations created`)
      await mongoose.connection.close()

      console.log('👋 Goodbye')

    } catch (err) {
      console.log(err) // ! Log any errors that occurs
      await mongoose.connection.close()
      console.log('😬sorry')
    }
  }
)
