import express from 'express';
import UsersHandler from '../controller/UsersHandler.js';

const publicRouter = new express.Router();
publicRouter.post('/brandbiz/users', UsersHandler.registerUsersHandler);
publicRouter.post('/brandbiz/authentication', UsersHandler.authenticationHandler);

export default publicRouter;
