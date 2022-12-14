import connection from '../models/connection';
import OrdersModel from '../models/orders.model';
import { Order } from '../utils/interfaces/ordersI';

export default class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async getAll(): Promise<Order[]> {
    const response = await this.model.getAll();
    
    return response;
  } 
}
