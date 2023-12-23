import express from 'express';
import errorMiddleware from '../middleware/error-middleware.js';
import publicRouter from '../routes/publicRoutes.js';

const app = express();
export { app };
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(publicRouter);
app.use(errorMiddleware);
