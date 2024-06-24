
const mongoose = require('mongoose');
mongoose.set("strictQuery", true);

/**
 * Connects to the MongoDB database using the provided URL.
 * @param {string} url - The URL of the MongoDB database.
 * @returns {Promise<void>} - A promise that resolves when the connection is successful.
 */
const connectDB = async (url) => {
    try {
        await mongoose.connect(url);

    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};



module.exports = connectDB;