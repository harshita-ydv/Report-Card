// // ResetPassword.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const ResetPassword = ({ email }) => {
//   const [newPassword, setNewPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/reset-password', {
//         email,
//         newPassword,
//       });
//       setMessage(response.data.message);
//     } catch (error) {
//       setMessage(error.response?.data?.message || 'Something went wrong');
//     }
//   };

//   return (
//     <div>
//       <h2>Reset Your Password</h2>
//       <input
//         type="password"
//         placeholder="Enter new password"
//         value={newPassword}
//         onChange={(e) => setNewPassword(e.target.value)}
//       />
//       <button onClick={handleSubmit}>Reset Password</button>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default ResetPassword;





// import React, { useState } from 'react';
// import axios from 'axios';

// const ResetPassword = ({ email }) => {
//   const [newPassword, setNewPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/reset-password', {
//         email,
//         newPassword,
//       });
//       setMessage(response.data.message);
//     } catch (error) {
//       setMessage(error.response?.data?.message || 'Something went wrong');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
//         <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">Reset Your Password</h2>
//         <input
//           type="password"
//           placeholder="Enter new password"
//           value={newPassword}
//           onChange={(e) => setNewPassword(e.target.value)}
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
//         />
//         <button
//           onClick={handleSubmit}
//           className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
//         >
//           Reset Password
//         </button>
//         {message && (
//           <p className={`mt-4 text-sm text-center ${message.includes('Something went wrong') ? 'text-red-500' : 'text-green-500'}`}>
//             {message}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = ({ email }) => {
  const [newPassword, setNewPassword] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/reset-password', {
        email,
        newPassword,
      });
      toast.success(response.data.message || 'Password reset successfully!', {
        onClose: () => navigate('/login', { replace: true }),
      });
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ToastContainer position="top-right" autoClose={1000} />
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">Reset Your Password</h2>
        <div className="relative">
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(newPassword !== '')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
          />
          <label
            htmlFor="newPassword"
            className={`absolute left-4 text-gray-500 bg-white px-1 transition-all ${
              isFocused || newPassword ? '-top-3 text-xs text-blue-500' : 'top-3 text-sm'
            }`}
          >
            Enter new password
          </label>
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 mt-6"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
