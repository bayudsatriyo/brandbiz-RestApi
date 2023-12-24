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

export default { registerUsersHandler, authenticationHandler };
