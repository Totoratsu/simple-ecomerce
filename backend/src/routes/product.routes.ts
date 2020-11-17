import { Router } from 'express';

import productControllers from '../controllers/product.controllers';

const router = Router();

router.get(
    '/getall',
    productControllers.getProducts
);

router.post(
    '/create',
    productControllers.createProduct
);

router.put(
    '/edit',
    productControllers.editProduct
);

router.delete(
    '/delete:id',
    productControllers.deleteProduct
);

router.get(
    '/get:id',
    productControllers.getOneProduct
);

export default router;