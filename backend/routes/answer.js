import express from 'express';
import { createAnswer, getAnswer } from '../controllers/answer.controller.js';
import { verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

//Post answer
router.post('/',verifyUser,createAnswer)
//get Answer
router.get('/:id',verifyUser, getAnswer)

export default router
