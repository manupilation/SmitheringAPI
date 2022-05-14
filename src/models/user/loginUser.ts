import prismaClient from '../prisma';

const handleLogin = async (username: string, password:string) => {
  const userVerification = await prismaClient.user.findFirst({
    where: {
      username,
      password,
    },
  });

  return userVerification?.id;
};

export default handleLogin;
