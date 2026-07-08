import { Router } from 'express';
import { 
    getAllProducts, 
    getProductById, 
    createProduct, 
    deleteProduct 
} from '../controllers/product.controller.js';

const router = Router();

// GET /api/products
router.get('/', getAllProducts);

// GET /api/products/:id
router.get('/:id', getProductById);

// POST /api/products/create
router.post('/create', createProduct);

// DELETE /api/products/:id
router.delete('/:id', deleteProduct);

export default router;