import { Request, Response } from 'express';
import { createToken } from '../auth/jwt';
import statusCodes from '../utils/statusCodes';

export default class LoginController {
  public login = async (req: Request, res: Response): Promise<void> => {
    try {
      const { username, id } = req.body;

      const token = createToken({ id, username });
  
      res.status(statusCodes.OK).json({ token });
    } catch (err) {
      res.status(statusCodes.INTERNAL_ERROR).json({ messsage: `Ococrreu um erro: ${err}` });
    }
  };
}
