import mongoose from "mongoose";

const {Schema} = mongoose;

const questionSchema = new mongoose.Schema({
    owner:{
        type: String,
        required: true,
    },
    unique:{
        type: String,
        required: true,
        unique: true
    },
    title:{
        type: String,
        required: true,
    },
    desc:{
        type: String,
        required: true,
    },
    question:{
        type: [String],
        required: true,
    }
})

export default mongoose.model("Question", questionSchema)