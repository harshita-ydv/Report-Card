// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const role = localStorage.getItem('role');

//   // State to manage theme
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const handleLogout = () => {
//     localStorage.removeItem('role');
//     navigate('/login');
//   };

//   // Toggle theme
//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//     document.documentElement.classList.toggle('dark', !isDarkMode);
//   };

//   return (
//     <nav
//       className={`${
//         isDarkMode ? 'bg-gray-800 text-white' : 'bg-blue-600 text-white'
//       } shadow-md`}
//     >
//       <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//         {/* Logo */}
//         <Link
//           to="/"
//           className="text-2xl font-bold hover:text-gray-200 transition-all"
//         >
//           ReportCardGen
//         </Link>

//         {/* Navigation Links */}
//         <ul className="flex space-x-6">
//           {!role ? (
//             <>
//               <li>
//                 <Link
//                   to="/login"
//                   className="hover:text-gray-200 transition-all"
//                 >
//                   Login
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/register"
//                   className="hover:text-gray-200 transition-all"
//                 >
//                   Register
//                 </Link>
//               </li>
//             </>
//           ) : (
//             <>
//               {role === 'SuperAdmin' && (
//                 <li>
//                   <Link
//                     to="/superadmin-dashboard"
//                     className="hover:text-gray-200 transition-all"
//                   >
//                     Super Admin Dashboard
//                   </Link>
//                 </li>
//               )}
//               {role === 'Teacher' && (
//                 <li>
//                   <Link
//                     to="/teacher-dashboard"
//                     className="hover:text-gray-200 transition-all"
//                   >
//                     Teacher Dashboard
//                   </Link>
//                 </li>
//               )}
//               {role === 'Student' && (
//                 <li>
//                   <Link
//                     to="/student-dashboard"
//                     className="hover:text-gray-200 transition-all"
//                   >
//                     Student Dashboard
//                   </Link>
//                 </li>
//               )}
//             </>
//           )}
//         </ul>

//         <div className="flex items-center space-x-4">
//           {/* Logout Button */}
//           {role && (
//             <button
//               onClick={handleLogout}
//               className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-all"
//             >
//               Logout
//             </button>
//           )}

//           {/* Theme Toggle Button */}
//           <button
//             onClick={toggleTheme}
//             className={`p-2 rounded-full ${
//               isDarkMode
//                 ? 'bg-yellow-400 text-gray-900'
//                 : 'bg-gray-900 text-white'
//             } hover:opacity-80 transition-all`}
//           >
//             {isDarkMode ? 'Light Mode' : 'Dark Mode'}
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const role = localStorage.getItem('role');

//   // State to manage theme
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const handleLogout = () => {
//     localStorage.removeItem('role');
//     navigate('/login');
//   };

//   // Toggle theme
//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//     document.documentElement.classList.toggle('dark', !isDarkMode);
//   };

//   return (
//     <nav
//       className={`${
//         isDarkMode ? 'bg-gray-800 text-white' : 'bg-blue-600 text-white'
//       } shadow-md`}
//     >
//       <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//         {/* Logo */}
//         <span className="text-2xl font-bold hover:text-gray-200 transition-all">
//           ReportCardGen
//         </span>

//         {/* Navigation Links */}
//         <ul className="flex space-x-6">
//           {!role ? (
//             <>
//               <li>
//                 <button
//                   onClick={() => navigate('/login')}
//                   className="hover:text-gray-200 transition-all"
//                 >
//                   Login
//                 </button>
//               </li>
//               <li>
//                 <button
//                   onClick={() => navigate('/register')}
//                   className="hover:text-gray-200 transition-all"
//                 >
//                   Register
//                 </button>
//               </li>
//             </>
//           ) : (
//             <>
//               {role === 'SuperAdmin' && (
//                 <li>
//                   <span className="font-semibold text-gray-300">
//                     Super Admin Dashboard
//                   </span>
//                 </li>
//               )}
//               {role === 'Teacher' && (
//                 <li>
//                   <span className="font-semibold text-gray-300">
//                     Teacher Dashboard
//                   </span>
//                 </li>
//               )}
//               {role === 'Student' && (
//                 <li>
//                   <span className="font-semibold text-gray-300">
//                     Student Dashboard
//                   </span>
//                 </li>
//               )}
//             </>
//           )}
//         </ul>

//         <div className="flex items-center space-x-4">
//           {/* Logout Button */}
//           {role && (
//             <button
//               onClick={handleLogout}
//               className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-all"
//             >
//               Logout
//             </button>
//           )}

//           {/* Theme Toggle Button */}
//           <button
//             onClick={toggleTheme}
//             className={`p-2 rounded-full ${
//               isDarkMode
//                 ? 'bg-yellow-400 text-gray-900'
//                 : 'bg-gray-900 text-white'
//             } hover:opacity-80 transition-all`}
//           >
//             {isDarkMode ? 'Light Mode' : 'Dark Mode'}
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const role = localStorage.getItem('role');

//   // State to manage theme
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const handleLogout = () => {
//     localStorage.removeItem('role'); // Clear user role
//     navigate('/'); // Redirect to the landing page
//   };

//   // Toggle theme
//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//     document.documentElement.classList.toggle('dark', !isDarkMode);
//   };

//   return (
//     <nav
//       className={`${
//         isDarkMode ? 'bg-gray-800 text-white' : 'bg-blue-600 text-white'
//       } shadow-md`}
//     >
//       <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//         {/* Logo */}
//         <span
//           onClick={() => navigate('/')}
//           className="text-2xl font-bold hover:text-gray-200 transition-all cursor-pointer"
//         >
//           ReportCardGen
//         </span>

//         {/* Navigation Links */}
//         <ul className="flex space-x-6">
//           {!role ? (
//             <>
//               <li>
//                 <button
//                   onClick={() => navigate('/login')}
//                   className="hover:text-gray-200 transition-all"
//                 >
//                   Login
//                 </button>
//               </li>
//               <li>
//                 <button
//                   onClick={() => navigate('/register')}
//                   className="hover:text-gray-200 transition-all"
//                 >
//                   Register
//                 </button>
//               </li>
//             </>
//           ) : (
//             <>
//               {role === 'SuperAdmin' && (
//                 <li>
//                   <span className="font-semibold text-gray-300">
//                     Super Admin Dashboard
//                   </span>
//                 </li>
//               )}
//               {role === 'Teacher' && (
//                 <li>
//                   <span className="font-semibold text-gray-300">
//                     Teacher Dashboard
//                   </span>
//                 </li>
//               )}
//               {role === 'Student' && (
//                 <li>
//                   <span className="font-semibold text-gray-300">
//                     Student Dashboard
//                   </span>
//                 </li>
//               )}
//             </>
//           )}
//         </ul>

//         <div className="flex items-center space-x-4">
//           {/* Logout Button */}
//           {role && (
//             <button
//               onClick={handleLogout}
//               className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-all"
//             >
//               Logout
//             </button>
//           )}

//           {/* Theme Toggle Button */}
//           <button
//             onClick={toggleTheme}
//             className={`p-2 rounded-full ${
//               isDarkMode
//                 ? 'bg-yellow-400 text-gray-900'
//                 : 'bg-gray-900 text-white'
//             } hover:opacity-80 transition-all`}
//           >
//             {isDarkMode ? 'Light Mode' : 'Dark Mode'}
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import logo from '../assets/a5MfLJOhTEWxmOyj4-uQKg-Photoroom.png'; // Adjust the path to your logo file

// const Navbar = () => {
//   const navigate = useNavigate();
//   const role = localStorage.getItem('role');

//   // State to manage theme
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const handleLogout = () => {
//     localStorage.removeItem('role'); // Clear user role
//     navigate('/'); // Redirect to the landing page
//   };

//   // Toggle theme
//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//     document.documentElement.classList.toggle('dark', !isDarkMode);
//   };

//   return (
//     <nav
//       className={`${
//         isDarkMode ? 'bg-gray-800 text-white' : 'bg-blue-600 text-white'
//       } shadow-md`}
//     >
//       <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//         {/* Logo */}
//         <img
//           src={logo} // Use the imported logo
//           alt="Report Card Generator Logo"
//           className="h-11 w-25 cursor-pointer"
//           onClick={() => navigate('/')}
//         />
       
//         {/* Navigation Links */}
//         <ul className="flex space-x-6">
//           {!role ? (
//             <>
//               <li>
//                 <button
//                   onClick={() => navigate('/login')}
//                   className="hover:text-gray-200 transition-all"
//                 >
//                   Login
//                 </button>
//               </li>
//               <li>
//                 <button
//                   onClick={() => navigate('/register')}
//                   className="hover:text-gray-200 transition-all"
//                 >
//                   Register
//                 </button>
//               </li>
//             </>
//           ) : (
//             <>
//               {role === 'SuperAdmin' && (
//                 <li>
//                   <span className="font-semibold text-gray-300">
//                     Super Admin Dashboard
//                   </span>
//                 </li>
//               )}
//               {role === 'Teacher' && (
//                 <li>
//                   <span className="font-semibold text-gray-300">
//                     Teacher Dashboard
//                   </span>
//                 </li>
//               )}
//               {role === 'Student' && (
//                 <li>
//                   <span className="font-semibold text-gray-300">
//                     Student Dashboard
//                   </span>
//                 </li>
//               )}
//             </>
//           )}
//         </ul>

//         <div className="flex items-center space-x-4">
//           {/* Logout Button */}
//           {role && (
//             <button
//               onClick={handleLogout}
//               className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-all"
//             >
//               Logout
//             </button>
//           )}

//           {/* Theme Toggle Button */}
//           <button
//             onClick={toggleTheme}
//             className={`p-2 rounded-full ${
//               isDarkMode
//                 ? 'bg-yellow-400 text-gray-900'
//                 : 'bg-gray-900 text-white'
//             } hover:opacity-80 transition-all`}
//           >
//             {isDarkMode ? 'Light Mode' : 'Dark Mode'}
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/a5MfLJOhTEWxmOyj4-uQKg-Photoroom.png'; // Adjust the path to your logo file

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const role = localStorage.getItem('role');

  const handleLogout = () => {
    localStorage.removeItem('role'); // Clear user role
    navigate('/'); // Redirect to the landing page
  };

  // Redirect logged-in users away from login/register pages
  useEffect(() => {
    if (role && (location.pathname === '/login' || location.pathname === '/register')) {
      // Redirect based on user role
      if (role === 'SuperAdmin') navigate('/superadmin-dashboard');
      else if (role === 'Teacher') navigate('/teacher-dashboard');
      else if (role === 'Student') navigate('/student-dashboard');
    }

    // Disable browser back button after login
    if (role) {
      window.history.pushState(null, '', window.location.href);
      window.onpopstate = () => {
        window.history.pushState(null, '', window.location.href);
      };
    }

    return () => {
      window.onpopstate = null; // Cleanup the listener
    };
  }, [role, location.pathname, navigate]);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <img
          src={logo} // Use the imported logo
          alt="Report Card Generator Logo"
          className="h-11 w-25 cursor-pointer"
          onClick={() => navigate('/')}
        />

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          {!role ? (
            <>
              <li>
                <button
                  onClick={() => navigate('/login')}
                  className="hover:text-gray-200 transition-all"
                >
                  Login
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/register')}
                  className="hover:text-gray-200 transition-all"
                >
                  Register
                </button>
              </li>
            </>
          ) : (
            <>
              {role === 'SuperAdmin' && (
                <li>
                  <span className="font-semibold text-gray-300">
                    Super Admin Dashboard
                  </span>
                </li>
              )}
              {role === 'Teacher' && (
                <li>
                  <span className="font-semibold text-gray-300">
                    Teacher Dashboard
                  </span>
                </li>
              )}
              {role === 'Student' && (
                <li>
                  <span className="font-semibold text-gray-300">
                    Student Dashboard
                  </span>
                </li>
              )}
            </>
          )}
        </ul>

        <div className="flex items-center space-x-4">
          {/* Logout Button */}
          {role && (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-all"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




