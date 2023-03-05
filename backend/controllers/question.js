import Question from "../models/question.js";
import singlequestion from "../models/singlequestion.js";

export const createQuestion = async (req, res, next) =>{
    const newQuestion = new Question(req.body)
    try{
        const savedQuestion = await newQuestion.save();
        res.status(200).json(savedQuestion);
    }catch(err){
        next(err)
    }
}

export const getQuestion = async (req, res, next) =>{
    try{
        const question = await Question.findById(req.params.id);
        res.status(200).json(question);
    }catch(err){
        next(err)
    }
}

export const getQuestions = async (req, res, next) =>{
    try{
        const question = await Question.find({ owner: req.params.owner }, { _id: 1 });
        console.log(question)
        res.status(200).json(question);
    }catch(err){
        next(err)
    }
}

export const updateQuestion = async (req, res, next) => {
    try{
        const putQuestion = await Question.findByIdAndUpdate(req.params.id,
            {$set: req.body},
            {new:true}
        )
        res.status(200).send(putQuestion)
    } catch(err){
        throw err
    }
}

export const deleteQuestion = async (req, res, next) => {
    try {
        const singleQuestion = await Question.findById(req.params.id)
        //console.log(singleQuestion.question)
        const deleteSingle = await singleQuestion.question
        deleteSingle.forEach( async (element) => {
            try{
                await singlequestion.findByIdAndDelete(element)
            } catch(err){
                throw err
            }
        });
        await Question.findByIdAndDelete(req.params.id)
        res.status(200).send("Question Form deleted successfully")
    } catch(err){
        throw err
    }
}

