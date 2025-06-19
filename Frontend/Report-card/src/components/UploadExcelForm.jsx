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
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { FiUploadCloud, FiArrowLeft } from "react-icons/fi";

// const UploadExcelForm = () => {
//   const [file, setFile] = useState(null);
//   const navigate = useNavigate();

//   const handleFileChange = (e) => setFile(e.target.files[0]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!file) return alert("Please select a file.");

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/upload-excel",
//         formData,
//         { headers: { "Content-Type": "multipart/form-data" } }
//       );
//       alert(response.data.message);
//       navigate("/teacher-dashboard");
//     } catch (error) {
//       console.error("Error:", error.response?.data || error.message);
//       alert(error.response?.data?.message || "Error uploading file");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50">
//       <div className="bg-white p-6 shadow-xl rounded-2xl max-w-md w-full">
//         {/* Header */}
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
//           Upload Excel File
//           <div className="w-16 h-1 mx-auto bg-blue-500 rounded-full mt-1"></div>
//         </h2>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* File Input */}
//           <div className="border-dashed border border-blue-300 rounded-lg p-4 text-center bg-blue-50">
//             <label
//               htmlFor="file-upload"
//               className="cursor-pointer flex flex-col items-center"
//             >
//               <FiUploadCloud className="text-4xl text-blue-400 mb-2" />
//               <span className="text-sm text-gray-700">
//                 {file ? file.name : "Click or drag a file here"}
//               </span>
//               <input
//                 id="file-upload"
//                 type="file"
//                 accept=".xlsx"
//                 onChange={handleFileChange}
//                 className="hidden"
//               />
//             </label>
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-between space-x-2">
//             <button
//               type="button"
//               onClick={() => navigate("/teacher-dashboard")}
//               className="flex-1 py-1 px-3 flex items-center justify-center bg-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-300 transition"
//             >
//               <FiArrowLeft className="mr-1" /> Back
//             </button>
//             <button
//               type="submit"
//               className="flex-1 py-1 px-3 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition"
//             >
//               Upload
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UploadExcelForm;





import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FiUploadCloud, FiArrowLeft } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UploadExcelForm = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      toast.warn("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/upload-excel",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      toast.success(response.data.message);
      // navigate("/teacher-dashboard");
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Error uploading file");
    }
  };

  return (
    <>
    <ToastContainer  position="top-center"   autoClose={2000}
 />

    <div className="flex justify-center items-center">
      <div className="bg-white p-10 shadow-2xl rounded-2xl w-full max-w-lg transform transition hover:scale-105 items-center">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Upload Excel File
          <div className="w-16 h-1 mx-auto bg-blue-500 rounded-full mt-1"></div>
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* File Input */}
          <div className="border-dashed border-2 border-blue-300 rounded-lg p-6 text-center bg-blue-50">
            <label
              htmlFor="file-upload"
              className="cursor-pointer flex flex-col items-center"
            >
              <FiUploadCloud className="text-5xl text-blue-400 mb-3" />
              <span className="text-gray-700 text-sm">
                {file
                  ? file.name
                  : "Click or drag a file here and follow this excel file column formats  (name , email , phone , fatheremail , fatherName , motherName , otherPhone , gender , address , rollno , course , year , totalpresent , totalabsent , totalday , attenpercentage ,oneA , oneB ,oneC , twoA ,twoB , twoC)"}
              </span>
              <input
                id="file-upload"
                type="file"
                accept=".xlsx"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>

          {/* Buttons */}
          <div className="flex justify-between space-x-4">
           
            <button
              type="submit"
              className="flex-1 py-2 px-4 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default UploadExcelForm;
