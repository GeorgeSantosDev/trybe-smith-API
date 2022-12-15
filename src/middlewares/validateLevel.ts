import { NextFunction, Request, Response } from 'express';
import statusCodes from '../utils/statusCodes';

const MINIMUM_LEVEL = 1;

export default class ValidateLevel {
  public validateLevel = (req: Request, res: Response, next: NextFunction): void | Response => {
    if (!('level' in req.body)) {
      return res.status(statusCodes.BAD_REQUEST).json({ message: '"level" is required' });
    }

    const { level } = req.body;

    if (typeof level !== 'number') {
      return res.status(statusCodes.UNPROCESSABLE_ENTITY)
        .json({ message: '"level" must be a number' });
    }

    if (level < MINIMUM_LEVEL) {
      return res.status(statusCodes.UNPROCESSABLE_ENTITY)
        .json({ message: '"level" must be greater than or equal to 1' });
    }

    next();
  };
}