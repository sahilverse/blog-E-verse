const express = require('express');
const upload = require('../config/multer');
const { createPost, getPosts, updatePost, deletePost, likeandUnlikePost, commentOnPost, sharePost } = require('../controllers/postControl');


const router = express.Router();





router.post('/', upload.single('image'), createPost);

router.get('/', getPosts);

router.patch('/:postId', updatePost);

router.delete('/:postId', deletePost);

router.post('/:postId/like', likeandUnlikePost);

router.post('/:postId/comment', commentOnPost);

router.post('/:postId/share', sharePost);



module.exports = router;