import handleGetProductsModel from '../../models/products/getProducts';

const handleGetProducts = async () => {
  const getProducts = await handleGetProductsModel();

  return getProducts;
};

export default handleGetProducts;
