import { NextFunction, Request, Response } from 'express';
import statusCodes from '../utils/statusCodes';

const MINIMUM_LENGTH = 3;

export default class ValidateVocation {
  public validateVocation = (req: Request, res: Response, next: NextFunction): void | Response => {
    if (!('vacation' in req.body)) {
      return res.status(statusCodes.BAD_REQUEST).json({ message: '"vacation" is required' });
    }

    const { vacation } = req.body;

    if (typeof vacation !== 'string') {
      return res.status(statusCodes.UNPROCESSABLE_ENTITY)
        .json({ message: '"vacation" must be a string' });
    }

    if (vacation.length < MINIMUM_LENGTH) {
      return res.status(statusCodes.UNPROCESSABLE_ENTITY)
        .json({ message: '"vacation" length must be at least 3 characters long' });
    }

    next();
  };
}