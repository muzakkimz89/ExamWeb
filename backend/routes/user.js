import express from 'express';
import { createUser, deleteUser, getUser, updateUser } from '../controllers/user.controller.js';
import { verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

//create user
router.post('/', createUser)

//get
router.get('/:id',verifyUser, getUser);

//update user
router.put('/:id',verifyUser, updateUser)

//delete user
router.delete('/:id',verifyUser, deleteUser)

export default router