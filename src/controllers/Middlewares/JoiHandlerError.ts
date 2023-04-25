import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import MapErrorJoi from '../../interfaces/EnumErrorsJoi';
import IErroJoi from '../../interfaces/ErrorJoi';

const JoiError = (err: IErroJoi, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  // const ErrorMap = MapErrorJoi;
  // const errorCode = err.code;
  // https://stackoverflow.com/questions/36316326/typescript-ts7015-error-when-accessing-an-enum-using-a-string-type-parameter
  const status = MapErrorJoi[`${err.name}` as keyof typeof MapErrorJoi];
  
  if (Joi.isError(err)) {
    return next(err);
  }
  
  res.status(status).json({ error: err.message });
};

export default JoiError;
