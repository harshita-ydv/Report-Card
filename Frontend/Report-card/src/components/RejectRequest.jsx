import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RejectRequest() {
  const [rejectedTeachers, setRejectedTeachers] = useState([]);

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

  return (
    <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4 text-center">Rejected Teacher Requests</h3>
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

                <p className="text-lg font-medium">{teacher.status}</p>
                <p className="text-gray-500">{teacher.role}</p>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default RejectRequest;
