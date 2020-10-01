const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, maxlength: 50, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  userimage: { type: String },
  bio: { type: String },
  isLocal: { type: Boolean },
  usertelephone: { type: String }
})

userSchema
  .virtual('passwordConfirmation')
  .set(function (passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

module.exports = mongoose.model('User', userSchema)

