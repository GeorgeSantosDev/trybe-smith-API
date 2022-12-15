import { NextFunction, Request, Response } from 'express';
import statusCodes from '../utils/statusCodes';

const MINIMUM_LENGTH = 8;

export default class ValidatePassword {
  public validatePassword = (req: Request, res: Response, next: NextFunction): void | Response => {
    if (!('password' in req.body)) {
      return res.status(statusCodes.BAD_REQUEST).json({ message: '"password" is required' });
    }

    const { password } = req.body;

    if (typeof password !== 'string') {
      return res.status(statusCodes.UNPROCESSABLE_ENTITY)
        .json({ message: '"password" must be a string' });
    }

    if (password.length < MINIMUM_LENGTH) {
      return res.status(statusCodes.UNPROCESSABLE_ENTITY)
        .json({ message: '"password" length must be at least 8 characters long' });
    }

    next();
  };
}