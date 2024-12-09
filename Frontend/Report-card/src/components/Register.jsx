// import React from 'react';
// import axios from 'axios';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

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
//     role: Yup.string().required('Role is required'),
//   });

//   // Handle the form submission
//   const handleRegister = async (values, { setSubmitting, resetForm }) => {
//     try {
//       await axios.post('http://localhost:5000/api/auth/register', values);
//       alert('Registered successfully');
//       resetForm(); // Reset the form on successful registration
//     } catch (error) {
//       console.error('Registration failed', error);
//       alert('Registration failed');
//     } finally {
//       setSubmitting(false); // Stop the form submission state
//     }
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center bg-cover bg-center"
//       style={{
//         backgroundImage: "url('https://wallpapers.com/images/hd/blue-pc-wallpaper-5t53q9xfmxrdhq5j.jpg')",
//       }}
//     >
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

//         <Formik
//           initialValues={{ name: '', email: '', password: '', role: 'Student' }}
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

//               {/* Role selection */}
//               <div className="mb-4">
//                 <Field
//                   as="select"
//                   name="role"
//                   className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
//                 >
//                   <option value="Student">Student</option>
//                   <option value="Teacher">Teacher</option>
//                 </Field>
//                 <ErrorMessage name="role" component="div" className="text-red-500 text-sm mt-1" />
//               </div>

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
//       </div>
//     </div>
//   );
// }

// export default Register;










import React from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Register() {
  // Define the validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  // Handle the form submission
  const handleRegister = async (values, { setSubmitting, resetForm }) => {
    try {
      await axios.post('http://localhost:5000/api/auth/register', values);
      alert('Registered successfully');
      resetForm(); // Reset the form on successful registration
    } catch (error) {
      console.error('Registration failed', error);
      alert('Registration failed');
    } finally {
      setSubmitting(false); // Stop the form submission state
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://wallpapers.com/images/hd/blue-pc-wallpaper-5t53q9xfmxrdhq5j.jpg')",
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        <Formik
          initialValues={{ name: '', email: '', password: '', role: 'Teacher' }}
          validationSchema={validationSchema}
          onSubmit={handleRegister}
        >
          {({ isSubmitting }) => (
            <Form>
              {/* Name field */}
              <div className="mb-4">
                <Field
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
              </div>

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

              {/* Role selection - Hidden and defaulted to Teacher */}
              <Field type="hidden" name="role" value="Teacher" />

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full p-2 text-white rounded-md ${isSubmitting ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-600'} transition duration-300`}
              >
                {isSubmitting ? 'Registering...' : 'Register'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Register;
