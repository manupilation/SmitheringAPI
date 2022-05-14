import { Request, Response } from 'express';
import rescue from 'express-rescue';
import CreateNewUserService from '../../services/user/createNewUser';
import validationSchema from '../joi/validateSchema';
import UserSchema from '../joi/schemas/userAddSchema';

const CreateNewUserController = rescue(async (req: Request, res: Response) => {
  validationSchema(UserSchema, req.body);

  const serviceToken = await CreateNewUserService(req.body);
  
  res.status(201).json({ token: serviceToken });
});

export default CreateNewUserController;
