const express = require('express');
const { signup, login } = require('../controller/admin.controller.js');

const router = express.Router();

router.post('/signup', signup);          // Signup route
router.post('/login', login);            // Login route

module.exports = router;
