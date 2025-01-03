// import React from "react";
// import { NavLink } from "react-router-dom";
// import { FaHome, FaUserPlus, FaUsers, FaFileExcel, FaEye } from "react-icons/fa";

// const Sidebar = ({ isSidebarOpen, toggleSidebar }) => (
//   <aside
//     className={`fixed top-0 left-0 h-screen transform overflow-y-auto ${
//       isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//     } lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out bg-blue-100 shadow-lg w-64 z-50`}
//   >
//     <nav className="p-4 text-black">
//       <ul className="space-y-6">
//         <li>
//           <NavLink
//             to="/teacher-dashboard"
//             className={({ isActive }) =>
//               `flex items-center space-x-3 ${
//                 isActive ? "text-blue-900 font-bold" : "text-black"
//               } hover:text-blue-900 transition`
//             }
//             end
//           >
//             <FaHome />
//             <span>Home</span>
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/teacher-dashboard/add-student"
//             className={({ isActive }) =>
//               `flex items-center space-x-3 ${
//                 isActive ? "text-blue-900 font-bold" : "text-black"
//               } hover:text-blue-900 transition`
//             }
//           >
//             <FaUserPlus />
//             <span>Add Student</span>
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/teacher-dashboard/manage-students"
//             className={({ isActive }) =>
//               `flex items-center space-x-3 ${
//                 isActive ? "text-blue-900 font-bold" : "text-black"
//               } hover:text-blue-900 transition`
//             }
//           >
//             <FaUsers />
//             <span>Manage Students</span>
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/teacher-dashboard/view-students"
//             className={({ isActive }) =>
//               `flex items-center space-x-3 ${
//                 isActive ? "text-blue-900 font-bold" : "text-black"
//               } hover:text-blue-900 transition`
//             }
//           >
//             <FaEye />
//             <span>Download PDF</span>
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/teacher-dashboard/upload"
//             className={({ isActive }) =>
//               `flex items-center space-x-3 ${
//                 isActive ? "text-blue-900 font-bold" : "text-black"
//               } hover:text-blue-900 transition`
//             }
//           >
//             <FaFileExcel />
//             <span>Upload Excel File</span>
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   </aside>
// );

// export default Sidebar;












import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUserPlus, FaUsers, FaFileExcel, FaEye } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { FaHistory } from "react-icons/fa";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => (
  <aside
    className={`fixed top-0 left-0 h-screen transform overflow-y-auto lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out bg-blue-100 shadow-lg w-64 ${
      isSidebarOpen ? "translate-x-0" : "-translate-x-full"
    }`}
  >
    <nav className="p-4 text-black mt-5">
      <ul className="space-y-6">
      <li>
          <NavLink
            to="/teacher-dashboard"
            className={({ isActive }) =>
              `flex items-center space-x-3 ${
                isActive ? "text-blue-900 font-bold" : "text-black"
              } hover:text-blue-900 transition`
            }
            end
            onClick={() => toggleSidebar()}  // Close sidebar on click
          >
<MdDashboardCustomize />
<span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/teacher-dashboard/home"
            className={({ isActive }) =>
              `flex items-center space-x-3 ${
                isActive ? "text-blue-900 font-bold" : "text-black"
              } hover:text-blue-900 transition`
            }
            end
            onClick={() => toggleSidebar()}  // Close sidebar on click
          >
            <FaHome />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/teacher-dashboard/add-student"
            className={({ isActive }) =>
              `flex items-center space-x-3 ${
                isActive ? "text-blue-900 font-bold" : "text-black"
              } hover:text-blue-900 transition`
            }
            onClick={() => toggleSidebar()}  // Close sidebar on click
          >
            <FaUserPlus />
            <span>Add Student</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/teacher-dashboard/manage-students"
            className={({ isActive }) =>
              `flex items-center space-x-3 ${
                isActive ? "text-blue-900 font-bold" : "text-black"
              } hover:text-blue-900 transition`
            }
            onClick={() => toggleSidebar()}  // Close sidebar on click
          >
            <FaUsers />
            <span>Manage Students</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/teacher-dashboard/view-students"
            className={({ isActive }) =>
              `flex items-center space-x-3 ${
                isActive ? "text-blue-900 font-bold" : "text-black"
              } hover:text-blue-900 transition`
            }
            onClick={() => toggleSidebar()}  // Close sidebar on click
          >
            <FaEye />
            <span>Download PDF</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/teacher-dashboard/upload"
            className={({ isActive }) =>
              `flex items-center space-x-3 ${
                isActive ? "text-blue-900 font-bold" : "text-black"
              } hover:text-blue-900 transition`
            }
            onClick={() => toggleSidebar()}  // Close sidebar on click
          >
            <FaFileExcel />
            <span>Upload Excel File</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/teacher-dashboard/history"
            className={({ isActive }) =>
              `flex items-center space-x-3 ${
                isActive ? "text-blue-900 font-bold" : "text-black"
              } hover:text-blue-900 transition`
            }
            onClick={() => toggleSidebar()}  // Close sidebar on click
          >
<FaHistory />
<span>Send History</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;




// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { FaHome, FaUserPlus, FaUsers, FaFileExcel, FaEye } from 'react-icons/fa';

// const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
//   return (
//     <aside
//       className={`fixed inset-y-0 left-0 transform ${
//         isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//       } lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out bg-blue-100 shadow-lg w-64 z-50`}
//     >
//       <nav className="p-4">
//         <ul className="space-y-6">
//           <li>
//             <NavLink
//               to="/teacher-dashboard"
//               className={({ isActive }) =>
//                 `flex items-center space-x-3 ${
//                   isActive ? 'text-blue-900 font-bold' : 'text-black'
//                 } hover:text-blue-900 transition`
//               }
//               end
//             >
//               <FaHome />
//               <span>Home</span>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/teacher-dashboard/add-student"
//               className={({ isActive }) =>
//                 `flex items-center space-x-3 ${
//                   isActive ? 'text-blue-900 font-bold' : 'text-black'
//                 } hover:text-blue-900 transition`
//               }
//             >
//               <FaUserPlus />
//               <span>Add Student</span>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/teacher-dashboard/manage-students"
//               className={({ isActive }) =>
//                 `flex items-center space-x-3 ${
//                   isActive ? 'text-blue-900 font-bold' : 'text-black'
//                 } hover:text-blue-900 transition`
//               }
//             >
//               <FaUsers />
//               <span>Manage Students</span>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/teacher-dashboard/view-students"
//               className={({ isActive }) =>
//                 `flex items-center space-x-3 ${
//                   isActive ? 'text-blue-900 font-bold' : 'text-black'
//                 } hover:text-blue-900 transition`
//               }
//             >
//               <FaEye />
//               <span>Download PDF</span>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/teacher-dashboard/upload"
//               className={({ isActive }) =>
//                 `flex items-center space-x-3 ${
//                   isActive ? 'text-blue-900 font-bold' : 'text-black'
//                 } hover:text-blue-900 transition`
//               }
//             >
//               <FaFileExcel />
//               <span>Upload Excel File</span>
//             </NavLink>
//           </li>
//         </ul>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;
