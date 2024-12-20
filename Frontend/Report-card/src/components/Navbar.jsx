// // main
// import React, { useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import logo from "../assets/a5MfLJOhTEWxmOyj4-uQKg-Photoroom.png"; // Adjust the path to your logo file

// const Navbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const role = localStorage.getItem("role");

//   const handleLogout = () => {
//     localStorage.removeItem("role"); // Clear user role
//     navigate("/"); // Redirect to the landing page
//   };

//   // Redirect logged-in users away from login/register pages
//   useEffect(() => {
//     if (role && (location.pathname === "/login" || location.pathname === "/register")) {
//       if (role === "SuperAdmin") navigate("/superadmin-dashboard");
//       else if (role === "Teacher") navigate("/teacher-dashboard");
//       else if (role === "Student") navigate("/student-dashboard");
//       // localStorage.removeItem('role');

//     }

//     return () => {
//       window.onpopstate = null; // Cleanup the listener
//     };
//   }, [role, location.pathname, navigate]);

//   return (
//     <>
//     <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg">
//       <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <img
//           src={logo} // Use the imported logo
//           alt="Report Card Generator Logo"
//           className="h-12 cursor-pointer"
//         />

//         {/* Navigation Links */}
//         <ul className="flex space-x-8">
//           {!role && (
//             <li>
//               <button
//                 onClick={() => navigate("/login")}
//                 className="hover:text-gray-200 transition duration-300"
//               >
//                 Login
//               </button>
//             </li>
//           )}
//         </ul>

//         {/* Logout Button */}
//         {role && (
//           <button
//             onClick={handleLogout}
//             className="bg-red-500 px-5 py-2 rounded-lg text-white hover:bg-red-600 transition duration-300"
//           >
//             Logout
//           </button>
//         )}
//       </div>
//     </nav>
    
//     </>
//   );
// };

// export default Navbar;


// main main

import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/a5MfLJOhTEWxmOyj4-uQKg-Photoroom.png"; // Adjust the path to your logo file

const Navbar = ({ toggleSidebar }) => {
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
    }
        return () => {
      window.onpopstate = null; // Cleanup the listener
    };
  }, [role, location.pathname, navigate]);

  return (
    <header className="bg-blue-900 text-white shadow-lg">
      <div className="container mx-auto px-6 py-1 flex justify-between items-center">
        {/* Logo */}
        <img
          src={logo} // Use the imported logo
          alt="Report Card Generator Logo"
          // className="h-12 cursor-pointer"
          style={{
            height: "60px", // Increase the height
            width: "auto", // Maintain aspect ratio
          }}
         />

        {/* Navigation Links */}
        <ul className="flex space-x-8">
          {!role && (
            <li>
              <button
                onClick={() => navigate("/login")}
                className="hover:text-gray-200 transition duration-300 bg-skyblue p-2 h-10 w-20 rounded"
              >
                Login
              </button>
            </li>
          )}
        </ul>

        {/* Sidebar Toggle and Logout */}
        {role && (
          <div className="flex items-center space-x-4"> {/* Add space-x-4 for spacing */}
            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="bg-skyblue px-5 py-2 rounded-lg text-white hover:bg-red-600 transition duration-300"
            >
              Logout
            </button>

            {/* Sidebar Toggle */}
            <button
              onClick={toggleSidebar}
              className="text-white focus:outline-none lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;




// import React, { useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import logo from "../assets/a5MfLJOhTEWxmOyj4-uQKg-Photoroom.png"; // Adjust the path to your logo file

// const Navbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const role = localStorage.getItem("role");

//   const handleLogout = () => {
//     localStorage.removeItem("role"); // Clear user role
//     navigate("/", { replace: true }); // Redirect to the landing page
//   };

//   useEffect(() => {
//     if (role && (location.pathname === "/login" || location.pathname === "/register")) {
//       if (role === "SuperAdmin") navigate("/superadmin-dashboard", { replace: true });
//       else if (role === "Teacher") navigate("/teacher-dashboard", { replace: true });
//       else if (role === "Student") navigate("/student-dashboard", { replace: true });
//     }

//     // Intercept browser's back navigation
//     const handleBackNavigation = () => {
//       if (role && (location.pathname === "/login" || location.pathname === "/register")) {
//         navigate(`/${role.toLowerCase()}-dashboard`, { replace: true });
//       }
//     };

//     window.onpopstate = handleBackNavigation;

//     return () => {
//       window.onpopstate = null; // Cleanup the listener
//     };
//   }, [role, location.pathname, navigate]);

//   return (
//     <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg">
//       <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <img
//           src={logo} // Use the imported logo
//           alt="Report Card Generator Logo"
//           className="h-12 cursor-pointer"
//         />

//         {/* Navigation Links */}
//         <ul className="flex space-x-8">
//           {!role && (
//             <li>
//               <button
//                 onClick={() => navigate("/login")}
//                 className="hover:text-gray-200 transition duration-300"
//               >
//                 Login
//               </button>
//             </li>
//           )}
//         </ul>

//         {/* Logout Button */}
//         {role && (
//           <button
//             onClick={handleLogout}
//             className="bg-red-500 px-5 py-2 rounded-lg text-white hover:bg-red-600 transition duration-300"
//           >
//             Logout
//           </button>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



// import React, { useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import logo from "../assets/Untitled-1-01.png"; // Adjust the path to your logo file

// const Navbar = ({ toggleSidebar }) => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const role = localStorage.getItem("role");

//   const handleLogout = () => {
//     localStorage.removeItem("role"); // Clear user role
//     navigate("/"); // Redirect to the landing page
//   };

//   // Redirect logged-in users away from login/register pages
//   useEffect(() => {
//     if (role && (location.pathname === "/login" || location.pathname === "/register")) {
//       if (role === "SuperAdmin") navigate("/superadmin-dashboard");
//       else if (role === "Teacher") navigate("/teacher-dashboard");
//       else if (role === "Student") navigate("/student-dashboard");
//     }
//     return () => {
//       window.onpopstate = null; // Cleanup the listener
//     };
//   }, [role, location.pathname, navigate]);

//   return (
//     <header className="bg-blue-900 text-white shadow-lg fixed w-full z-10 top-0 left-0">
//       <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <img
//           src={logo} // Use the imported logo
//           alt="Report Card Generator Logo"
//           style={{
//             height: "60px", // Increase the height
//             width: "auto", // Maintain aspect ratio
//           }}
//         />

//         {/* Navigation Links */}
//         <ul className="flex space-x-8">
//           {!role && (
//             <li>
//               <button
//                 onClick={() => navigate("/login")}
//                 className="hover:text-gray-200 transition duration-300"
//               >
//                 Login
//               </button>
//             </li>
//           )}
//         </ul>

//         {/* Sidebar Toggle and Logout */}
//         {role && (
//           <div className="flex items-center space-x-4">
//             {/* Logout Button */}
//             <button
//               onClick={handleLogout}
//               className="bg-skyblue px-5 py-2 rounded-lg text-white hover:bg-red-600 transition duration-300"
//             >
//               Logout
//             </button>

//             {/* Sidebar Toggle */}
//             <button
//               onClick={toggleSidebar}
//               className="text-white focus:outline-none lg:hidden"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               </svg>
//             </button>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Navbar;




// import React, { useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import logo from "../assets/Untitled-1-01.png"; // Adjust the path to your logo file

// const Navbar = ({ toggleSidebar }) => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const role = localStorage.getItem("role");

//   const handleLogout = () => {
//     localStorage.removeItem("role"); // Clear user role
//     navigate("/"); // Redirect to the landing page
//   };

//   // Redirect logged-in users away from login/register pages
//   useEffect(() => {
//     if (role && (location.pathname === "/login" || location.pathname === "/register")) {
//       if (role === "SuperAdmin") navigate("/superadmin-dashboard");
//       else if (role === "Teacher") navigate("/teacher-dashboard");
//       else if (role === "Student") navigate("/student-dashboard");
//     }
//   }, [role, location.pathname, navigate]);

//   return (
//     <header className="bg-blue-900 text-white fixed w-full top-0 shadow-lg z-50 h-16">
//     <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//       {/* Logo */}
//       <img
//         src={logo}
//         alt="Report Card Generator Logo"
//         style={{
//           height: "60px", // Adjust the height
//           width: "auto", // Maintain aspect ratio
//         }}
//       />
  
//       {/* Navigation Links */}
//       <ul className="flex space-x-8">
//         {!role && (
//           <li>
//             <button
//               onClick={() => navigate("/login")}
//               className="hover:text-gray-200 transition duration-300 bg-skyblue px-4 py-2 rounded"
//             >
//               Login
//             </button>
//           </li>
//         )}
//       </ul>
  
//       {/* Sidebar Toggle and Logout */}
//       {role && (
//         <div className="flex items-center space-x-4">
//           {/* Logout Button */}
//           <button
//             onClick={handleLogout}
//             className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600 transition duration-300"
//           >
//             Logout
//           </button>
  
//           {/* Sidebar Toggle */}
//           <button
//             onClick={toggleSidebar}
//             className="text-white focus:outline-none lg:hidden"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           </button>
//         </div>
//       )}
//     </div>
//   </header>
  
//   );
// };

// export default Navbar;
