import bcrypt from 'bcrypt';
// import { v4 as uuid } from 'uuid';
import prismaClient from '../applications/database.js';
import ResponseError from '../exceptions/ResponseError.js';
import validate from '../validations/validate.js';
import usersValidation from '../validations/usersValidation.js';

const addUsers = async (users) => {
  const user = validate(usersValidation.addUsersValidation, users);

  const CekUser = await prismaClient.user.count({
    where: {
      username: user.username,
    },
  });

  if (CekUser === 1) {
    throw new ResponseError(400, 'Username sudah digunakan');
  }

  user.password = await bcrypt.hash(user.password, 10);

  return prismaClient.user.create({
    data: user,
    select: {
      email: true,
      username: true,
      fullname: true,
    },
  });
};

export default { addUsers };
