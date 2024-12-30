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

import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai"; // Cross Icon

const History = () => {
  const [emailLogs, setEmailLogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch email logs from the API
  useEffect(() => {
    const fetchEmailLogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/email-logs"); // API endpoint
        setEmailLogs(response.data);
      } catch (error) {
        console.error("Error fetching email logs:", error);
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
      console.error("Error deleting email log:", error);
    }
  };

  // Filter email logs based on search query
  const filteredLogs = emailLogs.filter((log) =>
    log.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center mb-2">Email History</h2>
      <div className="w-28 h-1 mx-auto bg-blue-500 rounded-full"></div>

      {/* Search Input */}
      <div className="relative w-full mb-6 flex justify-end">
        <div className="w-1/4 relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder=" "
            className={`peer w-full pl-10 p-3 border ${
              searchQuery ? "border-blue-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white text-left`}
          />
          {/* Search Icon */}
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.742a6.5 6.5 0 1 0-1.414 1.414l3.366 3.367a1 1 0 0 0 1.415-1.414l-3.367-3.367zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          {/* Floating Label */}
          <label
            className={`absolute left-8 top-0 text-gray-500 duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:left-3`}
          >
            Search By Email
          </label>
        </div>
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
                <h5 className="text-xl font-semibold text-gray-800 mb-2">
                  {log.name}
                </h5>
                <p className="text-gray-600 mb-2">
                  <strong>Father Email:</strong> {log.email}
                </p>
                <p className="text-gray-600">
                  <strong>Sent At:</strong>{" "}
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
