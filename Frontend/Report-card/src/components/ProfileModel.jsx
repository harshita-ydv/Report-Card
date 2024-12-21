// ProfileModal.js
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";

const ProfileModel = ({ email, onClose }) => {
  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle the file change (upload image)
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setLoading(true);
      const formData = new FormData();
      formData.append("image", file); // append the image to formData

      try {
        // Send the file to your backend (which will upload it to Cloudinary)
        const response = await axios.post("http://localhost:5000/upload-profile-photo", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        // Log the response to check if imageUrl is being returned
        console.log("Image upload response:", response.data);

        if (response.data.imageUrl) {
          // Get the image URL from Cloudinary response
          const imageUrl = response.data.imageUrl;
          setProfileImage(imageUrl); // Set the uploaded image as profileImage
        } else {
          console.error("No image URL returned from Cloudinary");
        }

        setLoading(false);
      } catch (error) {
        console.error("Error uploading image:", error);
        setLoading(false);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <AiOutlineClose className="h-6 w-6" />
        </button>

        {/* Profile Content */}
        <h2 className="text-xl font-bold mb-4">Profile</h2>

        {/* Profile Image */}
        <div className="mb-4">
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
          ) : (
            <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
              <span className="text-gray-500">No Image</span>
            </div>
          )}

          {/* Image Upload Button */}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border px-3 py-2 rounded-md text-sm"
          />
        </div>

        {/* Email Content */}
        <p className="text-gray-700">
          <strong>Email:</strong> {email || "Not Available"}
        </p>
      </div>
    </div>
  );
};

export default ProfileModel;
