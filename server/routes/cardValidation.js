const {check} = require('express-validator');
const REQUIRED_FIELD = 'Required to fill in';
const CORRECT_VALUE = 'This field should not contain numbers';

const validation = () => {
    return [
        check('original_word')
            .not()
            .isEmpty()
            .withMessage(REQUIRED_FIELD)
            .not()
            .matches(/\d/)
            .withMessage(CORRECT_VALUE),
        check('translated_word')
            .not()
            .isEmpty()
            .withMessage(REQUIRED_FIELD)
            .not()
            .matches(/\d/)
            .withMessage(CORRECT_VALUE),
    ]
}
module.exports = validation();