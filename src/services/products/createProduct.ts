import createProductModel from '../../models/products/createProduct';

const handleCreateProduct = async (name: string, amount: string) => {
  const createProduct = await createProductModel(name, amount);

  return createProduct;
};

export default handleCreateProduct;
