import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';
import ValidateProductsIdsField from '../middlewares/validateProductsIdsField';
import { verifyToken } from '../auth/jwt';

const controller = new OrdersController();
const { validateProductId } = new ValidateProductsIdsField();

const router = Router();

router.get('/', controller.getAll);
router.post('/', verifyToken, validateProductId, controller.create);

export default router;
