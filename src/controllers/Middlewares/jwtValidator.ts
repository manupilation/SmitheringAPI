import { Request, Response, NextFunction } from 'express';
import IJWTUser from '../../interfaces/tokenJWT';
// import getUser from '../../models/user/getUser';
import * as jwtConfig from '../../utils/jwtConfig';

const JWTValidator = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'Token not found' });
  }

  try {
    jwtConfig.verifyToken(authorization) as IJWTUser;

    // const getUserById = await getUser(validateToken.id);

    // if (!getUserById) {
    //   return res.status(401).json({ error: 'Invalid token' });
    // }

    // req.body.user = validateToken.username;
    
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ error: 'Invalid token' });
  }
};

export default JWTValidator;
