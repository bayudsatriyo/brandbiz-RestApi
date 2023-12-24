import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
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
  console.log(user.password);
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

const authentication = async (users) => {
  console.log(users);
  const userData = validate(usersValidation.loginUserValidation, users);

  const cekUser = await prismaClient.user.findUnique({
    where: {
      username: userData.username,
    },
    select: {
      username: true,
      password: true,
    },
  });

  if (!cekUser) {
    throw new ResponseError(404, 'Username atau password salah / tidak ditemukan');
  }

  const isPasswordValid = await bcrypt.compare(userData.password, cekUser.password);
  console.log(isPasswordValid);
  if (!isPasswordValid) {
    throw new ResponseError(404, 'Username atau Password salah / tidak ditemukan');
  }

  const token = uuid().toString();
  return prismaClient.user.update({
    data: {
      token,
    },
    where: {
      username: cekUser.username,
    },
    select: {
      token,
    },
  });
};

export default { addUsers, authentication };
