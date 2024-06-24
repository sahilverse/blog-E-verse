// contains all the routes for authentication login/ signup/ logout/ forgot password/ reset password
const express = require('express');
const router = express.Router();
const { handleSignUp, handleLogin } = require('../controllers/authControl');

router.post('/signup', handleSignUp);

router.post('/login', handleLogin);




module.exports = router;