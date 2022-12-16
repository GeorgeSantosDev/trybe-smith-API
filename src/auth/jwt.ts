import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import statusCodes from '../utils/statusCodes';

const secret = process.env.JWT_SECRET || 'secret';

type UserInfos = { 
  username: string,
  id: number,
};

export const createToken = (user: UserInfos): string => {
  const { username, id } = user;
  const token = jwt.sign({ data: { username, id } }, secret, {
    algorithm: 'HS256',
    expiresIn: '1h',
  });

  return token;
};

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response | void> => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(statusCodes.UNAUTHORIZED).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, secret);

    req.body.token = decoded;
    next();
  } catch (err) {
    return res.status(statusCodes.UNAUTHORIZED).json({ message: 'Invalid token' });
  }
};
