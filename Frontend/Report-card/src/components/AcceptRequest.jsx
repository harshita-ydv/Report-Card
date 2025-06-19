import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AcceptRequest() {
  const [acceptedTeachers, setAcceptedTeachers] = useState([]);
  const [confirmRemove, setConfirmRemove] = useState(null); // Store teacher info for confirmation dialog

  useEffect(() => {
    const fetchAcceptedTeachers = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/superadmin/approved-teachers'
        );
        setAcceptedTeachers(response.data);
      } catch (error) {
        console.error('Error fetching accepted teacher requests', error);
      }
    };

    fetchAcceptedTeachers();
  }, []);

  // Handle teacher removal
  const handleRemoveTeacher = async (teacherId) => {
    try {
      await axios.delete(`http://localhost:5000/api/superadmin/approved-teachers/${teacherId}`);
      setAcceptedTeachers(acceptedTeachers.filter((teacher) => teacher._id !== teacherId));
      setConfirmRemove(null); // Close confirmation dialog
    } catch (error) {
      console.error('Error removing teacher:', error);
    }
  };

  return (
    <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6 mx-auto">
      <h3 className="text-3xl font-bold mb-4 text-center">Accepted Teacher Requests
      <div className="w-20 sm:w-28 h-1 mx-auto bg-blue-500 rounded-full mt-2"></div>
      </h3>
      <ul className="divide-y divide-gray-200">
        {acceptedTeachers.length === 0 ? (
          <p className="text-gray-500 text-center">No accepted teacher requests</p>
        ) : (
          acceptedTeachers.map((teacher) => (
            <li
              key={teacher._id}
              className="py-4 flex justify-between items-center"
            >
              <div>
                <p className="text-lg font-medium">{teacher.email}</p>
                <p className="text-lg text-blue-400 font-medium">{teacher.status}</p>
                <p className="text-gray-500">{teacher.role}</p>
              </div>
              {/* Remove Button */}
              <button
                onClick={() => setConfirmRemove({ id: teacher._id, name: teacher.email })}
                className="px-4 py-2 text-sm text-white bg-red-500 rounded hover:bg-red-600"
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
              Do you really want to remove <strong>{confirmRemove.name}</strong>?.
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

export default AcceptRequest;
