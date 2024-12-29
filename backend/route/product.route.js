const express = require('express');
const { createProduct, getProducts, getProductById, updateProduct, deleteProduct } = require('../controller/product.controller.js');
const { isAdmin } = require('../middelwere/isAdmin.js');

const router = express.Router();

router.post('/', createProduct);          // Create a new product
router.get('/', getProducts);             // Get all products
router.get('/:id', getProductById);       // Get a product by ID
// router.put('/:id', isAdmin, updateProduct);        // Update a product
// router.delete('/:id', isAdmin, deleteProduct);     // Delete a product

module.exports = router;
