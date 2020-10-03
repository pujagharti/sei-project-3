

const mongoose = require('mongoose')

const coordsSchema = new mongoose.Schema({
  latitude: { type: Number },
  longitude: { type: Number } 
})

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true, maxlength: 300 },
  rating: { type: Number, required: true, min: 1, max: 5 },
  local: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

const locationsSchema = new mongoose.Schema({
  
  placeName: { type: String, unique: true },
  placeDescription: { type: String },
  placePhotos: [{ type: String }],
  amenities: [{ type: String }],
  eventDate: { type: String },
  coords: [coordsSchema],
  feature: [{ type: String }],
  local: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  comments: [commentSchema]
}, {
  timestamps: true
})

locationsSchema
  .virtual('avgRating')
  .get(function () {
    if (!this.comments.length) return 'Glampers, please leave a comment.'
    return Math.round(this.comments.reduce((sum, curr) => {
      return sum + curr.rating
    }, 0)) / this.comments.length
  })

locationsSchema.set('toJSON', { virtuals: true })
locationsSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('Location', locationsSchema)