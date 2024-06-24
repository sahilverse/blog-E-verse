// contains all the routes for authentication login/ signup/ logout/ forgot password/ reset password
const express = require('express');
const router = express.Router();

router.post('/signup', handleSignUp);