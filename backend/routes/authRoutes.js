const express = require('express');
const { login, signup } = require('../controllers/authController');
const router = express.Router();

// POST /signup
router.post('/signup', signup);

// POST /login
router.post('/login', login);

module.exports = router;
