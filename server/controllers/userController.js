const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {check, validationResult} = require('express-validator');
const {User, User_words} = require('../models/models');

const generateJwt = (id, email) => {
    return jwt.sign(
        {id, email},
        process.env.SECRET_KEY,
        // если токен похитят, то им смогут пользоваться только 24 часа
        {expiresIn: '24h'}
    );
};

class UserController {
    async registration(req, res, next) {
        const {email, password} = req.body;
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            return res.status(422).jsonp(errors.array());
        }

        if(!email || !password) {
            return next(ApiError.badRequest('Incorrect email or password'));
        }
        const candidate = await User.findOne({where: {email}});
        if(candidate) {
            return next(ApiError.badRequest('A user with this email already exists'));
        }

        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({email, password: hashPassword});
        const word = await User_words.create({userId: user.id});
        const token = generateJwt(user.id, user.email);
        return res.json({token});
    }
    async login(req, res, next) {
        const {email, password} = req.body;
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            return res.status(422).jsonp(errors.array());
        }

        const user = await User.findOne({where: {email}});
        if (!user) {
            return next(ApiError.internal('User is not found'));
        }
        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.internal('Invalid password'));
        }
        const token = generateJwt(user.id, user.email);
        return res.json({token});
    }
    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email);
        return res.json({token});
    }
}
module.exports = new UserController();
