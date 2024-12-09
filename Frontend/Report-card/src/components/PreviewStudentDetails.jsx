import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';

const PreviewStudentDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { student } = location.state;

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.text('Student Details', 10, 10);
    Object.keys(student).forEach((key, index) => {
      doc.text(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${student[key]}`, 10, 20 + index * 10);
    });
    doc.save('student-details.pdf');
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center text-green-600 mb-6">Student Details</h1>
      <div className="grid grid-cols-2 gap-4">
        {Object.keys(student).map((key) => (
          <div key={key}>
            <p className="font-semibold">{key.charAt(0).toUpperCase() + key.slice(1)}:</p>
            <p>{student[key]}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={handleDownloadPDF}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Download
        </button>
        <button
          onClick={() => navigate(-1)}
          className="ml-4 bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition duration-200"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default PreviewStudentDetails;
