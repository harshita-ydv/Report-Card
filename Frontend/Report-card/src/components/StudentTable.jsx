// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { FaEye, FaEdit, FaTrash } from "react-icons/fa"; // Import icons

// const StudentTable = () => {
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const navigate = useNavigate();

//   const fetchData = async () => {
//     try {
//       const result = await axios.get("http://localhost:5000/api/data");
//       setData(result.data);
//       setFilteredData(result.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const deleteData = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/data/${id}`);
//       fetchData();
//     } catch (error) {
//       console.error("Error deleting data:", error);
//     }
//   };

//   const editData = (student) => {
//     navigate("/edit-students", { state: { student } });
//   };

//   const handleSearch = (e) => {
//     const query = e.target.value.toLowerCase();
//     setSearchQuery(query);

//     const filtered = data.filter((student) =>
//       student.name.toLowerCase().includes(query)
//     );
//     setFilteredData(filtered);
//   };

//   const handleViewDetails = (student) => {
//     setSelectedStudent(student);
//   };

//   const handleCloseDetails = () => {
//     setSelectedStudent(null);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="max-w-7xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow">
//       <h1 className="text-2xl sm:text-3xl font-bold text-black-600 text-center mb-6">
//         Student Management
//       </h1>

//       {/* Search Input */}
//       <div className="mb-4 flex justify-end">
//         <input
//           type="text"
//           placeholder="Search by Name"
//           value={searchQuery}
//           onChange={handleSearch}
//           className="p-2 border border-gray-300 rounded w-full max-w-xs focus:outline-none focus:ring focus:border-orange-500"
//         />
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="table-auto w-full border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200 text-gray-700">
//               <th className="border border-gray-300 px-4 py-2">Name</th>
//               <th className="border border-gray-300 px-4 py-2">Roll No</th>
//               <th className="border border-gray-300 px-4 py-2">Email</th>
//               <th className="border border-gray-300 px-4 py-2">Course</th>
//               <th className="border border-gray-300 px-4 py-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredData.map((student) => (
//               <tr key={student.id} className="text-gray-700">
//                 <td className="border border-gray-300 px-4 py-2">{student.name}</td>
//                 <td className="border border-gray-300 px-4 py-2">{student.rollno}</td>
//                 <td className="border border-gray-300 px-4 py-2">{student.email}</td>
//                 <td className="border border-gray-300 px-4 py-2">{student.course}</td>
//                 <td className="border border-gray-300 px-4 py-2 flex justify-center space-x-3">
//                   <FaEye
//                     className="text-blue-500 cursor-pointer hover:text-blue-600"
//                     size={18}
//                     onClick={() => handleViewDetails(student)}
//                   />
//                   <FaEdit
//                     className="text-yellow-500 cursor-pointer hover:text-yellow-600"
//                     size={18}
//                     onClick={() => editData(student)}
//                   />
//                   <FaTrash
//                     className="text-red-500 cursor-pointer hover:text-red-600"
//                     size={18}
//                     onClick={() => deleteData(student.id)}
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Modal for Viewing Details */}
//       {selectedStudent && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-2xl">
//             <h2 className="text-2xl font-bold text-gray-800 mb-4">
//               {selectedStudent.name}'s Details
//             </h2>
//             <div className="space-y-2">
//               <p><strong>Roll No:</strong> {selectedStudent.rollno}</p>
//               <p><strong>Email:</strong> {selectedStudent.email}</p>
//               <p><strong>Course:</strong> {selectedStudent.course}</p>
//               <p><strong>Contact No:</strong> {selectedStudent.phone}</p>
//               <p><strong>Address:</strong> {selectedStudent.address}</p>
//             </div>
//             <div className="flex justify-end mt-4">
//               <button
//                 onClick={handleCloseDetails}
//                 className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 text-sm"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StudentTable;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { FaEye, FaEdit, FaTrash } from "react-icons/fa"; // Import icons

// const StudentTable = () => {
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1); // Track current page
//   const [itemsPerPage, setItemsPerPage] = useState(10); // Items per page
//   const navigate = useNavigate();

//   const fetchData = async () => {
//     try {
//       const result = await axios.get("http://localhost:5000/api/data");
//       setData(result.data);
//       setFilteredData(result.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const deleteData = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/data/${id}`);
//       fetchData();
//     } catch (error) {
//       console.error("Error deleting data:", error);
//     }
//   };

//   const editData = (student) => {
//     navigate("/edit-students", { state: { student } });
//   };

//   const handleSearch = (e) => {
//     const query = e.target.value.toLowerCase();
//     setSearchQuery(query);

//     const filtered = data.filter((student) =>
//       student.name.toLowerCase().includes(query)
//     );
//     setFilteredData(filtered);
//   };

//   const handleViewDetails = (student) => {
//     setSelectedStudent(student);
//   };

//   const handleCloseDetails = () => {
//     setSelectedStudent(null);
//   };

//   const paginateData = () => {
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     return filteredData.slice(startIndex, endIndex);
//   };

//   const totalPages = Math.ceil(filteredData.length / itemsPerPage);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="max-w-7xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow">
//       <h1 className="text-2xl sm:text-3xl font-bold text-black-600 text-center mb-6">
//         Student Management
//       </h1>
    
//     <div className="max-w-7xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow">

//       {/* Search Input */}
//       <div className="mb-4 flex justify-end">
//         <input
//           type="text"
//           placeholder="Search by Name"
//           value={searchQuery}
//           onChange={handleSearch}
//           className="p-2 border border-gray-300 rounded w-full max-w-xs focus:outline-none focus:ring focus:border-orange-500"
//         />
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="table-auto w-full border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200 text-gray-700">
//               <th className="border border-gray-300 px-4 py-2">Name</th>
//               <th className="border border-gray-300 px-4 py-2">Roll No</th>
//               <th className="border border-gray-300 px-4 py-2">Father Email</th>
//               <th className="border border-gray-300 px-4 py-2">Course</th>
//               <th className="border border-gray-300 px-4 py-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {paginateData().map((student) => (
//               <tr key={student.id} className="text-gray-700">
//                 <td className="border border-gray-300 px-4 py-2">{student.name}</td>
//                 <td className="border border-gray-300 px-4 py-2">{student.rollno}</td>
//                 <td className="border border-gray-300 px-4 py-2">{student.email}</td>
//                 <td className="border border-gray-300 px-4 py-2">{student.course}</td>
//                 <td className="border border-gray-300 px-4 py-2 flex justify-center space-x-3">
//                   <FaEye
//                     className="text-blue-500 cursor-pointer hover:text-blue-600"
//                     size={18}
//                     onClick={() => handleViewDetails(student)}
//                   />
//                   <FaEdit
//                     className="text-yellow-500 cursor-pointer hover:text-yellow-600"
//                     size={18}
//                     onClick={() => editData(student)}
//                   />
//                   <FaTrash
//                     className="text-red-500 cursor-pointer hover:text-red-600"
//                     size={18}
//                     onClick={() => deleteData(student.id)}
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination Controls */}
//       <div className="flex justify-center mt-4">
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           className="px-4 py-2 mx-2 text-white bg-gray-500 rounded disabled:bg-gray-300"
//         >
//           Prev
//         </button>
//         <span className="self-center px-4">{`${currentPage} of ${totalPages}`}</span>
//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className="px-4 py-2 mx-2 text-white bg-gray-500 rounded disabled:bg-gray-300"
//         >
//           Next
//         </button>
//       </div>

//       {/* Modal for Viewing Details */}
//       {selectedStudent && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-2xl">
//             <h2 className="text-2xl font-bold text-gray-800 mb-4">
//               {selectedStudent.name}'s Details
//             </h2>
//             <div className="space-y-2">
//               <p><strong>Roll No:</strong> {selectedStudent.rollno}</p>
//               <p><strong>Father Email:</strong> {selectedStudent.email}</p>
//               <p><strong>Course:</strong> {selectedStudent.course}</p>
//               <p><strong>Contact No:</strong> {selectedStudent.phone}</p>
//               <p><strong>Address:</strong> {selectedStudent.address}</p>
//             </div>
//             <div className="flex justify-end mt-4">
//               <button
//                 onClick={handleCloseDetails}
//                 className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 text-sm"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//     </div>
//   );
// };

// export default StudentTable;









import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const StudentTable = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const result = await axios.get("http://localhost:5000/api/data");
      setData(result.data);
      setFilteredData(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteData = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/data/${id}`);
      fetchData();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const editData = (student) => {
    navigate("/edit-students", { state: { student } });
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = data.filter((student) =>
      student.name.toLowerCase().includes(query)
    );
    setFilteredData(filtered);
  };

  const handleViewDetails = (student) => {
    setSelectedStudent(student);
  };

  const handleCloseDetails = () => {
    setSelectedStudent(null);
  };

  const paginateData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredData.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-white text-blue-900">
      <h1 className="text-2xl font-bold text-center mb-6">Student Management</h1>

      {/* Search Input */}
      <div className="mb-4 flex justify-end pr-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search by name"
          className="w-48 p-1 border border-blue-900 rounded"
        />
      </div>

      {/* Table */}
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Roll No</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Course</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginateData().map((student) => (
            <tr key={student.id} className="text-gray-700">
              <td className="border border-gray-300 px-4 py-2">{student.name}</td>
              <td className="border border-gray-300 px-4 py-2">{student.rollno}</td>
              <td className="border border-gray-300 px-4 py-2">{student.fatheremail}</td>
              <td className="border border-gray-300 px-4 py-2">{student.course}</td>
              <td className="border border-gray-200 px-4 py-3 flex justify-center space-x-3">
                <FaEye
                  className="text-blue-500 cursor-pointer hover:text-blue-600"
                  size={18}
                  onClick={() => handleViewDetails(student)}
                />
                <FaEdit
                  className="text-blue-500 cursor-pointer hover:text-blue-600"
                  size={18}
                  onClick={() => editData(student)}
                />
                <FaTrash
                  className="text-blue-500 cursor-pointer hover:text-blue-600"
                  size={18}
                  onClick={() => deleteData(student.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-2 text-white bg-blue-500 rounded disabled:bg-blue-300"
        >
          Prev
        </button>
        <span className="self-center px-4">{`${currentPage} of ${totalPages}`}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-2 text-white bg-blue-500 rounded disabled:bg-blue-300"
        >
          Next
        </button>
      </div>

{selectedStudent && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-blue-900 p-5 rounded-lg shadow-lg w-10/11 max-w-2xl">
      <div className="bg-white shadow-md rounded-lg p-5 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">
          {selectedStudent.name}'s Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 p-6">
          <p className="bg-gray-100 py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-200">
            <strong className="text-gray-800">Father's Name:</strong> {selectedStudent.fatherName}
          </p>
          <p className="bg-gray-100 py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-200">
            <strong className="text-gray-800">Father's Email:</strong> {selectedStudent.email}
          </p>
          <p className="bg-gray-100 py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-200">
            <strong className="text-gray-800">Mother's Name:</strong> {selectedStudent.motherName}
          </p>
          <p className="bg-gray-100 py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-200">
            <strong className="text-gray-800">Student Email:</strong> {selectedStudent.fatheremail}
          </p>
          <p className="bg-gray-100 py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-200">
            <strong className="text-gray-800">Contact No:</strong> {selectedStudent.phone}
          </p>
          <p className="bg-gray-100 py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-200">
            <strong className="text-gray-800">Other Contact No:</strong> {selectedStudent.otherPhone}
          </p>
          <p className="bg-gray-100 py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-200">
            <strong className="text-gray-800">Gender:</strong> {selectedStudent.gender}
          </p>
          <p className="bg-gray-100 py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-200">
            <strong className="text-gray-800">Address:</strong> {selectedStudent.address}
          </p>
          <p className="bg-gray-100 py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-200">
            <strong className="text-gray-800">Roll No:</strong> {selectedStudent.rollno}
          </p>
          <p className="bg-gray-100 py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-200">
            <strong className="text-gray-800">Course:</strong> {selectedStudent.course}
          </p>
          <p className="bg-gray-100 py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-200">
            <strong className="text-gray-800">Year:</strong> {selectedStudent.year}
          </p>
          <p className="bg-gray-100 py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-200">
            <strong className="text-gray-800">Total Present:</strong> {selectedStudent.totalpresent}
          </p>
          <p className="bg-gray-100 py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-200">
            <strong className="text-gray-800">Total Absent:</strong> {selectedStudent.totalabsent}
          </p>
          <p className="bg-gray-100 py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-200">
            <strong className="text-gray-800">Total Days:</strong> {selectedStudent.totalday}
          </p>
          <p className="bg-gray-100 py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-200">
            <strong className="text-gray-800">1A:</strong> {selectedStudent.oneA}
          </p>
          <p className="bg-gray-100 py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-200">
            <strong className="text-gray-800">1B:</strong> {selectedStudent.oneB}
          </p>
          <p className="bg-gray-100 py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-200">
            <strong className="text-gray-800">1C:</strong> {selectedStudent.oneC}
          </p>
          <p className="bg-gray-100 py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-200">
            <strong className="text-gray-800">2A:</strong> {selectedStudent.twoA}
          </p>
          <p className="bg-gray-100 py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-200">
            <strong className="text-gray-800">2B:</strong> {selectedStudent.twoB}
          </p>
          <p className="bg-gray-100 py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-200">
            <strong className="text-gray-800">2C:</strong> {selectedStudent.twoC}
          </p>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button
          onClick={handleCloseDetails}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 text-sm"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}
</div>
</div>
  )}

export default StudentTable;