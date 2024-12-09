// import React from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const predefinedSuperAdmin = { email: 'admin@example.com', password: 'admin123' };

// function Login() {
//   const navigate = useNavigate();

//   // Yup validation schema
//   const validationSchema = Yup.object().shape({
//     email: Yup.string()
//       .email('Invalid email format') // Email format validation
//       .required('Email is required'), // Required field validation
//     password: Yup.string()
//       .min(6, 'Password must be at least 6 characters') // Minimum length validation
//       .required('Password is required'), // Required field validation
//   });

//   // Function to handle login submission
//   const handleLogin = async (values) => {
//     const { email, password } = values;

//     // Check for Super Admin credentials
//     if (email === predefinedSuperAdmin.email && password === predefinedSuperAdmin.password) {
//       localStorage.setItem('role', 'SuperAdmin');
//       navigate('/superadmin-dashboard');
//     } else {
//       try {
//         // Send login request to the backend
//         const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
//         const { role } = response.data; // Get the role from the response data

//         // Store role in localStorage
//         localStorage.setItem('role', role);

//         if (role === 'Teacher') {
//           navigate('/teacher-dashboard');
//         } else if (role === 'Student') {
//           navigate('/student-dashboard');
//         }
//       } catch (error) {
//         // Display error messages if login fails
//         if (error.response) {
//           alert(`Login failed: ${error.response.data.message}`); // Display the exact error message from the server
//         } else {
//           alert('An error occurred. Please try again.'); // Display other types of errors
//         }
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 container">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        
//         {/* Formik Form with initial values, validation schema, and submission handling */}
//         <Formik
//           initialValues={{ email: '', password: '' }}
//           validationSchema={validationSchema} // Apply the validation schema here
//           onSubmit={handleLogin}
//         >
//           {({ isSubmitting }) => (
//             <Form>
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

//               {/* Submit button */}
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
//       </div>
//     </div>
//   );
// }

// export default Login;
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const predefinedSuperAdmin = { email: 'admin@example.com', password: 'admin123' };

function Login() {
  const navigate = useNavigate();

  // Yup validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const handleLogin = async (values) => {
    const { email, password } = values;

    // Check for Super Admin credentials
    if (email === predefinedSuperAdmin.email && password === predefinedSuperAdmin.password) {
      localStorage.setItem('role', 'SuperAdmin');
      navigate('/superadmin-dashboard');
    } else {
      try {
        // Send login request to the backend
        const response = await axios.post('http://localhost:5000/api/auth/login/jwt', { email, password });
        const { role } = response.data; // Get the role from the response data

        // Store role in localStorage
        localStorage.setItem('role', role);

        if (role === 'Teacher') {
          navigate('/teacher-dashboard');
        } else if (role === 'Student') {
          navigate('/student-dashboard');
        }
      } catch (error) {
        if (error.response) {
          alert(`Login failed: ${error.response.data.message}`);
        } else {
          alert('An error occurred. Please try again.');
        }
      }
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('https://wallpapers.com/images/hd/blue-pc-wallpaper-5t53q9xfmxrdhq5j.jpg')", // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({ isSubmitting }) => (
            <Form>
              {/* Email field */}
              <div className="mb-4">
                <Field
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Password field */}
              <div className="mb-4">
                <Field
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full p-2 text-white rounded-md ${isSubmitting ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-600'} transition duration-300`}
              >
                {isSubmitting ? 'Logging in...' : 'Login'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
