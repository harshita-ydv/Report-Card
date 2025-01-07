// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { pdf, Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
// import logo from "../assets/a5MfLJOhTEWxmOyj4-uQKg-Photoroom.png";
// import { FiDownload, FiMail } from "react-icons/fi";

// const styles = StyleSheet.create({
//   page: {
//     flexDirection: "column",
//     padding: 20,
//     fontSize: 12,
//     border: '5px solid black', // Added border for the page
//     width: 500,
//     height: 500,
//   },
//   logo: {
//     width: 80,
//     height: 80,
//     alignSelf: "center",
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 20,
//     textAlign: "center",
//     marginBottom: 15,
//     color: 'darkblue',
//   },
//   section: {
//     border: '2px solid gray', // Section border
//     padding: 10,
//     marginBottom: 20,
//     borderRadius: 5, // Optional: rounded corners
//     color: "orange",
//   },
//   text: {
//     fontSize: 12,
//     marginBottom: 4,
//   },
//   signatureSection: {
//     // display:"flex",
//     marginTop: 20,
//     marginBottom: 10,
//     // alignItems: 'center',
//   },
//   signatureSectionright: {
//     marginTop: "113%",
//      marginBottom: "10",
//   width: '45%', 
//   position: 'absolute', 
//   right: 0, 
//   textAlign: 'right', 
//   alignItems: 'flex-end'
//   }
// });
// const GenReportCard = () => {
//   const [students, setStudents] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(10);
//   const [searchQuery, setSearchQuery] = useState("");

//   const fetchData = async () => {
//     try {
//       const result = await axios.get("http://localhost:5000/api/data");
//       setStudents(result.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const filteredStudents = students.filter((student) =>
//     student.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [searchQuery]);

//   const paginateData = () => {
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     return filteredStudents.slice(startIndex, endIndex);
//   };

//   const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const generatePDF = async (student) => {
//     const blob = await createPDFBlob(student);
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `${student.name}_report.pdf`;
//     a.click();
//     URL.revokeObjectURL(url);
//   };

//   const sendReport = async (student) => {
//     const blob = await createPDFBlob(student);
//     const formData = new FormData();
//     formData.append("file", blob, `${student.name}_report.pdf`);
//     formData.append("email", student.email);

//     await axios.post("http://localhost:5000/api/send-email", formData, {
//       headers: { "Content-Type": "multipart/form-data" },
//     });
//     alert("Report sent successfully!");
//   };

//   const createPDFBlob = async (student) =>
//     pdf(
      
//       <Document>
//   <Page style={styles.page} size={{ width: 500, height: 700 }}>
//     {/* Logo */}
//     <Image style={styles.logo} src={logo} />
    
//     {/* Title */}
//     <Text style={styles.title}>Student ReportCard</Text>
    
//     {/* Student Details Section */}
//     <View style={styles.section}>
//       <View>
//         <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>Student Details:</Text>
//         <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
//           <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Name:</Text> {student.name}</Text>
//           <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Father Email:</Text> {student.email}</Text>
//         </View>
//         <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
//           <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Father's Name:</Text> {student.fatherName}</Text>
//           <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Mother's Name:</Text> {student.motherName}</Text>
//         </View>
//         <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
//           <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Email:</Text> {student.fatheremail}</Text>
//           <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Contact No:</Text> {student.phone}</Text>
//         </View>
//         <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
//           <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Address:</Text> {student.address}</Text>
//           <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Roll Number:</Text> {student.rollno}</Text>
//         </View>
//       </View>
//     </View>

//     {/* Attendance Section */}
//     <View style={styles.section}>
//       <View>
//         <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>Attendance Details:</Text>
//         <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
//           <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Total Present:</Text> {student.totalpresent}</Text>
//           <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Total Absent:</Text> {student.totalabsent}</Text>
//         </View>
//         <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
//           <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Attendance %:</Text> {student.attenpercentage}</Text>
//           <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Total Days:</Text> {student.totalday}</Text>
//         </View>
//       </View>
//     </View>

//     {/* Academic Performance Section */}
//     <View style={styles.section}>
//       <View>
//         <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>Academic Performance:</Text>
//         <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
//           <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>1A Level:</Text> {student.oneA}</Text>
//           <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>1B Level:</Text> {student.oneB}</Text>
//           <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>1C Level:</Text> {student.oneC}</Text>
//         </View>
//         <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
//           <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>2A Level:</Text> {student.twoA}</Text>
//           <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>2B Level:</Text> {student.twoB}</Text>
//           <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>2C Level:</Text> {student.twoC}</Text>
//         </View>
//       </View>
//     </View>

//     {/* Signature Section */}
//     <View style={styles.signatureSection}>
//       <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>Signature:</Text>
//       <Text style={styles.text}>________________</Text>
//       <Text style={styles.text}>CEO Signatory</Text>
//     </View>
//     <View style={[styles.signatureSectionright,{  paddingRight: 20 }]}>
//       <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>Signature:</Text>
//       <Text style={styles.text}>________________</Text>
//       <Text style={styles.text}>HOD Signatory</Text>
//     </View>

//   </Page>
// </Document>
//     ).toBlob();

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="max-w-7xl mx-auto p-4 bg-white rounded-lg shadow text-blue-900">
//       <h1 className="text-2xl font-bold text-black-600 text-center mb-6">
//         Student Report Management
//       </h1>
//     <div className="max-w-7xl mx-auto p-4 sm:p-6 bg-white rounded-lg">
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
//             <p><strong>Father's Email:</strong> {student.email}</p>
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
//       {/* Search Input */}
//       <div className="mb-4 flex justify-end">
//         <div className="w-48">
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Search by name"
//             className="w-full p-1 border border-blue-900 rounded"
//           />
//         </div>
//       </div>

//       {/* Table Wrapper for responsiveness */}
//       <div className="overflow-x-auto">
//         <table className="w-full border-collapse border border-gray-300">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="border border-gray-300 px-4 py-2">Name</th>
//               <th className="border border-gray-300 px-4 py-2">Father's Name</th>
//               <th className="border border-gray-300 px-4 py-2 hidden md:table-cell">
//                 Father's Email
//               </th>
//               <th className="border border-gray-300 px-4 py-2">Roll No</th>
//               <th className="border border-gray-300 px-4 py-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {paginateData().map((student) => (
//               <tr key={student.id} className="hover:bg-gray-50">
//                 <td className="border border-gray-300 px-4 py-2">{student.name}</td>
//                 <td className="border border-gray-300 px-4 py-2">{student.fatherName}</td>
//                 <td className="border border-gray-300 px-4 py-2 hidden md:table-cell">
//                   {student.fatheremail}
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2">{student.rollno}</td>
//                 <td className="border border-gray-200 px-4 py-3 flex space-x-2 justify-center">
//                   <button
//                     onClick={() => generatePDF(student)}
//                     className="text-blue-500 cursor-pointer hover:text-blue-600"
//                     title="Download PDF"
//                   >
//                     <FiDownload />
//                   </button>
//                   <button
//                     onClick={() => sendReport(student)}
//                     className="text-blue-500 cursor-pointer hover:text-blue-600"
//                     title="Send Mail"
//                   >
//                     <FiMail />
//                   </button>
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
//           className="px-4 py-2 mx-2 text-white bg-blue-500 rounded disabled:bg-blue-300"
//         >
//           Prev
//         </button>
//         <span className="self-center px-4">{`${currentPage} of ${totalPages}`}</span>
//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className="px-4 py-2 mx-2 text-white bg-blue-500 rounded disabled:bg-blue-300"
//         >
//           Next
//         </button>
//       </div>

//       {/* "Name not found" message below the table */}
//       {filteredStudents.length === 0 && searchQuery && (
//         <div className="text-center text-red-500 font-semibold mt-4">
//           Name not found
//         </div>
//       )}
//     </div>
//   );
// };

// export default GenReportCard;






import React, { useEffect, useState } from "react";
import { pdf, Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import axios from "axios";
import { FiDownload, FiMail } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/a5MfLJOhTEWxmOyj4-uQKg-Photoroom.png";
import sig from "../assets/62161cf7328ad280841f653f_esignature-signature.png";
import sig1 from "../assets/png-clipart-line-angle-signature-blue-angle-removebg-preview.png"
import History from "./History";
// import foot from "../assets/rb_33716.png"
import lgo from "../assets/logo.png"
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
    width: 100,
    height: 100,
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
    border: '2px black gray', // Section border
    padding: 10,
    marginBottom: 20,
    borderRadius: 5, // Optional: rounded corners
  
  },
  text: {
    fontSize: 12,
    marginBottom: 4,
  },
  signatureSection: {
    marginTop: 20,
    marginBottom: 10,
  },
  signatureSectionright: {
    marginTop: "119%",
    marginBottom: "10",
    width: '45%', 
    position: 'absolute', 
    right: 0, 
    textAlign: 'right', 
    alignItems: 'flex-end'
  },
  sig: {
    width: 80,
    height: 50,
    marginBottom:-20,
  },
  sig1: {
    width: 80,
    height: 50,
    marginBottom:-20,
  }
});

const GenReportCard = () => {
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/data");
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const paginateData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredStudents.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
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
    formData.append("name", student.name);

    try {
      await axios.post("http://localhost:5000/api/send-email", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Report sent successfully!", { position: "top-center" });
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send report. Please try again.", { position: "top-center" });
    }
  };

  const createPDFBlob = async (student) =>
    pdf(
      <Document>
  <Page style={styles.page} size={{ width: 500, height: 750 }}>
    {/* Logo */}
    <Image style={styles.logo} src={lgo} />
    
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
      <Image style={styles.sig} src={sig} />

      <Text style={styles.text}>________________</Text>
      <Text style={styles.text}>CEO Signatory</Text>
    </View>
    <View style={[styles.signatureSectionright,{  paddingRight: 20 }]}>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Signature:</Text>
      <Image style={styles.sig1} src={sig1} />

      <Text style={styles.text}>________________</Text>
      <Text style={styles.text}>HOD Signatory</Text>
    </View>

  </Page>

</Document>
    ).toBlob();

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>
   <ToastContainer />
    <div className="max-w-7xl mx-auto p-4 bg-white rounded-lg shadow-md text-blue-900">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Student Report Management
        <div className="w-20 sm:w-28 h-1 mx-auto bg-blue-500 rounded-full mt-2"></div>

      </h1>


      {/* Updated Search Bar */}
      <div className="relative w-full mb-4 flex justify-end">
        <div className="w-48 relative">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder=" "
            className={`peer w-full pl-10 p-3 border ${
              searchQuery ? 'border-blue-500' : 'border-gray-300'
            } rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white text-left`}
          />
          {/* Search Icon */}
          <svg
            className="absolute left-1 top-6 transform -translate-y-1/2 text-gray-500"
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
            className={`absolute left-5 top-0 text-gray-500 duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:left-3`}
          >
            Search By Name
          </label>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Father's Name</th>
              <th className="border border-gray-300 px-4 py-2 hidden md:table-cell">
                Father's Email
              </th>
              <th className="border border-gray-300 px-4 py-2">Roll No</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginateData().map((student) => (
              <tr key={student.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{student.name}</td>
                <td className="border border-gray-300 px-4 py-2">{student.fatherName}</td>
                <td className="border border-gray-300 px-4 py-2 hidden md:table-cell">
                  {student.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">{student.rollno}</td>
                <td className="border border-gray-200 px-4 py-3 flex space-x-2 justify-center">
                  <button
                    onClick={() => generatePDF(student)}
                    className="text-blue-500 cursor-pointer hover:text-blue-600"
                    title="Download PDF"
                  >
                    <FiDownload />
                  </button>
                  <button
                    onClick={() => sendReport(student)}
                    className="text-blue-500 cursor-pointer hover:text-blue-600"
                    title="Send Mail"
                  >
                    <FiMail />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
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

      {/* No Results Message */}
      {filteredStudents.length === 0 && searchQuery && (
        <div className="text-center text-red-500 font-semibold mt-4">
          Name not found
        </div>
      )}
    </div>
    </>
  );
};

export default GenReportCard;