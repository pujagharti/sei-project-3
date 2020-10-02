const router = require('express').Router()

const locations = require('../controllers/locations')
const auth = require('../controllers/auth')


router.route('/')
  .get(locations.index)
  .post(locations.create)

router.route('/:id')
  .get(locations.show)
  .put(locations.update)
  .delete(locations.delete)

router.route('/register')
:  .post(auth.register)

router.route('/login')
  .post(auth.login)

router.route('/profile')
  .get(auth.profile)

module.exports = router