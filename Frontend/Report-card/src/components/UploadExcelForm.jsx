// import React, { useState } from 'react';
// import axios from 'axios';
// import {useNavigate } from 'react-router-dom';

// const UploadExcelForm = () => {
//   const [file, setFile] = useState(null);
//   const navigate = useNavigate();


//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!file) {
//       alert('Please select a file.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       // Update this URL if your backend is on a different port
//       const response = await axios.post('http://localhost:5000/api/upload-excel', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });
//       alert(response.data.message);
//       navigate('/teacher-dashboard');

//     } catch (error) {
//       console.error(error);
//       alert('Error uploading file');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="file" accept=".xlsx" onChange={handleFileChange} />
//       <button type="submit">Upload Excel</button>
//     </form>
//   );
// };

// export default UploadExcelForm;














// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const UploadExcelForm = () => {
//   const [file, setFile] = useState(null);
//   const navigate = useNavigate();

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!file) {
//       alert('Please select a file.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       const response = await axios.post('http://localhost:5000/api/upload-excel', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });
//       alert(response.data.message);
//       navigate('/teacher-dashboard');
//     } catch (error) {
//       console.error(error);
//       alert('Error uploading file');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-md rounded-lg px-8 py-6 w-full max-w-md"
//       >
//         <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">Upload Excel File</h2>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-medium mb-2">
//             Select Excel File:
//           </label>
//           <input
//             type="file"
//             accept=".xlsx"
//             onChange={handleFileChange}
//             className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>
//         <button onClick={()=>{navigate('/teacher-dashboard')}}>
//           back
//         </button>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
//         >
//           Upload Excel
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UploadExcelForm;







// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const UploadExcelForm = () => {
//   const [file, setFile] = useState(null);
//   const navigate = useNavigate();

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!file) {
//       alert('Please select a file.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       const response = await axios.post('http://localhost:5000/api/upload-excel', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });
//       alert(response.data.message);
//       navigate('/teacher-dashboard');
//     } catch (error) {
//       console.error('Error:', error.response?.data || error.message);
//       alert(error.response?.data?.message || 'Error uploading file');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100 mb-0">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-md rounded-lg px-8 py-6 w-full max-w-md"
//       >
//         <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">Upload Excel File</h2>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-medium mb-2">
//             Select Excel File:
//           </label>
//           <input
//             type="file"
//             accept=".xlsx"
//             onChange={handleFileChange}
//             className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>
//         <button
//           type="button"
//           onClick={() => navigate('/teacher-dashboard')}
//           className="w-full bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 mb-2"
//         >
//           Back
//         </button>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
//         >
//           Upload Excel
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UploadExcelForm;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UploadExcelForm = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/api/upload-excel', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert(response.data.message);
      navigate('/teacher-dashboard');
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      alert(error.response?.data?.message || 'Error uploading file');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 mb-0 overflow-hidden">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg px-8 py-8 w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Upload Excel File</h2>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Select Excel File:
          </label>
          <input
            type="file"
            accept=".xlsx"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => navigate('/teacher-dashboard')}
            className="w-1/2 bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            Back
          </button>
          <button
            type="submit"
            className="w-1/2 bg-blue- text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Upload Excel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadExcelForm;

