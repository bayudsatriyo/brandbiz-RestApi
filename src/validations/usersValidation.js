import Joi from 'joi';

const addUsersValidation = Joi.object({
  email: Joi.string().max(100).required(),
  username: Joi.string().max(100).required(),
  fullname: Joi.string().max(100).required(),
  password: Joi.string().max(100).required(),
  alamat: Joi.string().max(100).optional(),
  role: Joi.string().max(50).optional(),
  profileUrl: Joi.string().optional(),
});

const loginUserValidation = Joi.object({
  username: Joi.string().max(100).required(),
  password: Joi.string().max(100).required(),
});

const emailValidation = Joi.string().max(100).required();

const updateValidation = Joi.object({
  email: Joi.string().max(100).required(),
  username: Joi.string().max(100).required(),
  fullname: Joi.string().max(100).required(),
  alamat: Joi.string().max(100).optional(),
  role: Joi.string().max(50).optional(),
  profileUrl: Joi.string().optional(),
});

export default {
  addUsersValidation, loginUserValidation, emailValidation, updateValidation,
};
