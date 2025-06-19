// import React from "react";
// import { useNavigate } from "react-router-dom";

// const TeacherHome = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="container mx-auto my-8 p-4 mt-0">
//       <h2 className="text-2xl font-bold text-center text-blue-900 mb-4">Welcome to Teacher's Dashboard</h2>
//       <p className="text-base text-center mb-6">Here you can manage your classes, view schedules, and more.</p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         {/* Card 1: Add Student */}
//         <div className="bg-white shadow-lg rounded-lg p-4 text-center transform hover:scale-105 transition-transform duration-300 h-48">
//           <h5 className="text-lg font-semibold mb-3">Add Student</h5>
//           <p className="text-gray-600 text-sm mb-4">Click here to add a new student to your class.</p>
//           <button
//             onClick={() => navigate("/teacher-dashboard/add-student")}
//             className="bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition w-full max-w-[120px] mx-auto text-sm"
//           >
//              Add Student
//           </button>
//         </div>

//         {/* Card 2: Manage Students */}
//         <div className="bg-white shadow-lg rounded-lg p-4 text-center transform hover:scale-105 transition-transform duration-300 h-48">
//           <h5 className="text-lg font-semibold mb-3">Manage Students</h5>
//           <p className="text-gray-600 text-sm mb-4">Manage existing students and update details.</p>
//           <button
//             onClick={() => navigate("/teacher-dashboard/manage-students")}
//             className="bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition w-full max-w-[120px] mx-auto text-sm"
//           >
//            Students
//           </button>
//         </div>

//         {/* Card 3: View Report Cards */}
//         <div className="bg-white shadow-lg rounded-lg p-4 text-center transform hover:scale-105 transition-transform duration-300 h-48">
//           <h5 className="text-lg font-semibold mb-3">View Report Cards</h5>
//           <p className="text-gray-600 text-sm mb-4">Generate and view student report cards.</p>
//           <button
//             onClick={() => navigate("/teacher-dashboard/view-students")}
//             className="bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition w-full max-w-[120px] mx-auto text-sm"
//           >
//             View Report
//           </button>
//         </div>

//         {/* Card 4: Upload Excel File */}
//         <div className="bg-white shadow-lg rounded-lg p-4 text-center transform hover:scale-105 transition-transform duration-300 h-48">
//           <h5 className="text-lg font-semibold mb-3">Upload Excel File</h5>
//           <p className="text-gray-600 text-sm mb-4">Upload student data using an Excel file.</p>
//           <button
//             onClick={() => navigate("/teacher-dashboard/upload")}
//             className="bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition w-full max-w-[120px] mx-auto text-sm"
//           >
//             Upload File
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeacherHome;

import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserPlus, FaUsers, FaFileUpload, FaClipboardList } from "react-icons/fa";

const TeacherHome = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto my-8 p-4 mt-0">
      <h2 className="text-3xl font-extrabold text-center text-blue-900 mb-6">
         Teacher's Home
      </h2>
      <p className="text-lg text-center text-gray-700 mb-8">
        Manage your classes, view student details, and more, all in one place.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Card 1: Add Student */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center mb-4">
            <FaUserPlus className="text-blue-900 text-5xl" />
          </div>
          <h5 className="text-xl font-semibold mb-2 text-blue-900">Add Student</h5>
          <p className="text-gray-600 text-sm mb-4">
            Easily add new students to your class roster.
          </p>
          <button
            onClick={() => navigate("/teacher-dashboard/add-student")}
            className="bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition w-full max-w-[150px] mx-auto text-sm"
          >
            Add Student
          </button>
        </div>

        {/* Card 2: Manage Students */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center mb-4">
            <FaUsers className="text-blue-900 text-5xl" />
          </div>
          <h5 className="text-xl font-semibold mb-2 text-blue-900">Manage Students</h5>
          <p className="text-gray-600 text-sm mb-4">
            View, edit, or delete student details with ease.
          </p>
          <button
            onClick={() => navigate("/teacher-dashboard/manage-students")}
            className="bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition w-full max-w-[150px] mx-auto text-sm"
          >
            Manage
          </button>
        </div>

        {/* Card 3: View Report Cards */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center mb-4">
            <FaClipboardList className="text-blue-900 text-5xl" />
          </div>
          <h5 className="text-xl font-semibold mb-2 text-blue-900">Download PDF</h5>
          <p className="text-gray-600 text-sm mb-4">
            Generate pdf and send student report cards.
          </p>
          <button
            onClick={() => navigate("/teacher-dashboard/view-students")}
            className="bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition w-full max-w-[150px] mx-auto text-sm"
          >
            Download PDF
          </button>
        </div>

        {/* Card 4: Upload Excel File */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center mb-4">
            <FaFileUpload className="text-blue-900 text-5xl" />
          </div>
          <h5 className="text-xl font-semibold mb-2 text-blue-900">Upload Excel File</h5>
          <p className="text-gray-600 text-sm mb-4">
            Upload student data quickly using Excel files.
          </p>
          <button
            onClick={() => navigate("/teacher-dashboard/upload")}
            className="bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition w-full max-w-[150px] mx-auto text-sm"
          >
            Upload File
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeacherHome;
