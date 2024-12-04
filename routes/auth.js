const express = require('express');
const { login, signup, listUsers } = require('../controllers/authController');
const router = express.Router();

router.post('/login', login);  
router.post('/signup', signup); 
router.get('/list', listUsers); 

module.exports = router;
