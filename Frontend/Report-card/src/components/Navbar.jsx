// main
import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/a5MfLJOhTEWxmOyj4-uQKg-Photoroom.png"; // Adjust the path to your logo file

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("role"); // Clear user role
    navigate("/"); // Redirect to the landing page
  };

  // Redirect logged-in users away from login/register pages
  useEffect(() => {
    if (role && (location.pathname === "/login" || location.pathname === "/register")) {
      if (role === "SuperAdmin") navigate("/superadmin-dashboard");
      else if (role === "Teacher") navigate("/teacher-dashboard");
      else if (role === "Student") navigate("/student-dashboard");
      // localStorage.removeItem('role');

    }

    return () => {
      window.onpopstate = null; // Cleanup the listener
    };
  }, [role, location.pathname, navigate]);

  return (
    <nav className="bg-blue-900 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <img
          src={logo} // Use the imported logo
          alt="Report Card Generator Logo"
          className="h-12 cursor-pointer"
        />

        {/* Navigation Links */}
        <ul className="flex space-x-8">
          {!role && (
            <li>
              <button
                onClick={() => navigate("/login")}
                className="hover:text-gray-200 transition duration-300"
              >
                Login
              </button>
            </li>
          )}
        </ul>

        {/* Logout Button */}
        {role && (
          <button
            onClick={handleLogout}
            className="bg-red-500 px-5 py-2 rounded-lg text-white hover:bg-red-600 transition duration-300"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


// import React, { useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import logo from "../assets/a5MfLJOhTEWxmOyj4-uQKg-Photoroom.png"; // Adjust the path to your logo file

// const Navbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const role = sessionStorage.getItem("role");

//   const handleLogout = () => {
//     sessionStorage.removeItem("role"); // Clear user role
//     navigate("/"); // Redirect to the landing page
//   };

//   // Redirect logged-in users away from login/register pages
//   useEffect(() => {
//     if (role) {
//       // Redirect based on user role if on restricted routes
//       if (location.pathname === "/login" || location.pathname === "/register") {
//         if (role === "SuperAdmin") navigate("/superadmin-dashboard");
//         else if (role === "Teacher") navigate("/teacher-dashboard");
//         else if (role === "Student") navigate("/student-dashboard");
//       }

//       // Prevent back navigation to login/register
//       window.history.pushState(null, "", window.location.href);
//       window.onpopstate = () => {
//         window.history.pushState(null, "", window.location.href);
//       };
//     } else {
//       // Allow navigation if not logged in
//       window.onpopstate = null; // Remove restriction when logged out
//     }
//   }, [role, location.pathname, navigate]);

//   return (
//     <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg">
//       <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <img
//           src={logo}
//           alt="Report Card Generator Logo"
//           className="h-12 cursor-pointer"
//         />

//         {/* Navigation Links */}
//         <ul className="flex space-x-8">
//           {!role ? (
//             <>
//               <li>
//                 <button
//                   onClick={() => navigate("/login")}
//                   className="hover:text-gray-200 transition duration-300"
//                 >
//                   Login
//                 </button>
//               </li>
//               <li>
//                 <button
//                   onClick={() => navigate("/register")}
//                   className="hover:text-gray-200 transition duration-300"
//                 >
//                   Register
//                 </button>
//               </li>
//             </>
//           ) : (
//             <>
//               {role === "SuperAdmin" && (
//                 <li>
//                   <button
//                     onClick={() => navigate("/superadmin-dashboard")}
//                     className="hover:text-gray-200 font-medium transition duration-300"
//                   >
//                     Super Admin Dashboard
//                   </button>
//                 </li>
//               )}
//               {role === "Teacher" && (
//                 <li>
//                   <button
//                     onClick={() => navigate("/teacher-dashboard")}
//                     className="hover:text-gray-200 font-medium transition duration-300"
//                   >
//                     Teacher Dashboard
//                   </button>
//                 </li>
//               )}
//             </>
//           )}
//         </ul>

//         <div className="flex items-center space-x-6">
//           {/* Logout Button */}
//           {role && (
//             <button
//               onClick={handleLogout}
//               className="bg-red-500 px-5 py-2 rounded-lg text-white hover:bg-red-600 transition duration-300"
//             >
//               Logout
//             </button>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

