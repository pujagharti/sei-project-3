

const mongoose = require('mongoose')

const coordsSchema = new mongoose.Schema({
  latitude: { type: Number, default: 45.5017 },
  longitude: { type: Number, default: -73.5673 } 
})

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true, maxlength: 400 },
  rating: { type: Number, required: true, min: 1, max: 5 },
  local: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

const locationsSchema = new mongoose.Schema({
  
  placeName: { type: String },
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
    if (this.comments.length === 0) return 'Discover Montreal... please leave a comment.'
    return Math.ceil(this.comments.reduce((sum, curr) => {
      return sum + curr.rating
    }, 0) / this.comments.length)
  })

locationsSchema.set('toJSON', { virtuals: true })
locationsSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('Location', locationsSchema)