import jwt from 'jsonwebtoken';
import JwtInterface from '../interfaces/jwt';

const JWT_SECRET = 'eca437de0cd440f467e47c229bab7af0';

export const jwtSignature = (payload: JwtInterface) => jwt.sign(payload, JWT_SECRET, {
  expiresIn: '5h',
  algorithm: 'HS256',
});

export const verifyToken = (token: string) => {
  const verifying = jwt.verify(token, JWT_SECRET, { algorithms: ['HS256'] });
  return verifying;
};
