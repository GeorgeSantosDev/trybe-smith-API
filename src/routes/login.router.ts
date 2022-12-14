import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import ValidateLoginBody from '../middlewares/validateLoginBody';

const controller = new LoginController();
const { validateLoginBody } = new ValidateLoginBody();

const router = Router();

router.post('/', validateLoginBody, controller.login);

export default router;
