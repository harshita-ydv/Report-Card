// main code



import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { pdf, Document, Page, Text, Image, View, StyleSheet } from '@react-pdf/renderer';
import axios from 'axios';
import logo from '../assets/a5MfLJOhTEWxmOyj4-uQKg-Photoroom.png';
// Base64 Logo
// const style = ""
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
    color: 'orange',
  },
  text: {
    fontSize: 14,
    marginBottom: 5,
  },
});

const GenReportCard = () => {
  const dataRef = useRef([]);
  const navigate = useNavigate();
  const tableRef = useRef();

  const renderTable = () => {
    const tableBody = tableRef.current;
    tableBody.innerHTML = '';

    dataRef.current.forEach((item, index) => {
      const row = document.createElement('tr');
      row.className = index % 2 === 0 ? 'bg-white' : 'bg-gray-50';
      row.innerHTML = `
         <td class="border px-6 py-3 text-center">${item.id}</td>
        <td class="border px-2 py-3 text-center">${item.name}</td>
        <td class="border px-2 py-3 text-center">${item.fatherName}</td>
        <td class="border px-2 py-3 text-center">${item.motherName}</td>
        <td class="border px-2 py-3 text-center">${item.email}</td>
        <td class="border px-2 py-3 text-center">${item.phone}</td>
        <td class="border px-2 py-3 text-center">${item.otherPhone}</td>
        <td class="border px-2 py-3 text-center">${item.gender}</td>
        <td class="border px-2 py-3 text-center">${item.address}</td>
        <td class="border px-2 py-3 text-center">${item.rollno}</td>
        <td class="border px-2 py-3 text-center">${item.course}</td>
        <td class="border px-2 py-3 text-center">${item.year}</td>
        <td class="border px-2 py-3 text-center">${item.totalpresent}</td>
        <td class="border px-2 py-3 text-center">${item.totalabsent}</td>
        <td class="border px-2 py-3 text-center">${item.attenpercentage}</td>
        <td class="border px-2 py-3 text-center">${item.oneA}</td>
        <td class="border px-2 py-3 text-center">${item.oneB}</td>
        <td class="border px-2 py-3 text-center">${item.oneC}</td>
        <td class="border px-2 py-3 text-center">${item.twoA}</td>
        <td class="border px-2 py-3 text-center">${item.twoB}</td>
        <td class="border px-2 py-3 text-center">${item.twoC}</td>
        <td class="border px-2 py-3">
          <div class="flex justify-around space-x-2">
            <button class="generate-btn bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600 transition duration-200 text-xs sm:text-sm">download</button>
            <button class="send-btn bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 transition duration-200 text-xs sm:text-sm">Send</button>
          </div>
        </td>
      `;
      tableBody.appendChild(row);

      row.querySelector('.generate-btn').addEventListener('click', () => generatePDF(item));
      row.querySelector('.send-btn').addEventListener('click', () => sendReport(item));
    });
  };

  const fetchData = async () => {
    const result = await axios.get('http://localhost:5000/api/data');
    dataRef.current = result.data;
    renderTable();
  };

  const generatePDF = async (student) => {
    const blob = await createPDFBlob(student);
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${student.name}_report.pdf`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const sendReport = async (student) => {
    const blob = await createPDFBlob(student);
    const formData = new FormData();
    formData.append('file', blob, `${student.name}_report.pdf`);
    formData.append('email', student.email);

    await axios.post('http://localhost:5000/api/send-email', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    alert('Report sent successfully!');
  };

  const createPDFBlob = async (student) => {
    const doc = (
      <Document>
        <Page style={styles.page}>
          <Image style={styles.logo} src={logo} />
          <Text style={styles.title}>Student Report</Text>
          <Text style={styles.text}>ID: {student.id}</Text>
          <Text style={styles.text}>Name: {student.name}</Text>
          <Text style={styles.text}>Father Name: {student.fatherName}</Text>
          <Text style={styles.text}>Mother Name: {student.motherNameName}</Text>
          <Text style={styles.text}>Email: {student.email}</Text>
          <Text style={styles.text}>Contact No: {student.phone}</Text>
          <Text style={styles.text}>Other Contact No.: {student.otherPhone}</Text>
          <Text style={styles.text}>Gender: {student.gender}</Text>
          <Text style={styles.text}>Address: {student.address}</Text>
          <Text style={styles.text}>Roll Number: {student.rollno}</Text>
          <Text style={styles.text}>Course: {student.course}</Text>
          <Text style={styles.text}>Year: {student.year}</Text>
          <Text style={styles.text}>Total Present days: {student.totalpresent}</Text>
          <Text style={styles.text}>Total Absent days: {student.totalabsent}</Text>
          <Text style={styles.text}>Attendance Percentage: {student.attenpercentage}</Text>
          <Text style={styles.text}>1A Level: {student.oneA}</Text>
          <Text style={styles.text}>1B Level: {student.oneB}</Text>
          <Text style={styles.text}>1C Level: {student.oneC}</Text>
          <Text style={styles.text}>2A Level: {student.twoA}</Text>
          <Text style={styles.text}>2B Level: {student.twoB}</Text>
          <Text style={styles.text}>2C Level: {student.twoC}</Text>
        </Page>
      </Document>
    );
    return await pdf(doc).toBlob();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto mt-10 p-4 sm:p-6 bg-white rounded-lg">
      {/* <div className="flex justify-center mb-6">
        <img src={logoBase64} alt="Logo" className="w-20 h-20" />
      </div> */}
      <h1 className="text-2xl sm:text-3xl font-bold text-orange-600 text-center mb-6">Student List</h1>
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
          <tbody ref={tableRef}></tbody>
        </table>
      </div>
    </div>
  );
};

export default GenReportCard;






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
//       row.className = index % 2 === 0 ? 'bg-white' : 'bg-white'; // Alternate row colors
//       row.innerHTML = `
//         <td class="border px-2 py-3 text-center">${item.id}</td>
//         <td class="border px-2 py-3 text-center">${item.name}</td>
//         <td class="border px-2 py-3 text-center">${item.fatherName}</td>
//         <td class="border px-2 py-3 text-center">${item.motherName}</td>
//         <td class="border px-2 py-3 text-center">${item.email}</td>
//         <td class="border px-2 py-3 text-center">${item.phone}</td>
//         <td class="border px-2 py-3 text-center">${item.otherPhone}</td>
//         <td class="border px-2 py-3 text-center">${item.gender}</td>
//         <td class="border px-2 py-3 text-center">${item.address}</td>
//         <td class="border px-2 py-3 text-center">${item.rollno}</td>
//         <td class="border px-2 py-3 text-center">${item.course}</td>
//         <td class="border px-2 py-3 text-center">${item.year}</td>
//         <td class="border px-2 py-3 ">
//           <div class="flex justify-around space-x-2">
//             <button class="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 transition duration-200 text-xs sm:text-sm">Send</button>
//             <button class="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600 transition duration-200 text-xs sm:text-sm">Generate</button>
//           </div>
//         </td>
//       `;
//       tableBody.appendChild(row);

//       // Add event listeners for the buttons inside the row
//       row.querySelector('.bg-blue-500').addEventListener('click', () => sendData(item));
//       row.querySelector('.bg-green-500').addEventListener('click', () => generateReport(item));
//     });
//   };

//   const fetchData = async () => {
//     const result = await axios.get('http://localhost:5000/api/data');
//     dataRef.current = result.data;
//     renderTable(); // Re-render table whenever data is fetched
//   };

//   const deleteData = async (id) => {
//     await axios.delete(`http://localhost:5000/api/data/${id}`);
//     fetchData();
//   };

//   const sendData = (student) => {
//     console.log('Sending data for:', student); // Replace this with your actual logic for sending data
//     // Example:
//     // axios.post('http://localhost:9000/api/send', student);
//   };

//   const generateReport = (student) => {
//     navigate(`/view-report/${student.id}`, { state: { student } });
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="max-w-7xl mx-auto mt-10 p-4 sm:p-6 bg-white rounded-lg">
//       <h1 className="text-2xl sm:text-3xl font-bold text-orange-600 text-center mb-6">Student List</h1>
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
//               <th className="px-2 py-3 text-center">Other Contact No.</th>
//               <th className="px-2 py-3 text-center">Gender</th>
//               <th className="px-2 py-3 text-center">Address</th>
//               <th className="px-2 py-3 text-center">Roll Number</th>
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






























// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const GenrateReportCard = () => {
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

//   const sendEmail = async (student) => {
//     try {
//       const emailContent = `
//         Dear ${student.name},

//         Here are your details:
//         Name: ${student.name}
//         Father's Name: ${student.fatherName}
//         Mother's Name: ${student.motherName}
//         Email: ${student.email}
//         Contact No.: ${student.phone}
//         Gender: ${student.gender}
//         Roll Number: ${student.rollno}
//         Course: ${student.course}
//         Year: ${student.year}

//         Regards,
//         Your School Team
//       `;

//       const response = await axios.post('http://localhost:5000/api/send-email', {
//         recipient: student.email, // Add recipient email
//         message: emailContent,    // Add formatted message
//       });

//       if (response.status === 200) {
//         alert('Email sent successfully!');
//       }
//     } catch (error) {
//       console.error('Error sending email:', error);
//       alert('Failed to send email');
//     }
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
//     <div className="max-w-7xl mx-auto  p-4 sm:p-6 bg-white rounded-lg">
//       <h1 className="text-2xl sm:text-3xl font-bold text-orange-600 text-center mb-6">Student List</h1>

//       {/* Search Input */}
//       <div className="mb-4 flex justify-end">
//         <input
//           type="text"
//           placeholder="Search by Name"
//           value={searchQuery}
//           onChange={handleSearch}
//           className="border border-gray-300 rounded-md p-2 w-full max-w-xs focus:outline-none focus:ring focus:ring-orange-500"
//         />
//       </div>

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
//               <th className="px-2 py-3 text-center">Roll Number</th>
//               <th className="px-2 py-3 text-center">Course</th>
//               <th className="px-2 py-3 text-center">Year</th>
//               <th className="px-2 py-3 text-center">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredData.map((item, index) => (
//               <tr key={item.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
//                 <td className="border px-2 py-3 text-center">{item.id}</td>
//                 <td className="border px-2 py-3 text-center">{item.name}</td>
//                 <td className="border px-2 py-3 text-center">{item.fatherName}</td>
//                 <td className="border px-2 py-3 text-center">{item.motherName}</td>
//                 <td className="border px-2 py-3 text-center">{item.email}</td>
//                 <td className="border px-2 py-3 text-center">{item.phone}</td>
//                 <td className="border px-2 py-3 text-center">{item.gender}</td>
//                 <td className="border px-2 py-3 text-center">{item.rollno}</td>
//                 <td className="border px-2 py-3 text-center">{item.course}</td>
//                 <td className="border px-2 py-3 text-center">{item.year}</td>
//                 <td className="border px-2 py-3 text-center">
//                   <button
//                     onClick={() => sendEmail(item)} // Trigger send email on click
//                     className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 transition duration-200 text-xs sm:text-sm"
//                   >
//                     Send Email
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default GenrateReportCard;
