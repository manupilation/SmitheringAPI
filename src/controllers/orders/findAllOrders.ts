import { Request, Response } from 'express';
import rescue from 'express-rescue';
import handleFindAllOrdersService from '../../services/orders/findAllOrders';

const handleFindAllOrders = rescue(async (req: Request, res: Response) => {
  const findAll = await handleFindAllOrdersService();

  const output = findAll.map((order) => ({
    ...order,
    products: order.products.map((product) => product.id),
  }));

  res.status(200).json(output);
});

export default handleFindAllOrders;