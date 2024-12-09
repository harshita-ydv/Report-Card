import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SuperadminDas() {
  const [pendingTeachers, setPendingTeachers] = useState([]);

  useEffect(() => {
    const fetchPendingTeachers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/superadmin/pending-teacher-requests');
        setPendingTeachers(response.data);
      } catch (error) {
        console.error('Error fetching teacher requests', error);
      }
    };
  
    fetchPendingTeachers();
  }, []);
  

  const handleUpdateStatus = async (teacherId, status) => {
    try {
      if (status === 'Accepted') {
        await axios.put(`http://localhost:5000/api/superadmin/approve/${teacherId}`);
      } else {
        await axios.put(`http://localhost:5000/api/superadmin/reject/${teacherId}`);
      }
      setPendingTeachers(pendingTeachers.filter((teacher) => teacher._id !== teacherId));
    } catch (error) {
      console.error('Error updating teacher status', error);
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Super Admin Dashboard</h2>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl">
        <h3 className="text-xl font-semibold mb-4">Pending Teacher Requests</h3>
        <ul className="divide-y divide-gray-200">
          {pendingTeachers.length === 0 ? (
            <p className="text-gray-500 text-center">No pending teacher requests</p>
          ) : (
            pendingTeachers.map((teacher) => (
              <li key={teacher._id} className="py-4 flex justify-between items-center">
                <div>
                  <p className="text-lg font-medium">{teacher.name}</p>
                  <p className="text-gray-500">{teacher.email}</p>
                  <p className="text-gray-700">Status: {teacher.status}</p>
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleUpdateStatus(teacher._id, 'Accepted')}
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleUpdateStatus(teacher._id, 'Rejected')}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                  >
                    Reject
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default SuperadminDas;
