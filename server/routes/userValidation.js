const {check} = require('express-validator');
const REQUIRED_FIELD = 'Required to fill in';

const userValidation = () => {
    return [
        check('email')
            .not()
            .isEmpty()
            .withMessage(REQUIRED_FIELD)
            .isEmail()
            .normalizeEmail()
            .withMessage('Email is not valid'),
        check('password')
            .not()
            .isEmpty()
            .withMessage(REQUIRED_FIELD)
            .exists()
            .isLength({min: 6})
            .withMessage('Password must contain at least 6 characters'),
    ]
}
module.exports = userValidation();
