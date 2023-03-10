import { Pool, ResultSetHeader } from 'mysql2/promise';
import { NewUser } from '../utils/interfaces/usersI';

export default class UsersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: NewUser): Promise<number> {
    const { username, vocation, level, password } = user;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password], 
    );

    return insertId;
  }
}
