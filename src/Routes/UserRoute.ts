import { Router } from 'express';
import CreateNewUserController from '../controllers/user/createNewUser';

const UserRoute = Router();

UserRoute.post('/', CreateNewUserController);

export default UserRoute;
