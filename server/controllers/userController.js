const ApiError = require('../error/ApiError');
//для хаширования паролей, чтобы не хранить в бд в открытом ввиде
const bcrypt = require('bcrypt');
// для генерации json web token
const jwt = require('jsonwebtoken');
const {User, User_words} = require('../models/models');

class UserController {
    async registration(request, response, next) {
      const {first_name, last_name, email, password} = request.body;
      if(!email || !password) {
        return next(ApiError.badRequest('Некорректный email или password'));
      }
      const candidate = await User.findOne({where: {email}});
      if(candidate) {
        return next(ApiError.badRequest('Пользователь с таким email уже существует'));
      }
      const hashPassword = await bcrypt.hash(password, 5);
      const user = await User.create({first_name, last_name, email, password: hashPassword});
      const word = await User_words.create({userId: user.id});
      const token = jwt.sign(
        {id: user.id, email: user.email}, 
        process.env.SECRET_KEY,
        // если токен похитят, то им смогут пользоваться только 24 часа
        {expiresIn: '24h'}
      );
      return response.json({token});
    }
    async login(request, response, next) {
      const {email, password} = request.body
      const user = await User.findOne({where: {email}})
      if (!user) {
          return next(ApiError.internal('Пользователь не найден'));
      }
      let comparePassword = bcrypt.compareSync(password, user.password);
      if (!comparePassword) {
          return next(ApiError.internal('Указан неверный пароль'));
      }
      const token = jwt.sign(
        {id: user.id, email: user.email}, 
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
      );
      return response.json({token});
    }
    async check(request, response, next) {
      const token = jwt.sign(
        {id: request.user.id, email: request.user.email}, 
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
      );
      return response.json({token});
    }
}

module.exports = new UserController();