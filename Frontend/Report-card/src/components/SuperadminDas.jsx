// // main
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function SuperadminDas() {
//   const [pendingTeachers, setPendingTeachers] = useState([]);

//   useEffect(() => {
//     const fetchPendingTeachers = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/superadmin/pending-teacher-requests');
//         setPendingTeachers(response.data);
//       } catch (error) {
//         console.error('Error fetching teacher requests', error);
//       }
//     };
  
//     fetchPendingTeachers();
//   }, []);
  

//   const handleUpdateStatus = async (teacherId, status) => {
//     try {
//       if (status === 'Accepted') {
//         await axios.put(`http://localhost:5000/api/superadmin/approve/${teacherId}`);
//       } else {
//         await axios.put(`http://localhost:5000/api/superadmin/reject/${teacherId}`);
//       }
//       setPendingTeachers(pendingTeachers.filter((teacher) => teacher._id !== teacherId));
//     } catch (error) {
//       console.error('Error updating teacher status', error);
//     }
//   };
  

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
//       <h2 className="text-3xl font-bold mb-8 text-center">Super Admin Dashboard</h2>
//       <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl">
//         <h3 className="text-xl font-semibold mb-4">Pending Teacher Requests</h3>
//         <ul className="divide-y divide-gray-200">
//           {pendingTeachers.length === 0 ? (
//             <p className="text-gray-500 text-center">No pending teacher requests</p>
//           ) : (
//             pendingTeachers.map((teacher) => (
//               <li key={teacher._id} className="py-4 flex justify-between items-center">
//                 <div>
//                   <p className="text-lg font-medium">{teacher.name}</p>
//                   <p className="text-gray-500">{teacher.email}</p>
//                   <p className="text-gray-700">Status: {teacher.status}</p>
//                 </div>
//                 <div className="flex space-x-4">
//                   <button
//                     onClick={() => handleUpdateStatus(teacher._id, 'Accepted')}
//                     className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
//                   >
//                     Accept
//                   </button>
//                   <button
//                     onClick={() => handleUpdateStatus(teacher._id, 'Rejected')}
//                     className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
//                   >
//                     Reject
//                   </button>
//                 </div>
//               </li>
//             ))
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default SuperadminDas;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link, Outlet } from 'react-router-dom';

// function SuperadminDas() {
//   const [pendingTeachers, setPendingTeachers] = useState([]);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   // Fetch pending teachers on component mount
//   useEffect(() => {
//     const fetchPendingTeachers = async () => {
//       try {
//         const response = await axios.get(
//           'http://localhost:5000/api/superadmin/pending-teacher-requests'
//         );
//         setPendingTeachers(response.data);
//       } catch (error) {
//         console.error('Error fetching teacher requests', error);
//       }
//     };

//     fetchPendingTeachers();
//   }, []);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const handleUpdateStatus = async (teacherId, status) => {
//     try {
//       if (status === 'Accepted') {
//         await axios.put(`http://localhost:5000/api/superadmin/approve/${teacherId}`);
//       } else {
//         await axios.put(`http://localhost:5000/api/superadmin/reject/${teacherId}`);
//       }
//       setPendingTeachers(pendingTeachers.filter((teacher) => teacher._id !== teacherId));
//     } catch (error) {
//       console.error('Error updating teacher status', error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col">
//       {/* Navbar */}
//       <header className="bg-white shadow-md p-4 flex items-center justify-between">
//         <h1 className="text-blue-500 font-semibold text-lg">Super Admin Dashboard</h1>
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

//       {/* Sidebar and Main Content Wrapper */}
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
//                   to="/superadmin-dashboard"
//                   className="block text-blue-500 font-semibold hover:text-blue-700 transition"
//                 >
//                   Dashboard
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/superadmin-dashboard/pending-requests"
//                   className="block text-blue-500 font-semibold hover:text-blue-700 transition"
//                 >
//                   Pending Requests
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/superadmin-dashboard/users"
//                   className="block text-blue-500 font-semibold hover:text-blue-700 transition"
//                 >
//                   Manage Users
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 p-6 lg:ml-30 flex items-center justify-center bg-gray-50">
//           <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6">
//             <h3 className="text-xl font-semibold mb-4">Pending Teacher Requests</h3>
//             <ul className="divide-y divide-gray-200">
//               {pendingTeachers.length === 0 ? (
//                 <p className="text-gray-500 text-center">No pending teacher requests</p>
//               ) : (
//                 pendingTeachers.map((teacher) => (
//                   <li
//                     key={teacher._id}
//                     className="py-4 flex justify-between items-center"
//                   >
//                     <div>
//                       <p className="text-lg font-medium">{teacher.name}</p>
//                       <p className="text-gray-500">{teacher.email}</p>
//                       <p className="text-gray-700">Status: {teacher.status}</p>
//                     </div>
//                     <div className="flex space-x-4">
//                       <button
//                         onClick={() => handleUpdateStatus(teacher._id, 'Accepted')}
//                         className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
//                       >
//                         Accept
//                       </button>
//                       <button
//                         onClick={() => handleUpdateStatus(teacher._id, 'Rejected')}
//                         className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
//                       >
//                         Reject
//                       </button>
//                     </div>
//                   </li>
//                 ))
//               )}
//             </ul>
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

//       {/* Footer */}
//       <footer className="bg-blue-900 text-white py-4">
//         <div className="container mx-auto text-center text-sm">
//           © 2024 ReportCardGen. All rights reserved.
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default SuperadminDas;


// // mainnnnnnnnnnnnnnnnnnnnnnnnnnnnn
// import React, { useState } from 'react';
// import { Link, Outlet } from 'react-router-dom';
// import { FaHome, FaTasks, FaUsers, FaUserShield, FaFileExcel } from 'react-icons/fa'; // Import icons
// import { BsCheckLg } from "react-icons/bs";
// import { RxCross2 } from "react-icons/rx";
// import { MdOutlinePendingActions } from "react-icons/md";

// import Navbar from './Navbar';

// const SuperAdminDas= () => {
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
//         {/* Sidebar */}
//         <aside
//           className={`fixed inset-y-0 left-0 transform ${
//             isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//           } lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out bg-blue-100 shadow-lg w-64 z-50`}
//         >
//           <nav className="p-4">
//             <ul className="space-y-6">
//               <li>
//                 <Link
//                   to="/superadmin-dashboard"
//                   className="flex items-center space-x-3 text-black hover:text-blue-900 transition"
//                 >
//                   <FaHome />
//                   <span>Home</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/superadmin-dashboard/pending-requests"
//                   className="flex items-center space-x-3 text-black hover:text-blue-900 transition"
//                 >
// <MdOutlinePendingActions />
// <span>Pending Requests</span>
//                 </Link>
//               </li>
              
//               <li>
//                 <Link
//                   to="/superadmin-dashboard/accept-requests"
//                   className="flex items-center space-x-3 text-black hover:text-blue-900 transition"
//                 >
//                 <BsCheckLg />
//                   <span>Accepted Requests</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/superadmin-dashboard/users"
//                   className="flex items-center space-x-3 text-black hover:text-blue-900 transition"
//                 >
// <RxCross2 />                  <span>Rejected Requests</span>
//                 </Link>
//               </li>
       
//             </ul>
//           </nav>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 lg:ml-50 flex items-center justify-center bg-[#fcfcfc]">
//           <div className="w-full max-w-6xl p-6 rounded-lg">
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

// export default SuperAdminDas;



import React from 'react'
import Layout from './LayoutS'

const SuperadminDas = () => {
  return (
    // <div>SuperadminDas</div>
    <Layout/>
  )
}

export default SuperadminDas