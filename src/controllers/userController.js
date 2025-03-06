const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signUserUp = async (req, res) => {
    try {
        let { firstName, lastName, phoneNumber, email, password } = req.body;

        if (firstName && lastName) {
            let user = await User.findOne({ email });
            if (!user) {
                let saltRounds = 10;
                let hash = await bcrypt.hash(password, saltRounds);
                let newUser = new User({
                    firstName, 
                    lastName,
                    phoneNumber,
                    email,
                    password: hash
                });
                await newUser.save();
                res.status(201).json({
                    success: true,
                    message: 'User saved successfully!',
                    data: newUser
                });
            } else {
                return res.status(409).json({
                    success: false,
                    message: 'User exists!'
                });
            }
        }  else {
            res.status(400).json({
                success: false,
                message: "Please fill in all fields!"
            });
        } 
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: 'There is an error',
            error: err.message
        });
    }
};

exports.signUserIn = async (req, res) => {
    try {
        let { email, password } = req.body;
        let user = await User.findOne({ email });
        if (user) {
            let isEqual = bcrypt.compare(password, user.password)
            if (isEqual) {
                let token = jwt.sign({
                    id: user._id
                }, process.env.JWT_SECRET_KEY);
                res.status(200).json({
                    success: true,
                    message: 'Welcome home',
                    userData: user,
                    token
                });
            } else {
                res.status(400).json({
                    success: false,
                    message: 'Incorrect password'
                });
            }
        }
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: err.message
        });
    }
};