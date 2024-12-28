const { uploadOnCloudinary, deleteFromCloudinary } = require('../utils/cloudinary');
const Profile = require('../models/image');

// Controller for adding a new profile image
const addNewProfileImage = async (req, res) => {
  try {
    const imageLocalPath = req.file?.path; // Get the uploaded image local path from Multer
    if (!imageLocalPath) {
      return res.status(404).json({
        success: false,
        message: "Image not found",
      });
    }

    // Upload the image to Cloudinary
    const cloudinaryResponse = await uploadOnCloudinary(imageLocalPath);

    // Save the image URL to the database
    const profile = new Profile({
      image: cloudinaryResponse.url,
    });
    await profile.save();

    res.status(201).json({
      success: true,
      message: "Image uploaded successfully",
      imageUrl: cloudinaryResponse.url,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error uploading image",
      error: error.message,
    });
  }
};

// Controller for getting the profile image
const getProfileImage = async (req, res) => {
  try {
    const profile = await Profile.findOne(); // Assuming only one profile image
    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile image not found",
      });
    }

    res.status(200).json({
      success: true,
      imageUrl: profile.image,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving image",
      error: error.message,
    });
  }
};

// Controller for updating the profile image
const updateProfileImage = async (req, res) => {
  try {
    const imageLocalPath = req.file?.path; // Get the uploaded image local path from Multer
    if (!imageLocalPath) {
      return res.status(404).json({
        success: false,
        message: "Image not found",
      });
    }

    // Upload the new image to Cloudinary
    const cloudinaryResponse = await uploadOnCloudinary(imageLocalPath);

    // Assuming only one profile image, update the existing one
    const profile = await Profile.findOne();
    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile image not found",
      });
    }

    // Optionally, delete the old image from Cloudinary
    await deleteFromCloudinary(profile.image);

    // Update the profile image URL in the database
    profile.image = cloudinaryResponse.url;
    await profile.save();

    res.status(200).json({
      success: true,
      message: "Profile image updated successfully",
      imageUrl: cloudinaryResponse.url,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating image",
      error: error.message,
    });
  }
};

// Controller for deleting the profile image
const deleteProfileImage = async (req, res) => {
  try {
    const profile = await Profile.findOne();
    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile image not found",
      });
    }

    // Delete the image from Cloudinary
    await deleteFromCloudinary(profile.image);

    // Delete the profile image URL from the database
    await profile.deleteOne();

    res.status(200).json({
      success: true,
      message: "Profile image deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting image",
      error: error.message,
    });
  }
};

module.exports = { addNewProfileImage, getProfileImage, updateProfileImage, deleteProfileImage };
