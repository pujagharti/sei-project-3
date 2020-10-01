const router = require('express').Router()

const locations = require('../controllers/locations')
const auth = require('../controllers/auth')


router.route('/')
  .get(locations.index)
  .post(locations.create)


router.route('/register')
  .post(auth.register)

router.route('/login')
  .post(auth.login)


module.exports = router