import { Router } from 'express';
import JWTValidator from '../controllers/Middlewares/jwtValidator';
import handleCreateProduct from '../controllers/products/createProducts';
import handleGetProducts from '../controllers/products/getProducts';

const ProductsRoute = Router();

ProductsRoute.post('/', JWTValidator, handleCreateProduct);
ProductsRoute.get('/', JWTValidator, handleGetProducts);

export default ProductsRoute;