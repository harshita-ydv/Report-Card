import React from 'react';

function Footer() {
  return (
    <footer className=" bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Project Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About ReportCardGen</h3>
          <p className="text-sm leading-relaxed">
            ReportCardGen is a comprehensive report card generation platform, designed to simplify student evaluation. It’s a solution for educators to efficiently manage and track student progress.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-center">Quick Links</h3>
          <ul className="text-sm space-y-2 text-center">
            <li>
              <a href="#home" className="hover:underline hover:text-gray-300 transition duration-200">
                Home
              </a>
            </li>
            <li>
              <a href="#features" className="hover:underline hover:text-gray-300 transition duration-200">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline hover:text-gray-300 transition duration-200">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline hover:text-gray-300 transition duration-200">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">
            <span className="font-medium">Email:</span> support@reportcardgen.com
          </p>
          <p className="text-sm">
            <span className="font-medium">Phone:</span> +1 (555) 123-4567
          </p>
          <p className="text-sm">
            <span className="font-medium">Address:</span> 123 Education Lane, Indore, Madhya Pradesh
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-xs text-gray-400">
        © 2024 ReportCardGen. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
