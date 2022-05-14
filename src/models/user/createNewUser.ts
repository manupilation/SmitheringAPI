import prismaClient from '../prisma';
import IAddUser from '../../interfaces/addUser';

export default async function CreateNewUserModel({ username, classe, level, password }: IAddUser) {
  const newUser = await prismaClient.user.create({
    data: {
      username,
      classe,
      level,
      password,
    },
  });
  return newUser.id;
}
