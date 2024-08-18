const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        trim: true
    },
    username: {
        type: String,
        unique: true,
        trim: true
    },
    profileImageUrl: {
        type: String,
        default: `http://localhost:${process.env.PORT}/uploads/user.png`
    },
    googleId: {
        type: String,
        sparse: true,
        default: undefined,
        unique: true

    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {
    timestamps: true
});

/**
 * Verifies if the provided password matches the user's password.
 * @method verifyPassword
 * @memberof User
 * @param {string} password - The password to verify.
 * @returns {Promise<boolean>} - A promise that resolves to true if the password is correct, otherwise false.
 */

userSchema.methods.verifyPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

/**
 * Generates a unique username based on the user's name.
 * @param {string} name - The name of the user.
 * @returns {Promise<string>} - A promise that resolves to a unique username.
 */
const generateUniqueUsername = async function (name) {
    let username;
    let isUnique = false;
    let retryCount = 0;
    const maxRetries = 5;

    while (!isUnique && retryCount < maxRetries) {
        const randomNumber = Math.floor(Math.random() * 10000);
        username = `${name.replace(/\s+/g, '').toLowerCase()}${randomNumber}`;

        try {
            const existingUser = await User.findOne({ username });
            if (!existingUser) {
                isUnique = true;
            }
        } catch (error) {
            console.error('Error while checking username uniqueness:', error);
            throw new Error('Failed to generate unique username');
        }

        retryCount++;
    }

    if (!isUnique) {
        throw new Error('Failed to generate unique username after max retries');
    }

    return username;
};


// Pre-save hook to generate a unique username if not provided
userSchema.pre('save', async function (next) {
    if (!this.username) {

        try {

            this.username = await generateUniqueUsername(this.name);


        } catch (error) {
            console.error('Error while generating unique username:', error);
            return next(error);
        }

    }

    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
