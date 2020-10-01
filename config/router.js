const router = require('express').Router()

const locations = require('../models/locations')


router.route('/')
  .get(locations)

module.exports = router