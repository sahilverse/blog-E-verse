const jwt = require('jsonwebtoken');

/**
 * Sets the user information in a JSON Web Token (JWT).
 * @param {Object} user - The user object containing user information.
 * @param {string} user._id - The unique identifier of the user.
 * @param {string} user.name - The name of the user.
 * @param {string} user.email - The email address of the user.
 * @param {string} user.profileImageUrl - The profile image URL of the user.
 * @param {string} user.username - The username of the user
 * @returns {string} - The generated JWT.
 */

const setUser = (user) => {
    const payload = {
        _id: user._id,
        name: user.name,
        email: user.email,
        profileImageUrl: user.profileImageUrl,
        username: user.username
    }

    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });
}

/**
 * Retrieves the user information from a JSON Web Token (JWT).
 * @param {string} token - The JWT token.
 * @returns {Object|null} - The user object if the token is valid, otherwise null.
 */
const getUser = (token) => {
    if (!token) return null;

    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
        return null;
    }
}

module.exports = { setUser, getUser };