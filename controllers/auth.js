// const router = require('express').Router
const User = require('../models/user')
// const jwt = require('jsonwebtoken')
// const { secret } = require('../config/envrionment')
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
    res.status(202).json({ Message: `Welcome back Glamper ${user.username}` })
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  register, 
  login
}

