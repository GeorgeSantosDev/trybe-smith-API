import connection from '../models/connection';
import UsersModel from '../models/users.model';
import { NewUser, User } from '../utils/interfaces/usersI';

export default class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async create(user: NewUser): Promise<User> {
    const response = await this.model.create(user);
    
    return { ...user, id: response };
  }
}
