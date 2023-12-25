// import ResponseError from '../exceptions/ResponseError.js';
import validate from '../validations/validate.js';
import learningmodulValidation from '../validations/learningmodulValidation.js';
import prismaClient from '../applications/database.js';

const addLearning = async (judulLearning, filename, destination) => {
  const judul = validate(learningmodulValidation.addLearningValidation, judulLearning);

  return prismaClient.learningpath.create({
    data: {
      judul,
      imageUrl: `http://localhost:8080/learning/${filename}`,
    },
  });
};

export default { addLearning };
