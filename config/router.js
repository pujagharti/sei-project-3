const router = require('express').Router()

const locations = require('../controllers/locations')


router.route('/')
  .get(locations.index)
  .post(locations.create)

module.exports = router