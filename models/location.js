

const mongoose = require('mongoose')

const locationsSchema = new mongoose.Schema({
  
  placeName: { type: String, unique: true }
})



module.exports = mongoose.model('Location', locationsSchema)