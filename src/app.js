const blogRouter = require('./routes/blogRoute');
const userRouter = require('./routes/userRoute');
const express = require('express');

const router = express.Router();

router.use('/users', userRouter);

router.use('/blogs', blogRouter);

module.exports = router;