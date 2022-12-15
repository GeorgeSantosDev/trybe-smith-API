import { NextFunction, Request, Response } from 'express';
import statusCodes from '../utils/statusCodes';

const MINIMUM_LENGTH = 3;

export default class ValidateUsername {
  public validateUsername = (req: Request, res: Response, next: NextFunction): void | Response => {
    if (!('name' in req.body)) {
      return res.status(statusCodes.BAD_REQUEST).json({ message: '"username" is required' });
    }

    const { username } = req.body;

    if (typeof username !== 'string') {
      return res.status(statusCodes.UNPROCESSABLE_ENTITY)
        .json({ message: '"username" must be a string' });
    }

    if (username.length < MINIMUM_LENGTH) {
      return res.status(statusCodes.UNPROCESSABLE_ENTITY)
        .json({ message: '"username" length must be at least 3 characters long' });
    }

    next();
  };
}