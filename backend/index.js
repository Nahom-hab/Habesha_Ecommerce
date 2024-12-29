const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');

const ProductRoute = require('../backend/route/product.route.js');
const adminRoute = require('../backend/route/admin.route.js');
const FeedBackRoute = require('../backend/route/feedback.route.js');
const uploadRoute = require('../backend/route/upload.route.js');
const OrderRoute = require('../backend/route/order.route.js');

const app = express();
dotenv.config();
app.use(cookieParser());

mongoose.connect(process.env.MONGO_URI, {})
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.log("MongoDB connection error:", error));


app.use(cors());
app.use(express.json());

app.use('/api/product', ProductRoute);
app.use('/api/feedback', FeedBackRoute);
app.use('/api/admin', adminRoute);
app.use('/api/upload', uploadRoute);
app.use('/api/order', OrderRoute);

// Serve static files from the frontend
// app.use(express.static(path.join(__dirname, '/frontend/dist')));

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '/frontend/dist/index.html'));
// });

// Global error handling
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});

// Start the server
app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
