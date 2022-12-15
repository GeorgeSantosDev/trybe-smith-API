import { NextFunction, Request, Response } from 'express';
import statusCodes from '../utils/statusCodes';

const MINIMUM_LENGTH = 3;

export default class ValidateProductAmount {
  public validateAmount = (req: Request, res: Response, next: NextFunction): void | Response => {
    if (!('amount' in req.body)) {
      return res.status(statusCodes.BAD_REQUEST).json({ message: '"amount" is required' });
    }

    const { amount } = req.body;

    if (typeof amount !== 'string') {
      return res.status(statusCodes.UNPROCESSABLE_ENTITY)
        .json({ message: '"amount" must be a string' });
    }

    if (amount.length < MINIMUM_LENGTH) {
      return res.status(statusCodes.UNPROCESSABLE_ENTITY)
        .json({ message: '"amount" length must be at least 3 characters long' });
    }

    next();
  };
}