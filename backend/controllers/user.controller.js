import user from "../models/user.js";


export const createUser = async (req, res, next) =>{
    const newUser = new user(req.body)
    try{
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    }catch(err){
        throw err
    }
}

export const updateUser = async (req, res, next) => {
    try{
        const putUser = await user.findByIdAndUpdate(req.params.id,
            {$set: req.body},
            {new:true}
            )
        res.status(200).send(putUser)
    }catch(err){
        throw err
    }
}

export const deleteUser = async (req,res,next) => {
    try{
        await user.findByIdAndDelete(req.params.id)
        res.status(200).send("user deleted")
    } catch(err){
        throw err
    }
}

export const getUser = async (req,res,next) =>{
    try{
        const x = await user.findById(req.params.id)
        res.status(200).send(x)
    } catch(err){
        throw err
    }
}
