import express from 'express';
import UsersHandler from '../controller/UsersHandler.js';
import { authMiddleware } from '../middleware/auth-middleware.js';

const userRoutes = new express.Router();
userRoutes.use(authMiddleware);

// Users Routes
userRoutes.get('/brandbiz/user', UsersHandler.getUserByTokenHandler);
userRoutes.put('/brandbiz/user', UsersHandler.updateUserHandler);
userRoutes.delete('/brandbiz/user', UsersHandler.logoutUserHandler);

export default userRoutes;
