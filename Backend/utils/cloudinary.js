const cloudinary = require('cloudinary').v2;  // Cloudinary v2 client
const fs = require('fs');                      // To handle filesystem operations
const dotenv = require('dotenv');              // For environment variable management

// Load environment variables from .env file
dotenv.config();

// Configure Cloudinary with environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Function to upload file to Cloudinary
const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      throw new Error('No file path provided');
    }

    // Upload the file to Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: 'auto', // Automatically determine the file type (image, video, etc.)
    });

    // Log the Cloudinary response URL
    console.log('File uploaded to Cloudinary:', response.url);

    // Return the response from Cloudinary, which contains the URL of the uploaded file
    return response;
  } catch (error) {
    // If the upload fails, clean up the local file
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath); // Remove the file from local storage
    }

    // Log the error to the console
    console.error('Error uploading file to Cloudinary:', error);

    // Return null if there was an error
    return null;
  }
};

// Function to delete a file from Cloudinary (used during update or delete operations)
const deleteFromCloudinary = async (imageUrl) => {
  try {
    if (!imageUrl) {
      throw new Error('No image URL provided');
    }

    // Extract the public ID from the URL (Cloudinary URL format: .../image/upload/{public_id}.ext)
    const publicId = imageUrl.split('/').pop().split('.')[0]; // Get public ID from URL

    // Delete the image from Cloudinary
    const response = await cloudinary.uploader.destroy(publicId);

    // Log success message
    console.log('Cloudinary image deleted:', response);

    // Return the response from Cloudinary
    return response;
  } catch (error) {
    // Log the error if deletion fails
    console.error('Error deleting file from Cloudinary:', error);

    // Return null if there was an error
    return null;
  }
};

// Export functions
module.exports = { uploadOnCloudinary, deleteFromCloudinary };
