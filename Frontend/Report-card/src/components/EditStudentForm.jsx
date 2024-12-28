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
















// // mainnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn



// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Navbar from './Navbar';

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
//       alert('This email is already in use');
//     }
//   };

//   return (
//     <>
//     <Navbar/>
//     <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
//       <h1 className="text-2xl font-bold text-center text-orange-600 mb-6">Edit Student</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="grid grid-cols-2 gap-4">
//           {Object.keys(formData).map((key) => {
//             if (key !== 'id') {  // Exclude the ID field from rendering
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
//         </div>
//       </form>
//     </div>
//     </>
//   );
// };

// export default EditStudentForm;

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const EditStudentForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { student } = location.state;

  // Form validation schema with Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[A-Za-z\s]+$/, "Name can only contain letters and spaces") // Regex for letters and spaces
      .required('Name is required'),
    fatheremail: Yup.string().email('Invalid email format').required('Father email is required'),
    email: Yup.string().email('Invalid email format').required('Student email is required'),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
      .required('Phone number is required'),
    gender: Yup.string().required('Gender is required'),
    address: Yup.string().required('Address is required'),
  });

  // useFormik hook
  const formik = useFormik({
    initialValues: student,
    validationSchema,
    onSubmit: async (values) => {
      try {
        await axios.put(`http://localhost:5000/api/data/${values.id}`, values);
        alert('Student updated successfully!');
        navigate('/teacher-dashboard/manage-students');
      } catch (error) {
        console.error('Error updating student:', error);
        alert('There was an error updating the student.');
      }
    },
  });

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center text-orange-600 mb-6">Edit Student</h1>

        <form onSubmit={formik.handleSubmit}>
          {/* Name */}
  <div className="mb-4 flex space-x-4">
  <div className="flex-1">
    <label className="block font-semibold mb-2">Name</label>
    <input
      type="text"
      name="name"
      className="w-full border px-3 py-2 rounded-md"
      value={formik.values.name}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    />
    {formik.touched.name && formik.errors.name && (
      <div className="text-red-500 text-sm">{formik.errors.name}</div>
    )}
  </div>

  <div className="flex-1">
    <label className="block text-gray-700 text-sm font-bold mb-2">Father Name
      <span className="text-red-500">*</span>
    </label>
    <input
      type="text"
      name="fatherName"
      className="w-full border px-3 py-2 rounded-md"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.fatherName}
      placeholder="Enter your father name"
    />
    {formik.touched.fatherName && formik.errors.fatherName && (
      <div className="text-red-500 text-sm">{formik.errors.fatherName}</div>
    )}
  </div>

  <div className="flex-1">
    <label className="block text-gray-700 text-sm font-bold mb-2">Mother Name
      <span className="text-red-500">*</span>
    </label>
    <input
      type="text"
      name="motherName"
      className="w-full border px-3 py-2 rounded-md"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.motherName}
      placeholder="Enter your mother name"
    />
    {formik.touched.motherName && formik.errors.motherName && (
      <div className="text-red-500 text-sm">{formik.errors.motherName}</div>
    )}
  </div>
</div>


          {/* Father Email */}
          <div className="mb-4 flex space-x-4">
  {/* Father Email */}
  <div className="flex-1">
    <label className="block font-semibold mb-2">Father Email</label>
    <input
      type="email"
      name="email"
      className="w-full border px-3 py-2 rounded-md"
      value={formik.values.email}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    />
    {formik.touched.email && formik.errors.email && (
      <div className="text-red-500 text-sm">{formik.errors.email}</div>
    )}
  </div>

  {/* Student Email */}
  <div className="flex-1">
    <label className="block font-semibold mb-2">Student Email</label>
    <input
      type="email"
      name="fatheremail"
      className="w-full border px-3 py-2 rounded-md"
      value={formik.values.fatheremail}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    />
    {formik.touched.fatheremail && formik.errors.fatheremail && (
      <div className="text-red-500 text-sm">{formik.errors.fatheremail}</div>
    )}
  </div>

  {/* Phone Number */}
  <div className="flex-1">
    <label className="block font-semibold mb-2">Phone Number</label>
    <input
      type="tel"
      name="phone"
      className="w-full border px-3 py-2 rounded-md"
      value={formik.values.phone}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    />
    {formik.touched.phone && formik.errors.phone && (
      <div className="text-red-500 text-sm">{formik.errors.phone}</div>
    )}
  </div>
</div>

<div className="mb-4 flex space-x-4">
  {/* Other Contact No. */}
  <div className="flex-1">
    <label className="block text-gray-700 text-sm font-bold mb-2">
      Other Contact No. <span className="text-red-500">*</span>
    </label>
    <input
      type="text"
      name="otherPhone"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      className="w-full border px-3 py-2 rounded-md"
      value={formik.values.otherPhone}
      placeholder="Enter your other contact no."
    />
    {formik.touched.otherPhone && formik.errors.otherPhone && (
      <div className="text-red-500 text-sm">{formik.errors.otherPhone}</div>
    )}
  </div>

  {/* Gender */}
  <div className="flex-1">
    <label className="block font-semibold mb-2">Gender</label>
    <select
      name="gender"
      className="w-full border px-3 py-2 rounded-md"
      value={formik.values.gender}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    >
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other</option>
    </select>
    {formik.touched.gender && formik.errors.gender && (
      <div className="text-red-500 text-sm">{formik.errors.gender}</div>
    )}
  </div>

  {/* Course */}
  <div className="flex-1">
    <label className="block text-gray-700 text-sm font-bold mb-2">
      Course <span className="text-red-500">*</span>
    </label>
    <select
      name="course"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      className="w-full border px-3 py-2 rounded-md"
      value={formik.values.course}
    >
      <option value="" disabled>
        Select a course <span className="text-red-500">*</span>
      </option>
      <option value="BCA+ITEG">BCA + ITEG</option>
      <option value="BBA+ITEG">BBA + ITEG</option>
      <option value="DIPLOMA ITEG">Diploma ITEG</option>
      <option value="Bsc+ITEG">Bsc + ITEG</option>
    </select>
    {formik.touched.course && formik.errors.course && (
      <div className="text-red-500 text-sm">{formik.errors.course}</div>
    )}
  </div>
</div>

<div className="mb-4 flex space-x-4">
  {/* Roll Number */}
  <div className="flex-1">
    <label className="block text-gray-700 text-sm font-bold mb-2">
      Roll Number <span className="text-red-500">*</span>
    </label>
    <input
      type="number"
      name="rollno"
      className="w-full border px-3 py-2 rounded-md"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.rollno}
    />
    {formik.touched.rollno && formik.errors.rollno && (
      <div className="text-red-500 text-sm">{formik.errors.rollno}</div>
    )}
  </div>

  {/* Year */}
  <div className="flex-1">
    <label className="block text-gray-700 text-sm font-bold mb-2">
      Year <span className="text-red-500">*</span>
    </label>
    <select
      name="year"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      className="w-full border px-3 py-2 rounded-md"
      value={formik.values.year}
    >
      <option value="" disabled>Select Year <span className="text-red-500">*</span></option>
      <option value="1 Year">1st Year</option>
      <option value="2 Year">2nd Year</option>
      <option value="3 Year">3rd Year</option>
      <option value="4 Year">4th Year</option>
    </select>
    {formik.touched.year && formik.errors.year && (
      <div className="text-red-500 text-sm">{formik.errors.year}</div>
    )}
  </div>

  {/* Address */}
  <div className="flex-1">
    <label className="block font-semibold mb-2">Address</label>
    <input
      type="text"
      name="address"
      className="w-full border px-3 py-2 rounded-md"
      value={formik.values.address}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    />
    {formik.touched.address && formik.errors.address && (
      <div className="text-red-500 text-sm">{formik.errors.address}</div>
    )}
  </div>
</div>

<div className="mb-4 flex space-x-4">
  {/* Total Present */}
  <div className="flex-1">
    <label className="block text-gray-700 text-sm font-bold mb-2">
      Total Present <span className="text-red-500">*</span>
    </label>
    <input
      type="number"
      name="totalpresent"
      onChange={(e) => {
        const value = Number(e.target.value);
        formik.setFieldValue("totalpresent", value);

        // Automatically calculate Total Absent and Attendance Percentage
        if (formik.values.totalday) {
          const totalAbsent = formik.values.totalday - value;
          const percentage = ((value / formik.values.totalday) * 100).toFixed(2);
          formik.setFieldValue("totalabsent", totalAbsent >= 0 ? totalAbsent : 0);
          formik.setFieldValue("attenpercentage", percentage);
        }
      }}
      onBlur={formik.handleBlur}
      value={formik.values.totalpresent}
      className={`p-1 w-full rounded-md border ${
        formik.touched.totalpresent && formik.errors.totalpresent ? "border-red-500" : "border-gray-300"
      }`}
    />
    {formik.touched.totalpresent && formik.errors.totalpresent && (
      <div className="text-red-500 text-sm">{formik.errors.totalpresent}</div>
    )}
  </div>

  {/* Total Days */}
  <div className="flex-1">
    <label className="block text-gray-700 text-sm font-bold mb-2">
      Total Days <span className="text-red-500">*</span>
    </label>
    <input
      type="number"
      name="totalday"
      onChange={(e) => {
        const value = Number(e.target.value);
        formik.setFieldValue("totalday", value);

        // Automatically calculate Total Absent and Attendance Percentage
        if (formik.values.totalpresent) {
          const totalAbsent = value - formik.values.totalpresent;
          const percentage = ((formik.values.totalpresent / value) * 100).toFixed(2);
          formik.setFieldValue("totalabsent", totalAbsent >= 0 ? totalAbsent : 0);
          formik.setFieldValue("attenpercentage", percentage);
        }
      }}
      onBlur={formik.handleBlur}
      value={formik.values.totalday}
      className={`p-1 w-full rounded-md border ${
        formik.touched.totalday && formik.errors.totalday ? "border-red-500" : "border-gray-300"
      }`}
    />
    {formik.touched.totalday && formik.errors.totalday && (
      <div className="text-red-500 text-sm">{formik.errors.totalday}</div>
    )}
  </div>

  {/* Total Absent */}
  <div className="flex-1">
    <label className="block text-gray-700 text-sm font-bold mb-2">
      Total Absent <span className="text-red-500">*</span>
    </label>
    <input
      type="number"
      name="totalabsent"
      readOnly
      value={formik.values.totalabsent}
      className="p-1 w-full rounded-md border border-gray-300 bg-gray-100"
    />
    {formik.touched.totalabsent && formik.errors.totalabsent && (
      <div className="text-red-500 text-sm">{formik.errors.totalabsent}</div>
    )}
  </div>
</div>


{/* Attendance Percentage */}
<div className="grid grid-cols-3 gap-4 mb-4">
  {/* Attendance Percentage Field */}
  <div>
    <label className="block text-gray-700 text-sm font-bold mb-2">
      Attendance Percentage <span className="text-red-500">*</span>
    </label>
    <input
      type="number"
      name="attenpercentage"
      readOnly
      value={formik.values.attenpercentage}
      className="p-1 w-full rounded-md border border-gray-300 bg-gray-100"
    />
    {formik.touched.attenpercentage && formik.errors.attenpercentage && (
      <div className="text-red-500 text-sm">{formik.errors.attenpercentage}</div>
    )}
  </div>

  {/* 1A Level Field */}
  <div>
    <label className="block text-gray-700 text-sm font-bold mb-2">
      1A Level <span className="text-red-500">*</span>
    </label>
    <select
      name="oneA"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.oneA}
      className="w-full border px-3 py-2 rounded-md"
    >
      <option value="" disabled>Select Status</option>
      <option value="Pending">Pending</option>
      <option value="Running">Running</option>
      <option value="Clear">Clear</option>
    </select>
    {formik.touched.oneA && formik.errors.oneA && (
      <div className="text-red-500 text-sm">{formik.errors.oneA}</div>
    )}
  </div>

  {/* 1B Level Field */}
  <div>
    <label className="block text-gray-700 text-sm font-bold mb-2">
      1B Level <span className="text-red-500">*</span>
    </label>
    <select
      name="oneB"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.oneB}
      className="w-full border px-3 py-2 rounded-md"
    >
      <option value="" disabled>Select Status</option>
      <option value="Pending">Pending</option>
      <option value="Running">Running</option>
      <option value="Clear">Clear</option>
    </select>
    {formik.touched.oneB && formik.errors.oneB && (
      <div className="text-red-500 text-sm">{formik.errors.oneB}</div>
    )}
  </div>
</div>

          {/* 1C Level Field */}
          <div className="grid grid-cols-3 gap-4 mb-4">
  {/* 1C Level Field */}
  <div>
    <label className="block text-gray-700 text-sm font-bold mb-2">
      1C Level <span className="text-red-500">*</span>
    </label>
    <select
      name="oneC"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.oneC}
      className="w-full border px-3 py-2 rounded-md"
    >
      <option value="" disabled>Select Status</option>
      <option value="Pending">Pending</option>
      <option value="Running">Running</option>
      <option value="Clear">Clear</option>
    </select>
    {formik.touched.oneC && formik.errors.oneC && (
      <div className="text-red-500 text-sm">{formik.errors.oneC}</div>
    )}
  </div>

  {/* 2A Level Field */}
  <div>
    <label className="block text-gray-700 text-sm font-bold mb-2">
      2A Level <span className="text-red-500">*</span>
    </label>
    <select
      name="twoA"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.twoA}
      className="w-full border px-3 py-2 rounded-md"
    >
      <option value="" disabled>Select Status</option>
      <option value="Pending">Pending</option>
      <option value="Running">Running</option>
      <option value="Clear">Clear</option>
    </select>
    {formik.touched.twoA && formik.errors.twoA && (
      <div className="text-red-500 text-sm">{formik.errors.twoA}</div>
    )}
  </div>

  {/* 2B Level Field */}
  <div>
    <label className="block text-gray-700 text-sm font-bold mb-2">
      2B Level <span className="text-red-500">*</span>
    </label>
    <select
      name="twoB"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.twoB}
      className="w-full border px-3 py-2 rounded-md"
    >
      <option value="" disabled>Select Status</option>
      <option value="Pending">Pending</option>
      <option value="Running">Running</option>
      <option value="Clear">Clear</option>
    </select>
    {formik.touched.twoB && formik.errors.twoB && (
      <div className="text-red-500 text-sm">{formik.errors.twoB}</div>
    )}
  </div>
</div>

{/* 2C Level Field */}
<div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2">2C Level
  <span className="text-red-500">*</span>
  </label>
  <select
    name="twoC"
    onChange={formik.handleChange}
    className="w-full border px-3 py-2 rounded-md"

    onBlur={formik.handleBlur}
    value={formik.values.twoC}
    // className={`p-1 w-full rounded-md border ${formik.touched.twoC && formik.errors.twoC ? 'border-red-500' : 'border-gray-300'}`}
  >
    <option value="" disabled>Select Status
    <span className="text-red-500">*</span>
    </option>
    <option value="Pending">Pending</option>
    <option value="Running">Running</option>
    <option value="Clear">Clear</option>
  </select>
  {formik.touched.twoC && formik.errors.twoC && (
    <div className="text-red-500 text-sm">{formik.errors.twoC}</div>
  )}
</div>
{/* </div> */}
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
    </>
  );
};

export default EditStudentForm;






// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Navbar from './Navbar';

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
//       alert('This email is already in use');
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="max-w-4xl mx-auto mt-9 p-4 mb-7 bg-white shadow-lg rounded-lg">
//         <h1 className="text-2xl font-bold text-center text-blue-900 mb-6">Edit Student</h1>
//         <form onSubmit={handleSubmit}>

//           {/* Row 1 */}
//           <div className="grid grid-cols-4 gap-4 mb-4">
//             <div className="relative">
//               <input
//                 type="text"
//                 name="name"
//                 onChange={handleChange}
//                 value={formData.name || ''}
//                 placeholder=" "
//                 className="peer w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white"
//               />
//               <label className="absolute left-3 top-0 text-black duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75">
//                 Name <span className="text-red-500">*</span>
//               </label>
//             </div>
//             <div className="relative">
//               <input
//                 name="fathername"
//                 value={formData.fatherName || ''}
//                 onChange={handleChange}
//                 placeholder=" "
//                 className="peer w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white"
//               />
//               <label className="absolute left-3 top-0 text-black duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75">
//                 Father Name
//               </label>
//             </div>
//             <div className="relative">
//               <input
//                 type="email"
//                 name="fatheremail"
//                 value={formData.fatheremail || ''}
//                 onChange={handleChange}
//                 placeholder=" "
//                 className="peer w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white"
//               />
//               <label className="absolute left-3 top-0 text-black duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75">
//                 Father's Email <span className="text-red-500">*</span>
//               </label>
//             </div>
//             <div className="relative">
//               <input
//                 name="motherName"
//                 value={formData.motherName || ''}
//                 onChange={handleChange}
//                 placeholder=" "
//                 className="peer w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white"
//               />
//               <label className="absolute left-3 top-0 text-black duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75">
//                 Mother Name
//               </label>
//             </div>
//             <div className="relative mb-4">
//   <input
//     type="email"
//     name="email"
//     onChange={handleChange}
//     value={formData.email || ''}
//     placeholder=" "
//     className="peer w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white"
//   />
//   <label className="absolute left-3 top-0 text-black duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75">
//     Student Email <span className="text-red-500">*</span>
//   </label>
// </div>

// <div className="relative mb-4">
//   <input
//     type="tel"
//     name="phone"
//     onChange={handleChange}
//     value={formData.phone || ''}
//     placeholder=" "
//     className="peer w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white"
//   />
//   <label className="absolute left-3 top-0 text-black duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75">
//     Contact No. <span className="text-red-500">*</span>
//   </label>
// </div>


// <div className="relative mb-4">
//   <input
//     type="tel"
//     name="otherPhone"
//     onChange={handleChange}
//     value={formData.otherPhone || ''}
//     placeholder=" "
//     className="peer w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white"
//   />
//   <label className="absolute left-3 top-0 text-black duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75">
//     Other Contact No. <span className="text-red-500">*</span>
//   </label>
// </div>

// <div className="relative mb-4">
//   <select
//     name="gender"
//     value={formData.gender || ''}
//     onChange={handleChange}
//     className="peer w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white"
//   >
//     <option value="" disabled>Select Gender</option>
//     <option value="Male">Male</option>
//     <option value="Female">Female</option>
//     <option value="Other">Other</option>
//   </select>
//   <label className="absolute left-3 top-0 text-black duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75">
//     Gender <span className="text-red-500">*</span>
//   </label>
// </div>
// <div className="relative mb-4">
//   <input
//     type="text"
//     name="address"
//     value={formData.address || ''}
//     onChange={handleChange}
//     placeholder=" "
//     className="peer w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white"
//   />
//   <label className="absolute left-3 top-0 text-black duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75">
//     Address <span className="text-red-500">*</span>
//   </label>
// </div>

// <div className="relative mb-4">
//   <select
//     name="course"
//     value={formData.course || ''}
//     onChange={handleChange}
//     className="peer w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white"
//   >
//     <option value="" disabled>Select Course</option>
//     <option value="BCA+ITEG">BCA+ITEG</option>
//     <option value="BBA+ITEG">BBA+ITEG</option>
//     <option value="Diploma ITEG">Diploma ITEG</option>
//     <option value="BSC+ITEG">BSC+ITEG</option>
//   </select>
//   <label className="absolute left-3 top-0 text-black duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75">
//     Course <span className="text-red-500">*</span>
//   </label>
// </div>
// <div className="relative mb-4">
//   <select
//     name="year"
//     value={formData.year || ''}
//     onChange={handleChange}
//     className="peer w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white"
//   >
//     <option value="" disabled>Select Year</option>
//     <option value="1 Year">1st Year</option>
//     <option value="2 Year">2nd Year</option>
//     <option value="3 Year">3rd Year</option>
//     <option value="4 Year">4th Year</option>
//   </select>
//   <label className="absolute left-3 top-0 text-black duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75">
//     Year <span className="text-red-500">*</span>
//   </label>
// </div>

// <div className="relative mb-4">
//   <input
//     name="totalday"
//     value={formData.totalday || ''}
//     onChange={handleChange}
//     type="number"
//     min="0"
//     placeholder=" "
//     className="peer w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white"
//   />
//   <label className="absolute left-3 top-0 text-black duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75">
//     Total Present <span className="text-red-500">*</span>
//   </label>
//   {formData.totalday < 0 && (
//     <span className="text-red-500 text-sm">Total Present cannot be negative</span>
//   )}
// </div>
// <div className="relative mb-4">
//   <input
//     name="totalabsent"
//     value={formData.totalabsent || ''}
//     onChange={handleChange}
//     type="number"
//     min="0"
//     placeholder=" "
//     className="peer w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white"
//   />
//   <label className="absolute left-3 top-0 text-black duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75">
//     Total Absent <span className="text-red-500">*</span>
//   </label>
//   {formData.totalabsent < 0 && (
//     <span className="text-red-500 text-sm">Total Absent cannot be negative</span>
//   )}
// </div>

// <div className="relative mb-4">
//   <input
//     name="totalpresent"
//     value={formData.totalpresent || ''}
//     onChange={handleChange}
//     type="number"
//     min="0"
//     placeholder=" "
//     className="peer w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white"
//   />
//   <label className="absolute left-3 top-0 text-black duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75">
//     Total Days <span className="text-red-500">*</span>
//   </label>
//   {formData.totalpresent < 0 && (
//     <span className="text-red-500 text-sm">Total Days cannot be negative</span>
//   )}
// </div>
// <div className="relative mb-4">
//   <input
//     name="totalpresent"
//     value={formData.totalpresent || ''}
//     onChange={handleChange}
//     type="number"
//     min="0"
//     placeholder=" "
//     className="peer w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white"
//   />
//   <label className="absolute left-3 top-0 text-black duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75">
//     Total Days <span className="text-red-500">*</span>
//   </label>
// </div>

// <div className="relative mb-4">
//   <input
//     name="attenpercentage"
//     value={formData.attenpercentage || ''}
//     onChange={handleChange}
//     type="number"
//     min="0"
//     max="100"
//     placeholder=" "
//     className="peer w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white"
//   />
//   <label className="absolute left-3 top-0 text-black duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75">
//     Attendance % <span className="text-red-500">*</span>
//   </label>
// </div>

// <div className="relative mb-4">
//   <select
//     name="oneA"
//     value={formData.oneA || ''}
//     onChange={handleChange}
//     className="peer w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white"
//   >
//     <option value="" disabled>Select 1A Level</option>
//     <option value="Beginner">Pending</option>
//     <option value="Intermediate">Running</option>
//     <option value="Advanced">Clear</option>
//   </select>
//   <label className="absolute left-3 top-0 text-black duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75">
//     1A Level <span className="text-red-500">*</span>
//   </label>
// </div>
// <div className="relative mb-4">
//   <select
//     name="oneB"
//     value={formData.oneB || ''}
//     onChange={handleChange}
//     className="peer w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white"
//   >
//     <option value="" disabled>Select 1B Level</option>
//     <option value="Beginner">Pending</option>
//     <option value="Intermediate">Running</option>
//     <option value="Advanced">Clear</option>
//   </select>
//   <label className="absolute left-3 top-0 text-black duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75">
//     1B Level <span className="text-red-500">*</span>
//   </label>
// </div>

// <div className="relative mb-4">
//   <select
//     name="oneC"
//     value={formData.oneC || ''}
//     onChange={handleChange}
//     className="peer w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white"
//   >
//     <option value="" disabled>Select 1C Level</option>
//     <option value="Beginner">Pending</option>
//     <option value="Intermediate">Running</option>
//     <option value="Advanced">Clear</option>
//   </select>
//   <label className="absolute left-3 top-0 text-black duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75">
//     1C Level <span className="text-red-500">*</span>
//   </label>
// </div>
// <div className="relative mb-4">
//   <select
//     name="twoA"
//     value={formData.twoA || ''}
//     onChange={handleChange}
//     className="peer w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white"
//   >
//     <option value="" disabled>Select 2A Level</option>
//     <option value="Beginner">Pending</option>
//     <option value="Intermediate">Running</option>
//     <option value="Advanced">Clear</option>
//   </select>
//   <label className="absolute left-3 top-0 text-black duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75">
//     2A Level <span className="text-red-500">*</span>
//   </label>
// </div>

// <div className="relative mb-4">
//   <select
//     name="twoB"
//     value={formData.twoB || ''}
//     onChange={handleChange}
//     className="peer w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white"
//   >
//     <option value="" disabled>Select 2B Level</option>
//     <option value="Beginner">Pending</option>
//     <option value="Intermediate">Running</option>
//     <option value="Advanced">Clear</option>
//   </select>
//   <label className="absolute left-3 top-0 text-black duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75">
//     2B Level <span className="text-red-500">*</span>
//   </label>
// </div>
// <div className="relative mb-4">
//   <select
//     name="twoC"
//     value={formData.twoC || ''}
//     onChange={handleChange}
//     className="peer w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white"
//   >
//     <option value="" disabled>Select 2C Level</option>
//     <option value="Beginner">Pending</option>
//     <option value="Intermediate">Running</option>
//     <option value="Advanced">Clear</option>
//   </select>
//   <label className="absolute left-3 top-0 text-black duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75">
//     2C Level <span className="text-red-500">*</span>
//   </label>
// </div>

//           </div>

//           {/* Add remaining rows in a similar fashion as Row 1, updating the value and onChange */}

//           {/* Submit Button */}
//           <div className="flex justify-center">
//             <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700">
//               Save Changes
//             </button>
//             <button
//               type="button"
//               onClick={() => navigate('/teacher-dashboard/manage-students')}
//               className="ml-4 bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition duration-200"
//             >
//               Cancel
//             </button>

//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default EditStudentForm;