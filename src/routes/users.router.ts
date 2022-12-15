import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import ValidateUsername from '../middlewares/validateUsername';

const controller = new UsersController();
const { validateUsername } = new ValidateUsername();

const router = Router();

router.post('/', validateUsername, controller.create);

export default router;
