import express from 'express';
import LearningHandler from '../controller/LearningHandler.js';

import multer from 'multer';
import path from 'path';


const storage = multer.diskStorage({
    destination(req, file, cb) {
      cb(null, 'src/uploads');
    },
    filename(req, file, cb) {
      cb(null, `${file.originalname}`);
    },
  });
  
  const upload = multer({ storage : storage });

const learningRoutes = new express.Router();

learningRoutes.post('/learning', upload.single('attachment'), LearningHandler.addLearningHandler);
learningRoutes.get('/learning/:image', LearningHandler.getImage);

export default learningRoutes;