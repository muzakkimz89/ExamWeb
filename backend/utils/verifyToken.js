import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) =>{
    const token = req.cookies.access_token
    console.log(token)
    const JWT = "8hEnPGeoBqGUT6zksxt4G95gW+uMdzwe7EVaRnp0xRI="
    if (!token) {
        return next(createError(401, "You are not authenticated!"));
    }
    jwt.verify(token, JWT, (err,user)=>{
        if (err) return next(createError(403, "Token is not valid!"));
        req.user = user;
        next()
    })
}

export const verifyUser = (req, res, next) => {
    console.log('masuk erify user')
    verifyToken(req, res, next, ()=>{
        if (req.user.id === req.params.id || req.user.isAdmin === true) {
            console.log('user masuk')
            next();
        } else {
            return next(createError(403, "You are not authorized!"));
        }
    })
}