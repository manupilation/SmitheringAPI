import express from 'express';
import JoiError from './controllers/Middlewares/JoiHandlerError';
import errorDomain from './controllers/Middlewares/DomainError';
// import globalError from './controllers/Middlewares/error';
import UserRoute from './Routes/UserRoute';
import LoginRoute from './Routes/LoginRoute';
import ProductsRoute from './Routes/ProductsRoute';
import OrderRouter from './Routes/OrderRoute';
import DefaultRoute from './Routes/DefaultRoute';

const app = express();
app.use(express.json());

app.use('/users', UserRoute);
app.use('/login', LoginRoute);
app.use('/products', ProductsRoute);
app.use('/orders', OrderRouter);
app.use('/', DefaultRoute);

app.use(JoiError);
app.use(errorDomain);
// app.use(globalError);

export default app;
