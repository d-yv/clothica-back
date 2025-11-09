import { Router } from 'express';
import { celebrate } from 'celebrate';
import {
  getAllGoodsSchema,
  goodIdSchema,
} from '../validation/goodsValidation.js';
import { getAllGoods, getGoodById } from '../controllers/goodsController.js';
// import { authenticate } from '../middleware/authenticate.js';
const router = Router();
// router.use('/goods', authenticate);
router.get('/goods', celebrate(getAllGoodsSchema), getAllGoods);
router.get('/goods/:goodId', celebrate(goodIdSchema), getGoodById);

export default router;
