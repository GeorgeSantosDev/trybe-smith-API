import { Router } from 'express';
import ProductsController from '../controllers/products.controller';

const controller = new ProductsController();

const router = Router();

router.get('/', controller.getAll);
router.post('/', controller.create);

export default router;
