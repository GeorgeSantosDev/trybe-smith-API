import { NextFunction, Request, Response } from 'express';
import statusCodes from '../utils/statusCodes';

const MINIMUM_LENGTH = 3;

export default class ValidateProductName {
  public validateName = (req: Request, res: Response, next: NextFunction): void | Response => {
    if (!('name' in req.body)) {
      return res.status(statusCodes.BAD_REQUEST).json({ message: '"name" is required' });
    }

    const { name } = req.body;

    if (typeof name !== 'string') {
      return res.status(statusCodes.UNPROCESSABLE_ENTITY)
        .json({ message: '"name" must be a string' });
    }

    if (name.length < MINIMUM_LENGTH) {
      return res.status(statusCodes.UNPROCESSABLE_ENTITY)
        .json({ message: '"name" length must be at least 3 characters long' });
    }

    next();
  };
}