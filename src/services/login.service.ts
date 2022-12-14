import connection from '../models/connection';
import LoginModel from '../models/login.model';
import { User, UserCheck } from '../utils/interfaces/usersI';

export default class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async getUser(user: UserCheck): Promise<User> {
    const response = await this.model.getUser(user);
    
    return response;
  }
}
