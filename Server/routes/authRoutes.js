// contains all the routes for authentication login/ signup/ logout/ forgot password/ reset password
const express = require('express');
const router = express.Router();
const { handleSignUp, handleLogin, handleGoogleLogin, handleAuthCheck } = require('../controllers/authControl');

router.post('/signup', handleSignUp);

router.post('/login', handleLogin);

router.post('/google-login', handleGoogleLogin);

router.get('/auth-check', handleAuthCheck);

router.post('/logout', (req, res) => {
    try {
        res.clearCookie('sess_', { path: '/' });
        res.status(200).json({ message: 'Logged out' });
    } catch (error) {
        res.status(500).json({ message: 'Error logging out', error });
    }
});




module.exports = router;