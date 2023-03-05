import User from '../models/user.js'
import { createError } from '../utils/error.js';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';

export const register = async (req, res, next) => {
    const newUser = new User(req.body)
    try{
        await newUser.save();
        res.status(200).send('user saved')
    } catch(err){
        next(err);
    }
}

export const login = async (req, res, next) => {
    const JWT = "8hEnPGeoBqGUT6zksxt4G95gW+uMdzwe7EVaRnp0xRI="
    // const tokenUser = process.env.JWT1
    // console.log(tokenUser)
    try{
        const user = await User.findOne({username: req.body.username})
        if(!user) return next(createError(404,"User not found"));

        const password = user.password
        if(password != req.body.password) return next(createError(404,"username or password do not match"));

        const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, JWT)

        res.cookie("access_token", token,{
            httpOnly: true,
        }).status(200).send(user)
    } catch(err){
        next(err);
    }
}