const { employe } = require("./createValidation");
// const ImgSchemaJoi = require("./ImgValidactionJoi");
// const Login = require("./ImgValidactionJoi");

module.exports.validation = function (validator) {
    if (employe.hasOwnProperty(validator)) {
        throw new Error(`${validator} validator is not exist`)
    }
    return async function (req, res, next) {
        try {
            const { error } = employe.validate(req.body)
            if (error) {
                res.status(200).json({ error: error.message })
                return;
            } else {
                next()
            }
        } catch (error) {
            error.statusCode = 422
            next(error)
        }
    }
}