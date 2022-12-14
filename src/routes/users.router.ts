import { Router } from 'express';
import UsersController from '../controllers/users.controller';

const controller = new UsersController();

const router = Router();

router.post('/', controller.create);

export default router;
