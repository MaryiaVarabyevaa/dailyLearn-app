require('dotenv').config()
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router)
app.use(errorHandler);

const start = async () => {
    try {
        // с помощью autenticate осущ. подключение к бд
        await sequelize.authenticate();
        // sync сверяет состояние БД со схемой данных
        await sequelize.sync({ force: true });
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}
start();