const User = require('../models/user');
const hashPassword = require('../services/bcrypt');
const { setUser } = require('../services/auth');

/**
 * Handles the sign up functionality.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the sign up process is complete.
 * @throws {Error} - If an error occurs during the sign up process.
 */
const handleSignUp = async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await hashPassword(password);
    try {
        const user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: 'User already exists' });

        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();
        const { profileImageUrl } = newUser;
        res.status(201).json({ message: 'User created successfully', user: { name, email, profileImageUrl } });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * Handles the login functionality.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the login process is complete.
 * @throws {Error} - If an error occurs during the login process.
 */
const handleLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found' });
        const { name, profileImageUrl } = user;


        const isPasswordCorrect = await user.verifyPassword(password, user.password);
        if (!isPasswordCorrect) return res.json({ message: 'Incorrect password' });

        const sessionId = setUser(user);
        res.cookie('sessionId', sessionId, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
        res.status(200).json({ message: 'Login successful', user: { email, profileImageUrl, name } });


    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { handleSignUp, handleLogin };