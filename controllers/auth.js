// const router = require('express').Router
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')
// const { unauthorized, notFound } = require('../lib/errorMessage')


async function register(req, res, next) {
  try {
    const user = await User.create(req.body)
    res.status(201).json({ message: `Welcome ${user.username}` })
  } catch (err) {
    console.log(err)
  }
}

async function login(req, res, next) {
  try {
    const user = await User.findOne({ email: req.body.email })
    
    const token = jwt.sign(
      { sub: user._id },
      secret,
      { expiresIn: '7 days' }
    )
    res.status(202).json({
      message: `Welcome back Glamper ${user.username}`,
      token
    })

  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  register, 
  login
}

