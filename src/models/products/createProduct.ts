import prismaClient from '../prisma';

const handleCreateProduct = async (name: string, amount: string) => {
  const createProduct = await prismaClient.product.create({
    data: {
      name,
      amount,
    },
  });
  return { 
    item: {
      id: createProduct.id,
      name: createProduct.name,
      amount: createProduct.amount,
    },
  };
};

export default handleCreateProduct;
