// // main

// import React from 'react';
// import axios from 'axios';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { toast, ToastContainer } from 'react-toastify';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import 'react-toastify/dist/ReactToastify.css';

// function Register() {
//   // Define the validation schema using Yup
//   const validationSchema = Yup.object({
//     name: Yup.string()
//       .min(2, 'Name must be at least 2 characters')
//       .required('Name is required'),
//     email: Yup.string()
//       .email('Invalid email format')
//       .required('Email is required'),
//     password: Yup.string()
//       .min(6, 'Password must be at least 6 characters')
//       .required('Password is required'),
//   });

//   // Handle the form submission
//   const handleRegister = async (values, { setSubmitting, resetForm }) => {
//     try {
//       await axios.post('http://localhost:5000/api/auth/register', values);
//       toast.success('Registered successfully!', {
//         position: 'top-right',
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       });
//       resetForm(); // Reset the form on successful registration
//     } catch (error) {
//       console.error('Registration failed', error);
//       toast.error('Email is already in use!', {
//         position: 'top-right',
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       });
//     } finally {
//       setSubmitting(false); // Stop the form submission state
//     }
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center bg-cover bg-center"
//     >
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

//         <Formik
//           initialValues={{ name: '', email: '', password: '', role: 'Teacher' }}
//           validationSchema={validationSchema}
//           onSubmit={handleRegister}
//         >
//           {({ isSubmitting }) => (
//             <Form>
//               {/* Name field */}
//               <div className="mb-4">
//                 <Field
//                   className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
//                   type="text"
//                   name="name"
//                   placeholder="Name"
//                 />
//                 <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
//               </div>

//               {/* Email field */}
//               <div className="mb-4">
//                 <Field
//                   className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                 />
//                 <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
//               </div>

//               {/* Password field */}
//               <div className="mb-4">
//                 <Field
//                   className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
//                   type="password"
//                   name="password"
//                   placeholder="Password"
//                 />
//                 <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
//               </div>

//               {/* Role selection - Hidden and defaulted to Teacher */}
//               <Field type="hidden" name="role" value="Teacher" />

//               {/* Submit button */}
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className={`w-full p-2 text-white rounded-md ${isSubmitting ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-600'} transition duration-300`}
//               >
//                 {isSubmitting ? 'Registering...' : 'Register'}
//               </button>
//             </Form>
//           )}
//         </Formik>

//         {/* Link to Login page */}
//         <p className="text-sm text-center mt-4">
//           Already registered?{' '}
//           <Link to="/login" className="text-blue-500 hover:underline">
//             Login here
//           </Link>
//         </p>
//       </div>

//       {/* ToastContainer */}
//       <ToastContainer />
//     </div>
//   );
// }

// export default Register;

// import React from 'react';
// import axios from 'axios';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import logo from '../assets/a5MfLJOhTEWxmOyj4-uQKg-Photoroom.png';
// import { useNavigate, Link } from 'react-router-dom';
// import 'react-toastify/dist/ReactToastify.css';
// import Navbar from './Navbar';

// function Register() {
//   // Define the validation schema using Yup
//   const validationSchema = Yup.object({
//     name: Yup.string()
//       .min(2, 'Name must be at least 2 characters')
//       .required('Name is required'),
//     email: Yup.string()
//       .email('Invalid email format')
//       .required('Email is required'),
//     password: Yup.string()
//       .min(6, 'Password must be at least 6 characters')
//       .required('Password is required'),
//   });

//   // Handle the form submission
//   const handleRegister = async (values, { setSubmitting, resetForm }) => {
//     try {
//       await axios.post('http://localhost:5000/api/auth/register', values);
//       alert('Registered successfully');
//       resetForm(); // Reset the form on successful registration
//     } catch (error) {
//       console.error('Registration failed', error);
//       alert('Email already in use');
//     } finally {
//       setSubmitting(false); // Stop the form submission state
//     }
//   };

//   return (
//     <>
//     <Navbar/>
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
//         {/* Left Section: Form */}
//         <div className="w-full md:w-1/2 p-8">
//           {/* <h2 className="text-3xl font-bold text-gray-800 mb-6">Register</h2> */}
//           <img
//        src={logo} // Use the imported logo
//   alt="Report Card Generator Logo"
//   className="w-32 h-auto mx-auto mb-4" // Adjust the width (w-32) and margin (mb-4)
// />
//           <p className="text-gray-600 mb-4">Please enter your details</p>

//           <Formik
//             initialValues={{ name: '', email: '', password: '', role: 'Teacher' }}
//             validationSchema={validationSchema}
//             onSubmit={handleRegister}
//           >
//             {({ isSubmitting, touched, errors }) => (
//               <Form>
//                 {/* Name field */}
//                 <div className="relative mb-6">
//                   <Field
//                     className={`peer w-full p-3 border ${touched.name && errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white`}
//                     type="text"
//                     name="name"
//                     placeholder=" "
//                   />
//                   <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2.5 left-3 z-10 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75">
//                     Name
//                   </label>
//                   <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
//                 </div>

//                 {/* Email field */}
//                 <div className="relative mb-6">
//                   <Field
//                     className={`peer w-full p-3 border ${touched.email && errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white`}
//                     type="email"
//                     name="email"
//                     placeholder=" "
//                   />
//                   <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2.5 left-3 z-10 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75">
//                     Email address
//                   </label>
//                   <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
//                 </div>

//                 {/* Password field */}
//                 <div className="relative mb-6">
//                   <Field
//                     className={`peer w-full p-3 border ${touched.password && errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white`}
//                     type="password"
//                     name="password"
//                     placeholder=" "
//                   />
//                   <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2.5 left-3 z-10 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75">
//                     Password
//                   </label>
//                   <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
//                 </div>

//                 {/* Role selection - Hidden and defaulted to Teacher */}
//                 <Field type="hidden" name="role" value="Teacher" />

//                 {/* Submit button */}
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className={`w-full p-2 text-white rounded-md ${isSubmitting ? 'bg-purple-300' : 'bg-skyblue hover:bg-blue-800'} transition duration-300`}
//                 >
//                   {isSubmitting ? 'Registering...' : 'Register'}
//                 </button>
//               </Form>
//             )}
//           </Formik>
// <p className="text-sm text-center mt-4">
// Already registered?{' '}
// <Link to="/login" className="text-blue-900 hover:underline">
//   Login here
// </Link>
// </p>
//       </div>

//       {/* Right Section: Illustration */}
//       <div className="hidden md:flex w-1/2 bg-purple-100 items-center justify-center h-max"><img
//             src="https://img.freepik.com/free-vector/progress-indicator-concept-illustration_114360-4978.jpg?ga=GA1.1.852954389.1699076296&semt=ais_hybrid"
//             alt="Illustration"
//             className="max-w-full h-max"
//           />
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }

// export default Register;

// import React, { useState } from "react";
// import axios from "axios";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import logo from "../assets/a5MfLJOhTEWxmOyj4-uQKg-Photoroom.png";
// import { useNavigate, Link } from "react-router-dom";
// import Navbar from "./Navbar";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function Register() {
//   // Define the validation schema using Yup
//   const validationSchema = Yup.object({
//     name: Yup.string()
//       .min(2, "Name must be at least 2 characters")
//       .required("Name is required"),
//     email: Yup.string()
//       .email("Invalid email format")
//       .required("Email is required"),
//     password: Yup.string()
//       .min(6, "Password must be at least 6 characters")
//       .required("Password is required"),
//   });

//   const handleRegister = async (values, { setSubmitting, resetForm }) => {
//     try {
//       await axios.post("http://localhost:5000/api/auth/register", values);
//       alert("Registered successfully");
//       resetForm(); // Reset the form on successful registration
//     } catch (error) {
//       console.error("Registration failed", error);
//       toast.error("Email already in use!", { position: "top-center" });
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
//           {/* Left Section: Form */}
//           <div className="w-full md:w-1/2 p-8">
//             {/* <h2 className="text-3xl font-bold text-gray-800 mb-6">Register</h2> */}
//             <img
//               src={logo} // Use the imported logo
//               alt="Report Card Generator Logo"
//               className="w-32 h-auto mx-auto mb-4" // Adjust the width (w-32) and margin (mb-4)
//             />
//             <p className="text-gray-600 mb-4">Please enter your details</p>

//             <Formik
//               initialValues={{
//                 name: "",
//                 email: "",
//                 password: "",
//                 role: "Teacher",
//               }}
//               validationSchema={validationSchema}
//               onSubmit={handleRegister}
//             >
//               {({ isSubmitting, touched, errors }) => (
//                 <Form>
//                   {/* Name field */}
//                   <div className="relative mb-6">
//                     <Field
//                       className={`peer w-full p-3 border ${
//                         touched.name && errors.name
//                           ? "border-red-500"
//                           : "border-gray-300"
//                       } rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white`}
//                       type="text"
//                       name="name"
//                       placeholder=" "
//                     />
//                     <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2.5 left-3 z-10 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75">
//                       Name
//                     </label>
//                     <ErrorMessage
//                       name="name"
//                       component="div"
//                       className="text-red-500 text-sm mt-1"
//                     />
//                   </div>

//                   {/* Email field */}
//                   <div className="relative mb-6">
//                     <Field
//                       className={`peer w-full p-3 border ${
//                         touched.email && errors.email
//                           ? "border-red-500"
//                           : "border-gray-300"
//                       } rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white`}
//                       type="email"
//                       name="email"
//                       placeholder=" "
//                     />
//                     <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2.5 left-3 z-10 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75">
//                       Email address
//                     </label>
//                     <ErrorMessage
//                       name="email"
//                       component="div"
//                       className="text-red-500 text-sm mt-1"
//                     />
//                   </div>

//                   {/* Password field */}
//                   <div className="relative mb-6">
//                     <Field
//                       className={`peer w-full p-3 border ${
//                         touched.password && errors.password
//                           ? "border-red-500"
//                           : "border-gray-300"
//                       } rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white`}
//                       type="password"
//                       name="password"
//                       placeholder=" "
//                     />
//                     <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2.5 left-3 z-10 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75">
//                       Password
//                     </label>
//                     <ErrorMessage
//                       name="password"
//                       component="div"
//                       className="text-red-500 text-sm mt-1"
//                     />
//                   </div>

//                   {/* Role selection - Hidden and defaulted to Teacher */}
//                   <Field type="hidden" name="role" value="Teacher" />

//                   {/* Submit button */}
//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className={`w-full p-2 text-white rounded-md ${
//                       isSubmitting
//                         ? "bg-purple-300"
//                         : "bg-skyblue hover:bg-blue-800"
//                     } transition duration-300`}
//                   >
//                     {isSubmitting ? "Registering..." : "Register"}
//                   </button>
//                 </Form>
//               )}
//             </Formik>
//             <p className="text-sm text-center mt-4">
//               Already registered?{" "}
//               <Link to="/login" className="text-blue-900 hover:underline">
//                 Login here
//               </Link>
//             </p>
//           </div>

//           {/* Right Section: Illustration */}
//           <div className="hidden md:flex w-1/2 bg-purple-100 items-center justify-center h-max">
//             <img
//               src="https://img.freepik.com/free-vector/progress-indicator-concept-illustration_114360-4978.jpg?ga=GA1.1.852954389.1699076296&semt=ais_hybrid"
//               alt="Illustration"
//               className="max-w-full h-max"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Register;


// 






import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import logo from "../assets/a5MfLJOhTEWxmOyj4-uQKg-Photoroom.png";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "./Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import lgo from "../assets/logo.png";
function Register() {
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate();

  // Define the validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleRegister = async (values, { setSubmitting, resetForm }) => {
    try {
      await axios.post("http://localhost:5000/api/auth/register", values);

      // Show success toast
      toast.success("Registered successfully!", {
        position: "top-center",
        autoClose: 1000, // Show toast for 1 second
      });

      resetForm(); // Reset the form on successful registration

      // Redirect to login page after 1 second
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      console.error("Registration failed", error);
      toast.error("Email already in use!", { position: "top-center" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
   <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>      <ToastContainer /> {/* ToastContainer to display toast notifications */}

      <div className="min-h-screen flex items-center justify-center bg-gray-100 mt-9">
        <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Left Section: Form */}
          <div className="w-full md:w-1/2 p-8">
            <img
              src={lgo} // Use the imported logo
              alt="Report Card Generator Logo"
              className="w-18 h-[5em] mx-auto mb-4" // Adjust the width (w-32) and margin (mb-4)
            />
            <p className="text-gray-600 mb-4">Please enter your details</p>

            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
                role: "Teacher",
              }}
              validationSchema={validationSchema}
              onSubmit={handleRegister}
            >
              {({ isSubmitting, touched, errors }) => (
                <Form>
                  {/* Name field */}
                  <div className="relative mb-6">
                    <Field
                      className={`peer w-full p-3 border ${
                        touched.name && errors.name
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white`}
                      type="text"
                      name="name"
                      placeholder=" "
                    />
                    <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-0 left-3 z-10 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75">
                      Name
                    </label>
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Email field */}
                  <div className="relative mb-6">
                    <Field
                      className={`peer w-full p-3 border ${
                        touched.email && errors.email
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white`}
                      type="email"
                      name="email"
                      placeholder=" "
                    />
                    <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-0 left-3 z-10 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75">
                      Email address
                    </label>
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Password field with toggle visibility */}
                  <div className="relative mb-6">
                    <Field
                      className={`peer w-full p-3 border ${
                        touched.password && errors.password
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white`}
                      type={showPassword ? "text" : "password"} // Toggle password visibility
                      name="password"
                      placeholder=" "
                    />
                    <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-0 left-3 z-10 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75">
                      Password
                    </label>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                    {/* Show/Hide Password Button */}
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                      className="absolute right-3 top-3 text-gray-500 focus:outline-none"
                    >
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.25 12A3.25 3.25 0 1112 8.75M9.75 12a3.25 3.25 0 113.25 3.25M2.25 12a9.375 9.375 0 0116.82-4.376M9.75 15.25l.75-.75M2.25 12c.442.52 2.97 3.25 7.5 3.25M21.75 12c-.442-.52-2.97-3.25-7.5-3.25M21.75 12a9.375 9.375 0 01-16.82 4.376M15.25 8.75l-.75.75"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 15.25a3.25 3.25 0 110-6.5 3.25 3.25 0 010 6.5zM2.25 12s3.25-4.875 9.75-4.875S21.75 12 21.75 12s-3.25 4.875-9.75 4.875S2.25 12 2.25 12z"
                          />
                        </svg>
                      )}
                    </button>
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full p-2 text-white rounded-md ${
                      isSubmitting
                        ? "bg-blue-300"
                        : "bg-blue-500 hover:bg-blue-600"
                    } transition duration-300`}
                  >
                    {isSubmitting ? "Registering..." : "Register"}
                  </button>
                </Form>
              )}
            </Formik>
            <p className="text-sm text-center mt-4">
              Already registered?{" "}
              <Link to="/login" className="text-blue-900 hover:underline">
                Login here
              </Link>
            </p>
          </div>

          {/* Right Section: Illustration */}
          <div className="hidden md:flex w-1/2 bg-purple-100 items-center justify-center h-full">
            <img
              src="https://img.freepik.com/free-vector/progress-indicator-concept-illustration_114360-4978.jpg?ga=GA1.1.852954389.1699076296&semt=ais_hybrid"
              alt="Illustration"
              className="max-w-full h-[100%]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
