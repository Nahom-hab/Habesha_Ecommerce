const express = require("express");
const multer = require('multer');
const { createOrder, getAllOrders, getOrderById, updateOrder, deleteOrder } = require('../controller/order.controller.js');

const upload = multer();
const router = express.Router();

// Create a new order
router.post("/", upload.any(), createOrder);

// Get all orders
router.get("/", getAllOrders);

// Get a single order by ID
router.get("/:id", getOrderById);

// Update an order by ID
router.put("/:id", updateOrder);

// Delete an order by ID
router.delete("/:id", deleteOrder);

module.exports = router;
