const joi = require('joi');

const registerValidation = (req, res, next) => {
    const schema = joi.object({
        name: joi.string().required().min(3),
        email: joi.string().required().email(),
        password: joi.string().required().min(4).max(30),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

const loginValidation = (req, res, next) => {
    const schema = joi.object({
        email: joi.string().required().email(),
        password: joi.string().required().min(4).max(30),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

module.exports = {
    registerValidation,
    loginValidation,
};
