


// main main

// import React, { useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import logo from "../assets/a5MfLJOhTEWxmOyj4-uQKg-Photoroom.png"; // Adjust the path to your logo file

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
//         return () => {
//       window.onpopstate = null; // Cleanup the listener
//     };
//   }, [role, location.pathname, navigate]);

//   return (
//     <header className="bg-blue-900 text-white shadow-lg">
//       <div className="container mx-auto px-6 py-1 flex justify-between items-center">
//         {/* Logo */}
//         <img
//           src={logo} // Use the imported logo
//           alt="Report Card Generator Logo"
//           // className="h-12 cursor-pointer"
//           style={{
//             height: "60px", // Increase the height
//             width: "auto", // Maintain aspect ratio
//           }}
//          />

//         {/* Navigation Links */}
//         <ul className="flex space-x-8">
//           {!role && (
//             <li>
//               <button
//                 onClick={() => navigate("/login")}
//                 className="hover:text-gray-200 transition duration-300 bg-skyblue p-2 h-10 w-20 rounded"
//               >
//                 Login
//               </button>
//             </li>
//           )}
//         </ul>

//         {/* Sidebar Toggle and Logout */}
//         {role && (
//           <div className="flex items-center space-x-4"> {/* Add space-x-4 for spacing */}
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


// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import logo from "../assets/a5MfLJOhTEWxmOyj4-uQKg-Photoroom.png"; // Adjust the path to your logo file
// import { AiOutlineUser } from "react-icons/ai"; // Import a profile icon

// const Navbar = ({ toggleSidebar }) => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const role = localStorage.getItem("role");
//   const [isDropdownOpen, setDropdownOpen] = useState(false); // State for dropdown menu

//   const handleLogout = () => {
//     localStorage.removeItem("role"); // Clear user role
//     localStorage.removeItem("email"); // Clear user email
//     navigate("/"); // Redirect to the landing page
//   };

//   const handleProfile = () => {
//     navigate("/profile"); // Navigate to profile page
//   };

//   useEffect(() => {
//     if (role && (location.pathname === "/login" || location.pathname === "/register")) {
//       if (role === "SuperAdmin") navigate("/superadmin-dashboard");
//       else if (role === "Teacher") navigate("/teacher-dashboard");
//       else if (role === "Student") navigate("/student-dashboard");
//     }
//     return () => {
//       window.onpopstate = null; // Cleanup listener
//     };
//   }, [role, location.pathname, navigate]);

//   return (
//     <header className="bg-blue-900 text-white shadow-lg">
//       <div className="container mx-auto px-6 py-1 flex justify-between items-center">
//         {/* Logo */}
//         <img
//           src={logo}
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
//                 className="hover:text-gray-200 transition duration-300 bg-skyblue p-2 h-10 w-20 rounded"
//               >
//                 Login
//               </button>
//             </li>
//           )}
//         </ul>

//         {/* Sidebar Toggle and Profile Menu */}
//         {role && (
//           <div className="flex items-center space-x-4 relative">
//             {/* Profile Button */}
//             <button
//               onClick={() => setDropdownOpen((prev) => !prev)}
//               className="focus:outline-none"
//             >
//              <AiOutlineUser className="h-8 w-8 text-white" /> {/* Profile Icon */}
//             </button>

//             {/* Dropdown Menu */}
//             {isDropdownOpen && (
//               <div className="absolute right-0 mt-[9em] w-48 bg-white text-black rounded-md shadow-lg z-50">
//                 <ul className="py-1">
//                   <li
//                     onClick={handleProfile}
//                     className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                   >
//                     Profile
//                   </li>
//                   <li
//                     onClick={handleLogout}
//                     className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                   >
//                     Logout
//                   </li>
//                 </ul>
//               </div>
//             )}

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

import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import logo from "../assets/Untitled-1.png"; // Adjust the path to your logo file
import { AiOutlineUser } from "react-icons/ai"; // Import a profile icon
import ProfileModel from "./ProfileModel"; // Import ProfileModal component
// import logo1 from "../assets/a5MfLJOhTEWxmOyj4-uQKg-Photoroom.png"
// import logo2 from "../assets/Artboard 1.png"
import logo2 from "../assets/Artboard 1.png"
const Navbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const role = localStorage.getItem("role");
  const email = localStorage.getItem("email");
  const [isDropdownOpen, setDropdownOpen] = useState(false); // State for dropdown menu
  const [isProfileOpen, setProfileOpen] = useState(false); // State for profile modal

  const handleLogout = () => {
    localStorage.removeItem("role"); // Clear user role
    localStorage.removeItem("email"); // Clear user email
    navigate("/"); // Redirect to the landing page
  };

  const handleProfileOpen = () => {
    setProfileOpen(true); // Open profile modal
  };

  const handleProfileClose = () => {
    setProfileOpen(false); // Close profile modal
  };

  useEffect(() => {
    if (role && (location.pathname === "/login" || location.pathname === "/register")) {
      if (role === "SuperAdmin") navigate("/superadmin-dashboard");
      else if (role === "Teacher") navigate("/teacher-dashboard");
      else if (role === "Student") navigate("/student-dashboard");
    }
    return () => {
      window.onpopstate = null; // Cleanup listener
    };
  }, [role, location.pathname, navigate]);

  return (
    <header className="bg-blue-900 text-white shadow-lg">
      <div className="container mx-auto px-6 py-1 flex justify-between items-center">
        {/* Logo */}
<div className="flex items-center justify-start">
  <img
    src={logo2}
    alt="Report Card Generator Logo"
    className="w-[4em] h-[5em]"
  />
</div>


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

        {/* Sidebar Toggle and Profile Menu */}
        {role && (
          <div className="flex items-center space-x-4 relative">
            {/* Profile Button */}
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="focus:outline-none"
            >
              <AiOutlineUser className="h-8 w-8 text-white" /> {/* Profile Icon */}
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-[9em] w-48 bg-white text-black rounded-md shadow-lg z-50">
                <ul className="py-1">
                  <li
                    onClick={handleProfileOpen}
                    className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Profile
                  </li>
                  <li
                    onClick={handleLogout}
                    className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}

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

      {/* Profile Modal */}
      {isProfileOpen && <ProfileModel email={email} onClose={handleProfileClose} />}
    </header>
  );
};

export default Navbar;

