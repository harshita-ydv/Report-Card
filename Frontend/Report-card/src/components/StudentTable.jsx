
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
    <div>
    <div className="bg-white text-blue-900">
      <h1 className="text-2xl font-bold text-center mb-6">Student Management</h1>

      <div className="relative w-full mb-4 flex justify-end">
          <div className="w-48 relative">
            {/* Search Input */}
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch} // Changed to handleSearch function
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
      </div>{selectedStudent && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-blue-100 p-4 rounded-lg shadow-lg w-11/12 max-w-3xl">
      <div className="bg-white shadow-md rounded-lg p-4 space-y-4">
        <h2 className="text-xl font-bold text-gray-800 mb-3">
          {selectedStudent.name}'s Details
        </h2>

        {/* Personal Details Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Personal Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3">
            <p className="bg-gray-100 py-2 px-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-200">
              <strong className="text-gray-800">Father's Name:</strong> {selectedStudent.fatherName}
            </p>
            <p className="bg-gray-100 py-2 px-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-200">
              <strong className="text-gray-800">Father's Email:</strong> {selectedStudent.email}
            </p>
            <p className="bg-gray-100 py-2 px-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-200">
              <strong className="text-gray-800">Mother's Name:</strong> {selectedStudent.motherName}
            </p>
            <p className="bg-gray-100 py-2 px-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-200">
              <strong className="text-gray-800">Student Email:</strong> {selectedStudent.fatheremail}
            </p>
            <p className="bg-gray-100 py-2 px-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-200">
              <strong className="text-gray-800">Contact No:</strong> {selectedStudent.phone}
            </p>
            <p className="bg-gray-100 py-2 px-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-200">
              <strong className="text-gray-800">Other Contact No:</strong> {selectedStudent.otherPhone}
            </p>
            <p className="bg-gray-100 py-2 px-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-200">
              <strong className="text-gray-800">Gender:</strong> {selectedStudent.gender}
            </p>
            <p className="bg-gray-100 py-2 px-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-200">
              <strong className="text-gray-800">Address:</strong> {selectedStudent.address}
            </p>
            <p className="bg-gray-100 py-2 px-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-200">
              <strong className="text-gray-800">Roll No:</strong> {selectedStudent.rollno}
            </p>
          </div>
        </div>

        {/* Education Details Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Education Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3">
            <p className="bg-gray-100 py-2 px-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-200">
              <strong className="text-gray-800">Course:</strong> {selectedStudent.course}
            </p>
            <p className="bg-gray-100 py-2 px-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-200">
              <strong className="text-gray-800">Year:</strong> {selectedStudent.year}
            </p>
            <p className="bg-gray-100 py-2 px-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-200">
              <strong className="text-gray-800">Total Present:</strong> {selectedStudent.totalpresent}
            </p>
            <p className="bg-gray-100 py-2 px-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-200">
              <strong className="text-gray-800">Total Absent:</strong> {selectedStudent.totalabsent}
            </p>
            <p className="bg-gray-100 py-2 px-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-200">
              <strong className="text-gray-800">Total Days:</strong> {selectedStudent.totalday}
            </p>
            <p className="bg-gray-100 py-2 px-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-200">
              <strong className="text-gray-800">1A:</strong> {selectedStudent.oneA}
            </p>
            <p className="bg-gray-100 py-2 px-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-200">
              <strong className="text-gray-800">1B:</strong> {selectedStudent.oneB}
            </p>
            <p className="bg-gray-100 py-2 px-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-200">
              <strong className="text-gray-800">1C:</strong> {selectedStudent.oneC}
            </p>
            <p className="bg-gray-100 py-2 px-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-200">
              <strong className="text-gray-800">2A:</strong> {selectedStudent.twoA}
            </p>
            <p className="bg-gray-100 py-2 px-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-200">
              <strong className="text-gray-800">2B:</strong> {selectedStudent.twoB}
            </p>
            <p className="bg-gray-100 py-2 px-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-200">
              <strong className="text-gray-800">2C:</strong> {selectedStudent.twoC}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-3">
        <button
          onClick={handleCloseDetails}
          className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600 text-sm"
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