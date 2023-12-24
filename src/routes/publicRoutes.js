import express from 'express';
import UsersHandler from '../controller/UsersHandler.js';

const publicRouter = new express.Router();
publicRouter.post('/public/users', UsersHandler.registerUsersHandler);
publicRouter.post('/public/authentication', UsersHandler.authenticationHandler);

export default publicRouter;
