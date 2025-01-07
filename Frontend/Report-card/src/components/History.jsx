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
import { AiOutlineClose } from "react-icons/ai";

const History = () => {
  const [emailLogs, setEmailLogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedLog, setSelectedLog] = useState(null);

  useEffect(() => {
    const fetchEmailLogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/email-logs");
        setEmailLogs(response.data);
      } catch (error) {
        console.error("Error fetching email logs:", error);
      }
    };

    fetchEmailLogs();
  }, []);

  const handleDelete = (log) => {
    setSelectedLog(log);
    setShowConfirm(true);
  };

  const confirmDelete = async () => {
    if (selectedLog) {
      try {
        await axios.delete(`http://localhost:5000/api/email-logs/${selectedLog._id}`);
        setEmailLogs((prevLogs) =>
          prevLogs.filter((log) => log._id !== selectedLog._id)
        );
      } catch (error) {
        console.error("Error deleting email log:", error);
      }
    }
    setShowConfirm(false);
    setSelectedLog(null);
  };

  const cancelDelete = () => {
    setShowConfirm(false);
    setSelectedLog(null);
  };

  const filteredLogs = emailLogs.filter((log) =>
    log.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 sm:p-6">
      <h2 className="text-3xl sm:text-3xl font-bold text-center mb-4">Email History
      <div className="w-20 sm:w-28 h-1 mx-auto bg-blue-500 rounded-full mt-2"></div>

      </h2>

      {/* Search Input */}
      <div className="relative w-full mb-6 flex justify-center sm:justify-end">
        <div className="w-full sm:w-1/2 lg:w-1/4 relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder=" "
            className={`peer w-full pl-10 p-3 border ${
              searchQuery ? "border-blue-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white`}
          />
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLogs.map((log) => (
            <div
              className="bg-white rounded-lg shadow-lg overflow-hidden relative"
              key={log._id}
            >
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-red-600"
                onClick={() => handleDelete(log)}
              >
                <AiOutlineClose className="h-6 w-6" />
              </button>
              <div className="p-4 sm:p-6">
                <h5 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  {log.name}
                </h5>
                <p className="text-gray-600 mb-2">
                  <strong>Father Email:</strong> {log.email}
                </p>
                <p className="text-gray-600">
                  <strong>Sent At:</strong> {new Date(log.sentAt).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-sm w-full mx-4 sm:mx-auto">
            <p className="text-center mb-4">
              Are you sure you want to delete the record for{" "}
              <span className="font-semibold text-blue-500">{selectedLog?.name}</span>?
            </p>
            <div className="flex justify-center gap-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={confirmDelete}
              >
                Yes
              </button>
              <button
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                onClick={cancelDelete}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default History;