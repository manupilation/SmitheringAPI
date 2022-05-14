import prismaClient from '../prisma';

const handleGetProducts = async () => {
  const userQuery = await prismaClient.product.findMany({
    take: 5,
  });

  return userQuery;
};

export default handleGetProducts;
