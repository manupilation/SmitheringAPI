import { Request, Response } from 'express';
import rescue from 'express-rescue';
import createProductService from '../../services/products/createProduct';
import productsSchemas from '../joi/schemas/productsSchema';
import validationSchema from '../joi/validateSchema';

const handleCreateProduct = rescue(async (req: Request, res: Response) => {
  const { name, amount, url, price } = req.body;
  validationSchema(productsSchemas, req.body);

  const createProduct = await createProductService({ name, amount, url, price });

  res.status(201).json(createProduct);
});

export default handleCreateProduct;
