import express from 'express';
import { createProduct, getProducts, getProductById, updateProduct, deleteProduct } from '../controller/product.controller.js'
import { isAdmin } from '../middelwere/isAdmin.js';

const router = express.Router();

router.post('/', createProduct);          // Create a new product
router.get('/', getProducts);             // Get all products
router.get('/:id', getProductById);       // Get a product by ID
router.put('/:id', isAdmin, updateProduct);        // Update a product
router.delete('/:id', isAdmin, deleteProduct);     // Delete a product

export default router;
