const Joi = require("@hapi/joi");

validation = {

    registerValidation: (data) => {
        const Schema = Joi.object({
            name: Joi.string().required().min(3).max(50),
            email: Joi.string().required().min(3).max(50),
            password: Joi.string().required().min(6).max(200),
        })
    
        return Schema.validate(data);
    },

    loginValidation: (data) => {
        const Schema = Joi.object({
            name: Joi.string().required().min(3).max(50),
            email: Joi.string().required().min(3).max(50),
            password: Joi.string().required().min(6).max(200),
        })
    
        return Schema.validate(data);
    }

}


module.exports = validation;