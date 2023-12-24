import usersService from '../services/usersService.js';

const registerUsersHandler = async (req, res, next) => {
  try {
    const users = req.body;

    const result = await usersService.addUsers(users);

    res.status(201).json({
      status: 'CREATED',
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const authenticationHandler = async (req, res, next) => {
  try {
    const dataLogin = req.body;

    const result = await usersService.authentication(dataLogin);

    res.status(200).json({
      status: 'SUCCESS',
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const getUserByTokenHandler = async (req, res, next) => {
  try {
    const userdata = req.user;

    const result = await usersService.getUserByToken(userdata);

    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const updateUserHandler = async (req, res, next) => {
  try {
    const userdata = req.body;
    const useremail = req.user.email;

    const result = await usersService.updateUser(userdata, useremail);

    res.status(200).json({
      status: 'SUCCESS',
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const logoutUserHandler = async (req, res, next) => {
  try {
    const useremail = req.user.email;
    const result = await usersService.logoutUser(useremail);
    console.log(result);
    res.status(200).json({
      status: 'LOGOUT',
      message: `akun ${result.username} berhasil logout`,
    });
  } catch (e) {
    next(e);
  }
};

export default {
  registerUsersHandler,
  authenticationHandler,
  getUserByTokenHandler,
  updateUserHandler,
  logoutUserHandler,
};
