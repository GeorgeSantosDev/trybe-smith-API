import { Request, Response } from 'express';
import createToken from '../auth/jwt';
import UsersService from '../services/users.service';
import statusCodes from '../utils/statusCodes';

export default class UsersController {
  constructor(private usersService = new UsersService()) { }

  public create = async (req: Request, res: Response): Promise<void> => {
    try {
      const { username, vocation, level, password } = req.body;
      const { id } = await this.usersService.create({ username, vocation, level, password });

      if (id) {
        const token = createToken({ id, username });
  
        res.status(statusCodes.CREATED).json({ token });
      }
    } catch (err) {
      res.status(statusCodes.INTERNAL_ERROR).json({ messsage: `Ococrreu um erro: ${err}` });
    }
  };
}
