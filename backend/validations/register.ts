import validator from 'express-validator';

export const registerValidations = [
    validator.body('email', 'Input E-Mail').isEmail().withMessage('Wrong E-mail').isLength({
        min: 10,
        max: 40,
    }).withMessage('Wrong E-mail length (it may be from 10 to 40)'),
];