const express = require('express');
const router = express.Router();
const upload = require('../config/multer');
const { uploadProfileImage } = require('../controllers/userControl');

router.post('/upload-profile-image', upload.single('image'), uploadProfileImage);


module.exports = router;