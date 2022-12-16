import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';
import statusCodes from '../utils/statusCodes';

export default class OrdersController {
  constructor(private ordersService = new OrdersService()) { }

  public getAll = async (_req: Request, res: Response): Promise<void> => {
    try {
      const response = await this.ordersService.getAll();

      res.status(statusCodes.OK).json(response);
    } catch (err) {
      res.status(statusCodes.INTERNAL_ERROR).json({ messsage: `Ococrreu um erro: ${err}` });
    }
  };

  public create = async (req: Request, res: Response): Promise<Response | void> => {
    try {
      const { productsIds, token: { data: { id: userId } } } = req.body;

      const response = await this.ordersService.create({ productsIds, userId });

      if (response) return res.status(statusCodes.CREATED).json({ productsIds, userId });
    } catch (err) {
      res.status(statusCodes.INTERNAL_ERROR).json({ messsage: `Ococrreu um erro: ${err}` });
    }
  };
}
