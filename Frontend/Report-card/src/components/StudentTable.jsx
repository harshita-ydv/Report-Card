// import React, { useRef, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const StudentTable = () => {
//   const dataRef = useRef([]);
//   const navigate = useNavigate();
//   const tableRef = useRef();

//   const renderTable = () => {
//     const tableBody = tableRef.current;
//     tableBody.innerHTML = ''; // Clear current table rows

//     dataRef.current.forEach((item, index) => {
//       const row = document.createElement('tr');
//       row.className = index % 2 === 0 ? 'bg-white' : 'bg-gray-100'; // Alternate row colors
//       row.innerHTML = `
//         <td class="border px-2 py-3 text-center">${item.id}</td>
//         <td class="border px-2 py-3 text-center">${item.name}</td>
//         <td class="border px-2 py-3 text-center">${item.fatherName}</td>
//         <td class="border px-2 py-3 text-center">${item.motherName}</td>
//         <td class="border px-2 py-3 text-center">${item.email}</td>
//         <td class="border px-2 py-3 text-center">${item.phone}</td>
//         <td class="border px-2 py-3 text-center">${item.gender}</td>
//         <td class="border px-2 py-3 text-center">${item.address}</td>
//         <td class="border px-2 py-3 text-center">${item.course}</td>
//         <td class="border px-2 py-3 text-center">${item.year}</td>
//         <td class="border px-2 py-3">
//           <div class="flex justify-around space-x-2">
//             <button class="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600 transition duration-200">Edit</button>
//             <button class="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition duration-200">Delete</button>
//           </div>
//         </td>
//       `;
//       tableBody.appendChild(row);

//       row.querySelector('.bg-yellow-500').addEventListener('click', () => editData(item));
//       row.querySelector('.bg-red-500').addEventListener('click', () => deleteData(item.id));
//     });
//   };

//   const fetchData = async () => {
//     const result = await axios.get('http://localhost:5000/api/data');
//     dataRef.current = result.data;
//     renderTable();
//   };

//   const deleteData = async (id) => {
//     await axios.delete(`http://localhost:5000/api/data/${id}`);
//     fetchData();
//   };

//   const editData = (student) => {
//     navigate('/edit-student', { state: { student } });
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="max-w-7xl mx-auto mt-10 p-4 sm:p-6 bg-white rounded-lg">
//       <h1 className="text-2xl font-bold text-center text-orange-600 mb-6">Student List</h1>
//       <div className="overflow-x-auto">
//         <table className="table-auto w-full text-xs sm:text-sm">
//           <thead>
//             <tr className="bg-gray-200 text-gray-700">
//               <th className="px-2 py-3 text-center">ID</th>
//               <th className="px-2 py-3 text-center">Name</th>
//               <th className="px-2 py-3 text-center">Father Name</th>
//               <th className="px-2 py-3 text-center">Mother Name</th>
//               <th className="px-2 py-3 text-center">Email</th>
//               <th className="px-2 py-3 text-center">Contact No.</th>
//               <th className="px-2 py-3 text-center">Gender</th>
//               <th className="px-2 py-3 text-center">Address</th>
//               <th className="px-2 py-3 text-center">Course</th>
//               <th className="px-2 py-3 text-center">Year</th>
//               <th className="px-2 py-3 text-center">Actions</th>
//             </tr>
//           </thead>
//           <tbody ref={tableRef}></tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default StudentTable;

















// import React, { useRef, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const StudentTable = () => {
//   const dataRef = useRef([]);
//   const navigate = useNavigate();
//   const tableRef = useRef();

//   const renderTable = () => {
//     const tableBody = tableRef.current;
//     tableBody.innerHTML = ''; // Clear current table rows

//     // Extract unique keys dynamically from the first item
//     const fields = dataRef.current.length > 0 ? Object.keys(dataRef.current[0]) : [];

//     dataRef.current.forEach((item, index) => {
//       const row = document.createElement('tr');
//       row.className = index % 2 === 0 ? 'bg-white' : 'bg-gray-100'; // Alternate row colors

//       fields.forEach((field) => {
//         const cell = document.createElement('td');
//         cell.className = 'border px-2 py-3 text-center';
//         cell.textContent = item[field];
//         row.appendChild(cell);
//       });

//       // Add action buttons
//       const actionCell = document.createElement('td');
//       actionCell.className = 'border px-2 py-3';
//       actionCell.innerHTML = `
//         <div class="flex justify-around space-x-2">
//           <button class="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600 transition duration-200">Edit</button>
//           <button class="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition duration-200">Delete</button>
//         </div>
//       `;
//       row.appendChild(actionCell);

//       actionCell.querySelector('.bg-yellow-500').addEventListener('click', () => editData(item));
//       actionCell.querySelector('.bg-red-500').addEventListener('click', () => deleteData(item.id));

//       tableBody.appendChild(row);
//     });

//     // Update the table headers
//     const headerRow = document.querySelector('#table-headers');
//     headerRow.innerHTML = ''; // Clear existing headers
//     fields.forEach((field) => {
//       const header = document.createElement('th');
//       header.className = 'px-2 py-3 text-center';
//       header.textContent = field.charAt(0).toUpperCase() + field.slice(1); // Capitalize field names
//       headerRow.appendChild(header);
//     });

//     // Add a header for actions
//     const actionHeader = document.createElement('th');
//     actionHeader.className = 'px-2 py-3 text-center';
//     actionHeader.textContent = 'Actions';
//     headerRow.appendChild(actionHeader);
//   };

//   const fetchData = async () => {
//     try {
//       const result = await axios.get('http://localhost:5000/api/data');
//       dataRef.current = result.data;
//       renderTable();
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
//     navigate('/edit-student', { state: { student } });
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="max-w-7xl mx-auto mt-10 p-4 sm:p-6 bg-white rounded-lg">
//       <h1 className="text-2xl font-bold text-center text-orange-600 mb-6">Student List</h1>
//       <div className="overflow-x-auto">
//         <table className="table-auto w-full text-xs sm:text-sm">
//           <thead>
//             <tr id="table-headers" className="bg-gray-200 text-gray-700"></tr>
//           </thead>
//           <tbody ref={tableRef}></tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default StudentTable;




















// import React, { useRef, useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';

// const StudentTable = () => {
//   const dataRef = useRef([]);
//   const tableRef = useRef();
//   const navigate = useNavigate();
//   const { searchQuery } = useParams(); // Get searchQuery from URL parameters
//   const [searchInput, setSearchInput] = useState(searchQuery || ''); // Controlled input for search field

//   // Render table rows dynamically
//   const renderTable = () => {
//     const tableBody = tableRef.current;
//     tableBody.innerHTML = ''; // Clear existing rows

//     const fields = dataRef.current.length > 0 ? Object.keys(dataRef.current[0]) : [];

//     dataRef.current.forEach((item, index) => {
//       const row = document.createElement('tr');
//       row.className = index % 2 === 0 ? 'bg-white' : 'bg-gray-100';

//       fields.forEach((field) => {
//         const cell = document.createElement('td');
//         cell.className = 'border px-2 py-3 text-center';
//         cell.textContent = item[field];
//         row.appendChild(cell);
//       });

//       // Action buttons
//       const actionCell = document.createElement('td');
//       actionCell.className = 'border px-2 py-3';
//       actionCell.innerHTML = `
//         <div class="flex justify-around space-x-2">
//           <button class="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600 transition duration-200">Edit</button>
//           <button class="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition duration-200">Delete</button>
//         </div>
//       `;
//       row.appendChild(actionCell);

//       actionCell.querySelector('.bg-yellow-500').addEventListener('click', () => editData(item));
//       actionCell.querySelector('.bg-red-500').addEventListener('click', () => deleteData(item.id));

//       tableBody.appendChild(row);
//     });

//     const headerRow = document.querySelector('#table-headers');
//     headerRow.innerHTML = '';
//     fields.forEach((field) => {
//       const header = document.createElement('th');
//       header.className = 'px-2 py-3 text-center';
//       header.textContent = field.charAt(0).toUpperCase() + field.slice(1);
//       headerRow.appendChild(header);
//     });

//     const actionHeader = document.createElement('th');
//     actionHeader.className = 'px-2 py-3 text-center';
//     actionHeader.textContent = 'Actions';
//     headerRow.appendChild(actionHeader);
//   };

//   // Fetch data from the server
//   const fetchData = async () => {
//     try {
//       const result = await axios.get(`http://localhost:5000/api/data/${searchQuery || ''}`);
//       console.log('API Response:', result.data); // Debugging
//       dataRef.current = result.data;
//       renderTable();
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   // Delete data entry
//   const deleteData = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/data/${id}`);
//       fetchData();
//     } catch (error) {
//       console.error('Error deleting data:', error);
//     }
//   };

//   // Edit data entry
//   const editData = (student) => {
//     navigate('/edit-student', { state: { student } });
//   };

//   // Handle search input change
//   const handleSearch = (event) => {
//     setSearchInput(event.target.value);
//   };

//   // Submit search query
//   const handleSearchSubmit = (event) => {
//     event.preventDefault();
//     navigate(`/students/${searchInput}`);
//   };

//   // Fetch data when searchQuery changes
//   useEffect(() => {
//     fetchData();
//   }, [searchQuery]);

//   return (
//     <div className="max-w-7xl mx-auto mt-10 p-4 sm:p-6 bg-white rounded-lg">
//       <h1 className="text-2xl font-bold text-center text-orange-600 mb-6">Student List</h1>

//       {/* Search Field */}
//       <form onSubmit={handleSearchSubmit} className="flex justify-center mb-6">
//         <input
//           type="text"
//           placeholder="Search by name, class, or other details"
//           value={searchInput}
//           onChange={handleSearch}
//           className="w-full max-w-md border px-3 py-2 rounded-l-md text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
//         />
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-200"
//         >
//           Search
//         </button>
//       </form>

//       <div className="overflow-x-auto">
//         <table className="table-auto w-full text-xs sm:text-sm">
//           <thead>
//             <tr id="table-headers" className="bg-gray-200 text-gray-700"></tr>
//           </thead>
//           <tbody ref={tableRef}></tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default StudentTable;



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const StudentTable = () => {
  const [data, setData] = useState([]); // To store all fetched data
  const [filteredData, setFilteredData] = useState([]); // To storefiltered data
  const [searchQuery, setSearchQuery] = useState(''); // To store thesearch query
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const result = await axios.get('http://localhost:5000/api/data');
      setData(result.data);
      setFilteredData(result.data); // Initialize with full data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const deleteData = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/data/${id}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const editData = (student) => {
    navigate('/edit-students', { state: { student } });
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = data.filter((student) =>
      student.name.toLowerCase().includes(query)
    );
    setFilteredData(filtered);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 bg-white rounded-lg">
      <h1 className="text-2xl sm:text-3xl font-bold text-orange-600
text-center mb-6">Student List</h1>

      {/* Search Input */}
      <div className="mb-4 flex justify-end">
        <input
          type="text"
          placeholder="Search by Name"
          value={searchQuery}
          onChange={handleSearch}
          className="border border-gray-300 rounded-md p-2 w-full
max-w-xs focus:outline-none focus:ring focus:ring-orange-500"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full text-xs sm:text-sm">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="px-2 py-3 text-center">ID</th>
              <th className="px-2 py-3 text-center">Name</th>
              <th className="px-2 py-3 text-center">Father Name</th>
              <th className="px-2 py-3 text-center">Mother Name</th>
              <th className="px-2 py-3 text-center">Email</th>
              <th className="px-2 py-3 text-center">Contact No.</th>
              <th className="px-2 py-3 text-center">Other Contact No.</th>
              <th className="px-2 py-3 text-center">Gender</th>
              <th className="px-2 py-3 text-center">Address</th>
              <th className="px-2 py-3 text-center">Roll Number</th>
              <th className="px-2 py-3 text-center">Course</th>
              <th className="px-2 py-3 text-center">Year</th>
              <th className="px-2 py-3 text-center">Total Present days</th>
              <th className="px-2 py-3 text-center">Total Absent days</th>
              <th className="px-2 py-3 text-center">Attendance Percentage</th>
              <th className="px-2 py-3 text-center">1A Level</th>
              <th className="px-2 py-3 text-center">1B Level</th>
              <th className="px-2 py-3 text-center">1C Level</th>
              <th className="px-2 py-3 text-center">2A Level</th>
              <th className="px-2 py-3 text-center">2B Level</th>
              <th className="px-2 py-3 text-center">2C Level</th>
              <th className="px-2 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={item.id} className={index % 2 === 0 ?
'bg-white' : 'bg-gray-100'}>
                <td className="border px-2 py-3 text-center">{item.id}</td>
                <td className="border px-2 py-3 text-center">{item.name}</td>
                <td className="border px-2 py-3
text-center">{item.fatherName}</td>
                <td className="border px-2 py-3
text-center">{item.motherName}</td>
                <td className="border px-2 py-3 text-center">{item.email}</td>
                <td className="border px-2 py-3 text-center">{item.phone}</td>
                <td className="border px-2 py-3
text-center">{item.otherPhone}</td>
                <td className="border px-2 py-3 text-center">{item.gender}</td>
                <td className="border px-2 py-3 text-center">{item.address}</td>
                <td className="border px-2 py-3 text-center">{item.rollno}</td>
                <td className="border px-2 py-3 text-center">{item.course}</td>
                <td className="border px-2 py-3 text-center">{item.year}</td>
                <td className="border px-2 py-3
text-center">{item.totalpresent}</td>
                <td className="border px-2 py-3
text-center">{item.totalabsent}</td>
                <td className="border px-2 py-3
text-center">{item.attenpercentage}</td>
                <td className="border px-2 py-3 text-center">{item.oneA}</td>
                <td className="border px-2 py-3 text-center">{item.oneB}</td>
                <td className="border px-2 py-3 text-center">{item.oneC}</td>
                <td className="border px-2 py-3 text-center">{item.twoA}</td>
                <td className="border px-2 py-3 text-center">{item.twoB}</td>
                <td className="border px-2 py-3 text-center">{item.twoC}</td>
                <td className="border px-2 py-3 text-center">
                  <div className="flex justify-around space-x-2">
                    <button
                      onClick={() => editData(item)}
                      className="bg-yellow-500 text-white px-2 py-1
rounded-md hover:bg-yellow-600 transition duration-200 text-xs
sm:text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteData(item.id)}
                      className="bg-red-500 text-white px-2 py-1
rounded-md hover:bg-red-600 transition duration-200 text-xs
sm:text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;