// import React, { useState, useEffect } from "react";
// import { AiOutlineClose } from "react-icons/ai";
// import axios from "axios";

// const ProfileModal = ({ email, onClose }) => {
//   const [profileImage, setProfileImage] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);
//   const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
//   const [imageId, setImageId] = useState(null); // To store the Cloudinary image public ID

//   // Handle the file input change
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setProfileImage(file);
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handle form submission for uploading the image
//   const handleUpload = async () => {
//     if (profileImage) {
//       const formData = new FormData();
//       formData.append("image", profileImage);

//       try {
//         // Upload image to the backend (Cloudinary)
//         const response = await axios.post("http://localhost:5000/api/profile/upload-profile", formData, {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         });

//         setUploadedImageUrl(response.data.imageUrl); // Store Cloudinary image URL
//         setImageId(response.data.imageId); // Store image public ID
//         alert("Profile image uploaded successfully!");
//       } catch (error) {
//         alert("Failed to upload profile image");
//       }
//     }
//   };

//   // Fetch the existing profile image when the component loads
//   useEffect(() => {
//     const fetchProfileImage = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/profile/profile-image");
//         if (response.data.imageUrl) {
//           setUploadedImageUrl(response.data.imageUrl);
//           setImageId(response.data.imageId); // Store the image ID from Cloudinary
//         }
//       } catch (error) {
//         console.log("Failed to fetch profile image", error);
//       }
//     };

//     fetchProfileImage();
//   }, []);

//   // Handle image update
//   const handleUpdate = async () => {
//     if (profileImage) {
//       const formData = new FormData();
//       formData.append("image", profileImage);

//       try {
//         const response = await axios.put("http://localhost:5000/api/profile/update-profile", formData, {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         });

//         setUploadedImageUrl(response.data.imageUrl); // Store Cloudinary image URL
//         setImageId(response.data.imageId); // Store image public ID
//         alert("Profile image updated successfully!");
//       } catch (error) {
//         alert("Failed to update profile image");
//       }
//     }
//   };

//   // Handle image deletion
//   const handleDelete = async () => {
//     try {
//       const response = await axios.delete("http://localhost:5000/api/profile/delete-profile", {
//         data: { imageId },
//       });

//       if (response.data.success) {
//         setUploadedImageUrl(null);
//         setImageId(null);
//         alert("Profile image deleted successfully!");
//       }
//     } catch (error) {
//       alert("Failed to delete profile image");
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
//         >
//           <AiOutlineClose className="h-6 w-6" />
//         </button>

//         <h2 className="text-xl font-bold mb-4">Profile</h2>

//         {/* Email Content */}
//         <div className="text-gray-700 text-left mb-4">
//           <h3 className="text-lg font-semibold">Teacher Email</h3>
//           <p><strong>Email:</strong> {email || "Not Available"}</p>
//         </div>

//         {/* Profile Image Upload */}
//         <div className="mb-4">
//           <h3 className="text-lg font-semibold">Upload Profile Picture</h3>
//           <input
//             type="file"
//             onChange={handleFileChange}
//             accept="image/*"
//             className="mt-2"
//           />
//           {imagePreview && (
//             <div className="mt-4">
//               <img
//                 src={imagePreview}
//                 alt="Profile Preview"
//                 className="w-32 h-32 object-cover rounded-full"
//               />
//             </div>
//           )}

//           {/* Display uploaded image */}
//           {uploadedImageUrl && (
//             <div className="mt-4">
//               <p className="text-green-500">Profile picture uploaded!</p>
//               <img
//                 src={uploadedImageUrl}
//                 alt="Uploaded Profile"
//                 className="w-32 h-32 object-cover rounded-full"
//               />
//             </div>
//           )}
//         </div>

//         {/* Upload Button */}
//         <button
//           onClick={handleUpload}
//           className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
//         >
//           Upload Profile Picture
//         </button>

//         {/* Update Button */}
//         {uploadedImageUrl && !imagePreview && (
//           <button
//             onClick={handleUpdate}
//             className="w-full py-2 mt-4 bg-yellow-500 text-white rounded-lg hover:bg-yellow-700"
//           >
//             Update Profile Picture
//           </button>
//         )}

//         {/* Delete Button */}
//         {uploadedImageUrl && (
//           <button
//             onClick={handleDelete}
//             className="w-full py-2 mt-4 bg-red-500 text-white rounded-lg hover:bg-red-700"
//           >
//             Delete Profile Picture
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProfileModal;





// import React, { useState, useEffect, useRef } from "react";
// import { AiOutlineClose } from "react-icons/ai";
// import { AiOutlineCamera } from "react-icons/ai"; // Camera icon
// import axios from "axios";

// const ProfileModal = ({ email, onClose }) => {
//   const [profileImage, setProfileImage] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);
//   const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
//   const [imageId, setImageId] = useState(null); // To store the Cloudinary image public ID
//   const [isImageModalOpen, setIsImageModalOpen] = useState(false); // For fullscreen image modal

//   const fileInputRef = useRef(null); // Reference for file input

//   // Handle the file input change
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setProfileImage(file);
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handle form submission for uploading the image
//   const handleUpload = async () => {
//     if (profileImage) {
//       const formData = new FormData();
//       formData.append("image", profileImage);

//       try {
//         // Upload image to the backend (Cloudinary)
//         const response = await axios.post("http://localhost:5000/api/profile/upload-profile", formData, {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         });

//         setUploadedImageUrl(response.data.imageUrl); // Store Cloudinary image URL
//         setImageId(response.data.imageId); // Store image public ID
//         setImagePreview(null); // Clear the preview after successful upload
//         alert("Profile image uploaded successfully!");
//       } catch (error) {
//         alert("Failed to upload profile image");
//       }
//     }
//   };

//   // Fetch the existing profile image when the component loads
//   useEffect(() => {
//     const fetchProfileImage = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/profile/profile-image");
//         if (response.data.imageUrl) {
//           setUploadedImageUrl(response.data.imageUrl);
//           setImageId(response.data.imageId); // Store the image ID from Cloudinary
//         }
//       } catch (error) {
//         console.log("Failed to fetch profile image", error);
//       }
//     };

//     fetchProfileImage();
//   }, []);

//   // Handle image deletion
//   const handleDelete = async () => {
//     try {
//       const response = await axios.delete("http://localhost:5000/api/profile/delete-profile", {
//         data: { imageId },
//       });

//       if (response.data.success) {
//         setUploadedImageUrl(null);
//         setImageId(null);
//         alert("Profile image deleted successfully!");
//       }
//     } catch (error) {
//       alert("Failed to delete profile image");
//     }
//   };

//   // Open the image in fullscreen
//   const handleImageClick = () => {
//     setIsImageModalOpen(true);
//   };

//   // Close the fullscreen image modal
//   const closeImageModal = () => {
//     setIsImageModalOpen(false);
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
//         >
//           <AiOutlineClose className="h-6 w-6" />
//         </button>

//         <h2 className="text-xl font-bold mb-4">Profile</h2>

//         {/* Email Content */}
//         <div className="text-gray-700 text-left mb-4">
//           <h3 className="text-lg font-semibold">Teacher Email</h3>
//           <p><strong>Email:</strong> {email || "Not Available"}</p>
//         </div>

//         {/* Profile Image Upload */}
//         <div className="mb-4 text-center">
//           <h3 className="text-lg font-semibold">Upload Profile Picture</h3>

//           {/* Circle with Camera Icon */}
//           <div
//             className="relative inline-block cursor-pointer"
//             onClick={() => fileInputRef.current.click()}
//           >
//             <img
//               src={uploadedImageUrl || imagePreview }
//               alt="Profile"
//               className="w-32 h-32 object-cover rounded-full border-2 border-gray-300"
//             />
//             <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 rounded-full opacity-0 hover:opacity-100">
//               <AiOutlineCamera className="text-white text-3xl" />
//             </div>
//           </div>

//           {/* Hidden File Input */}
//           <input
//             ref={fileInputRef}
//             type="file"
//             onChange={handleFileChange}
//             accept="image/*"
//             className="hidden"
//           />
//         </div>

//         {/* Upload Button */}
//         <button
//           onClick={handleUpload}
//           className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
//         >
//           Upload Profile Picture
//         </button>

//         {/* Delete Button */}
//         {uploadedImageUrl && (
//           <button
//             onClick={handleDelete}
//             className="w-full py-2 mt-4 bg-red-500 text-white rounded-lg hover:bg-red-700"
//           >
//             Delete Profile Picture
//           </button>
//         )}
//       </div>

//       {/* Fullscreen Image Modal */}
//       {isImageModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
//           <div className="relative">
//             <img
//               src={uploadedImageUrl || imagePreview || "/default-profile.png"}
//               alt="Profile"
//               className="max-w-full max-h-full object-contain"
//             />
//             <button
//               onClick={closeImageModal}
//               className="absolute top-3 right-3 text-white text-3xl"
//             >
//               <AiOutlineClose />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfileModal;





import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const ProfileModal = ({ email, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <AiOutlineClose className="h-6 w-6" />
        </button>

        <h2 className="text-xl font-bold mb-4">Profile</h2>

        {/* Email Display */}
        <div className="text-gray-700 text-left mb-4">
          <h3 className="text-lg font-semibold">Teacher Email</h3>
          <p><strong>Email:</strong> {email || "Not Available"}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
