import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';


import ProductRoute from '../backend/route/product.route.js'
import adminRoute from '../backend/route/admin.route.js'
import FeedBackRoute from '../backend/route/feedback.route.js'
import uploadRoute from '../backend/route/upload.route.js'
import OrderRoute from '../backend/route/order.route.js'


const app = express();
dotenv.config();
app.use(cookieParser());

mongoose.connect(process.env.MONGO_URI, {
})
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.log("MongoDB connection error:", error));


// Get the absolute path to our backend
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());


app.use('/api/product', ProductRoute)
app.use('/api/feedback', FeedBackRoute)
app.use('/api/admin', adminRoute)
app.use('/api/upload', uploadRoute)
app.use('/api/order', OrderRoute)



// Serve static files from the frontend
app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/frontend/dist/index.html'));
});

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
