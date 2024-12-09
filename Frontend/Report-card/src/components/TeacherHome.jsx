// TeacherHome.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const TeacherHome = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto my-8 p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Welcome to Teacher's Home Page</h2>
      <p className="text-lg text-center mb-10">Here you can manage your classes, view schedules, and more.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Card 1: Add Student */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
          <h5 className="text-xl font-semibold mb-4">Add Student</h5>
          <p className="text-gray-600 mb-6">Click here to add a new student to your class.</p>
          <button 
            onClick={() => navigate("/teacher-dashboard/add-student")} 
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Go to Add Student
          </button>
        </div>

        {/* Card 2: Manage Students */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
          <h5 className="text-xl font-semibold mb-4">Manage Students</h5>
          <p className="text-gray-600 mb-6">Manage existing students, update details, or remove them.</p>
          <button 
            onClick={() => navigate("/teacher-dashboard/manage-students")} 
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Manage Students
          </button>
        </div>

        {/* Card 3: View Report Cards */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
          <h5 className="text-xl font-semibold mb-4">View Report Cards</h5>
          <p className="text-gray-600 mb-6">Generate and view student report cards.</p>
          <button 
            onClick={() => navigate("/teacher-dashboard/view-students")} 
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            View Report Cards
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeacherHome;
