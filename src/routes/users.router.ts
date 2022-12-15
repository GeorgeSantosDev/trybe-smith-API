import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import ValidateUsername from '../middlewares/validateUsername';
import ValidateVocation from '../middlewares/validateVocation';

const controller = new UsersController();
const { validateUsername } = new ValidateUsername();
const { validateVocation } = new ValidateVocation();

const router = Router();

router.post('/', validateUsername, validateVocation, controller.create);

export default router;
