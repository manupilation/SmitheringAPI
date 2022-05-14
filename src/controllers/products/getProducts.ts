import { Request, Response } from 'express';
import handleGetProductsServices from '../../services/products/getProducts';

const handleGetProducts = async (_req: Request, res: Response) => {
  const getProducts = await handleGetProductsServices();

  res.status(200).json(getProducts);
};

export default handleGetProducts;
