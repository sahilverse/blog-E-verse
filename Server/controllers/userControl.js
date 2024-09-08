const User = require('../models/user');
const uploadImageToCloudinary = require('../config/cloudinary');

const uploadProfileImage = async (req, res) => {

    const user = await User.findById(req.user._id);

    const imageFile = req.file;

    try {
        let imageUrl = null;


        if (imageFile) {
            try {
                imageUrl = await uploadImageToCloudinary(imageFile.buffer);
            } catch (uploadError) {
                console.error('Cloudinary upload error:', uploadError);
                return res.status(500).json({ error: 'Failed to upload image' });
            }
        }

        user.profileImageUrl = imageUrl;
        await user.save();

        res.status(200).json({ message: 'Profile image uploaded successfully', user: { profileImageUrl: user.profileImageUrl } });
    } catch (error) {
        console.error('Error uploading profile image:', error);
        res.status(500).json({ error: error.message });
    }


};





module.exports = { uploadProfileImage };