import { Pool, RowDataPacket } from 'mysql2/promise';
import { User, UserCheck } from '../utils/interfaces/usersI';

export default class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getUser(user: UserCheck): Promise<User> {
    const { username, password } = user;
    const [[response]] = await this.connection.execute<RowDataPacket[] & User[]>(
      'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?',
      [username, password],
    );

    return response;
  }
}
