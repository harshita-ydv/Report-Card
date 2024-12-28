const express = require('express');
const multer = require('multer');
const { addNewProfileImage, getProfileImage, updateProfileImage, deleteProfileImage } = require('../Controllers/imageController.js');

const router = express.Router();

// Configure multer for single file upload
const upload = multer({ dest: 'uploads/' });

// Route to upload a single image
router.post('/upload-profile', upload.single('image'), addNewProfileImage);

// Route to get the profile image
router.get('/profile-image', getProfileImage);

// Route to update the profile image
router.put('/update-profile', upload.single('image'), updateProfileImage);

// Route to delete the profile image
router.delete('/delete-profile', deleteProfileImage);

module.exports = router;
