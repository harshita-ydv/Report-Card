import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const TeacherDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md p-4 mb-6">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link to="/teacher-dashboard" className="text-blue-500 font-semibold hover:text-blue-700 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/teacher-dashboard/add-student" className="text-blue-500 font-semibold hover:text-blue-700 transition">
              Add Student
            </Link>
          </li>
          <li>
            <Link to="/teacher-dashboard/manage-students" className="text-blue-500 font-semibold hover:text-blue-700 transition">
              Manage Students
            </Link>
          </li>
          <li>
            <Link to="/teacher-dashboard/view-students" className="text-blue-500 font-semibold hover:text-blue-700 transition">
              View Report Card
            </Link>
          </li>
        </ul>
      </nav>

      {/* Render Nested Routes */}
      <div className="container mx-auto p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default TeacherDashboard;


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
