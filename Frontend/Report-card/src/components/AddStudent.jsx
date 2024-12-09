import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  fatherName: Yup.string().required('Father Name is required'),
  motherName: Yup.string().required('Mother Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string().matches(/^\d{10}$/, 'Phone must be 10 digits').required('Contact number is required'),
  otherPhone: Yup.string().matches(/^\d{10}$/, 'Other phone must be 10 digits').required('Other contact number is required'),
  gender: Yup.string().required('Gender is required'),
  address: Yup.string().required('Address is required'),
  rollno: Yup.string().required('Roll Number is required'),
  course: Yup.string().required('Course is required'),
  year: Yup.string().required('Year is required'),
  totalpresent: Yup.number()
    .typeError('Total Present days must be a number')
    .min(0, 'Total Present days must be at least 0')
    .required('Total Present days is required'),
  totalabsent: Yup.number()
    .typeError('Total Absent days must be a number')
    .min(0, 'Total Absent days must be at least 0')
    .required('Total Absent days is required'),
  attenpercentage: Yup.number()
    .typeError('Attendance Percentage must be a number')
    .min(0, 'Attendance Percentage cannot be less than 0')
    .max(100, 'Attendance Percentage cannot be more than 100')
    .required('Attendance Percentage is required'),
  oneA: Yup.string().required('1A Level is required'),
  oneB: Yup.string().required('1B Level is required'),
  oneC: Yup.string().required('1C Level is required'),
  twoA: Yup.string().required('2A Level is required'),
  twoB: Yup.string().required('2B Level is required'),
  twoC: Yup.string().required('2C Level is required'),
});

const AddStudent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { student } = location.state || {};

  const formik = useFormik({
    initialValues: {
      name: student?.name || '',
      fatherName: student?.fatherName || '',
      motherName: student?.motherName || '',
      email: student?.email || '',
      phone: student?.phone || '',
      otherPhone: student?.otherPhone || '',
      gender: student?.gender || '',
      address: student?.address || '',
      rollno: student?.rollno || '',
      course: student?.course || '',
      year: student?.year || '',
      totalpresent: student?.totalpresent || '',
      totalabsent: student?.totalabsent || '',
      attenpercentage: student?.attenpercentage || '',
      oneA: student?.oneA || '',
      oneB: student?.oneB || '',
      oneC: student?.oneC || '',
      twoA: student?.twoA || '',
      twoB: student?.twoB || '',
      twoC: student?.twoC || '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        if (student?.id) {
          await axios.put(`http://localhost:5000/api/data/${student.id}`, values);
        } else {
          await axios.post('http://localhost:5000/api/data', values);
        }
        resetForm();
        alert("successfully student aadded");
        // navigate('/login'); // Redirects back to the student table
      } catch (error) {
        console.error("Error submitting data", error);
        // Handle error if needed
      }
    },
  });

  return (
    <div className="max-w-4xl mx-auto ">
      <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
        {student ? 'Edit' : 'Add'} Student
      </h2>
      <form onSubmit={formik.handleSubmit} className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl mb-4">Student Information</h2>
        <div className="border-b-2 border-black w-1/4 mb-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className={`p-2 w-full rounded-md border ${formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500 text-sm">{formik.errors.name}</div>
            )}
          </div>
          
          {/* Father Name Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Father Name</label>
            <input
              type="text"
              name="fatherName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fatherName}
              className={`p-2 w-full rounded-md border ${formik.touched.fatherName && formik.errors.fatherName ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formik.touched.fatherName && formik.errors.fatherName && (
              <div className="text-red-500 text-sm">{formik.errors.fatherName}</div>
            )}
          </div>

          {/* Mother Name Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Mother Name</label>
            <input
              type="text"
              name="motherName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.motherName}
              className={`p-2 w-full rounded-md border ${formik.touched.motherName && formik.errors.motherName ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formik.touched.motherName && formik.errors.motherName && (
              <div className="text-red-500 text-sm">{formik.errors.motherName}</div>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`p-2 w-full rounded-md border ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            )}
          </div>

          {/* Contact No. Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Contact No.</label>
            <input
              type="text"
              name="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              className={`p-2 w-full rounded-md border ${formik.touched.phone && formik.errors.phone ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formik.touched.phone && formik.errors.phone && (
              <div className="text-red-500 text-sm">{formik.errors.phone}</div>
            )}
          </div>

          {/* Other Contact No. Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Other Contact No.</label>
            <input
              type="text"
              name="otherPhone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.otherPhone}
              className={`p-2 w-full rounded-md border ${formik.touched.otherPhone && formik.errors.otherPhone ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formik.touched.otherPhone && formik.errors.otherPhone && (
              <div className="text-red-500 text-sm">{formik.errors.otherPhone}</div>
            )}
          </div>

          {/* Gender Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
            <select
              name="gender"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.gender}
              className={`p-2 w-full rounded-md border ${formik.touched.gender && formik.errors.gender ? 'border-red-500' : 'border-gray-300'}`}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {formik.touched.gender && formik.errors.gender && (
              <div className="text-red-500 text-sm">{formik.errors.gender}</div>
            )}
          </div>

          {/* Address Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Address</label>
            <textarea
              name="address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
              className={`p-2 w-full rounded-md border ${formik.touched.address && formik.errors.address ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formik.touched.address && formik.errors.address && (
              <div className="text-red-500 text-sm">{formik.errors.address}</div>
            )}
          </div>

          {/* Roll No. Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Roll Number</label>
            <input
              type="text"
              name="rollno"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.rollno}
              className={`p-2 w-full rounded-md border ${formik.touched.rollno && formik.errors.rollno ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formik.touched.rollno && formik.errors.rollno && (
              <div className="text-red-500 text-sm">{formik.errors.rollno}</div>
            )}
          </div>

          {/* Course Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Course</label>
            <input
              type="text"
              name="course"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.course}
              className={`p-2 w-full rounded-md border ${formik.touched.course && formik.errors.course ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formik.touched.course && formik.errors.course && (
              <div className="text-red-500 text-sm">{formik.errors.course}</div>
            )}
          </div>

          {/* Year Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Year</label>
            <input
              type="text"
              name="year"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.year}
              className={`p-2 w-full rounded-md border ${formik.touched.year && formik.errors.year ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formik.touched.year && formik.errors.year && (
              <div className="text-red-500 text-sm">{formik.errors.year}</div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Attendance Fields */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Total Present</label>
            <input
              type="number"
              name="totalpresent"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.totalpresent}
              className={`p-2 w-full rounded-md border ${formik.touched.totalpresent && formik.errors.totalpresent ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formik.touched.totalpresent && formik.errors.totalpresent && (
              <div className="text-red-500 text-sm">{formik.errors.totalpresent}</div>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Total Absent</label>
            <input
              type="number"
              name="totalabsent"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.totalabsent}
              className={`p-2 w-full rounded-md border ${formik.touched.totalabsent && formik.errors.totalabsent ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formik.touched.totalabsent && formik.errors.totalabsent && (
              <div className="text-red-500 text-sm">{formik.errors.totalabsent}</div>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Attendance Percentage</label>
            <input
              type="number"
              name="attenpercentage"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.attenpercentage}
              className={`p-2 w-full rounded-md border ${formik.touched.attenpercentage && formik.errors.attenpercentage ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formik.touched.attenpercentage && formik.errors.attenpercentage && (
              <div className="text-red-500 text-sm">{formik.errors.attenpercentage}</div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* 1A Level Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">1A Level</label>
            <input
              type="text"
              name="oneA"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.oneA}
              className={`p-2 w-full rounded-md border ${formik.touched.oneA && formik.errors.oneA ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formik.touched.oneA && formik.errors.oneA && (
              <div className="text-red-500 text-sm">{formik.errors.oneA}</div>
            )}
          </div>

          {/* 1B Level Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">1B Level</label>
            <input
              type="text"
              name="oneB"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.oneB}
              className={`p-2 w-full rounded-md border ${formik.touched.oneB && formik.errors.oneB ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formik.touched.oneB && formik.errors.oneB && (
              <div className="text-red-500 text-sm">{formik.errors.oneB}</div>
            )}
          </div>

          {/* 1C Level Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">1C Level</label>
            <input
              type="text"
              name="oneC"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.oneC}
              className={`p-2 w-full rounded-md border ${formik.touched.oneC && formik.errors.oneC ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formik.touched.oneC && formik.errors.oneC && (
              <div className="text-red-500 text-sm">{formik.errors.oneC}</div>
            )}
          </div>

          {/* 2A Level Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">2A Level</label>
            <input
              type="text"
              name="twoA"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.twoA}
              className={`p-2 w-full rounded-md border ${formik.touched.twoA && formik.errors.twoA ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formik.touched.twoA && formik.errors.twoA && (
              <div className="text-red-500 text-sm">{formik.errors.twoA}</div>
            )}
          </div>

          {/* 2B Level Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">2B Level</label>
            <input
              type="text"
              name="twoB"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.twoB}
              className={`p-2 w-full rounded-md border ${formik.touched.twoB && formik.errors.twoB ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formik.touched.twoB && formik.errors.twoB && (
              <div className="text-red-500 text-sm">{formik.errors.twoB}</div>
            )}
          </div>

          {/* 2C Level Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">2C Level</label>
            <input
              type="text"
              name="twoC"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.twoC}
              className={`p-2 w-full rounded-md border ${formik.touched.twoC && formik.errors.twoC ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formik.touched.twoC && formik.errors.twoC && (
              <div className="text-red-500 text-sm">{formik.errors.twoC}</div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-4 text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddStudent;


// import React from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { useNavigate, useLocation } from "react-router-dom";
// import axios from "axios";

// // Validation schema using Yup
// const validationSchema = Yup.object({
//   name: Yup.string().required("Name is required"),
//   fatherName: Yup.string().required("Father Name is required"),
//   motherName: Yup.string().required("Mother Name is required"),
//   email: Yup.string()
//     .email("Invalid email address")
//     .required("Email is required"),
//   phone: Yup.string()
//     .matches(/^\d{10}$/, "Phone must be 10 digits")
//     .required("Contact number is required"),
//   otherPhone: Yup.string()
//     .matches(/^\d{10}$/, "Other phone must be 10 digits")
//     .required("Other contact number is required"),
//   gender: Yup.string().required("Gender is required"),
//   address: Yup.string().required("Address is required"),
//   rollno: Yup.string().required("Roll Number is required"),
//   course: Yup.string().required("Course is required"),
//   year: Yup.string().required("Year is required"),
//   totalpresent: Yup.number()
//     .typeError("Total Present days must be a number")
//     .min(0, "Total Present days must be at least 0")
//     .required("Total Present days is required"),
//   totalabsent: Yup.number()
//     .typeError("Total Absent days must be a number")
//     .min(0, "Total Absent days must be at least 0")
//     .required("Total Absent days is required"),
//   attenpercentage: Yup.number()
//     .typeError("Attendance Percentage must be a number")
//     .min(0, "Attendance Percentage cannot be less than 0")
//     .max(100, "Attendance Percentage cannot be more than 100")
//     .required("Attendance Percentage is required"),
//   oneA: Yup.string().required("1A Level is required"),
//   oneB: Yup.string().required("1B Level is required"),
//   oneC: Yup.string().required("1C Level is required"),
//   twoA: Yup.string().required("2A Level is required"),
//   twoB: Yup.string().required("2B Level is required"),
//   twoC: Yup.string().required("2C Level is required"),
// });

// const AddStudent = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { student } = location.state || {};

//   const formik = useFormik({
//     initialValues: {
//       name: student?.name || "",
//       fatherName: student?.fatherName || "",
//       motherName: student?.motherName || "",
//       email: student?.email || "",
//       phone: student?.phone || "",
//       otherPhone: student?.otherPhone || "",
//       gender: student?.gender || "",
//       address: student?.address || "",
//       rollno: student?.rollno || "",
//       course: student?.course || "",
//       year: student?.year || "",
//       totalpresent: student?.totalpresent || "",
//       totalabsent: student?.totalabsent || "",
//       attenpercentage: student?.attenpercentage || "",
//       oneA: student?.oneA || "",
//       oneB: student?.oneB || "",
//       oneC: student?.oneC || "",
//       twoA: student?.twoA || "",
//       twoB: student?.twoB || "",
//       twoC: student?.twoC || "",
//     },
//     validationSchema,
//     onSubmit: async (values, { resetForm }) => {
//       try {
//         if (student?.id) {
//           await axios.put(`http://localhost:5000/api/data/${student.id}`, values);
//         } else {
//           await axios.post("http://localhost:5000/api/data", values);
//         }
//         resetForm();
//         alert("Student data saved successfully!");
//         navigate("/students"); // Redirect back to student list
//       } catch (error) {
//         console.error("Error submitting data:", error);
//         alert("Failed to save student data. Please try again.");
//       }
//     },
//   });

//   return (
//     <div className="max-w-4xl mx-auto mt-10">
//       <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
//         {student ? "Edit" : "Add"} Student
//       </h2>
//       <form
//         onSubmit={formik.handleSubmit}
//         className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
//       >
//         <h2 className="text-2xl mb-4">Student Information</h2>
//         <div className="border-b-2 border-black w-1/4 mb-4"></div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {[
//             { name: "name", label: "Name", type: "text" },
//             { name: "fatherName", label: "Father Name", type: "text" },
//             { name: "motherName", label: "Mother Name", type: "text" },
//             { name: "email", label: "Email", type: "email" },
//             { name: "phone", label: "Contact No.", type: "text" },
//             { name: "otherPhone", label: "Other Contact No.", type: "text" },
//             { name: "gender", label: "Gender", type: "select", options: ["Male", "Female", "Other"] },
//             { name: "address", label: "Address", type: "textarea" },
//             { name: "rollno", label: "Roll Number", type: "text" },
//             { name: "course", label: "Course", type: "text" },
//             { name: "year", label: "Year", type: "text" },
//           ].map(({ name, label, type, options }) => (
//             <div key={name} className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">
//                 {label}
//               </label>
//               {type === "textarea" ? (
//                 <textarea
//                   name={name}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   value={formik.values[name]}
//                   className={`p-2 w-full rounded-md border ${
//                     formik.touched[name] && formik.errors[name]
//                       ? "border-red-500"
//                       : "border-gray-300"
//                   }`}
//                 />
//               ) : type === "select" ? (
//                 <select
//                   name={name}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   value={formik.values[name]}
//                   className={`p-2 w-full rounded-md border ${
//                     formik.touched[name] && formik.errors[name]
//                       ? "border-red-500"
//                       : "border-gray-300"
//                   }`}
//                 >
//                   <option value="">Select {label}</option>
//                   {options.map((option) => (
//                     <option key={option} value={option}>
//                       {option}
//                     </option>
//                   ))}
//                 </select>
//               ) : (
//                 <input
//                   type={type}
//                   name={name}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   value={formik.values[name]}
//                   className={`p-2 w-full rounded-md border ${
//                     formik.touched[name] && formik.errors[name]
//                       ? "border-red-500"
//                       : "border-gray-300"
//                   }`}
//                 />
//               )}
//               {formik.touched[name] && formik.errors[name] && (
//                 <div className="text-red-500 text-sm">{formik.errors[name]}</div>
//               )}
//             </div>
//           ))}
//         </div>
//         <div className="flex justify-center">
//           <button
//             type="submit"
//             className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
//           >
//             {student ? "Update" : "Add"} Student
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddStudent;
