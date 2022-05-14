import IAddUser from '../../interfaces/addUser';
import CreateNewUserModel from '../../models/user/createNewUser';
import { jwtSignature } from '../../utils/jwtConfig';

async function CreateNewUserService({ username, classe, level, password }: IAddUser) {
  const id = await CreateNewUserModel({ username, classe, level, password });

  const token = jwtSignature({ username, id });

  return token;
}

export default CreateNewUserService;
