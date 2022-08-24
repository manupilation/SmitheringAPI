import Joi from 'joi';

const productsSchemas = Joi.object({
  name: Joi.string().min(3).required().messages({
    'any.required': 'Name is required',
    'string.base': 'Name must be a string',
    'string.min': 'Name must be longer than 2 characters',
  }),
  amount: Joi.string().min(3).required().messages({
    'any.required': 'Amount is required',
    'string.base': 'Amount must be a string',
    'string.min': 'Amount must be longer than 2 characters',
  }),
  url: Joi.string().required().messages({
    'any.required': 'URL is required',
    'string.base': 'URL must be a string',
  }),
  price: Joi.string().required().messages({
    'any.required': 'Price is required',
    'string.base': 'Price must be a string',
  }),
});

export default productsSchemas;