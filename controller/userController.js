const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../config/auth.config');

// for creating a new user 

exports.register = async (req, res) => {
    try {
        const {username, email,password} = req.body;

        const existingUser = await User.findOne({email});
        
        if(existingUser){
            return res.status(400).json({message : "User already exists"});
        }

        // hash the Password 

        const hashPassword  = await bcrypt.hash(password,10);

        const userData = await User.create({
            username : username,
            email : email ,
            password : hashPassword
        });

        return res.status(200).json({status : 200,message : 'User Registered Successfully', data : userData});

    } catch (error) {
        return res.status(500).json({status : 500,message : error.message});
    }
};

// for User authentication 

exports.login = async (req, res) => {

    try {
        const {email,password} = req.body;

        // check if user is exist

        const user = await User.findOne({
            email 
        });

        if(!user){
            return res.status(401).json({
                status : 401,
                message : 'Invalid Credentials'
            });

        }

        const isValidPassword = await bcrypt.compare(password , user.password);

        if(!isValidPassword){
            return res.status(401).json({
                status : 401,
                message : 'Invalid Credentials'
            });
        }
        const token = jwt.sign({ userId: user._id }, config.secret, { expiresIn: config.expiresIn });

        // Send token in response
        res.status(200).json({ token });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};


