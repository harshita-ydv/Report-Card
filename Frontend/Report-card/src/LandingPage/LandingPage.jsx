import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function LandingPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const navigate = useNavigate();

  return (
    <>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="bg-gray-100 text-gray-900 min-h-screen pt-[64px] p-8 transition-colors duration-300 mt-9">
        <div className="bg-white container mx-auto rounded-lg shadow-lg p-8 transition-all duration-300">
          {/* Centered Heading */}
          <h1 className="text-5xl font-extrabold text-center mb-12 text-blue-900">
            Report Card Generator Made Easy
          </h1>

          {/* Main Section */}
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            {/* Image Section */}
            <div className="flex-1 mb-8 md:mb-0" data-aos="fade-up">
              <img
                src="https://img.freepik.com/free-vector/modern-education-concept-tablet-computer_3446-305.jpg"
                alt="Educational Graphic"
                className="w-full h-auto max-h-80 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Content Section */}
            <div className="flex-1 text-center md:text-left" data-aos="fade-up">
              <h2 className="text-4xl font-bold mb-4">
                Welcome to Reportify
              </h2>
              <p className="text-lg mb-6">
                Empowering students, educators, and parents with a streamlined report card generation system. Whether for academics or other achievements, we make the process simple, accurate, and efficient.
              </p>
              <p className="text-lg mb-6">
                Start managing and generating report cards with ease, track progress, and ensure success through an accessible, technology-driven approach to education.
              </p>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="container mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-2xl"
            data-aos="fade-up"
          >
            <img
              src="https://img.freepik.com/free-vector/online-exams-concept_23-2148577593.jpg"
              alt="Easy Management"
              className="h-40 w-full object-cover rounded-md mb-4 transition-transform transform hover:scale-105"
            />
            <h3 className="text-2xl font-semibold mb-2">Easy Management</h3>
            <p>
              Effortlessly manage student data, grades, and progress all in one place.
            </p>
          </div>
          <div
            className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-2xl"
            data-aos="fade-up"
          >
            <img
              src="https://img.freepik.com/free-vector/report-concept-illustration_114360-806.jpg"
              alt="Customizable Reports"
              className="h-40 w-full object-cover rounded-md mb-4 transition-transform transform hover:scale-105"
            />
            <h3 className="text-2xl font-semibold mb-2">Customizable Reports</h3>
            <p>
              Create and customize report cards to match the specific needs of each student.
            </p>
          </div>
          <div
            className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-2xl"
            data-aos="fade-up"
          >
            <img
              src="https://img.freepik.com/free-vector/progress-concept-illustration_114360-1837.jpg"
              alt="Progress Tracking"
              className="h-40 w-full object-cover rounded-md mb-4 transition-transform transform hover:scale-105"
            />
            <h3 className="text-2xl font-semibold mb-2">Progress Tracking</h3>
            <p>
              Monitor student progress over time with detailed insights and data analytics.
            </p>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="bg-blue-100 container mx-auto mt-16 text-center p-8 text-blue-900 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Get Started with ReportCardGen</h2>
          <p className="text-lg mb-6">
            Join thousands of educators using ReportCardGen to simplify report card management.
          </p>
          <button
            onClick={() => navigate('/login')}
            className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-500 transition-all"
          >
            Sign In Now
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default LandingPage;
