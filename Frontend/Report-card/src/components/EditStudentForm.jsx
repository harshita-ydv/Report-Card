// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const EditStudentForm = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { student } = location.state;

//   const [formData, setFormData] = useState(student);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`http://localhost:5000/api/data/${formData.id}`, formData);
//       alert('Student updated successfully!');
//       navigate('/teacher-dashboard/manage-students');
//     } catch (error) {
//       console.error('Error updating student:', error);
//       alert('Failed to update student. Please try again.');
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
//       <h1 className="text-2xl font-bold text-center text-orange-600 mb-6">Edit Student</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="grid grid-cols-2 gap-4">
//           {/* Student ID */}
//           <div>
//             <label className="block font-semibold mb-2">Student ID</label>
//             <input
//               type="text"
//               name="studentId"
//               value={formData.studentId}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded-md"
//               required
//             />
//           </div>

//           {/* Name */}
//           <div>
//             <label className="block font-semibold mb-2">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded-md"
//               required
//             />
//           </div>

//           {/* Father's Name */}
//           <div>
//             <label className="block font-semibold mb-2">Father's Name</label>
//             <input
//               type="text"
//               name="fatherName"
//               value={formData.fatherName}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded-md"
//               required
//             />
//           </div>

//           {/* Mother's Name */}
//           <div>
//             <label className="block font-semibold mb-2">Mother's Name</label>
//             <input
//               type="text"
//               name="motherName"
//               value={formData.motherName}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded-md"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block font-semibold mb-2">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded-md"
//               required
//             />
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="block font-semibold mb-2">Phone</label>
//             <input
//               type="text"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded-md"
//               required
//             />
//           </div>

//           {/* Gender */}
//           <div>
//             <label className="block font-semibold mb-2">Gender</label>
//             <select
//               name="gender"
//               value={formData.gender}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded-md"
//               required
//             >
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>

//           {/* Address */}
//           <div>
//             <label className="block font-semibold mb-2">Address</label>
//             <textarea
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded-md"
//             />
//           </div>

//           {/* Course */}
//           <div>
//             <label className="block font-semibold mb-2">Course</label>
//             <input
//               type="text"
//               name="course"
//               value={formData.course}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded-md"
//               required
//             />
//           </div>

//           {/* Year */}
//           <div>
//             <label className="block font-semibold mb-2">Year</label>
//             <input
//               type="text"
//               name="year"
//               value={formData.year}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded-md"
//               required
//             />
//           </div>

//           {/* Date of Birth */}
//           <div>
//             <label className="block font-semibold mb-2">Date of Birth</label>
//             <input
//               type="date"
//               name="dob"
//               value={formData.dob}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded-md"
//             />
//           </div>

//           {/* Nationality */}
//           <div>
//             <label className="block font-semibold mb-2">Nationality</label>
//             <input
//               type="text"
//               name="nationality"
//               value={formData.nationality}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded-md"
//             />
//           </div>

//           {/* Additional Information */}
//           <div>
//             <label className="block font-semibold mb-2">Additional Information</label>
//             <textarea
//               name="additionalInfo"
//               value={formData.additionalInfo}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded-md"
//             />
//           </div>
//         </div>

//         {/* Form Buttons */}
//         <div className="mt-6 text-center">
//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
//           >
//             Save Changes
//           </button>
//           <button
//             type="button"
//             onClick={() => navigate('/teacher-dashboard/manage-students')}
//             className="ml-4 bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition duration-200"
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EditStudentForm;
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditStudentForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { student } = location.state;

  const [formData, setFormData] = useState(student);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/data/${formData.id}`, formData);
      alert('Student updated successfully!');
      navigate('/teacher-dashboard/manage-students');
    } catch (error) {
      console.error('Error updating student:', error);
      alert('Failed to update student. Please try again.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center text-orange-600 mb-6">Edit Student</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          {Object.keys(formData).map((key) => {
            if (key !== 'id') {  // Exclude the ID field from rendering
              return (
                <div key={key}>
                  <label className="block font-semibold mb-2">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                  {key === 'gender' ? (
                    <select
                      name={key}
                      value={formData[key]}
                      onChange={handleChange}
                      className="w-full border px-3 py-2 rounded-md"
                      required
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  ) : (
                    <input
                      type={key === 'dob' ? 'date' : 'text'}
                      name={key}
                      value={formData[key]}
                      onChange={handleChange}
                      className="w-full border px-3 py-2 rounded-md"
                      required
                    />
                  )}
                </div>
              );
            }
            return null;
          })}
        </div>

        {/* Form Buttons */}
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Save Changes
          </button>
          <button
            type="button"
            onClick={() => navigate('/teacher-dashboard/manage-students')}
            className="ml-4 bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition duration-200"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditStudentForm;


// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const EditStudentForm = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { student } = location.state;

//   const [formData, setFormData] = useState(student);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`http://localhost:5000/api/data/${formData.id}`, formData);
//       alert('Student updated successfully!');
//       navigate('/teacher-dashboard/manage-students');
//     } catch (error) {
//       console.error('Error updating student:', error);
//       alert('Failed to update student. Please try again.');
//     }
//   };

//   const handlePreview = () => {
//     navigate('/preview-student', { state: { student: formData } });
//   };

//   return (
//     <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
//       <h1 className="text-2xl font-bold text-center text-orange-600 mb-6">Edit Student</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="grid grid-cols-2 gap-4">
//           {Object.keys(formData).map((key) => {
//             if (key !== 'id') {
//               return (
//                 <div key={key}>
//                   <label className="block font-semibold mb-2">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
//                   {key === 'gender' ? (
//                     <select
//                       name={key}
//                       value={formData[key]}
//                       onChange={handleChange}
//                       className="w-full border px-3 py-2 rounded-md"
//                       required
//                     >
//                       <option value="Male">Male</option>
//                       <option value="Female">Female</option>
//                       <option value="Other">Other</option>
//                     </select>
//                   ) : (
//                     <input
//                       type={key === 'dob' ? 'date' : 'text'}
//                       name={key}
//                       value={formData[key]}
//                       onChange={handleChange}
//                       className="w-full border px-3 py-2 rounded-md"
//                       required
//                     />
//                   )}
//                 </div>
//               );
//             }
//             return null;
//           })}
//         </div>

//         {/* Form Buttons */}
//         <div className="mt-6 text-center">
//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
//           >
//             Save Changes
//           </button>
//           <button
//             type="button"
//             onClick={() => navigate('/teacher-dashboard/manage-students')}
//             className="ml-4 bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition duration-200"
//           >
//             Cancel
//           </button>
//           <button
//             type="button"
//             onClick={handlePreview}
//             className="ml-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200"
//           >
//             Preview
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EditStudentForm;
