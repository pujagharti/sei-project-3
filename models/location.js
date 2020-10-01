

const mongoose = require('mongoose')

const locationsSchema = new mongoose.Schema({
  
  placeName: { type: String, unique: true }
  // local: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
})



module.exports = mongoose.model('Location', locationsSchema)