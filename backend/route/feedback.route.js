import express from 'express';
import {
    createFeedback,
    getFeedbacks
} from '../controller/feedback.controller.js'

const router = express.Router();

// Create feedback
router.post('/', createFeedback);

// Get all feedbacks
router.get('/', getFeedbacks);



export default router;
