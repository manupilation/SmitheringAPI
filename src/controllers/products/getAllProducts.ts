import { Request, Response } from 'express';
import getAllService from '../../services/products/getAllProducts';

const handleGetAllProducts = async (_req: Request, res: Response) => {
  const products = await getAllService();

  res.status(200).json(products);
};

export default handleGetAllProducts;
