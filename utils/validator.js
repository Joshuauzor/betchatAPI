const Joi = require('joi');

module.exports = (schema) => {
    return (req, res, next) => {
        const { error, value } = schema.validate(req.body);
        if (error) {
            return res.error(error.details[0].message.replace(new RegExp('\"', 'ig'), ''));
        } else {
            next();
        }
    }
}