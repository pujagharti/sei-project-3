
const Location = require('../models/location')

async function locationIndex(req, res) {

  try {
    const locations = await Location.find()
    res.status(200).json(locations)

  } catch (err) {
    console.log(err)
  }
}


async function locationCreate(req, res, next) {
  console.log('CREATE ')
  try {
    // const newLocationData = { ...req.body, local: req.currentUser._id  }
    const newLocationData = { ...req.body }
    const newLocation = await Location.create(newLocationData)

    res.status(201).json(newLocation)
  } catch (err) {
    console.log('THIS IS ERR in CREATE 🦄')
    console.log(err)
  }
}


module.exports = {
  index: locationIndex,
  create: locationCreate
}