// импорт конфига из .env(переменные окружения)
require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
// настроим корс, чтобы отправлять запросы с браузера
const cors = require('cors');
const fileUpload = require('express-fileupload');
const { response } = require('express');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');

const PORT = process.env.PORT || 5000;
const app = express();
// .use обробатывает запрос, cors нужен чтобы отправлять запросы с браузера
app.use(cors());
// чтобы приложение парсило json форматы
app.use(express.json());
app.use(fileUpload({}));
app.use('/api', router);

// обработка ошибок, последний middleWare
app.use(errorHandler);

// все операции с бд являются асинхронными
const start = async () => {
    try {
        // c помощью ф. authenticate будет осущ. подключение к бд
        await sequelize.authenticate();
        // sync сверяет состояние БД со схемой данных
        await sequelize.sync({ force: true });
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (error) {
        console.log(error);
    }
};
start();
