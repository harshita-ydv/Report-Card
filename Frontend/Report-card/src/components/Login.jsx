

// // main
// import React from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import ToastContainerComponent from './ToastContainerComponent ';

// const predefinedSuperAdmin = { email: 'admin@example.com', password: 'admin123' };

// function Login() {
//   const navigate = useNavigate();

//   const validationSchema = Yup.object().shape({
//     email: Yup.string()
//       .email('Invalid email format')
//       .required('Email is required'),
//     password: Yup.string()
//       .min(6, 'Password must be at least 6 characters')
//       .required('Password is required'),
//   });

//   const handleLogin = async (values) => {
//     const { email, password } = values;

//     if (email === predefinedSuperAdmin.email && password === predefinedSuperAdmin.password) {
//       localStorage.setItem('role', 'SuperAdmin');
//       toast.success('Welcome, Super Admin!');
//       navigate('/superadmin-dashboard');
//     } else {
//       try {
//         const response = await axios.post('http://localhost:5000/api/auth/login/jwt', { email, password });
//         const { role } = response.data;

//         localStorage.setItem('role', role);

//         toast.success(`Welcome, ${role}!`);
//         if (role === 'Teacher') {
//           navigate('/teacher-dashboard');
//         } else if (role === 'Student') {
//           navigate('/student-dashboard');
//         }
//       } catch (error) {
//         if (error.response) {
//           toast.error(`Login failed: ${error.response.data.message}`);
//         } else {
//           toast.error('An error occurred. Please try again.');
//         }
//       }
//     }
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center"
//       style={{
//         backgroundImage: "url('https://wallpapers.com/images/hd/blue-pc-wallpaper-5t53q9xfmxrdhq5j.jpg')",
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

//         <Formik
//           initialValues={{ email: '', password: '' }}
//           validationSchema={validationSchema}
//           onSubmit={handleLogin}
//         >
//           {({ isSubmitting }) => (
//             <Form>
//               <div className="mb-4">
//                 <Field
//                   className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                 />
//                 <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
//               </div>

//               <div className="mb-4">
//                 <Field
//                   className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
//                   type="password"
//                   name="password"
//                   placeholder="Password"
//                 />
//                 <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
//               </div>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className={`w-full p-2 text-white rounded-md ${isSubmitting ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-600'} transition duration-300`}
//               >
//                 {isSubmitting ? 'Logging in...' : 'Login'}
//               </button>
//             </Form>
//           )}
//         </Formik>

//         <div className="mt-4 flex justify-between items-center">
//           <Link
//             to="/password-recovery"
//             className="text-blue-500 hover:underline text-sm"
//           >
//             Forgot Password?
//           </Link>
//         </div>

//         <div className="mt-6 text-center">
//           <p className="text-sm text-gray-600">
//             Don’t have an account?{' '}
//             <Link
//               to="/register"
//               className="text-blue-500 hover:underline"
//             >
//               Sign Up
//             </Link>
//           </p>
//         </div>
//       </div>

//       <ToastContainerComponent />
//     </div>
//   );
// }

// export default Login;



// // main


// import React from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import ToastContainerComponent from './ToastContainerComponent ';

// const predefinedSuperAdmin = { email: 'admin@example.com', password: 'admin123' };
// const predefinedTeacher = { email: 'teacher@example.com', password: 'teacher123' }; // Add predefined teacher credentials

// function Login() {
//   const navigate = useNavigate();

//   const validationSchema = Yup.object().shape({
//     email: Yup.string()
//       .email('Invalid email format')
//       .required('Email is required'),
//     password: Yup.string()
//       .min(6, 'Password must be at least 6 characters')
//       .required('Password is required'),
//   });

//   const handleLogin = async (values) => {
//     const { email, password } = values;

//     if (email === predefinedSuperAdmin.email && password === predefinedSuperAdmin.password) {
//       localStorage.setItem('role', 'SuperAdmin');
//       toast.success('Welcome, Super Admin!');
//       navigate('/superadmin-dashboard');
//     } else if (email === predefinedTeacher.email && password === predefinedTeacher.password) {
//       localStorage.setItem('role', 'Teacher');
//       toast.success('Welcome, Teacher!');
//       navigate('/teacher-dashboard');
//     } else {
//       try {
//         const response = await axios.post('http://localhost:5000/api/auth/login/jwt', { email, password });
//         const { role } = response.data;

//         localStorage.setItem('role', role);

//         toast.success(`Welcome, ${role}!`);
//         if (role === 'Teacher') {
//           navigate('/teacher-dashboard');
//         } else if (role === 'Student') {
//           navigate('/student-dashboard');
//         }
//       } catch (error) {
//         if (error.response) {
//           toast.error(`Login failed: ${error.response.data.message}`);
//         } else {
//           toast.error('An error occurred. Please try again.');
//         }
//       }
//     }
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center"
//       style={{
//         backgroundImage: "url('https://wallpapers.com/images/hd/blue-pc-wallpaper-5t53q9xfmxrdhq5j.jpg')",
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

//         <Formik
//           initialValues={{ email: '', password: '' }}
//           validationSchema={validationSchema}
//           onSubmit={handleLogin}
//         >
//           {({ isSubmitting }) => (
//             <Form>
//               <div className="mb-4">
//                 <Field
//                   className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                 />
//                 <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
//               </div>

//               <div className="mb-4">
//                 <Field
//                   className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
//                   type="password"
//                   name="password"
//                   placeholder="Password"
//                 />
//                 <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
//               </div>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className={`w-full p-2 text-white rounded-md ${isSubmitting ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-600'} transition duration-300`}
//               >
//                 {isSubmitting ? 'Logging in...' : 'Login'}
//               </button>
//             </Form>
//           )}
//         </Formik>

//         <div className="mt-4 flex justify-between items-center">
//           <Link
//             to="/password-recovery"
//             className="text-blue-500 hover:underline text-sm"
//           >
//             Forgot Password?
//           </Link>
//         </div>

//         <div className="mt-6 text-center">
//           <p className="text-sm text-gray-600">
//             Don’t have an account?{' '}
//             <Link
//               to="/register"
//               className="text-blue-500 hover:underline"
//             >
//               Sign Up
//             </Link>
//           </p>
//         </div>
//       </div>

//       <ToastContainerComponent />
//     </div>
//   );
// }

// export default Login;












// mainnnnnnnnnnnnnnnnnnnnnnnnnn
// import React from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import logo from '../assets/a5MfLJOhTEWxmOyj4-uQKg-Photoroom.png';
// import Navbar from './Navbar';

// const predefinedSuperAdmin = { email: 'admin@example.com', password: 'admin123' };

// function Login() {
//   const navigate = useNavigate();

//   // Yup validation schema
//   const validationSchema = Yup.object().shape({
//     email: Yup.string()
//       .email('Invalid email format')
//       .required('Email is required'),
//     password: Yup.string()
//       .required('Password is required'),
//   });

//   const handleLogin = async (values) => {
//     const { email, password } = values;
  
//     if (email === predefinedSuperAdmin.email && password === predefinedSuperAdmin.password) {
//       localStorage.setItem('role', 'SuperAdmin');
//       localStorage.setItem('name', 'Super Admin');  // Store name in localStorage
//       localStorage.setItem('email', predefinedSuperAdmin.email); // Store email
//       navigate('/superadmin-dashboard');
//     } else {
//       try {
//         const response = await axios.post('http://localhost:5000/api/auth/login/jwt', { email, password });
//         const { role, name } = response.data;  // Assuming the response has name and email
  
//         localStorage.setItem('role', role);
//         localStorage.setItem('name', name);  // Store name in localStorage
//         localStorage.setItem('email', email);  // Store email in localStorage
  
//         if (role === 'Teacher') {
//           navigate('/teacher-dashboard');
//         } else if (role === 'Student') {
//           navigate('/student-dashboard');
//         }
//       } catch (error) {
//         if (error.response) {
//           alert(`Login failed: ${error.response.data.message}`);
//         } else {
//           alert('An error occurred. Please try again.');
//         }
//       }
//     }
//   };
  

//   return (
//     <>
//     <Navbar/>
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
//         {/* Left Side - Login Form */}
//         <div className="w-full md:w-1/2 p-8">
//           {/* <h2 className="text-3xl font-bold text-gray-800 mb-6">Welcome back</h2> */}
//           <img
//   src={logo} // Use the imported logo
//   alt="Report Card Generator Logo"
//   className="w-32 h-auto mx-auto mb-4" // Adjust the width (w-32) and margin (mb-4)
// />
//           <p className="text-gray-600 mb-4">Please enter your details</p>

//           <Formik
//             initialValues={{ email: '', password: '' }}
//             validationSchema={validationSchema}
//             onSubmit={handleLogin}
//           >
//             {({ isSubmitting, errors, touched }) => (
//               <Form>
//                 {/* Email Field */}
//                 <div className="relative mb-6">
//                   <Field
//                     className={`peer w-full p-3 border ${
//                       errors.email && touched.email ? 'border-red-500' : 'border-gray-300'
//                     } rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white`}
//                     type="email"
//                     name="email"
//                     placeholder=" "
//                   />
//                   <label
//                     className="absolute left-3 top-2 text-gray-500 duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
//                   >
//                     Email address
//                   </label>
//                   <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
//                 </div>

//                 {/* Password Field */}
//                 <div className="relative mb-6">
//                   <Field
//                     className={`peer w-full p-3 border ${
//                       errors.password && touched.password ? 'border-red-500' : 'border-gray-300'
//                     } rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white`}
//                     type="password"
//                     name="password"
//                     placeholder=" "
//                   />
//                   <label
//                     className="absolute left-3 top-2 text-gray-500 duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
//                   >
//                     Password
//                   </label>
//                   <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className={`w-full p-2 text-white rounded-md ${
//                     isSubmitting ? 'bg-blue-800' : 'bg-skyblue hover:bg-blue-800'
//                   } transition duration-300`}
//                 >
//                   {isSubmitting ? 'Logging in...' : 'Sign in'}
//                 </button>

//                 <div className="mt-4 text-center">
//                   <span className="text-sm text-gray-600">Don’t have an account? </span>
//                   <Link to="/register" className="text-sm text-blue-900 hover:underline">
//                     Sign up
//                   </Link>
//                 </div>
//               </Form>
//             )}
//           </Formik>
//         </div>

        // {/* Right Side - Illustration */}
        // <div className="hidden md:flex w-1/2 bg-purple-100 items-center justify-center">
        //   <img
        //     src="https://img.freepik.com/free-vector/progress-indicator-concept-illustration_114360-4978.jpg?ga=GA1.1.852954389.1699076296&semt=ais_hybrid"
        //     alt="Illustration"
        //     className="max-w-full h-250"
        //   />
        // </div>
//       </div>
//     </div>
//     </>
//   );
// }

// export default Login;





// import React from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import logo from '../assets/a5MfLJOhTEWxmOyj4-uQKg-Photoroom.png';
// import Navbar from './Navbar';

// const predefinedSuperAdmin = { email: 'admin@example.com', password: 'admin123' };

// function Login() {
//   const navigate = useNavigate();

//   const validationSchema = Yup.object().shape({
//     email: Yup.string()
//       .email('Invalid email format')
//       .required('Email is required'),
//     password: Yup.string().required('Password is required'),
//   });

//   const handleLogin = async (values) => {
//     const { email, password } = values;

//     if (email === predefinedSuperAdmin.email && password === predefinedSuperAdmin.password) {
//       localStorage.setItem('role', 'SuperAdmin');
//       localStorage.setItem('name', 'Super Admin');
//       localStorage.setItem('email', predefinedSuperAdmin.email);
//       navigate('/superadmin-dashboard');
//     } else {
//       try {
//         const response = await axios.post('http://localhost:5000/api/auth/login/jwt', { email, password });
//         const { role  } = response.data;

//         localStorage.setItem('role', role);
//         // localStorage.setItem('name', name);
//         localStorage.setItem('email', email);

//         if (role === 'Teacher') {
//           navigate('/teacher-dashboard');
//         } else if (role === 'Student') {
//           navigate('/student-dashboard');
//         }
//       } catch (error) {
//         if (error.response) {
//           alert(`Login failed: ${error.response.data.message}`);
//         } else {
//           alert('An error occurred. Please try again.');
//         }
//       }
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
//           <div className="w-full md:w-1/2 p-8">
//             <img
//               src={logo}
//               alt="Report Card Generator Logo"
//               className="w-32 h-auto mx-auto mb-4"
//             />
//             <p className="text-gray-600 mb-4">Please enter your details</p>

//             <Formik
//               initialValues={{ email: '', password: '' }}
//               validationSchema={validationSchema}
//               onSubmit={handleLogin}
//             >
//               {({ isSubmitting, errors, touched }) => (
//                 <Form>
//                   {/* Email Field */}
//                   <div className="relative mb-6">
//                     <Field
//                       className={`peer w-full p-3 border ${
//                         errors.email && touched.email ? 'border-red-500' : 'border-gray-300'
//                       } rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white`}
//                       type="email"
//                       name="email"
//                       placeholder=" "
//                     />
//                     <label
//                       className="absolute left-3 top-2 text-gray-500 duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
//                     >
//                       Email address
//                     </label>
//                     <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
//                   </div>

//                   {/* Password Field */}
//                   <div className="relative mb-6">
//                     <Field
//                       className={`peer w-full p-3 border ${
//                         errors.password && touched.password ? 'border-red-500' : 'border-gray-300'
//                       } rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white`}
//                       type="password"
//                       name="password"
//                       placeholder=" "
//                     />
//                     <label
//                       className="absolute left-3 top-2 text-gray-500 duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
//                     >
//                       Password
//                     </label>
//                     <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
//                   </div>

//                   {/* Forgot Password Link */}
//                   <div className="text-right mb-4">
//                     <Link to="/password-recovery" className="text-sm text-blue-900 hover:underline">
//                       Forgot Password?
//                     </Link>
//                   </div>

//                   {/* Submit Button */}
//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className={`w-full p-2 text-white rounded-md ${
//                       isSubmitting ? 'bg-blue-800' : 'bg-skyblue hover:bg-blue-800'
//                     } transition duration-300`}
//                   >
//                     {isSubmitting ? 'Logging in...' : 'Sign in'}
//                   </button>

//                   <div className="mt-4 text-center">
//                     <span className="text-sm text-gray-600">Don’t have an account? </span>
//                     <Link to="/register" className="text-sm text-blue-900 hover:underline">
//                       Sign up
//                     </Link>
//                   </div>
//                 </Form>
//               )}
//             </Formik>
//           </div>

//             {/* Right Side - Illustration */}
//         <div className="hidden md:flex w-1/2 bg-purple-100 items-center justify-center">
//           <img
//             src="https://img.freepik.com/free-vector/progress-indicator-concept-illustration_114360-4978.jpg?ga=GA1.1.852954389.1699076296&semt=ais_hybrid"
//             alt="Illustration"
//             className="max-w-full h-[100%]"
//           />
//         </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;



import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assets/a5MfLJOhTEWxmOyj4-uQKg-Photoroom.png';
import Navbar from './Navbar';
import lgo from "../assets/logo.png"

const predefinedSuperAdmin = { email: 'admin@example.com', password: 'admin123' };

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleLogin = async (values) => {
    const { email, password } = values;

    if (email === predefinedSuperAdmin.email && password === predefinedSuperAdmin.password) {
      localStorage.setItem('role', 'SuperAdmin');
      localStorage.setItem('name', 'Super Admin');
      localStorage.setItem('email', predefinedSuperAdmin.email);
      toast.success('Login successful as Super Admin!');
      navigate('/superadmin-dashboard');
    } else {
      try {
        const response = await axios.post('http://localhost:5000/api/auth/login/jwt', { email, password });
        const { role } = response.data;

        localStorage.setItem('role', role);
        localStorage.setItem('email', email);

        toast.success(`Login successful as ${role}!`);

        if (role === 'Teacher') {
          navigate('/teacher-dashboard');
        } else if (role === 'Student') {
          navigate('/student-dashboard');
        }
      } catch (error) {
        if (error.response) {
          toast.error(`Login failed: ${error.response.data.message}`);
        } else {
          toast.error('An error occurred. Please try again.');
        }
      }
    }
  };

  return (
    <>
   <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>      <ToastContainer position="top-center" autoClose={3000} />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 mt-9">
        <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="w-full md:w-1/2 p-8">
            <img
              src={lgo}
              alt="Report Card Generator Logo"
              className="w-18 h-[5em] mx-auto mb-4"
            />
            <p className="text-gray-600 mb-4">Please enter your details</p>

            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={validationSchema}
              onSubmit={handleLogin}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form>
                  <div className="relative mb-6">
                    <Field
                      className={`peer w-full p-3 border ${
                        errors.email && touched.email ? 'border-red-500' : 'border-gray-300'
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white`}
                      type="email"
                      name="email"
                      placeholder=" "
                    />
                    <label
                      className="absolute left-3 top-0 text-gray-500 duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
                    >
                      Email address
                    </label>
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  <div className="relative mb-6">
                    <Field
                      className={`peer w-full p-3 border ${
                        errors.password && touched.password ? 'border-red-500' : 'border-gray-300'
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white`}
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      placeholder=" "
                    />
                    <label
                      className="absolute left-3 top-0 text-gray-500 duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
                    >
                      Password
                    </label>
                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
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

                  <div className="text-right mb-4">
                    <Link to="/password-recovery" className="text-sm text-blue-500 hover:underline">
                      Forgot Password?
                    </Link>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full p-2 text-white rounded-md ${
                      isSubmitting ? 'bg-blue-500' : 'bg-blue-500 hover:bg-blue-600'
                    } transition duration-300`}
                  >
                    {isSubmitting ? 'Logging in...' : 'Sign in'}
                  </button>

                  <div className="mt-4 text-center">
                    <span className="text-sm text-gray-600">Don’t have an account? </span>
                    <Link to="/register" className="text-sm text-blue-600 hover:underline">
                      Sign up
                    </Link>
                  </div>
                </Form>
              )}
            </Formik>
          </div>

          <div className="hidden md:flex w-1/2 bg-purple-100 items-center justify-center">
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

export default Login;
