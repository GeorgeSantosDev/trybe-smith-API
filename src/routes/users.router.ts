import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import ValidateLevel from '../middlewares/validateLevel';
import ValidateUsername from '../middlewares/validateUsername';
import ValidateVocation from '../middlewares/validateVocation';

const controller = new UsersController();
const { validateUsername } = new ValidateUsername();
const { validateVocation } = new ValidateVocation();
const { validateLevel } = new ValidateLevel();

const router = Router();

router.post('/', validateUsername, validateVocation, validateLevel, controller.create);

export default router;
