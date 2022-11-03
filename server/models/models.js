const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING(50), unique: true},
    password: {type: DataTypes.STRING}
});

const User_words = sequelize.define('user_words', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    original_word: {type: DataTypes.STRING(50)},
    translated_word: {type: DataTypes.STRING(50)},
});

User.hasMany(User_words);
User_words.belongsTo(User);

module.exports = {
    User,
    User_words
}