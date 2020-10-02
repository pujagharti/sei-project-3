const router = require('express').Router()

const locations = require('../controllers/locations')
const auth = require('../controllers/auth')


router.route('/')
  .get(locations.index)
  .post(secureRoute,locations.create)

router.route('/:id')
  .get(locations.show)
  .put(secureRoute, locations.update)
  .delete(secureRoute, locations.delete)

router.route('/register')
  .post(auth.register)

router.route('/login')
  .post(auth.login)


module.exports = router