import { Router } from 'express';
import ProductsController from '../controllers/products.controller';
import ValidateProductName from '../middlewares/validateProductName';

const controller = new ProductsController();
const { validateName } = new ValidateProductName();

const router = Router();

router.get('/', controller.getAll);
router.post('/', validateName, controller.create);

export default router;
