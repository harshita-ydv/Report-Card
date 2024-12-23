

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const StudentTable = () => {
//   const [data, setData] = useState([]); // To store all fetched data
//   const [filteredData, setFilteredData] = useState([]); // To store filtered data
//   const [searchQuery, setSearchQuery] = useState(''); // To store the search query
//   const navigate = useNavigate();

//   const fetchData = async () => {
//     try {
//       const result = await axios.get('http://localhost:5000/api/data');
//       setData(result.data);
//       setFilteredData(result.data); // Initialize with full data
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const deleteData = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/data/${id}`);
//       fetchData();
//     } catch (error) {
//       console.error('Error deleting data:', error);
//     }
//   };

//   const editData = (student) => {
//     navigate('/edit-students', { state: { student } });
//   };

//   const handleSearch = (e) => {
//     const query = e.target.value.toLowerCase();
//     setSearchQuery(query);

//     const filtered = data.filter((student) =>
//       student.name.toLowerCase().includes(query)
//     );
//     setFilteredData(filtered);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="max-w-7xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-lg">
//       <h1 className="text-2xl sm:text-3xl font-bold text-orange-600 text-center mb-6">
//         Student List
//       </h1>

//       {/* Search Input */}
//       <div className="mb-4 flex justify-end">
//         <input
//           type="text"
//           placeholder="Search by Name"
//           value={searchQuery}
//           onChange={handleSearch}
//           className="p-2 border border-gray-300 rounded w-full max-w-xs"
//         />
//       </div>

//       {/* Responsive Table */}
//       <div className="overflow-x-auto">
//         <table className="table-auto min-w-full bg-white border border-gray-200 text-sm">
//           <thead >
//             <tr>
//               <th className="py-2 px-4 border text-center">Name</th>
//               <th className="py-2 px-4 border text-center">Father Name</th>
//               <th className="py-2 px-4 border text-center">Father Email</th>
//               <th className="py-2 px-4 border text-center">Mother Name</th>
//               <th className="py-2 px-4 border text-center">Student Email</th>
//               <th className="py-2 px-4 border text-center">Contact No.</th>
//               <th className="py-2 px-4 border text-center">Other Contact No.</th>
//               <th className="py-2 px-4 border text-center">Gender</th>
//               <th className="py-2 px-4 border text-center">Address</th>
//               <th className="py-2 px-4 border text-center">Roll Number</th>
//               <th className="py-2 px-4 border text-center">Course</th>
//               <th className="py-2 px-4 border text-center">Year</th>
//               <th className="px-2 py-4 border text-center">Total Present days</th>
//               <th className="px-2 py-4 border text-center">Total Absent days</th>
//               <th className="px-2 py-4 border text-center">Total days</th>
//               <th className="py-2 px-4 border text-center">Attendance %</th>
//               <th className="px-2 border py-4 text-center">1A Level</th>
//               <th className="px-2 border py-4 text-center">1B Level</th>
//               <th className="px-2 border py-4 text-center">1C Level</th>
//               <th className="px-2 border py-4 text-center">2A Level</th>
//               <th className="px-2 border py-4 text-center">2B Level</th>
//               <th className="px-2 border py-4 text-center">2C Level</th>
//               <th className="py-2 px-4 border text-center">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredData.map((student) => (
//               <tr key={student.id} className="hover:bg-gray-100">
//                 <td className="py-3 px-2 border text-center">{student.name}</td>
//                 <td className="py-3 px-2 border text-center">{student.fatherName}</td>
//                 <td className="py-3 px-2 border text-center">{student.fatheremail}</td>
//                 <td className="py-3 px-2 border text-center">{student.motherName}</td>
//                 <td className="py-3 px-2 border text-center">{student.email}</td>
//                 <td className="py-3 px-2 border text-center">{student.phone}</td>
//                 <td className="py-3 px-2 border text-center">{student.otherPhone}</td>
//                 <td className="py-3 px-2 border text-center">{student.gender}</td>
//                 <td className="py-3 px-2 border text-center">{student.address}</td>
//                 <td className="py-3 px-2 border text-center">{student.rollno}</td>
//                 <td className="py-3 px-2 border text-center">{student.course}</td>
//                 <td className="py-3 px-2 border text-center">{student.year}</td>
//                 <td className="border px-2 py-3 text-center">{student.totalpresent}</td>
//                 <td className="border px-2 py-3 text-center">{student.totalabsent}</td>
//                 <td className="border px-2 py-3 text-center">{student.totalday}</td>
//                 <td className="py-3 px-2 border text-center">{student.attenpercentage}</td>
//                 <td className="border px-2 py-3 text-center">{student.oneA}</td>
//                 <td className="border px-2 py-3 text-center">{student.oneB}</td>
//                 <td className="border px-2 py-3 text-center">{student.oneC}</td>
//                 <td className="border px-2 py-3 text-center">{student.twoA}</td>
//                 <td className="border px-2 py-3 text-center">{student.twoB}</td>
//                 <td className="border px-2 py-3 text-center">{student.twoC}</td>
//                 <td className="py-3 px-2 border text-center">
//                   <div className="flex justify-around space-x-2">
//                     <button
//                       onClick={() => editData(student)}
//                       className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600 transition duration-200 text-xs sm:text-sm"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => deleteData(student.id)}
//                       className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition duration-200 text-xs sm:text-sm"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default StudentTable;








// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const StudentTable = () => {
//   const [data, setData] = useState([]); // Store all fetched data
//   const [filteredData, setFilteredData] = useState([]); // Store filtered data
//   const [searchQuery, setSearchQuery] = useState(""); // Search query
//   const [selectedStudent, setSelectedStudent] = useState(null); // For modal view
//   const navigate = useNavigate();

//   const fetchData = async () => {
//     try {
//       const result = await axios.get("http://localhost:5000/api/data");
//       setData(result.data);
//       setFilteredData(result.data); // Initialize with full data
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
//     <div className="max-w-7xl mx-auto p-4 sm:p-6 bg-gray-100">
//       <h1 className="text-2xl sm:text-3xl font-bold text-orange-600 text-center mb-6">
//         Student List
//       </h1>

//       {/* Search Input */}
//       <div className="mb-4 flex justify-end">
//         <input
//           type="text"
//           placeholder="Search by Name"
//           value={searchQuery}
//           onChange={handleSearch}
//           className="p-2 border border-gray-300 rounded w-full max-w-xs"
//         />
//       </div>

//       {/* Card View */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredData.map((student) => (
//           <div
//             key={student.id}
//             className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
//           >
//             <h2 className="text-lg font-semibold text-gray-800 mb-2">
//               {student.name}
//             </h2>
//             <p className="text-sm text-gray-600">Roll No: {student.rollno}</p>
//             <p className="text-sm text-gray-600">Email: {student.email}</p>
//             <p className="text-sm text-gray-600">Course: {student.course}</p>

//             <div className="flex justify-between mt-4">
//               <button
//                 onClick={() => handleViewDetails(student)}
//                 className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 text-sm"
//               >
//                 View
//               </button>
//               <button
//                 onClick={() => editData(student)}
//                 className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 text-sm"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => deleteData(student.id)}
//                 className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 text-sm"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal for Viewing Details */}
//       {selectedStudent && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-2xl">
//             <h2 className="text-2xl font-bold text-gray-800 mb-4">
//               {selectedStudent.name}'s Details
//             </h2>
//             <p className="text-sm text-gray-600 mb-2">
//               Father Name: {selectedStudent.fatherName}
//             </p>
//             <p className="text-sm text-gray-600 mb-2">
//               Mother Name: {selectedStudent.motherName}
//             </p>
//             <p className="text-sm text-gray-600 mb-2">
//               Roll No: {selectedStudent.rollno}
//             </p>
//             <p className="text-sm text-gray-600 mb-2">
//               Email: {selectedStudent.email}
//             </p>
//             <p className="text-sm text-gray-600 mb-2">
//               Contact No: {selectedStudent.phone}
//             </p>
//             <p className="text-sm text-gray-600 mb-2">
//               Address: {selectedStudent.address}
//             </p>
//             <p className="text-sm text-gray-600 mb-2">
//               Course: {selectedStudent.course}
//             </p>
//             <p className="text-sm text-gray-600 mb-2">
//               Year: {selectedStudent.year}
//             </p>

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





// main

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const StudentTable = () => {
//   const [data, setData] = useState([]); // Store all fetched data
//   const [filteredData, setFilteredData] = useState([]); // Store filtered data
//   const [searchQuery, setSearchQuery] = useState(""); // Search query
//   const [selectedStudent, setSelectedStudent] = useState(null); // For modal view
//   const navigate = useNavigate();

//   const fetchData = async () => {
//     try {
//       const result = await axios.get("http://localhost:5000/api/data");
//       setData(result.data);
//       setFilteredData(result.data); // Initialize with full data
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
//       <h1 className="text-2xl sm:text-3xl font-bold text-orange-600 text-center mb-6">
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

//       {/* Card View */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredData.map((student) => (
//           <div
//             key={student.id}
//             className="p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-gray-300 bg-gray-50"
//           >
//             <h2 className="text-xl font-semibold text-orange-600 mb-2">
//               {student.name}
//             </h2>
//             <p><strong>Roll No:</strong>  {student.rollno}</p>
//             <p><strong>Email: </strong> {student.email}</p>
//             <p><strong>Course: </strong> {student.course}</p>

//             <div className="flex justify-between mt-4">
//               <button
//                 onClick={() => handleViewDetails(student)}
//                 className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 text-sm"
//               >
//                 View
//               </button>
//               <button
//                 onClick={() => editData(student)}
//                 className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 text-sm"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => deleteData(student.id)}
//                 className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 text-sm"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal for Viewing Details */}
//       {selectedStudent && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-2xl">
//             <h2 className="text-2xl font-bold text-gray-800 mb-4">
//               {selectedStudent.name}'s Details
//             </h2>
//             <div className="space-y-2">
//             <p className="text-sm text-gray-600">
//                 <strong>Email:</strong> {selectedStudent.fatheremail}
//               </p>
//               <p className="text-sm text-gray-600">
//                 <strong>Father's Name:</strong> {selectedStudent.fatherName}
//               </p>
//               <p className="text-sm text-gray-600">
//                 <strong>Father Email:</strong> {selectedStudent.email}
//               </p>
//               <p className="text-sm text-gray-600">
//                 <strong>Mother's Name:</strong> {selectedStudent.motherName}
//               </p>
//               <p className="text-sm text-gray-600">
//                 <strong>Roll No:</strong> {selectedStudent.rollno}
//               </p>
            
//               <p className="text-sm text-gray-600">
//                 <strong>Contact No:</strong> {selectedStudent.phone}
//               </p>
//               <p className="text-sm text-gray-600">
//                 <strong>Address:</strong> {selectedStudent.address}
//               </p>
//               <p className="text-sm text-gray-600">
//                 <strong>Course:</strong> {selectedStudent.course}
//               </p>
//               <p className="text-sm text-gray-600">
//                 <strong>Year:</strong> {selectedStudent.year}
//               </p>
//               <p className="text-sm text-gray-600">
//                 <strong>Total Days:</strong> {selectedStudent.totalday}
//               </p>
//               <p className="text-sm text-gray-600">
//                 <strong>Present Days:</strong> {selectedStudent.totalpresent}
//               </p>
//               <p className="text-sm text-gray-600">
//                 <strong>Absent Days:</strong> {selectedStudent.totalabsent}
//               </p>
//               <p className="text-sm text-gray-600">
//                 <strong>Attendance Percentage:</strong> {selectedStudent.attenpercentage}
//               </p>
//               <p className="text-sm text-gray-600">
//                 <strong>1A Level:</strong> {selectedStudent.oneA}
//               </p>
//               <p className="text-sm text-gray-600">
//                 <strong>1B Level:</strong> {selectedStudent.oneB}
//               </p>
//               <p className="text-sm text-gray-600">
//                 <strong>1C Level:</strong> {selectedStudent.oneC}
//               </p>
//               <p className="text-sm text-gray-600">
//                 <strong>2A Level:</strong> {selectedStudent.twoA}
//               </p>
//               <p className="text-sm text-gray-600">
//                 <strong>2B Level:</strong> {selectedStudent.twoB}
//               </p>
//               <p className="text-sm text-gray-600">
//                 <strong>2C Level:</strong> {selectedStudent.twoC}
//               </p>
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

// const StudentTable = () => {
//   const [data, setData] = useState([]); // Store all fetched data
//   const [filteredData, setFilteredData] = useState([]); // Store filtered data
//   const [searchQuery, setSearchQuery] = useState(""); // Search query
//   const [selectedStudent, setSelectedStudent] = useState(null); // For modal view
//   const navigate = useNavigate();

//   const fetchData = async () => {
//     try {
//       const result = await axios.get("http://localhost:5000/api/data");
//       setData(result.data);
//       setFilteredData(result.data); // Initialize with full data
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
//       <h1 className="text-2xl sm:text-3xl font-bold text-orange-600 text-center mb-6">
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

//       {/* Table View */}
//       <table className="w-full border-collapse border border-gray-300 bg-gray-50 rounded-lg shadow-md">
//         <thead>
//           <tr className="bg-orange-600 text-white">
//             <th className="border border-gray-300 p-2">Name</th>
//             <th className="border border-gray-300 p-2">Roll No</th>
//             <th className="border border-gray-300 p-2">Email</th>
//             <th className="border border-gray-300 p-2">Course</th>
//             <th className="border border-gray-300 p-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.map((student) => (
//             <tr key={student.id} className="hover:bg-gray-100">
//               <td className="border border-gray-300 p-2">{student.name}</td>
//               <td className="border border-gray-300 p-2">{student.rollno}</td>
//               <td className="border border-gray-300 p-2">{student.email}</td>
//               <td className="border border-gray-300 p-2">{student.course}</td>
//               <td className="border border-gray-300 p-2 flex space-x-2 justify-center">
//                 <button
//                   onClick={() => handleViewDetails(student)}
//                   className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 text-sm"
//                 >
//                   View
//                 </button>
//                 <button
//                   onClick={() => editData(student)}
//                   className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 text-sm"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => deleteData(student.id)}
//                   className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 text-sm"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Modal for Viewing Details */}
//       {selectedStudent && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-2xl">
//             <h2 className="text-2xl font-bold text-gray-800 mb-4">
//               {selectedStudent.name}'s Details
//             </h2>
//             <div className="space-y-2">
//               {/* Student Details */}
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












import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa"; // Import icons

const StudentTable = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-bold text-black-600 text-center mb-6 ">
        Student Management
      </h1>
    
    <div className="max-w-7xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow">

      {/* Search Input */}
      <div className="mb-4 flex justify-end">
        <input
          type="text"
          placeholder="Search by Name"
          value={searchQuery}
          onChange={handleSearch}
          className="p-2 border border-gray-300 rounded w-full max-w-xs focus:outline-none focus:ring focus:border-orange-500"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Roll No</th>
              <th className="border border-gray-300 px-4 py-2">Father Email</th>
              <th className="border border-gray-300 px-4 py-2">Course</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((student) => (
              <tr key={student.id} className="text-gray-700">
                <td className="border border-gray-300 px-4 py-2">{student.name}</td>
                <td className="border border-gray-300 px-4 py-2">{student.rollno}</td>
                <td className="border border-gray-300 px-4 py-2">{student.email}</td>
                <td className="border border-gray-300 px-4 py-2">{student.course}</td>
                <td className="border border-gray-300 px-4 py-2 flex justify-center space-x-3">
                  <FaEye
                    className="text-blue-500 cursor-pointer hover:text-blue-600"
                    size={18}
                    onClick={() => handleViewDetails(student)}
                  />
                  <FaEdit
                    className="text-yellow-500 cursor-pointer hover:text-yellow-600"
                    size={18}
                    onClick={() => editData(student)}
                  />
                  <FaTrash
                    className="text-red-500 cursor-pointer hover:text-red-600"
                    size={18}
                    onClick={() => deleteData(student.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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