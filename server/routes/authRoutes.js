// server/routes/authRoutes.js
import express from 'express';
import { registerUser, loginUser, logoutUser } from '../controllers/authController.js';

const router = express.Router();

// Routes for signup, login, and logout
router.post('/signup', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

export default router;


// testing