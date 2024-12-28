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


// mainnnnnnnnnnnnnnnnnnnnnnnnn
// import React, { useState } from 'react';
// import { Link, Outlet } from 'react-router-dom';
// import { FaHome, FaUserPlus, FaUsers, FaFileExcel, FaEye } from 'react-icons/fa'; // Import icons
// import Navbar from './Navbar'
// const TeacherDashboard = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       {/* Navbar */}
//       <header className="bg-white-900 text-black shadow-md flex items-center justify-between">
       
         
//         <button
//           onClick={toggleSidebar}
//           className="text-white lg:hidden focus:outline-none"
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

//       <Navbar toggleSidebar={toggleSidebar} />
//       <div className="flex flex-1">

//         <aside
//           className={`fixed inset-y-0 left-0 transform ${
//             isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//           } lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out bg-blue-100 shadow-lg w-64 z-50`}
//         >
//           <nav className="p-4 text-b">
//             <ul className="space-y-6">
//               <li>
//                 <Link
//                   to="/teacher-dashboard"
//                   className="flex items-center space-x-3 text-black hover:text-blue-900 transition"
//                 >
//                   <FaHome />
//                   <span>Home</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/teacher-dashboard/add-student"
//                   className="flex items-center space-x-3 text-black hover:text-blue-900 transition"
//                 >
//                   <FaUserPlus />
//                   <span>Add Student</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/teacher-dashboard/manage-students"
//                   className="flex items-center space-x-3 text-black hover:text-blue-900 transition"
//                 >
//                   <FaUsers />
//                   <span>Manage Students</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/teacher-dashboard/view-students"
//                   className="flex items-center space-x-3 text-black hover:text-blue-900 transition"
//                 >
//                   <FaEye />
//                   <span>Download PDF</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/teacher-dashboard/upload"
//                   className="flex items-center space-x-3 text-black hover:text-blue-900 transition"
//                 >
//                   <FaFileExcel />
//                   <span>Upload Excel File</span>
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </aside>

   
//         <main className="flex-1  lg:ml-50 flex items-center justify-center bg-[#fcfcfc]">
//           <div className="w-full max-w-4xl  p-6 rounded-lg ">
//             <Outlet />
//           </div>
//         </main>
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




// // mainnnnnnnnnnnnnnnnnnn

// import React, { useState } from 'react';
// import { NavLink, Outlet } from 'react-router-dom';
// import { FaHome, FaUserPlus, FaUsers, FaFileExcel, FaEye } from 'react-icons/fa'; // Import icons
// import Navbar from './Navbar';
// import Footer from '../LandingPage/Footer';

// const TeacherDashboard = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <>
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       {/* Navbar */}
//       <header className="bg-white-900 text-black shadow-md flex items-center justify-between">
//         <button
//           onClick={toggleSidebar}
//           className="text-white lg:hidden focus:outline-none"
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

//       <Navbar toggleSidebar={toggleSidebar} />
//       <div className="flex flex-1">
//         <aside
//           className={`fixed inset-y-0 left-0 transform ${
//             isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//           } lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out bg-blue-100 shadow-lg w-64 z-50`}
//         >
//           <nav className="p-4 text-b">
//             <ul className="space-y-6">
//               <li>
//                 <NavLink
//                   to="/teacher-dashboard"
//                   className={({ isActive }) =>
//                     `flex items-center space-x-3 ${
//                       isActive ? 'text-blue-900 font-bold' : 'text-black'
//                     } hover:text-blue-900 transition`
//                   }
//                   end
//                 >
//                   <FaHome />
//                   <span>Home</span>
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/teacher-dashboard/add-student"
//                   className={({ isActive }) =>
//                     `flex items-center space-x-3 ${
//                       isActive ? 'text-blue-900 font-bold' : 'text-black'
//                     } hover:text-blue-900 transition`
//                   }
//                 >
//                   <FaUserPlus />
//                   <span>Add Student</span>
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/teacher-dashboard/manage-students"
//                   className={({ isActive }) =>
//                     `flex items-center space-x-3 ${
//                       isActive ? 'text-blue-900 font-bold' : 'text-black'
//                     } hover:text-blue-900 transition`
//                   }
//                 >
//                   <FaUsers />
//                   <span>Manage Students</span>
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/teacher-dashboard/view-students"
//                   className={({ isActive }) =>
//                     `flex items-center space-x-3 ${
//                       isActive ? 'text-blue-900 font-bold' : 'text-black'
//                     } hover:text-blue-900 transition`
//                   }
//                 >
//                   <FaEye />
//                   <span>Download PDF</span>
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/teacher-dashboard/upload"
//                   className={({ isActive }) =>
//                     `flex items-center space-x-3 ${
//                       isActive ? 'text-blue-900 font-bold' : 'text-black'
//                     } hover:text-blue-900 transition`
//                   }
//                 >
//                   <FaFileExcel />
//                   <span>Upload Excel File</span>
//                 </NavLink>
//               </li>
//             </ul>
//           </nav>
//         </aside>

//         <main className="flex-1 lg:ml-50 flex items-center justify-center bg-[#fcfcfc]">
//           <div className="w-full max-w-4xl p-6 rounded-lg ">
//             <Outlet />
         
//           </div>
         
//         </main>
        

          
//       </div>

 
//       {/* Overlay for Sidebar on Mobile */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
//           onClick={toggleSidebar}
//         ></div>
//       )}
//     </div>
//               <Footer/>
//               </>
//   );
// };

// export default TeacherDashboard;

import React from "react";
// import { Outlet } from "react-router-dom";
import Layout from "./Layout";

const TeacherDashboard = () => (
  <Layout/>
    // {/* <Outlet /> */}
  
);

export default TeacherDashboard;


































