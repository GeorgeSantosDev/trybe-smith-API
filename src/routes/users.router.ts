import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import ValidateLevel from '../middlewares/validateLevel';
import ValidatePassword from '../middlewares/validatePassword';
import ValidateUsername from '../middlewares/validateUsername';
import ValidateVocation from '../middlewares/validateVocation';

const controller = new UsersController();
const { validateUsername } = new ValidateUsername();
const { validateVocation } = new ValidateVocation();
const { validateLevel } = new ValidateLevel();
const { validatePassword } = new ValidatePassword();

const router = Router();

router.post(
  '/',
  validateUsername,
  validateVocation,
  validateLevel,
  validatePassword,
  controller.create,
);

export default router;
