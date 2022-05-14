import Joi from 'joi';

const OrderSchema = Joi.object({
  products: Joi.array().items(Joi.number().required()).required()
    .messages({
      'any.required': 'Products is required',
      'array.base': 'Products must be an array of numbers',
      'array.includesRequiredUnknowns': 'Products can\'t be empty',
    }),
});

export default OrderSchema;