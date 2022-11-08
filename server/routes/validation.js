// todo: rename file and move file
const {check} = require('express-validator');
const REQUIRED_FIELD = 'Required to fill in';

const validation = () => {
    return [
        check('email', `${REQUIRED_FIELD}`)
            .not()
            .isEmpty(),
        check('email', 'Email is not valid')
            .isEmail()
            .normalizeEmail(),
        check('password', `${REQUIRED_FIELD}`)
            .not()
            .isEmpty(),
        check('password', 'Password must contain at least 6 characters')
            .exists()
            .isLength({min: 6}),
        // check('original_word', `${REQUIRED_FIELD}`)
        //     .not()
        //     .isEmpty(),
        // check('translated_word', `${REQUIRED_FIELD}`)
        //     .not()
        //     .isEmpty()
    ]
}
module.exports = validation();
