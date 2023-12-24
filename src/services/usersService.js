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
      email: user.email,
    },
  });

  if (CekUser === 1) {
    throw new ResponseError(400, 'Username atau email sudah digunakan');
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
  console.log(cekUser);
  console.log(userData);
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
      token: true,
    },
  });
};

const getUserByToken = async (user) => {
  console.log(user);
  const userData = await prismaClient.user.findUnique({
    where: {
      email: user.email,
    },
    select: {
      email: true,
      username: true,
      fullname: true,
      alamat: true,
      role: true,
      profileUrl: true,
    },
  });

  if (!userData) {
    throw new ResponseError(404, 'User tidak ditemukan');
  }

  return userData;
};

const updateUser = async (userdata, useremail) => {
  const user = validate(usersValidation.updateValidation, userdata);

  return prismaClient.user.update({
    where: {
      email: useremail,
    },
    data: user,
    select: {
      email: true,
      username: true,
      fullname: true,
      alamat: true,
      role: true,
      profileUrl: true,
    },
  });
};

const logoutUser = async (useremail) => {
  const email = validate(usersValidation.emailValidation, useremail);

  return prismaClient.user.update({
    where: {
      email,
    },
    data: {
      token: null,
    },
    select: {
      username: true,
    },
  });
};

export default {
  addUsers, authentication, getUserByToken, updateUser, logoutUser,
};
