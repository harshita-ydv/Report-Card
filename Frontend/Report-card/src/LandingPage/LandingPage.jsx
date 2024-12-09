import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer';


function LandingPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="bg-gray-100 text-gray-900 min-h-screen p-8 transition-colors duration-300">
        <div className="bg-white container mx-auto rounded-lg shadow-lg p-8 transition-all duration-300">
          {/* Centered Heading */}
          <h1 className="text-5xl font-extrabold text-center mb-12">
            Report Card Generation Made Easy
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
                Welcome to ReportCardGen
              </h2>
              <p className="text-lg mb-6">
                Empowering students, educators, and parents with a streamlined report card generation system. Whether for academics or other achievements, we make the process simple, accurate, and efficient.
              </p>
              <p className="text-lg mb-6">
                Start managing and generating report cards with ease, track progress, and ensure success through an accessible, technology-driven approach to education.
              </p>
            </div>
          </div>

          {/* Additional Content Section */}
          <div className="mt-16 text-center md:text-left" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose ReportCardGen?
            </h2>
            <p className="text-lg mb-6">
              Our platform offers intuitive tools to assist educators in managing student information, creating custom report cards, and tracking academic progress seamlessly. From grade input to personalized feedback, ReportCardGen has it all.
            </p>
            <p className="text-lg mb-6">
              Embrace digital efficiency in education, and join us in providing students with a clear, concise record of their academic journey.
            </p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="container mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
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

          {/* Card 2 */}
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

          {/* Card 3 */}
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
        <div className="bg-blue-800 container mx-auto mt-16 text-center p-8 text-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Get Started with ReportCardGen</h2>
          <p className="text-lg mb-6">
            Join thousands of educators using ReportCardGen to simplify report card management.
          </p>
          <button className="bg-yellow-500 text-blue-900 font-semibold py-2 px-6 rounded-full hover:bg-yellow-400 transition-all">
            Sign Up Now
          </button>
        </div>
      </div>
      
    </>
  );
}

export default LandingPage;
