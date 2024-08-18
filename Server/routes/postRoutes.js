const express = require('express');

const router = express.Router();

const { createPost, getPosts, updatePost, deletePost, likeandUnlikePost, commentOnPost, sharePost } = require('../controllers/postControl');


router.post('/', createPost);

router.get('/', getPosts);

router.patch('/:postId', updatePost);

router.delete('/:postId', deletePost);

router.post('/:postId/like', likeandUnlikePost);

router.post('/:postId/comment', commentOnPost);

router.post('/:postId/share', sharePost);



module.exports = router;