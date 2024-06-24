/**
 * User model representing a user in the application.
 * @typedef {Object} User
 * @property {string} name - The name of the user.
 * @property {string} email - The email of the user.
 * @property {string} password - The password of the user.
 * @property {Date} createdAt - The timestamp when the user was created.
 * @property {Date} updatedAt - The timestamp when the user was last updated.
 */

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
        required: true,
        trim: true
    },

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

const User = mongoose.model('User', userSchema);

module.exports = User;