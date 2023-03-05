import mongoose from "mongoose";

const {Schema} = mongoose;

const singleQuestionSchema = new mongoose.Schema({
    question:{
        type: String,
        required: true,
    },
    choose:{
        type: String,
        required: true,
    },
    answer:{
        type: String,
        required: true,
    }
})

export default mongoose.model("singleQuestion", singleQuestionSchema)