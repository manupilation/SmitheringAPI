import prismaClient from '../prisma';

const getUser = async (id: number) => {
  const userQuery = await prismaClient.user.findFirst({
    where: {
      id,
    },
  });

  return userQuery;
};

export default getUser;
