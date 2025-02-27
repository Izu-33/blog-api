const express = require('express');
const userController = require('../controllers/userController');

const userRouter = express.Router();

userRouter.post('/signup', userController.signUserUp);
userRouter.post('/signin', userController.signUserIn);

module.exports = userRouter;
