import Answer from "../models/answer.js";

export const createAnswer = async (req,res, next) => {
    const newAnswer = new Answer(req.body)
    try{
        const answer = await newAnswer.save()
        res.status(200).send(answer)
    } catch(err){
        throw err
    }
}

export const getAnswer = async (req, res, next) =>{
    try{
        const answer = await Answer.findById(req.params.id);
        res.status(200).send(answer)
    } catch(err){
        throw err
    }
}