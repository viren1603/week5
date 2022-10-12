
const Joi = require('joi')

const creatDeveloperValidation = Joi.object().keys({
  email: Joi.string().empty().required().email().messages({
    'string.empty': 'Email must be required.',
    'any.required': 'Email must be required.',
    'string.email': 'Invalid email address.'
  }),
  password: Joi.string().empty().min(6).required().trim().messages({
    'string.empty': 'Password must be required.',
    'string.min': 'Password must be at least 6 characters',
    'any.required': 'Password must be required.'
  }),
  name: Joi.string(),
  team_id: Joi.number().empty().required().messages({
    'string.empty': 'team_id must be required.',
    'any.required': 'team_id must be required.'
  }),
  dob: Joi.date(),
  isActive: Joi.boolean(),
})


module.exports = function (validator) {
  //! If validator is not exist, throw err
  if (creatDeveloperValidation.hasOwnProperty(validator)) {
    throw new Error(`'${validator}' validator is not exist`)
  }

  return async function (req, res, next) {
    try {
      console.log(req.body)
      const validated = creatDeveloperValidation.validate(req.body)

      const { error } = validated
      if (error) {
        console.log(error);
        res.status(200).json({ error: error.message })
      } else {
        next()
      }
    } catch (error) {
      //* Pass err to next
      //! If validation error occurs call next with HTTP 422. Otherwise HTTP 500
      if (error) {
        error.statusCode = 422
        next(error)
      }
    }
  }
}