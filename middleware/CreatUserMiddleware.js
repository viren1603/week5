const joi = require("joi");

const employe = joi.object().keys({
    name: joi.string().required(),
    email: joi.string().empty().required().email().message({
        'String.empty': 'email must be required',
        'aney.required': 'email must be required',
        'String.email': 'Invalid email formet'
    }),
    password: joi.string().required().min(6),
    imgPath: joi.string(),
    team_id: joi.string(),
    dob: joi.string(),
    isActive: joi.string(),
})

// const Login = joi.object().keys({
//     email: joi.string().empty().required().email().message({
//         'String.empty': 'email must be required',
//         'aney.required': 'email must be required',
//         'String.email': 'Invalid email formet'
//     }),
//     password: joi.string().required().min(6)
// })

module.exports = { employe };


