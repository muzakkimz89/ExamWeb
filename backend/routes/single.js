import express from 'express';
import { createSingleQuestion, deleteSingleQuestion, getSingleQuestion, updateSingleQuestion } from '../controllers/singlequestion.js';
import { verifyUser } from '../utils/verifyToken.js';

const router = express.Router();
//post question
router.post('/:questionId',verifyUser, createSingleQuestion)

//get question
router.get('/:id',verifyUser, getSingleQuestion)

//update question
router.put('/:id',verifyUser, updateSingleQuestion)

//delete question
router.delete('/:questionId/:id',verifyUser, deleteSingleQuestion)


export default router