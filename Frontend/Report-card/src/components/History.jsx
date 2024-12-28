// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const History = () => {
//   const [emailLogs, setEmailLogs] = useState([]);

//   // Fetch email logs from the API
//   useEffect(() => {
//     const fetchEmailLogs = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/email-logs'); // API endpoint
//         setEmailLogs(response.data);
//       } catch (error) {
//         console.error('Error fetching email logs:', error);
//       }
//     };

//     fetchEmailLogs();
//   }, []);

//   return (
//     <div className="container">
//       <h2 className="text-center my-4">Email History</h2>
//       <div className="row">
//         {emailLogs.map((log) => (
//           <div className="col-md-4 mb-4" key={log._id}> {/* Add a unique key */}
//             <div className="card shadow-sm">
//               <div className="card-body">
//                 <h5 className="card-title">{log.name}</h5>
//                 <p className="card-text">
//                   <strong>Email:</strong> {log.email}
//                 </p>
//                 <p className="card-text">
//                   <strong>Sent At:</strong>{' '}
//                   {new Date(log.sentAt).toLocaleString()}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };



// export default History;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AiOutlineClose } from 'react-icons/ai'; // Cross Icon

const History = () => {
  const [emailLogs, setEmailLogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch email logs from the API
  useEffect(() => {
    const fetchEmailLogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/email-logs'); // API endpoint
        setEmailLogs(response.data);
      } catch (error) {
        console.error('Error fetching email logs:', error);
      }
    };

    fetchEmailLogs();
  }, []);

  // Handle card removal
  const handleRemove = async (id) => {
    try {
      // Make API call to delete the log from the server (if necessary)
      await axios.delete(`http://localhost:5000/api/email-logs/${id}`);
      
      // Remove the log from the state to update the UI
      setEmailLogs(emailLogs.filter((log) => log._id !== id));
    } catch (error) {
      console.error('Error deleting email log:', error);
    }
  };

  // Filter email logs based on search query
  const filteredLogs = emailLogs.filter((log) =>
    log.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center mb-6">Email History</h2>

      {/* Search Input */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search by Email"
          className="border p-2 rounded w-1/3"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {filteredLogs.length === 0 ? (
        <p className="text-center text-gray-600">History Not Available</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredLogs.map((log) => (
            <div
              className="bg-white rounded-lg shadow-lg overflow-hidden relative"
              key={log._id}
            >
              <button
                onClick={() => handleRemove(log._id)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                <AiOutlineClose className="h-6 w-6" />
              </button>
              <div className="p-6">
                <h5 className="text-xl font-semibold text-gray-800 mb-2">{log.name}</h5>
                <p className="text-gray-600 mb-2">
                  <strong>Father Email:</strong> {log.email}
                </p>
                <p className="text-gray-600">
                  <strong>Sent At:</strong>{' '}
                  {new Date(log.sentAt).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default History;
