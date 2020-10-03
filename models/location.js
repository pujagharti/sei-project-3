

const mongoose = require('mongoose')

const coordsSchema = new mongoose.Schema({
  latitude: { type: Number },
  longitude: { type: Number } 
})

const locationsSchema = new mongoose.Schema({
  
  placeName: { type: String, unique: true },
  placeDescription: { type: String },
  placePhotos: [{ type: String }],
  amenities: [{ type: String }],
  eventDate: { type: String },
  coords: [coordsSchema],
  feature: [{ type: String }],
  local: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

locationsSchema.set('toJSON', { virtuals: true })
locationsSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('Location', locationsSchema)