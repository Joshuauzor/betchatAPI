const Joi = require('joi');

module.exports = class schema {
    // login schema
    static get loginSchema() {
        return Joi.object({
            username: Joi.string().min(3).required(),
            password: Joi.string().min(5).required(),
        });
    }

    // register schema 
    static get registerSchema() {
        return Joi.object({
            email: Joi.string().allow('', null).email(),
            firstName: Joi.string().trim().required(),
            lastName: Joi.string().trim().required(),
            address: Joi.string().required(),
            phone: Joi.string().length(11).required(),
            interests: Joi.string().required(),
            userType: Joi.string().valid('user', 'admin').required(),
            password: Joi.string().min(5).required(),
        });
    }
}