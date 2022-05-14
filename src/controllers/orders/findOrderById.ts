import { Request, Response } from 'express';
import rescue from 'express-rescue';
import handleFindOrderService from '../../services/orders/findOrderById';

const handleFindOrder = rescue(async (req: Request, res: Response) => {
  const { id } = req.params;
  const find = await handleFindOrderService(parseInt(id, 10));

  const resultProducts = find.products.map((product) => product.id);

  res.status(200).json({
    id: find.id,
    userId: find.userId,
    products: resultProducts,
  });
});

export default handleFindOrder;