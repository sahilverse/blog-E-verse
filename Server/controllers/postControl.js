const PostModel = require('../models/post');

const uploadImageToCloudinary = require('../config/cloudinary');


// Create a new post
const createPost = async (req, res) => {
    const { user, content, visibility, scheduledAt } = req.body;
    const imageFile = req.file;

    try {
        let imageUrl = null;

        // Upload the image to Cloudinary if it exists
        if (imageFile) {
            try {
                imageUrl = await uploadImageToCloudinary(imageFile.buffer);
            } catch (uploadError) {
                console.error('Cloudinary upload error:', uploadError);
                return res.status(500).json({ error: 'Failed to upload image' });
            }
        }

        // Save the post with or without the image URL
        const newPost = new PostModel({ user, content, image: imageUrl, visibility, scheduledAt });
        const post = await newPost.save();
        await post.populate('user', 'name email profileImageUrl username');

        // console.log('Post created successfully:', post);

        res.status(201).json({ message: 'Post created successfully', post });
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ error: error.message });
    }
};


// Get all posts
const getPosts = async (req, res) => {
    try {
        const posts = await PostModel.find().populate('user', 'name email profileImageUrl username').sort({ createdAt: -1 });
        res.status(200).json({ posts });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Update a post
const updatePost = async (req, res) => {
    const { postId } = req.params;
    const { content, image, visibility, scheduledAt } = req.body;
    try {
        const post = await PostModel.findById(postId);
        if (!post) return res.status(404).json({ message: 'Post not found' });
        post.content = content;
        post.image = image;
        post.visibility = visibility;
        post.scheduledAt = scheduledAt;
        await post.save();
        res.status(200).json({ message: 'Post updated successfully', post });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Delete a post
const deletePost = async (req, res) => {
    const { postId } = req.params;
    try {
        const post = await PostModel.findByIdAndDelete(postId);
        if (!post) return res.status(404).json({ message: 'Post not found' });

        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Like or unlike a post
const likeandUnlikePost = async (req, res) => {
    const { postId } = req.params;
    const { userId } = req.body;


    try {
        if (!userId) return res.status(400).json({ message: 'User not found' });
        const post = await PostModel.findById(postId).populate('user', 'name email profileImageUrl username');
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        const likeIndex = post.likes.indexOf(userId);

        if (likeIndex === -1) {
            post.likes.push(userId);
        } else {
            post.likes.splice(likeIndex, 1);
        }

        await post.save();
        return res.status(200).json({ message: 'Post updated successfully', post });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// Comment on a post
const commentOnPost = async (req, res) => {
    const { postId } = req.params;
    const { userId, content } = req.body;

    try {
        if (!userId) return res.status(400).json({ message: 'User not found' });
        const post = await PostModel.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        post.comments.push({ userId, content });
        await post.save();
        return res.status(200).json({ message: 'Comment added successfully', post });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

// Share a post
const sharePost = async (req, res) => {
    const { postId } = req.params;
    const { userId } = req.body;

    try {
        if (!userId) return res.status(400).json({ message: 'User not found' });
        const post = await PostModel.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        post.shares.push(userId);
        await post.save();
        return res.status(200).json({ message: 'Post shared successfully', post });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = { createPost, getPosts, updatePost, deletePost, likeandUnlikePost, commentOnPost, sharePost };
