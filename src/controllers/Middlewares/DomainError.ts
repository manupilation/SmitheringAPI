import { Request, Response, NextFunction } from 'express';
import IErroJoi from '../../interfaces/ErrorJoi';

const errorDomain = (err: IErroJoi, req: Request, res: Response, next: NextFunction) => {
  if (`${err.code}` !== 'notFound') {
    return next(err);
  }
  return res.status(404).json(err);
};

export default errorDomain;