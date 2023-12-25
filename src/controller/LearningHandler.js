import learningService from '../services/learningService.js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const addLearningHandler = async (req, res, next) => {
  try {
    const { judul } = req.body;
    const filename = req.file;

    console.log(req.file);

    const result = await learningService.addLearning(judul, filename.originalname, filename.destination);

    res.status(201).json({
      status: 'SUCCESS',
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const getImage = async (req, res, next) => {
    try{
    const image = req.params.image;
    console.log('ini image');
    console.log(image);
    // Tentukan path gambar di folder lokal
    const __dirname = dirname(fileURLToPath(import.meta.url));
    // const imagePath = `<span class="math-inline">\{\_\_dirname\}/src/uploads/</span>{image}`;
     // Cek apakah file gambar ada
     const filePath = path.join(__dirname, '..', 'uploads', image);
     res.sendFile(filePath);
    }catch(e){
        next(e);
    }
}

export default { addLearningHandler, getImage };
