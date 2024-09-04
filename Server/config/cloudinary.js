const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier');

// cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


// Helper function to upload image to Cloudinary
const uploadImageToCloudinary = (imageBuffer) => {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream((error, result) => {
            if (error) {
                return reject(error);
            }
            resolve(result.secure_url);
        });

        streamifier.createReadStream(imageBuffer).pipe(uploadStream);
    });
};


module.exports = uploadImageToCloudinary;