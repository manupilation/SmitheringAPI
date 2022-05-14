import { Router } from 'express';
import handleLogin from '../controllers/user/loginUser';

const LoginRoute = Router();

LoginRoute.post('/', handleLogin);

export default LoginRoute;