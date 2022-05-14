import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import rescue from 'express-rescue';
import IJWTUser from '../../interfaces/tokenJWT';
import handleCreateOrderService from '../../services/orders/createNewOrder';
import OrderSchema from '../joi/schemas/orderSchema';
import validationSchema from '../joi/validateSchema';

const handleCreateOrder = rescue(async (req: Request, res: Response) => {
  const { products } = req.body;
  const { authorization } = req.headers;
  if (!authorization) {
    throw new Error('Faiô');
  }

  validationSchema(OrderSchema, req.body);

  const { id } = jwt.decode(authorization) as IJWTUser;

  const createOrder = await handleCreateOrderService(products, id);

  res.status(createOrder.code).json({
    order: {
      userId: createOrder.data.order.userId,
      products: createOrder.data.order.orderItems,
    },
  });
});

export default handleCreateOrder;