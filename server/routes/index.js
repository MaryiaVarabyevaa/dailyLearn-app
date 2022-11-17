const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const cardRouter = require('./cardRoute');

router.use('/user', userRouter)
router.use('/card', cardRouter)

module.exports = router;