import prismaClient from '../prisma';

const handleGetAllProducts = async () => {
  const products = await prismaClient.product.findMany();

  return products;
};

export default handleGetAllProducts;
