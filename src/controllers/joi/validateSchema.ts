import { Request } from 'express';
import { Schema } from 'joi';

// Ajuda da Sthefany
// https://github.com/tryber/sd-014-c-project-blogs-api/pull/62

const defineCodeError = (errorName:string) => {
  switch (errorName) {
    case 'any.required':
      return 'badRequest';
    default:
      return 'invalidInput';
  }
};

const validationSchema = (schema: Schema, body: Request<Body>) => {
  const { error } = schema.validate(body);
  
  if (error) {
    const newError = new Error();
    newError.name = defineCodeError(error.details[0].type);
    newError.message = error.details[0].message;
    throw newError;
  }
};

export default validationSchema;