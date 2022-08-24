import { Router } from 'express';
import handleGetAllProducts from '../controllers/products/getAllProducts';

const DefaultRoute = Router();

DefaultRoute.get('/', handleGetAllProducts);

export default DefaultRoute;
