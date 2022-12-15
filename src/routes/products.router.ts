import { Router } from 'express';
import ProductsController from '../controllers/products.controller';
import ValidateProductName from '../middlewares/validateProductName';
import ValidateProductAmount from '../middlewares/validateProductAmount';

const controller = new ProductsController();
const { validateName } = new ValidateProductName();
const { validateAmount } = new ValidateProductAmount();

const router = Router();

router.get('/', controller.getAll);
router.post('/', validateName, validateAmount, controller.create);

export default router;
