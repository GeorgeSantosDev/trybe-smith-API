import { NextFunction, Request, Response } from 'express';
import statusCodes from '../utils/statusCodes';

const MINIMUM_LENGTH = 3;

export default class ValidateVocation {
  public validateVocation = (req: Request, res: Response, next: NextFunction): void | Response => {
    if (!('vocation' in req.body)) {
      return res.status(statusCodes.BAD_REQUEST).json({ message: '"vocation" is required' });
    }

    const { vocation } = req.body;

    if (typeof vocation !== 'string') {
      return res.status(statusCodes.UNPROCESSABLE_ENTITY)
        .json({ message: '"vocation" must be a string' });
    }

    if (vocation.length < MINIMUM_LENGTH) {
      return res.status(statusCodes.UNPROCESSABLE_ENTITY)
        .json({ message: '"vocation" length must be at least 3 characters long' });
    }

    next();
  };
}