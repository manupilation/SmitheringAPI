import * as UserModels from '../models/user';
import IAddUser from '../interfaces/addUser';

export const addNewUser = async (user: IAddUser) => {
  const result = await UserModels.addNewUser(user);

  return result;
};

export const aaa = 2;
