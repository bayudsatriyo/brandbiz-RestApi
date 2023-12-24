import express from 'express';
import errorMiddleware from '../middleware/error-middleware.js';
import publicRouter from '../routes/publicRoutes.js';
import userRoutes from '../routes/usersRoutes.js';

const app = express();
export { app };
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(publicRouter);
app.use(userRoutes);
app.use(errorMiddleware);
