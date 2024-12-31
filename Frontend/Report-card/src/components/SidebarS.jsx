// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaHome } from 'react-icons/fa';
// import { BsCheckLg } from 'react-icons/bs';
// import { RxCross2 } from 'react-icons/rx';
// import { MdOutlinePendingActions } from 'react-icons/md';

// const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
//   return (
//     <aside
//       className={`fixed inset-y-0 left-0 transform ${
//         isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//       } lg:translate-x-0 transition-transform duration-300 ease-in-out bg-blue-100 shadow-lg w-64 z-50`}
//     >
//       <nav className="p-4">
//         <ul className="space-y-6">
//           <li>
//             <Link
//               to="/superadmin-dashboard"
//               className="flex items-center space-x-3 text-black hover:text-blue-900 transition"
//             >
//               <FaHome />
//               <span>Home</span>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/superadmin-dashboard/pending-requests"
//               className="flex items-center space-x-3 text-black hover:text-blue-900 transition"
//             >
//               <MdOutlinePendingActions />
//               <span>Pending Requests</span>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/superadmin-dashboard/accept-requests"
//               className="flex items-center space-x-3 text-black hover:text-blue-900 transition"
//             >
//               <BsCheckLg />
//               <span>Accepted Requests</span>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/superadmin-dashboard/users"
//               className="flex items-center space-x-3 text-black hover:text-blue-900 transition"
//             >
//               <RxCross2 />
//               <span>Rejected Requests</span>
//             </Link>
//           </li>
          
//         </ul>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;




import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { BsCheckLg } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';
import { MdOutlinePendingActions } from 'react-icons/md';
import { FaChalkboardTeacher } from 'react-icons/fa'; // Icon for Teacher Dashboard

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <aside
      className={`fixed inset-y-0 left-0 transform ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 transition-transform duration-300 ease-in-out bg-blue-100 shadow-lg w-64 z-50`}
    >
      <nav className="p-4">
        <ul className="space-y-6">
          <li>
            <NavLink
              to="/superadmin-dashboard"
              end // Ensures this link is active only when the exact route is "/superadmin-dashboard"
              className={({ isActive }) =>
                `flex items-center space-x-3 ${
                  isActive ? 'text-blue-900 font-bold' : 'text-black'
                } hover:text-blue-900 transition`
              }
            >
              <FaHome />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/superadmin-dashboard/pending-requests"
              className={({ isActive }) =>
                `flex items-center space-x-3 ${
                  isActive ? 'text-blue-900 font-bold' : 'text-black'
                } hover:text-blue-900 transition`
              }
            >
              <MdOutlinePendingActions />
              <span>Pending Requests</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/superadmin-dashboard/accept-requests"
              className={({ isActive }) =>
                `flex items-center space-x-3 ${
                  isActive ? 'text-blue-900 font-bold' : 'text-black'
                } hover:text-blue-900 transition`
              }
            >
              <BsCheckLg />
              <span>Accepted Requests</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/superadmin-dashboard/users"
              className={({ isActive }) =>
                `flex items-center space-x-3 ${
                  isActive ? 'text-blue-900 font-bold' : 'text-black'
                } hover:text-blue-900 transition`
              }
            >
              <RxCross2 />
              <span>Rejected Requests</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/teacher-dashboard"
              className={({ isActive }) =>
                `flex items-center space-x-3 ${
                  isActive ? 'text-blue-900 font-bold' : 'text-black'
                } hover:text-blue-900 transition`
              }
            >
              <FaChalkboardTeacher />
              <span>Teacher Dashboard</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
