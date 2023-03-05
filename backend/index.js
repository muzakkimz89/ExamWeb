import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from "cors";
import cookieParser from "cookie-parser";
import questionRoute from "./routes/soal.js"
import singleQuestion from "./routes/single.js"
import userRoutes from "./routes/user.js"
import answerRoute from "./routes/answer.js"
import authRoute from "./routes/auth.js"

const app= express();
const uri="mongodb+srv://muzakki:apam123456@cluster0.ykxgl7h.mongodb.net/?retryWrites=true&w=majority";
const port = 8000;

const monggoConnect = async()=>{
    try{
        await mongoose.connect(uri);
        console.log("monggoDB Connect")
    }
    catch(err){
        throw(err)
    }
}

mongoose.connection.on('disconnected', () => {
    console.log('MongoDb disconnected')
})
mongoose.set('strictQuery', true);

//middleware
app.use(cors())
app.use(express.json())
app.use(cookieParser());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization,');
    next();
  })

app.use('/api/v1/question', questionRoute)
app.use('/api/v1/single', singleQuestion)
app.use('/api/v1/user', userRoutes)
app.use('/api/v1/answer', answerRoute)
app.use('/api/v1/auth', authRoute)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });

app.listen(port, ()=>{
    monggoConnect();
    console.log(`Example app listening at http://localhost:${port}`);
})
