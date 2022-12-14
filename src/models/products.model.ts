import { Pool, ResultSetHeader } from 'mysql2/promise';
import { NewProduct } from '../utils/interfaces/productsI';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(product: NewProduct): Promise<number> {
    const { name, amount } = product;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount], 
    );

    return insertId;
  } 
}
