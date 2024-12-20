import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { pdf, Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import logo from "../assets/a5MfLJOhTEWxmOyj4-uQKg-Photoroom.png";
import { FiDownload, FiMail } from "react-icons/fi";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
    fontSize: 12,
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
    color: "orange",
  },
  text: {
    fontSize: 12,
    marginBottom: 4,
  },
});

const GenReportCard = () => {
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = async () => {
    try {
      const result = await axios.get("http://localhost:5000/api/data");
      setStudents(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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
        <Page style={styles.page}>
          <View>
            <Image style={styles.logo} src={logo} />
            <Text style={styles.title}>Student Report Card</Text>
          </View>
          <View>
            <Text>Full Name: {student.name}</Text>
            <Text>Father's Name: {student.fatherName}</Text>
            <Text>Roll Number: {student.rollno}</Text>
          </View>
        </Page>
      </Document>
    ).toBlob();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 bg-white rounded-lg shadow text-blue-900">
      <h1 className="text-2xl font-bold text-black-600 text-center mb-6">
        Student Report Management
      </h1>

      {/* Search Input */}
      <div className="mb-4 flex justify-end">
        <div className="w-48">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name"
            className="w-full p-1 border border-blue-900 rounded"
          />
        </div>
      </div>

      {/* Table Wrapper for responsiveness */}
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
                  {student.fatheremail}
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

      {/* "Name not found" message below the table */}
      {filteredStudents.length === 0 && searchQuery && (
        <div className="text-center text-red-500 font-semibold mt-4">
          Name not found
        </div>
      )}
    </div>
  );
};

export default GenReportCard;
