import singlequestion from "../models/singlequestion.js";
import question from "../models/question.js";

export const createSingleQuestion= async(req,res,next)=>{
    const newQuestion=new singlequestion(req.body)
    const questionId = req.params.questionId;
    try{
        const savedSingleQuestion = await newQuestion.save();
        try{
            await question.findByIdAndUpdate(questionId,{
                $push:{ question: savedSingleQuestion._id}
            })
        }catch(err){
            throw err
        }
        res.status(200).send(savedSingleQuestion)
    } catch(err){
        throw err
    }
}

export const getSingleQuestion = async(req, res, next)=>{
    const questionId = req.params.id;
    try{
        const question = await singlequestion.findById(questionId)
        res.status(200).send(question)

    } catch(err){
        throw err
    }
}

export const updateSingleQuestion = async(req, res, next) => {
    const questionId = req.params.id;
    try{
        const updatequestion = await singlequestion.findByIdAndUpdate(questionId,
            {$set: req.body},
            {new : true}
        )
        res.status(200).send(updatequestion)
    } catch(err){
        throw err
    }
}

export const deleteSingleQuestion = async (req, res, next) => {
    const questionId = req.params.questionId;
    try{
        await singlequestion.findByIdAndDelete(req.params.id)
        try{
            await question.findByIdAndUpdate(questionId,{
                $pull: {question: req.params.id}
            })
            res.status(200).send("question deleted")
        }catch(err){
            throw err
        }
    } catch(err){
        throw err
    }
}