import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RejectRequest() {
  const [rejectedTeachers, setRejectedTeachers] = useState([]);
  const [confirmRemove, setConfirmRemove] = useState(null); // State to track the teacher to be removed

  useEffect(() => {
    const fetchRejectedTeachers = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/superadmin/rejected-teachers'
        );
        setRejectedTeachers(response.data);
      } catch (error) {
        console.error('Error fetching rejected teacher requests', error);
      }
    };

    fetchRejectedTeachers();
  }, []);

  // Remove teacher from the list
  const handleRemoveTeacher = async (teacherId) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/superadmin/rejected-teachers/${teacherId}`
      );
      setRejectedTeachers((prevTeachers) =>
        prevTeachers.filter((teacher) => teacher._id !== teacherId)
      );
      setConfirmRemove(null); // Close the confirmation dialog
    } catch (error) {
      console.error('Error removing teacher', error);
    }
  };

  return (
    <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6 mx-auto">
      <h3 className="text-3xl font-bold mb-4 text-center text-gray-800">Rejected Teacher Requests
      <div className="w-20 sm:w-28 h-1 mx-auto bg-blue-500 rounded-full mt-2"></div>
      </h3>
      <ul className="divide-y divide-gray-200">
        {rejectedTeachers.length === 0 ? (
          <p className="text-gray-500 text-center">No rejected teacher requests</p>
        ) : (
          rejectedTeachers.map((teacher) => (
            <li
              key={teacher._id}
              className="py-4 flex justify-between items-center"
            >
              <div>
                <p className="text-lg font-medium">{teacher.email}</p>
                <p className="text-lg text-blue-400 font-medium">{teacher.status}</p>
                <p className="text-gray-500">{teacher.role}</p>
              </div>
              <button
                onClick={() =>
                  setConfirmRemove({ id: teacher._id, email: teacher.email })
                }
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </li>
          ))
        )}
      </ul>

      {/* Confirmation Dialog */}
      {confirmRemove && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-lg font-medium mb-4">Are you sure?</h4>
            <p className="text-gray-600 mb-4">
              Do you really want to remove <strong>{confirmRemove.email}</strong>?.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setConfirmRemove(null)}
                className="px-4 py-2 text-sm bg-gray-300 rounded hover:bg-gray-400"
              >
                No
              </button>
              <button
                onClick={() => handleRemoveTeacher(confirmRemove.id)}
                className="px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-red-600"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RejectRequest;
