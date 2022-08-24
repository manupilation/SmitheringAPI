import handleGetAllModel from '../../models/products/getAllProducts';

const handleGetAllProducts = async () => {
  const products = await handleGetAllModel();

  return products;
};

export default handleGetAllProducts;
