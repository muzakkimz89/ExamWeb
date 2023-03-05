import express from 'express';
import { createQuestion, deleteQuestion, getQuestion, getQuestions, updateQuestion } from '../controllers/question.js';
import { verifyUser } from '../utils/verifyToken.js';

const router=express.Router();

//create
router.post('/', verifyUser, createQuestion);

//get
router.get('/:id',verifyUser, getQuestion);

//get
router.get('/all/:owner',verifyUser, getQuestions);

//update question
router.put('/:id',verifyUser, updateQuestion)

//delete question
router.delete('/:id',verifyUser, deleteQuestion)

export default router