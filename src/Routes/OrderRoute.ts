import { Router } from 'express';
import JWTValidator from '../controllers/Middlewares/jwtValidator';
import handleCreateOrder from '../controllers/orders/createNewOrder';
import handleFindAllOrders from '../controllers/orders/findAllOrders';
import handleFindOrder from '../controllers/orders/findOrderById';

const OrderRouter = Router();
OrderRouter.post('/', JWTValidator, handleCreateOrder);
OrderRouter.get('/', JWTValidator, handleFindAllOrders);
OrderRouter.get('/:id', JWTValidator, handleFindOrder);

export default OrderRouter;
