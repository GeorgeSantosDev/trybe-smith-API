import { Request, Response } from 'express';
import ProductsService from '../services/products.service';
import statusCodes from '../utils/statusCodes';

export default class ProductsController {
  constructor(private productsService = new ProductsService()) { }

  public create = async (req: Request, res: Response): Promise<void> => {
    try {
      const { name, amount } = req.body;
      const response = await this.productsService.create({ name, amount });

      res.status(statusCodes.CREATED).json(response);
    } catch (err) {
      res.status(statusCodes.INTERNAL_ERROR).json({ messsage: `Ococrreu um erro: ${err}` });
    }
  };
}
