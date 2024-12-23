// ProfileModal.js
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";

const ProfileModel = ({ email, onClose }) => {
 

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

        

        {/* Email Content */}
        <p className="text-gray-700 text-left">
          

        <h2 className="text-xl font-bold mb-4">Teacher Email</h2>
          <strong>Email:</strong> {email || "Not Available"}
        </p>
      </div>
    </div>
  );
};

export default ProfileModel;
