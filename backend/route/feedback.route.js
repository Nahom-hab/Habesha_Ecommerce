const express = require('express');
const { createFeedback, getFeedbacks } = require('../controller/feedback.controller.js');

const router = express.Router();

// Create feedback
router.post('/', createFeedback);

// Get all feedbacks
router.get('/', getFeedbacks);

module.exports = router;
