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

export default { registerUsersHandler };
