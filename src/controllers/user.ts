import { Request, Response } from 'express';
import * as UserServices from '../services/user';

export const addNewUser = async (req: Request, res: Response) => {
  // const { username, classe, level, password } = req.body;
  const result = await UserServices.addNewUser(req.body);

  res.status(201).json({ message: 'ok', result });
};

export const aaa = 2;
