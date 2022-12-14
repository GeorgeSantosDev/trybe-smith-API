import { Pool, RowDataPacket } from 'mysql2/promise';
import { Order } from '../utils/interfaces/ordersI';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const [response] = await this.connection.execute<RowDataPacket[] & Order[]>(
      `SELECT o.id, o.user_id as userId, JSON_ARRAYAGG(p.id) as productsIds
      FROM Trybesmith.orders AS o
      LEFT JOIN Trybesmith.products AS p
      ON o.id = p.order_id
      GROUP BY o.id`,
    );

    return response;
  }
}
