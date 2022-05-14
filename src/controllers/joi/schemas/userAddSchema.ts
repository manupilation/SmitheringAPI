import Joi from 'joi';

const UserSchema = Joi.object({
  username: Joi.string().min(3).required().messages({
    'string.base': 'Username must be a string',
    'string.min': 'Username must be longer than 2 characters',
    'any.required': 'Username is required',
  }),
  classe: Joi.string().min(3).required().messages({
    'string.base': 'Classe must be a string',
    'string.min': 'Classe must be longer than 2 characters',
    'any.required': 'Classe is required',
  }),
  level: Joi.number().strict().positive().required()
    .messages({
      'number.base': 'Level must be a number',
      'number.positive': 'Level must be greater than 0',
      'any.required': 'Level is required',
    }),
  password: Joi.string().min(8).required().messages({
    'string.base': 'Password must be a string',
    'string.min': 'Password must be longer than 7 characters',
    'any.required': 'Password is required',
  }),
});

export default UserSchema;