const mongoose = require('mongoose');

// Define a schema for order items
const OrderItemSchema = mongoose.Schema({
    productId: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
}, { _id: false }); // Disable `_id` for subdocuments if not needed

// Define the main Order schema
const OrderSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    bankRecipt: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
        // Add regex for phone number validation if needed
    },
    selectedBank: {
        type: String,
        required: true
    },
    address: { // Corrected typo here
        type: String,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    order: [OrderItemSchema], // Use the nested schema here
    order_status: {
        type: String,
        required: true,
        enum: ['pending', 'accepted', 'delivered', 'cancelled']
    }
}, {
    timestamps: true // Adds `createdAt` and `updatedAt` fields
});

// Create the Order model
const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
