

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { pdf, Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
// import logo from '../assets/a5MfLJOhTEWxmOyj4-uQKg-Photoroom.png'; // Ensure this path is correct

// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'column',
//     padding: 20,
//     fontSize: 12,
//   },
//   logo: {
//     width: 80,
//     height: 80,
//     alignSelf: 'center',
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 20,
//     textAlign: 'center',
//     marginBottom: 15,
//     color: 'orange',
//   },
//   text: {
//     fontSize: 12,
//     marginBottom: 4,
//   },
// });

// const GenReportCard = () => {
//   const [students, setStudents] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const navigate = useNavigate();

//   const fetchData = async () => {
//     try {
//       const result = await axios.get('http://localhost:5000/api/data');
//       setStudents(result.data);
//       setFilteredData(result.data); // Initialize with full data
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const generatePDF = async (student) => {
//     const blob = await createPDFBlob(student);
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = `${student.name}_report.pdf`;
//     a.click();
//     URL.revokeObjectURL(url);
//   };

//   const sendReport = async (student) => {
//     const blob = await createPDFBlob(student);
//     const formData = new FormData();
//     formData.append('file', blob, `${student.name}_report.pdf`);
//     formData.append('email', student.email);

//     await axios.post('http://localhost:5000/api/send-email', formData, {
//       headers: { 'Content-Type': 'multipart/form-data' },
//     });
//     alert('Report sent successfully!');
//   };

//   const createPDFBlob = async (student) =>
//     pdf(
//       <Document>
//         <Page style={styles.page} size={{ width: 400, height: 500 }}>
//           {/* Logo */}
//           <Image style={styles.logo} src={logo} />
          
//           {/* Title */}
//           <Text style={styles.title}>Student Report</Text>
          
//           {/* Student Details Section */}
//           <View style={{ marginBottom: 20 }}>
//             <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>Student Details:</Text>
//             <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
//               {/* <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>ID:</Text> {student.id}</Text> */}
//               <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Name:</Text> {student.name}</Text>
//               <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Father Email:</Text> {student.email}</Text>

//             </View>
//             <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
//               <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Father's Name:</Text> {student.fatherName}</Text>
//               <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Mother's Name:</Text> {student.motherName}</Text>
//             </View>
//             <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
//               <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Email:</Text> {student.fatheremail}</Text>
//               <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Contact No:</Text> {student.phone}</Text>
//             </View>
//             <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
//               <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Address:</Text> {student.address}</Text>

//               <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Roll Number:</Text> {student.rollno}</Text>
//             </View>
//           </View>
  
//           {/* Attendance Section */}
//           <View style={{ marginBottom: 20 }}>
//             <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>Attendance Details:</Text>
//             <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
//               <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Total Present:</Text> {student.totalpresent}</Text>
//               <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Total Absent:</Text> {student.totalabsent}</Text>
//             </View>
//             <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
//               <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Attendance %:</Text> {student.attenpercentage}</Text>
//               <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Total Days</Text> {student.totalday}</Text>

//             </View>
//           </View>
  
//           {/* Academic Performance Section */}
//           <View>
//             <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>Academic Performance:</Text>
//             <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
//               <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>1A Level:</Text> {student.oneA}</Text>
//               <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>1B Level:</Text> {student.oneB}</Text>
//             </View>
//             <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
//               <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>2A Level:</Text> {student.twoA}</Text>
//               <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>2B Level:</Text> {student.twoB}</Text>
//             </View>
//           </View>
//         </Page>
//       </Document>
//     ).toBlob();
  

//   const handleSearch = (e) => {
//     const query = e.target.value.toLowerCase();
//     setSearchQuery(query);

//     const filtered = students.filter((student) =>
//       student.name.toLowerCase().includes(query)
//     );
//     setFilteredData(filtered);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="max-w-7xl mx-auto p-4 sm:p-6 bg-white rounded-lg">
//       <h1 className="text-2xl sm:text-3xl font-bold text-orange-600 text-center mb-6">Student Report Management</h1>

//       {/* Search Input */}
//       <div className="mb-4 flex justify-end">
//         <input
//           type="text"
//           placeholder="Search by name"
//           value={searchQuery}
//           onChange={handleSearch}
//           className="p-2 border border-gray-300 rounded"
//         />
//       </div>

//       {/* Student Table */}
//       <table className="table-auto  min-w-full bg-white border border-gray-200">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 border text-center">Name</th>
//             <th className="px-2 py-3 border text-center">Father's Name</th>
//             <th className="px-2 py-3 border text-center">Father's email</th>

//             <th className="py-2 px-4 border text-center">Roll No</th>
//             <th className="px-2 py-4 border text-center"> Student Email</th>
//             <th className="px-2 py-3 border text-center">Phone</th>


//            <th className="py-2 px-4 border text-center">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.map((student) => (
//             <tr key={student.id}>
//               <td className="py-2 px-4 border text-center">{student.name}</td>
//               <td className="px-4 py-2 border text-center">{student.fatherName}</td>
//               <td className="border px-2 py-3 text-center">{student.email}</td>

//              <td className="py-2 px-4 border text-center">{student.rollno}</td>
//              <td className="border px-2 py-3 text-center">{student.fatheremail}</td>
//              <td className="border px-4 py-2 text-center">{student.phone}</td>


//               <td className="py-2 px-4 border-b text-center">
//                 <button
//                   onClick={() => generatePDF(student)}
//                   className="bg-blue-500 text-white py-1 px-4 rounded mr-2"
//                 >
//                   Generate PDF
//                 </button>
//                 <button
//                   onClick={() => sendReport(student)}
//                   className="bg-green-500 text-white py-1 px-4 rounded"
//                 >
//                   Send Email
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default GenReportCard;













// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { pdf, Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
// import logo from '../assets/a5MfLJOhTEWxmOyj4-uQKg-Photoroom.png';

// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'column',
//     padding: 20,
//     fontSize: 12,
//   },
//   logo: {
//     width: 80,
//     height: 80,
//     alignSelf: 'center',
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 20,
//     textAlign: 'center',
//     marginBottom: 15,
//     color: 'orange',
//   },
//   text: {
//     fontSize: 12,
//     marginBottom: 4,
//   },
// });

// const GenReportCard = () => {
//   const [students, setStudents] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const navigate = useNavigate();

//   const fetchData = async () => {
//     try {
//       const result = await axios.get('http://localhost:5000/api/data');
//       setStudents(result.data);
//       setFilteredData(result.data); // Initialize with full data
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const generatePDF = async (student) => {
//     const blob = await createPDFBlob(student);
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = `${student.name}_report.pdf`;
//     a.click();
//     URL.revokeObjectURL(url);
//   };

//   const sendReport = async (student) => {
//     const blob = await createPDFBlob(student);
//     const formData = new FormData();
//     formData.append('file', blob, `${student.name}_report.pdf`);
//     formData.append('email', student.email);

//     await axios.post('http://localhost:5000/api/send-email', formData, {
//       headers: { 'Content-Type': 'multipart/form-data' },
//     });
//     alert('Report sent successfully!');
//   };

//   const createPDFBlob = async (student) =>
//     pdf(
//       <Document>
//                <Page style={styles.page} size={{ width: 500, height: 500 }}>
//                  {/* Logo */}
//                  <Image style={styles.logo} src={logo} />
                
//                  {/* Title */}
//                  <Text style={styles.title}>Student Report</Text>
                
//                  {/* Student Details Section */}
//                  <View style={{ marginBottom: 20 }}>
//                <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>Student Details:</Text>
//                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
//            {/* <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>ID:</Text> {student.id}</Text> */}
//                     <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Name:</Text> {student.name}</Text>
//                      <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Father Email:</Text> {student.email}</Text>
      
//                    </View>
//                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
//                      <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Father's Name:</Text> {student.fatherName}</Text>
//                      <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Mother's Name:</Text> {student.motherName}</Text>
//                    </View>
//                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
//                      <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Email:</Text> {student.fatheremail}</Text>
//                     <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Contact No:</Text> {student.phone}</Text>
//                  </View>
//                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
//                     <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Address:</Text> {student.address}</Text>
      
//                      <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Roll Number:</Text> {student.rollno}</Text>
//                    </View>
//                  </View>
        
//                  {/* Attendance Section */}
//                <View style={{ marginBottom: 20 }}>
//                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>Attendance Details:</Text>
//                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
//                      <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Total Present:</Text> {student.totalpresent}</Text>
//                      <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Total Absent:</Text> {student.totalabsent}</Text>
//                    </View>
//                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
//                      <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Attendance %:</Text> {student.attenpercentage}</Text>
//                      <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Total Days</Text> {student.totalday}</Text>
      
//                  </View>
//              </View>
        
//                {/* Academic Performance Section */}
//                <View>
//                   <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>Academic Performance:</Text>
//                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
//                    <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>1A Level:</Text> {student.oneA}</Text>
//                    <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>1B Level:</Text> {student.oneB}</Text>
//                </View>
//               <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
//                    <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>2A Level:</Text> {student.twoA}</Text>
//                  <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>2B Level:</Text> {student.twoB}</Text>
//                </View>
//                  </View>
//              </Page>
//             </Document>
//     ).toBlob();

//   const handleSearch = (e) => {
//     const query = e.target.value.toLowerCase();
//     setSearchQuery(query);
//     const filtered = students.filter((student) =>
//       student.name.toLowerCase().includes(query)
//     );
//     setFilteredData(filtered);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="max-w-7xl mx-auto p-4 sm:p-6 bg-white rounded-lg">
//       <h1 className="text-2xl sm:text-3xl font-bold text-orange-600 text-center mb-6">
//         Student Report Management
//       </h1>

//       <div className="mb-4 flex justify-end">
//         <input
//           type="text"
//           placeholder="Search by name"
//           value={searchQuery}
//           onChange={handleSearch}
//           className="p-2 border border-gray-300 rounded"
//         />
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredData.map((student) => (
//           <div
//             key={student.id}
//             className="border border-gray-300 rounded-lg shadow p-4 bg-gray-50"
//           >
//             <h3 className="text-xl font-semibold text-orange-600 mb-2">
//               {student.name}
//             </h3>
//             <p><strong>Father's Name:</strong> {student.fatherName}</p>
//             <p><strong>Father's Email:</strong> {student.fatheremail}</p>
//             <p><strong>Roll No:</strong> {student.rollno}</p>
//             <p><strong>Contact:</strong> {student.phone}</p>

//             <div className="mt-4 flex space-x-2">
//               <button
//                 onClick={() => generatePDF(student)}
//                 className="bg-blue-500 text-white py-1 px-4 rounded"
//               >
//                 Generate PDF
//               </button>
//               <button
//                 onClick={() => sendReport(student)}
//                 className="bg-green-500 text-white py-1 px-4 rounded"
//               >
//                 Send Email
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GenReportCard;
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { pdf, Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
// import { FaFilePdf, FaEnvelope } from 'react-icons/fa';
// import logo from '../assets/a5MfLJOhTEWxmOyj4-uQKg-Photoroom.png';

// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'column',
//     padding: 20,
//     fontSize: 12,
//   },
//   logo: {
//     width: 80,
//     height: 80,
//     alignSelf: 'center',
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 20,
//     textAlign: 'center',
//     marginBottom: 15,
//     color: 'orange',
//   },
//   text: {
//     fontSize: 12,
//     marginBottom: 4,
//   },
// });

// const GenReportCard = () => {
//   const [students, setStudents] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const navigate = useNavigate();

//   const fetchData = async () => {
//     try {
//       const result = await axios.get('http://localhost:5000/api/data');
//       setStudents(result.data);
//       setFilteredData(result.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const generatePDF = async (student) => {
//     const blob = await createPDFBlob(student);
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = `${student.name}_report.pdf`;
//     a.click();
//     URL.revokeObjectURL(url);
//   };

//   const sendReport = async (student) => {
//     const blob = await createPDFBlob(student);
//     const formData = new FormData();
//     formData.append('file', blob, `${student.name}_report.pdf`);
//     formData.append('email', student.email);

//     await axios.post('http://localhost:5000/api/send-email', formData, {
//       headers: { 'Content-Type': 'multipart/form-data' },
//     });
//     alert('Report sent successfully!');
//   };

//   const createPDFBlob = async (student) =>
//     pdf(
//       <Document>
//         <Page style={styles.page} size={{ width: 500, height: 500 }}>
//           <Image style={styles.logo} src={logo} />
//           <Text style={styles.title}>Student Report</Text>
//           <View style={{ marginBottom: 20 }}>
//             <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>Student Details:</Text>
//             <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Name:</Text> {student.name}</Text>
//             <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Father Email:</Text> {student.email}</Text>
//             <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Father's Name:</Text> {student.fatherName}</Text>
//             <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Mother's Name:</Text> {student.motherName}</Text>
//             <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Address:</Text> {student.address}</Text>
//             <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Roll Number:</Text> {student.rollno}</Text>
//           </View>
//         </Page>
//       </Document>
//     ).toBlob();

//   const handleSearch = (e) => {
//     const query = e.target.value.toLowerCase();
//     setSearchQuery(query);
//     const filtered = students.filter((student) =>
//       student.name.toLowerCase().includes(query)
//     );
//     setFilteredData(filtered);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="max-w-7xl mx-auto p-4 sm:p-6 bg-white rounded-lg">
//       <h1 className="text-2xl sm:text-3xl font-bold text-black-600 text-center mb-6">
//         Student Report Management
//       </h1>

//       <div className="mb-4 flex justify-end">
//         <input
//           type="text"
//           placeholder="Search by name"
//           value={searchQuery}
//           onChange={handleSearch}
//           className="p-2 border border-gray-300 rounded"
//         />
//       </div>

//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           <tr>
//             <th className="border px-4 py-2">Name</th>
//             <th className="border px-4 py-2">Father's Name</th>
//             <th className="border px-4 py-2">Father's Email</th>
//             <th className="border px-4 py-2">Roll No</th>
//             <th className="border px-4 py-2">Contact</th>
//             <th className="border px-4 py-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.map((student) => (
//             <tr key={student.id} className="text-center">
//               <td className="border px-4 py-2">{student.name}</td>
//               <td className="border px-4 py-2">{student.fatherName}</td>
//               <td className="border px-4 py-2">{student.fatheremail}</td>
//               <td className="border px-4 py-2">{student.rollno}</td>
//               <td className="border px-4 py-2">{student.phone}</td>
//               <td className="border px-4 py-2 flex justify-center items-center space-x-2 relative">
//                 <div className="group">
//                   <button onClick={() => generatePDF(student)} className="text-blue-500 hover:text-blue-700">
//                     <FaFilePdf size={20} />
//                   </button>
//                   <div className="absolute bg-gray-700 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity -top-8 left-1/2 transform -translate-x-1/2">
//                     Download PDF
//                   </div>
//                 </div>
//                 <div className="group">
//                   <button onClick={() => sendReport(student)} className="text-green-500 hover:text-green-700">
//                     <FaEnvelope size={20} />
//                   </button>
//                   <div className="absolute bg-gray-700 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity -top-8 left-1/2 transform -translate-x-1/2">
//                     Send Mail
//                   </div>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default GenReportCard;
////////////////////////////////////////////////////////////////////////////////////////

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { pdf, Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import logo from "../assets/a5MfLJOhTEWxmOyj4-uQKg-Photoroom.png";
import { FiDownload, FiMail } from "react-icons/fi";
import ReactPaginate from "react-paginate";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
    fontSize: 12,
    border: '5px solid black', // Added border for the page
    width: 500,
    height: 500,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 15,
    color: 'darkblue',
  },
  section: {
    border: '2px solid gray', // Section border
    padding: 10,
    marginBottom: 20,
    borderRadius: 5, // Optional: rounded corners
    color: "orange",
  },
  text: {
    fontSize: 12,
    marginBottom: 4,
  },
  signatureSection: {
    // display:"flex",
    marginTop: 20,
    marginBottom: 10,
    // alignItems: 'center',
  },
  signatureSectionright: {
    marginTop: "113%",
     marginBottom: "10",
  width: '45%', 
  position: 'absolute', 
  right: 0, 
  textAlign: 'right', 
  alignItems: 'flex-end'
  }
});
const GenReportCard = () => {
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const fetchData = async () => {
    try {
      const result = await axios.get("http://localhost:5000/api/data");
      setStudents(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const generatePDF = async (student) => {
    const blob = await createPDFBlob(student);
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${student.name}_report.pdf`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const sendReport = async (student) => {
    const blob = await createPDFBlob(student);
    const formData = new FormData();
    formData.append("file", blob, `${student.name}_report.pdf`);
    formData.append("email", student.email);

    await axios.post("http://localhost:5000/api/send-email", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    alert("Report sent successfully!");
  };

  const createPDFBlob = async (student) =>
    pdf(
      
      <Document>
  <Page style={styles.page} size={{ width: 500, height: 700 }}>
    {/* Logo */}
    <Image style={styles.logo} src={logo} />
    
    {/* Title */}
    <Text style={styles.title}>Student ReportCard</Text>
    
    {/* Student Details Section */}
    <View style={styles.section}>
      <View>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>Student Details:</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Name:</Text> {student.name}</Text>
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Father Email:</Text> {student.email}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Father's Name:</Text> {student.fatherName}</Text>
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Mother's Name:</Text> {student.motherName}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Email:</Text> {student.fatheremail}</Text>
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Contact No:</Text> {student.phone}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Address:</Text> {student.address}</Text>
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Roll Number:</Text> {student.rollno}</Text>
        </View>
      </View>
    </View>

    {/* Attendance Section */}
    <View style={styles.section}>
      <View>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>Attendance Details:</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Total Present:</Text> {student.totalpresent}</Text>
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Total Absent:</Text> {student.totalabsent}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Attendance %:</Text> {student.attenpercentage}</Text>
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Total Days:</Text> {student.totalday}</Text>
        </View>
      </View>
    </View>

    {/* Academic Performance Section */}
    <View style={styles.section}>
      <View>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>Academic Performance:</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>1A Level:</Text> {student.oneA}</Text>
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>1B Level:</Text> {student.oneB}</Text>
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>1C Level:</Text> {student.oneC}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>2A Level:</Text> {student.twoA}</Text>
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>2B Level:</Text> {student.twoB}</Text>
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>2C Level:</Text> {student.twoC}</Text>
        </View>
      </View>
    </View>

    {/* Signature Section */}
    <View style={styles.signatureSection}>
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>Signature:</Text>
      <Text style={styles.text}>________________</Text>
      <Text style={styles.text}>CEO Signatory</Text>
    </View>
    <View style={[styles.signatureSectionright,{  paddingRight: 20 }]}>
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>Signature:</Text>
      <Text style={styles.text}>________________</Text>
      <Text style={styles.text}>HOD Signatory</Text>
    </View>

  </Page>
</Document>
    ).toBlob();

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const pageCount = Math.ceil(students.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentItems = students.slice(offset, offset + itemsPerPage);

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-bold text-black-600 text-center mb-6">
        Student Report Management
      </h1>
    <div className="max-w-7xl mx-auto p-4 sm:p-6 bg-white rounded-lg">
      <div className="mb-4 flex justify-end">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearch}
          className="p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((student) => (
          <div
            key={student.id}
            className="border border-gray-300 rounded-lg shadow p-4 bg-gray-50"
          >
            <h3 className="text-xl font-semibold text-orange-600 mb-2">
              {student.name}
            </h3>
            <p><strong>Father's Name:</strong> {student.fatherName}</p>
            <p><strong>Father's Email:</strong> {student.email}</p>
            <p><strong>Roll No:</strong> {student.rollno}</p>
            <p><strong>Contact:</strong> {student.phone}</p>

            <div className="mt-4 flex space-x-2">
              <button
                onClick={() => generatePDF(student)}
                className="bg-blue-500 text-white py-1 px-4 rounded"
              >
                Generate PDF
              </button>
              <button
                onClick={() => sendReport(student)}
                className="bg-green-500 text-white py-1 px-4 rounded"
              >
                Send Email
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default GenReportCard;
