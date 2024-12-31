// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function AcceptRequest() {
//   const [acceptedTeachers, setAcceptedTeachers] = useState([]);

//   useEffect(() => {
//     const fetchAcceptedTeachers = async () => {
//       try {
//         const response = await axios.get(
//           'http://localhost:5000/api/superadmin/approved-teachers'
//         );
//         setAcceptedTeachers(response.data);
//       } catch (error) {
//         console.error('Error fetching accepted teacher requests', error);
//       }
//     };

//     fetchAcceptedTeachers();
//   }, []);

//   return (
//     <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6 mx-auto">
//       <h3 className="text-xl  font-semibold mb-4 text-center">Accepted Teacher Requests</h3>
//       <ul className="divide-y divide-gray-200">
//         {acceptedTeachers.length === 0 ? (
//           <p className="text-gray-500 text-center">No accepted teacher requests</p>
//         ) : (
//           acceptedTeachers.map((teacher) => (
//             <li
//               key={teacher._id}
//               className="py-4 flex justify-between items-center"
//             >
//               <div>
//               <p className="text-lg font-medium">{teacher.email}</p>

//                 <p className="text-lg text-blue-400 font-medium">{teacher.status}</p>
//                 <p className="text-gray-500">{teacher.role}</p>
//               </div>
//             </li>
//           ))
//         )}
//       </ul>
//     </div>
//   );
// }

// export default AcceptRequest;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AcceptRequest() {
  const [acceptedTeachers, setAcceptedTeachers] = useState([]);

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
      // Send DELETE request to the server
      await axios.delete(`http://localhost:5000/api/superadmin/approved-teachers/${teacherId}`);

      // Update the UI by removing the teacher from the list
      setAcceptedTeachers(acceptedTeachers.filter((teacher) => teacher._id !== teacherId));
    } catch (error) {
      console.error('Error removing teacher:', error);
    }
  };

  return (
    <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6 mx-auto">
      <h3 className="text-xl font-semibold mb-4 text-center">Accepted Teacher Requests</h3>
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
                onClick={() => handleRemoveTeacher(teacher._id)}
                className="px-4 py-2 text-sm text-white bg-red-500 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default AcceptRequest;
