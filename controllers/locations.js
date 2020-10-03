
const Location = require('../models/location')
const { notFound } = require('../lib/errorMessage')

async function locationIndex(req, res, next) {
  try {
    const locations = await Location.find().populate('local')
    if (locations.length === 0) throw new Error(notFound)
    res.status(200).json(locations)
  } catch (err) {
    // console.log(err)
    next(err)
  }
}

async function locationCreate(req, res, next) {
  console.log('CREATE ')
  try {
    const newLocationData = { ...req.body, local: req.currentUser._id }
    const newLocation = await Location.create(newLocationData)

    res.status(201).json(newLocation)
  } catch (err) {
    console.log('THIS IS ERR in CREATE 🦄')
    // console.log(err)
    next(err)
  }
}

// Show GET /id
async function locationShow (req, res, next) {

  try {
    const location = await Location.findById(req.params.id).populate('local')
    if (!location) throw new Error(notFound)
    res.status(200).json(location)
  } catch (err) {
    next(err)
  }
}

async function locationDelete(req, res, next) {
  const idlocation = req.params.id
  try {
    const locationToDelete = await Location.findByIdAndDelete(idlocation)
    if (!locationToDelete) throw new Error(notFound)
    
    await locationToDelete.remove()
    res.status(202).json({ message: 'Deleted Successfully' })
  } catch (err) {
    next(err)
  }
}

async function locationUpdate (req, res, next) {
  const idlocation = req.params.id
  try {
    const locationToUpdate = await Location.findById(idlocation)
    if (!locationToUpdate) throw new Error(notFound)
    Object.assign(locationToUpdate, req.body)
    await locationToUpdate.save()
    res.status(202).json(locationToUpdate)
  } catch (err){
    next(err)
  }
}

module.exports = {
  index: locationIndex,
  create: locationCreate,
  show: locationShow,
  delete: locationDelete,
  update: locationUpdate
}