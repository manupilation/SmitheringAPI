import { Request, Response } from 'express';
import rescue from 'express-rescue';
import handleLoginService from '../../services/user/loginUser';
import loginSchema from '../joi/schemas/loginSchema';
import validationSchema from '../joi/validateSchema';

const handleLogin = rescue(async (req: Request, res: Response) => {
  const { username, password } = req.body;
  validationSchema(loginSchema, req.body);

  const loginUser = await handleLoginService(username, password);

  res.status(200).json({ token: loginUser });
});

export default handleLogin;
