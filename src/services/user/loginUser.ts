import handleLoginModel from '../../models/user/loginUser';
import { jwtSignature } from '../../utils/jwtConfig';

const handleLogin = async (username: string, password:string) => {
  const id = await handleLoginModel(username, password);

  if (!id) {
    const error = new Error();
    error.name = 'unauthorized';
    error.message = 'Username or password invalid';
    throw error;
  }

  const token = jwtSignature({ username, id });

  return token;
};

export default handleLogin;