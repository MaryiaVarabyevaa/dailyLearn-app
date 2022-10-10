// осуществляет сопоставление таблиц в БД и отношений между ними с классами.
// При использовании Sequelize мы можем не писать SQL-запросы, а работать 
// с данными как с обычными объектами. 
const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
);