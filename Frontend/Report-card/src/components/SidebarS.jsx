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




import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { FaHome, FaChalkboardTeacher } from 'react-icons/fa';
import { BsCheckLg } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';
import { MdOutlinePendingActions } from 'react-icons/md';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { AiOutlineUserAdd, AiOutlineUsergroupAdd, AiOutlineFilePdf } from 'react-icons/ai';
import { FiUpload, FiSend } from 'react-icons/fi';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [pendingRequestCount, setPendingRequestCount] = useState(0);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // const [pendingRequestCount, setPendingRequestCount] = useState(0);

  // Function to fetch the pending request count
  const fetchPendingRequestCount = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/superadmin/pending-request-count"
      );
      setPendingRequestCount(response.data.count);
    } catch (error) {
      console.error("Error fetching pending request count:", error);
    }
  };

  // UseEffect to fetch the count on component mount
  useEffect(() => {
    fetchPendingRequestCount();
  }, []);

  // Callback to refresh the count after accepting/rejecting requests
  const handleRequestAction = async () => {
    await fetchPendingRequestCount();
  };

  return (
    <aside
      className={`fixed inset-y-0 left-0 transform ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 transition-transform duration-300 ease-in-out bg-blue-100 shadow-lg w-64 full-[100vh] z-50`}
    >
      <nav className="p-4  mt-5">
        <ul className="space-y-6">
          <li>
            <NavLink
              to="/superadmin-dashboard"
              end
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
              onClick={() => {
                // navigate("/superadmin-dashboard/users");
                handleRequestAction();
              }}
              className={({ isActive }) =>
                `flex items-center justify-between ${
                  isActive ? 'text-blue-900 font-bold' : 'text-black'
                } hover:text-blue-900 transition`
              }
            >
              <div className="flex items-center space-x-3">
                <MdOutlinePendingActions />
                <span>Pending Requests  ({pendingRequestCount})</span>
              </div>
             
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
            <div
              className="flex items-center justify-between cursor-pointer hover:text-blue-900 transition"
              onClick={toggleDropdown}
            >
              <div className="flex items-center space-x-3">
                <FaChalkboardTeacher />
                <span>Teacher Dashboard</span>
              </div>
              {isDropdownOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </div>
            {isDropdownOpen && (
              <ul className="ml-8 mt-2 space-y-4">
                <li>
                  <NavLink
                    to="/superadmin-dashboard/dash"
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
                    to="/superadmin-dashboard/add-student"
                    className={({ isActive }) =>
                      `flex items-center space-x-3 ${
                        isActive ? 'text-blue-900 font-bold' : 'text-black'
                      } hover:text-blue-900 transition`
                    }
                  >
                    <AiOutlineUserAdd />
                    <span>Add Student</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/superadmin-dashboard/manage-students"
                    className={({ isActive }) =>
                      `flex items-center space-x-3 ${
                        isActive ? 'text-blue-900 font-bold' : 'text-black'
                      } hover:text-blue-900 transition`
                    }
                  >
                    <AiOutlineUsergroupAdd />
                    <span>Manage Students</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/superadmin-dashboard/view-students"
                    className={({ isActive }) =>
                      `flex items-center space-x-3 ${
                        isActive ? 'text-blue-900 font-bold' : 'text-black'
                      } hover:text-blue-900 transition`
                    }
                  >
                    <AiOutlineFilePdf />
                    <span>Download PDF</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/superadmin-dashboard/upload"
                    className={({ isActive }) =>
                      `flex items-center space-x-3 ${
                        isActive ? 'text-blue-900 font-bold' : 'text-black'
                      } hover:text-blue-900 transition`
                    }
                  >
                    <FiUpload />
                    <span>Upload PDF</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/superadmin-dashboard/history"
                    className={({ isActive }) =>
                      `flex items-center space-x-3 ${
                        isActive ? 'text-blue-900 font-bold' : 'text-black'
                      } hover:text-blue-900 transition`
                    }
                  >
                    <FiSend />
                    <span>Send History</span>
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
