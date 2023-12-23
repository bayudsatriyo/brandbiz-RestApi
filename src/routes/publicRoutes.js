import express from 'express';
import UsersHandler from '../controller/UsersHandler.js';

const publicRouter = new express.Router();
publicRouter.post('/brandbiz/users', UsersHandler.registerUsersHandler);

export default publicRouter;
