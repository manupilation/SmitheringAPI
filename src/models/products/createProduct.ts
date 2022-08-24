import prismaClient from '../prisma';
import { Product } from '../../interfaces/product';

const handleCreateProduct = async ({ name, amount, url, price }: Product) => {
  const createProduct = await prismaClient.product.create({
    data: {
      name,
      amount,
      url,
      price,
    },
  });
  return { 
    item: {
      id: createProduct.id,
      name: createProduct.name,
      amount: createProduct.amount,
      url: createProduct.url,
      price: createProduct.price,
    },
  };
};

export default handleCreateProduct;
