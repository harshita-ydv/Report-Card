// import React from 'react';
// import { Link, Outlet } from 'react-router-dom';

// const TeacherDashboard = () => {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <nav className="bg-white shadow-md p-4 mb-6">
//         <ul className="flex justify-center space-x-6">
//           <li>
//             <Link to="/teacher-dashboard" className="text-blue-500 font-semibold hover:text-blue-700 transition">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/teacher-dashboard/add-student" className="text-blue-500 font-semibold hover:text-blue-700 transition">
//               Add Student
//             </Link>
//           </li>
//           <li>
//             <Link to="/teacher-dashboard/manage-students" className="text-blue-500 font-semibold hover:text-blue-700 transition">
//               Manage Students
//             </Link>
//           </li>
//           <li>
//             <Link to="/teacher-dashboard/view-students" className="text-blue-500 font-semibold hover:text-blue-700 transition">
//               View Report Card
//             </Link>
//           </li>
//           <li>
//             <Link to="/teacher-dashboard/upload" className="text-blue-500 font-semibold hover:text-blue-700 transition">
//               Upload Excel File
//             </Link>
//           </li>
//         </ul>
//       </nav>

//       {/* Render Nested Routes */}
//       <div className="container mx-auto p-6">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default TeacherDashboard;


// TeacherDashboard.js
// import React from 'react';
// import { Link, Outlet } from 'react-router-dom';

// const TeacherDashboard = () => {
//   return (
//     <div className="container mx-auto p-6">
//       {/* <h1 className="text-3xl font-bold mb-6">Welcome to Teacher Dashboard</h1> */}

//       {/* Navigation Links for Teacher Dashboard as Cards */}
//       {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//         <Link
//           to="add-student"
//           className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition transform hover:scale-105"
//         >
//           <h3 className="text-xl font-semibold mb-2">Add Student</h3>
//           <p className="text-gray-600">Add new students to your classroom.</p>
//         </Link>

//         <Link
//           to="manage-students"
//           className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition transform hover:scale-105"
//         >
//           <h3 className="text-xl font-semibold mb-2">Manage Students</h3>
//           <p className="text-gray-600">Manage existing students in your classroom.</p>
//         </Link>

//         <Link
//           to="view-report-cards"
//           className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition transform hover:scale-105"
//         >
//           <h3 className="text-xl font-semibold mb-2">View Report Cards</h3>
//           <p className="text-gray-600">View and manage student report cards.</p>
//         </Link>
//       </div> */}

//       {/* Dashboard Main Content */}
//       {/* Nested route will render here */}
//       <Outlet />
//     </div>
//   );
// };

// export default TeacherDashboard;




// 
// import React, { useState } from 'react';
// import { Link, Outlet } from 'react-router-dom';

// const TeacherDashboard = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">
//       {/* Navbar */}
//       <header className="bg-white shadow-md p-4 flex items-center justify-between">
//         {/* <h1 className="text-blue-500 font-semibold text-lg">Teacher Dashboard</h1> */}
//         <button
//           onClick={toggleSidebar}
//           className="text-blue-500 lg:hidden focus:outline-none"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16m-7 6h7"
//             />
//           </svg>
//         </button>
//       </header>

//       <div className="flex flex-1">
//         {/* Sidebar */}
//         <aside
//           className={`fixed inset-y-0 left-0 transform ${
//             isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//           } lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out bg-white shadow-lg w-64 z-50`}
//         >
//           <nav className="p-4">
//             <ul className="space-y-4">
//               <li>
//                 <Link
//                   to="/teacher-dashboard"
//                   className="block text-blue-500 font-semibold hover:text-blue-700 transition"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/teacher-dashboard/add-student"
//                   className="block text-blue-500 font-semibold hover:text-blue-700 transition"
//                 >
//                   Add Student
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/teacher-dashboard/manage-students"
//                   className="block text-blue-500 font-semibold hover:text-blue-700 transition"
//                 >
//                   Manage Students
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/teacher-dashboard/view-students"
//                   className="block text-blue-500 font-semibold hover:text-blue-700 transition"
//                 >
//                   View Report Card
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/teacher-dashboard/upload"
//                   className="block text-blue-500 font-semibold hover:text-blue-700 transition"
//                 >
//                   Upload Excel File
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 p-6 lg:ml-30 flex items-center justify-center">
//           <div className="w-full max-w-4xl">
//             <Outlet />
//           </div>
//         </main>
//       </div>

//       {/* Footer */}
//       <footer className="bg-blue-900 text-white py-6">
//         <div className="container mx-auto text-center text-sm">
//           © 2024 ReportCardGen. All rights reserved.
//         </div>
//       </footer>

//       {/* Overlay for Sidebar on Mobile */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
//           onClick={toggleSidebar}
//         ></div>
//       )}
//     </div>
//   );
// };

// export default TeacherDashboard;



import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaHome, FaUserPlus, FaUsers, FaFileExcel, FaEye } from 'react-icons/fa'; // Import icons

const TeacherDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <header className="bg-white-900 text-black shadow-md flex items-center justify-between">
       
         
        <button
          onClick={toggleSidebar}
          className="text-white lg:hidden focus:outline-none"
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
      </header>

      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out bg-blue-100 shadow-lg w-64 z-50`}
        >
          <nav className="p-4 text-b">
            <ul className="space-y-6">
              <li>
                <Link
                  to="/teacher-dashboard"
                  onClick={toggleSidebar}
                  className="block text-blue-500 font-semibold hover:text-blue-700 transition"
                >
                  <FaHome />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/teacher-dashboard/add-student"
                  onClick={toggleSidebar}
                  className="block text-blue-500 font-semibold hover:text-blue-700 transition"
                >
                  <FaUserPlus />
                  <span>Add Student</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/teacher-dashboard/manage-students"
                  onClick={toggleSidebar}
                  className="block text-blue-500 font-semibold hover:text-blue-700 transition"
                >
                  <FaUsers />
                  <span>Manage Students</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/teacher-dashboard/view-students"
                  onClick={toggleSidebar}
                  className="block text-blue-500 font-semibold hover:text-blue-700 transition"
                >
                  <FaEye />
                  <span>Download PDF</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/teacher-dashboard/upload"
                  onClick={toggleSidebar}
                  className="block text-blue-500 font-semibold hover:text-blue-700 transition"
                >
                  <FaFileExcel />
                  <span>Upload Excel File</span>
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1  lg:ml-50 flex items-center justify-center bg-white">
          <div className="w-full max-w-4xl bg-gray-100 p-6 rounded-lg shadow-md">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-4">
        <div className="container mx-auto text-center text-sm">
          © 2024 ReportCardGen. All rights reserved.
        </div>
      </footer>

      {/* Overlay for Sidebar on Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default TeacherDashboard;








// import React, { useState } from "react";
// import { Link, Outlet } from "react-router-dom";

// const TeacherDashboard = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">
//       {/* Navbar */}
//       <header className="bg-white shadow-md p-4 flex items-center justify-between">
//         <h1 className="text-blue-600 font-semibold text-xl">
//           Teacher Dashboard
//         </h1>
//         <button
//           onClick={toggleSidebar}
//           className="text-blue-500 lg:hidden focus:outline-none"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16m-7 6h7"
//             />
//           </svg>
//         </button>
//       </header>

//       <div className="flex flex-1">
//         {/* Sidebar */}
//         <aside
//           className={`fixed inset-y-0 left-0 transform ${
//             isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//           } lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out bg-white shadow-lg w-64 z-50`}
//         >
//           <nav className="p-4">
//             <ul className="space-y-4">
//               <li>
//                 <Link
//                   to="/teacher-dashboard"
//                   className="block text-blue-500 font-semibold hover:text-blue-700 transition"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/teacher-dashboard/add-student"
//                   className="block text-blue-500 font-semibold hover:text-blue-700 transition"
//                 >
//                   Add Student
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/teacher-dashboard/manage-students"
//                   className="block text-blue-500 font-semibold hover:text-blue-700 transition"
//                 >
//                   Manage Students
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/teacher-dashboard/view-students"
//                   className="block text-blue-500 font-semibold hover:text-blue-700 transition"
//                 >
//                   View Report Card
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/teacher-dashboard/upload"
//                   className="block text-blue-500 font-semibold hover:text-blue-700 transition"
//                 >
//                   Upload Excel File
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 p-6 lg:ml-64">
//           <div className="w-full max-w-4xl mx-auto">
//             <Outlet />
//           </div>
//         </main>
//       </div>

//       {/* Footer */}
//       <footer className="bg-blue-900 text-white py-4">
//         <div className="container mx-auto text-center text-sm">
//           © 2024 ReportCardGen. All rights reserved.
//         </div>
//       </footer>

//       {/* Overlay for Sidebar on Mobile */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
//           onClick={toggleSidebar}
//         ></div>
//       )}
//     </div>
//   );
// };

// export default TeacherDashboard;


// main
// import React, { useState } from "react";
// import { Link, Outlet } from "react-router-dom";
// import Navbar from "./Navbar"; // Import the Navbar component
// import Footer from "../LandingPage/Footer";

// const TeacherDashboard = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">
//       {/* Navbar */}
      // <Navbar toggleSidebar={toggleSidebar} />

//       <div className="flex flex-1">
//         {/* Sidebar */}
//         <aside
//           className={`fixed inset-y-0 left-0 transform ${
//             isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//           } lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out bg-white shadow-lg w-64 z-50`}
//         >
//           <nav className="p-4">
//             <ul className="space-y-4">
//               <li>
//                 <Link
//                   to="/teacher-dashboard"
//                   className="block text-blue-500 font-semibold hover:text-blue-700 transition"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/teacher-dashboard/add-student"
//                   className="block text-blue-500 font-semibold hover:text-blue-700 transition"
//                 >
//                   Add Student
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/teacher-dashboard/manage-students"
//                   className="block text-blue-500 font-semibold hover:text-blue-700 transition"
//                 >
//                   Manage Students
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/teacher-dashboard/view-students"
//                   className="block text-blue-500 font-semibold hover:text-blue-700 transition"
//                 >
//                   View Report Card
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/teacher-dashboard/upload"
//                   className="block text-blue-500 font-semibold hover:text-blue-700 transition"
//                 >
//                   Upload Excel File
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 p-6 lg:ml-30">
//           <div className="w-full max-w-4xl mx-auto">
//             <Outlet />
//           </div>
//         </main>
//       </div>

//       {/* Footer */}
//       <footer className="bg-blue-900 text-white py-4">
//         <div className="container mx-auto text-center text-sm">
//           <Footer/>
//         </div>
//       </footer>

//       {/* Overlay for Sidebar on Mobile */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
//           onClick={toggleSidebar}
//         ></div>
//       )}
//     </div>
//   );
// };

// export default TeacherDashboard;













// // main main
// import React, { useState, useEffect } from "react";
// import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
// import Navbar from "./Navbar"; // Import the Navbar component

// const TeacherDashboard = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation(); // Get the current route
//   const userName = localStorage.getItem('name');  // Get the user's name from localStorage
//   const userEmail = localStorage.getItem('email');  
//   // Prevent back navigation
//   useEffect(() => {
//     const handleBackButton = (event) => {
//       event.preventDefault();
//       navigate("/teacher-dashboard"); // Redirect back to the same page
//     };

//     window.history.pushState(null, null, window.location.href);
//     window.addEventListener("popstate", handleBackButton);

//     return () => {
//       window.removeEventListener("popstate", handleBackButton);
//     };
//   }, [navigate]);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   // Check if the link is active
//   const isActive = (path) => location.pathname === path;

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">
//       {/* Navbar */}
//       <Navbar toggleSidebar={toggleSidebar} />

//       <div className="flex flex-1">
//         {/* Sidebar */}
//         <aside
//           className={`fixed inset-y-0 left-0 transform ${
//             isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//           } lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out bg-blue-900  w-64 z-10`}
//           style={{
//             backdropFilter: "blur(10px)",
//              // Blur effect
//           }}
//         >
//           <nav className="p-4">
//             <ul className="space-y-4">
//               <li>
//                 <Link
//                   to="/teacher-dashboard"
//                   className={`block text-white font-semibold transition ${
//                     isActive("/teacher-dashboard")
//                       ? "bg-[#00BFFF] text-blue-900 rounded-lg px-4 py-2"
//                       : "hover:text-blue-700"
//                   }`}
//                 >
//                  Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/teacher-dashboard/add-student"
//                   onClick={toggleSidebar}
//                   className={`block text-white font-semibold transition ${
//                     isActive("/teacher-dashboard/add-student")
//                       ? "bg-[#00BFFF] text-blue-900 rounded-lg px-4 py-2"
//                       : "hover:text-blue-700"
//                   }`}
//                 >
//                   Add Student
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/teacher-dashboard/manage-students"
//                   className={`block text-white font-semibold transition ${
//                     isActive("/teacher-dashboard/manage-students")
//                       ? "bg-[#00BFFF] text-blue-900 rounded-lg px-4 py-2"
//                       : "hover:text-blue-700"
//                   }`}
//                 >
//                   Manage Students
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/teacher-dashboard/view-students"
//                   className={`block text-white font-semibold transition ${
//                     isActive("/teacher-dashboard/view-students")
//                       ? "bg-[#00BFFF] text-blue-900 rounded-lg px-4 py-2"
//                       : "hover:text-blue-700"
//                   }`}
//                 >
//                   View Report Card
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/teacher-dashboard/upload"
//                   className={`block text-white font-semibold transition ${
//                     isActive("/teacher-dashboard/upload")
//                       ? "bg-[#00BFFF] text-blue-900 rounded-lg px-4 py-2"
//                       : "hover:text-blue-700"
//                   }`}
//                 >
//                   Upload Excel File
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 p-6 lg:ml-30">
//           <div className="w-full max-w-4xl mx-auto">
//             <Outlet />
//           </div>
//         </main>
//       </div>
//    {/* Profile Section - Display User Info */}
//    <div className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-lg flex justify-between items-center z-20">
//         <div className="flex items-center space-x-2">
//           <img
//             src="https://www.w3schools.com/w3images/avatar2.png" // Placeholder profile icon
//             alt="Profile"
//             className="w-8 h-8 rounded-full"
//           />
//           <div>
//             <p className="text-sm font-semibold">{userName}</p>
//             <p className="text-xs text-black">{userEmail}</p>
//           </div>
//         </div>
//       </div>
    

//       {/* Overlay for Sidebar on Mobile */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
//           onClick={toggleSidebar}
//         ></div>
//       )}
//     </div>
//   );
// };

// export default TeacherDashboard;




// import React, { useState, useEffect } from "react";
// import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
// import Navbar from "./Navbar"; // Import the Navbar component

// const TeacherDashboard = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation(); // Get the current route
//   const userName = localStorage.getItem('name');  // Get the user's name from localStorage
//   const userEmail = localStorage.getItem('email');  

//   // Prevent back navigation
//   useEffect(() => {
//     const handleBackButton = (event) => {
//       event.preventDefault();
//       navigate("/teacher-dashboard"); // Redirect back to the same page
//     };

//     window.history.pushState(null, null, window.location.href);
//     window.addEventListener("popstate", handleBackButton);

//     return () => {
//       window.removeEventListener("popstate", handleBackButton);
//     };
//   }, [navigate]);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   // Check if the link is active
//   const isActive = (path) => location.pathname === path;

//   // Close sidebar when a link is clicked
//   const handleLinkClick = () => {
//     setIsSidebarOpen(false);
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">
//       {/* Navbar */}
//       <Navbar toggleSidebar={toggleSidebar} />

//       <div className="flex flex-1">
//         {/* Sidebar */}
//         <aside
//           className={`fixed inset-y-0 left-0 transform ${
//             isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//           } lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out bg-blue-800 w-64`}
//           style={{
//             backdropFilter: "blur(10px)",
//           }}
//         >
//           <nav className="p-4">
//             <ul className="space-y-4">
//               <li>
//                 <Link
//                   to="/teacher-dashboard"
//                   className={`block text-white font-semibold transition ${
//                     isActive("/teacher-dashboard")
//                       ? "bg-[#00BFFF] text-blue-900 rounded-lg px-4 py-2"
//                       : "hover:text-blue-700"
//                   }`}
//                   onClick={handleLinkClick} // Close sidebar on link click
//                 >
//                   <i className="fas fa-home"></i> Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/teacher-dashboard/add-student"
//                   className={`block text-white font-semibold transition ${
//                     isActive("/teacher-dashboard/add-student")
//                       ? "bg-[#00BFFF] text-blue-900 rounded-lg px-4 py-2"
//                       : "hover:text-blue-700"
//                   }`}
//                   onClick={handleLinkClick} // Close sidebar on link click
//                 >
//                   Add Student
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/teacher-dashboard/manage-students"
//                   className={`block text-white font-semibold transition ${
//                     isActive("/teacher-dashboard/manage-students")
//                       ? "bg-[#00BFFF] text-blue-900 rounded-lg px-4 py-2"
//                       : "hover:text-blue-700"
//                   }`}
//                   onClick={handleLinkClick} // Close sidebar on link click
//                 >
//                   Manage Students
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/teacher-dashboard/view-students"
//                   className={`block text-white font-semibold transition ${
//                     isActive("/teacher-dashboard/view-students")
//                       ? "bg-[#00BFFF] text-blue-900 rounded-lg px-4 py-2"
//                       : "hover:text-blue-700"
//                   }`}
//                   onClick={handleLinkClick} // Close sidebar on link click
//                 >
//                   View Report Card
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/teacher-dashboard/upload"
//                   className={`block text-white font-semibold transition ${
//                     isActive("/teacher-dashboard/upload")
//                       ? "bg-[#00BFFF] text-blue-900 rounded-lg px-4 py-2"
//                       : "hover:text-blue-700"
//                   }`}
//                   onClick={handleLinkClick} // Close sidebar on link click
//                 >
//                   Upload Excel File
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 p-6 lg:ml-30">
//           <div className="w-full max-w-4xl mx-auto">
//             <Outlet />
//           </div>
//         </main>
//       </div>

//       {/* Profile Section - Display User Info */}
//       <div className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-lg flex justify-between items-center">
//         <div className="flex items-center space-x-2">
//           <img
//             src="https://www.w3schools.com/w3images/avatar2.png" // Placeholder profile icon
//             alt="Profile"
//             className="w-8 h-8 rounded-full"
//           />
//           <div>
//             <p className="text-sm font-semibold">{userName}</p>
//             <p className="text-xs text-black">{userEmail}</p>
//           </div>
//         </div>
//       </div>

//       {/* Overlay for Sidebar on Mobile */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
//           onClick={toggleSidebar}
//         ></div>
//       )}
//     </div>
//   );
// };

// export default TeacherDashboard;







// import React, { useState } from "react";
// import { Link, Outlet } from "react-router-dom";
// import Navbar from "./Navbar"; // Import the Navbar component
// import Footer from "../LandingPage/Footer";

// const TeacherDashboard = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="h-screen bg-white">
//       {/* Sidebar */}
//       <aside className="fixed inset-y-0 left-0 bg-white shadow-lg w-64 z-50">
//         <nav className="p-4 h-full">
//           <ul className="space-y-4">
//             <li>
//               <Link
//                 to="/teacher-dashboard"
//                 className="block text-blue-500 font-semibold hover:text-blue-700 transition"
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/teacher-dashboard/add-student"
//                 className="block text-blue-500 font-semibold hover:text-blue-700 transition"
//               >
//                 Add Student
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/teacher-dashboard/manage-students"
//                 className="block text-blue-500 font-semibold hover:text-blue-700 transition"
//               >
//                 Manage Students
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/teacher-dashboard/view-students"
//                 className="block text-blue-500 font-semibold hover:text-blue-700 transition"
//               >
//                 View Report Card
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/teacher-dashboard/upload"
//                 className="block text-blue-500 font-semibold hover:text-blue-700 transition"
//               >
//                 Upload Excel File
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </aside>

//       {/* Main Layout */}
//       <div className="flex flex-col flex-1 ml-64">
//         {/* Navbar */}
//         <header className="fixed top-0 left-64 right-0 bg-blue-900 text-white z-50 shadow">
//           <Navbar toggleSidebar={toggleSidebar} />
//         </header>

//         {/* Main Content */}
//         <main className="flex-1 overflow-y-auto pt-16 px-6 mt-10">
//           <div className="w-full max-w-4xl mx-auto">
//             <Outlet />
//           </div>
//         </main>

//         {/* Footer */}
//         <div className="bg-blue-900 left-64 text-white">
//           <div className="container mx-auto text-center text-sm py-2 px-2">
//             <Footer />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeacherDashboard;
