
import React, { useState } from 'react';
import axios from 'axios';

const VerifyCode = ({ email, onCodeVerified }) => {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleVerify = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/verify-code', { email, code });
      setMessage(response.data.message);
      if (response.status === 200) {
        onCodeVerified();
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'Invalid code');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">Enter Verification Code</h2>
        <div className="relative">
          <input
            type="text"
            id="verification-code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(code !== '')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
          />
          <label
            htmlFor="verification-code"
            className={`absolute left-4 text-gray-500 bg-white px-1 transition-all ${
              isFocused || code ? '-top-3 text-xs text-blue-500' : 'top-3 text-sm'
            }`}
          >
            Enter the  code
          </label>
        </div>
        <button
          onClick={handleVerify}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 mt-6"
        >
          Verify Code
        </button>
        {message && (
          <p className={`mt-4 text-sm text-center ${message.includes('Invalid') ? 'text-red-500' : 'text-green-500'}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default VerifyCode;
