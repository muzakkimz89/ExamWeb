import mongoose from "mongoose";

const {Schema} = mongoose;

const answerSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    owner:{
        type: String,
        required: true,
    },
    answer:[{
        soalId: {
            type: String,
            required: true
        },
        answer: {
            type: String,
            required: true
        }
    }]
},{timestamps:true}
)

export default mongoose.model("Answer", answerSchema)