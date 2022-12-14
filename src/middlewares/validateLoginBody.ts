import { NextFunction, Request, Response } from 'express';
import statusCodes from '../utils/statusCodes';
import LoginService from '../services/login.service';

export default class ValidateLoginBody {
  constructor(private loginService = new LoginService()) { }

  public validateLoginBody = async (req: Request, res: Response, next: NextFunction) => {
    if (!('password' in req.body)) {
      return res.status(statusCodes.BAD_REQUEST).json({ message: '"password" is required' });
    }
  
    if (!('username' in req.body)) {
      return res.status(statusCodes.BAD_REQUEST).json({ message: '"username" is required' });
    }
  
    const { username, password } = req.body;
  
    const response = await this.loginService.getUser({ username, password });

    if (!response) {
      return res.status(statusCodes.UNAUTHORIZED).json({ message: 'Username or password invalid' });
    }

    req.body.id = response.id;

    next();
  };
}