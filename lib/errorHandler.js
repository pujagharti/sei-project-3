const {
  validationError,
  notFound,
  castError,
  unauthorized,
  forbidden,
  jsonWebTokenError
} = require('./errorMessage')

function errorHandler(err, req, res, next) {
  console.log('** error **, Err Name:', err.name )

  if (err.name === validationError) {
    const customErrors = {}
    for (const key in err.errors) {
      customErrors[key] = err.errors[key].message
    }
    return res.status(422).json({
      message: 'Form Validation Error',
      errors: customErrors
    })
  }

  if (err.message === notFound || err.name === castError){
    return res.status(404).json({ message: 'Not Found' })
  }

  res.sendStatus(500)
  next(err)
}

module.exports = errorHandler