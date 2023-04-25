import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const { PORT } = process.env || 3000;

const server = app.listen(Number(PORT), '0.0.0.0', () => console.log(
  `Server is running on PORT: ${PORT}`,
));

export default server;
