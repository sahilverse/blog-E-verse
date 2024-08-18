/**
 * Module dependencies.
 */
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/connection');
const authRoutes = require('./routes/authRoutes');
const checkAuth = require('./middlewares/auth');

const PostRoutes = require('./routes/postRoutes');

// global middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(
    {
        origin: process.env.CLIENT_URL,
        credentials: true
    }
));
app.use(cookieParser());


// Serve static files from the 'uploads' directory
app.use('/uploads', express.static('uploads'));

/**
 * Connect to the database.
 *
 * @param {string} process.env.MONGO_URI - The MongoDB connection URI.
 * @returns {Promise} A promise that resolves when the database connection is successful.
 * @throws {Error} If the database connection fails.
 */
connectDB(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to database');
    })
    .catch((err) => {
        console.error(err);
    });


// routes
app.use('/', checkAuth, authRoutes);

app.use('/posts', PostRoutes);

/**
 * Start the server.
 *
 * @param {number} PORT - The port number on which the server will listen.
 */
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

