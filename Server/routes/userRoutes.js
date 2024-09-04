const express = require('express');
const router = express.Router();
const upload = require('../config/multer');

router.post('/upload-profile-image', upload.single('image'), uploadProfileImage);