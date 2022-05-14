import { Request, Response, NextFunction } from 'express';
import IErroJoi from '../../interfaces/ErrorJoi';

const globalError = (err: IErroJoi, req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).json({
    error: err.message,
  });
};

export default globalError;