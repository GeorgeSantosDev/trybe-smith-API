import { NextFunction, Request, Response } from 'express';
import statusCodes from '../utils/statusCodes';

export default class ValidateProductsIdsField {
  public validateProductId = (req: Request, res: Response, next: NextFunction): void | Response => {
    if (!('productsIds' in req.body)) {
      return res.status(statusCodes.BAD_REQUEST).json({ message: '"productsIds" is required' });
    }

    const { productsIds } = req.body;

    if (!(Array.isArray(productsIds))) {
      return res.status(statusCodes.UNPROCESSABLE_ENTITY)
        .json({ message: '"productsIds" must be an array' });
    }

    if (!productsIds[0]) {
      return res.status(statusCodes.UNPROCESSABLE_ENTITY)
        .json({ message: '"productsIds" must include only numbers' });
    }

    next();
  };
}