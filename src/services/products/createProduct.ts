import createProductModel from '../../models/products/createProduct';
import { Product } from '../../interfaces/product';

const handleCreateProduct = async (product: Product) => {
  const createProduct = await createProductModel(product);

  return createProduct;
};

export default handleCreateProduct;
