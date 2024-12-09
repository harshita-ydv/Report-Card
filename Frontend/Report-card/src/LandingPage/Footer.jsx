import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Project Information */}
        <div>
          <h3 className="text-lg font-semibold mb-2">About ReportCardGen</h3>
          <p className="text-sm">
            ReportCardGen is a comprehensive report card generation platform, designed to simplify student evaluation. It’s a solution for educators to efficiently manage and track student progress.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="text-sm space-y-1">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#features" className="hover:underline">Features</a></li>
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">Email: support@reportcardgen.com</p>
          <p className="text-sm">Phone: +1 (555) 123-4567</p>
          <p className="text-sm">Address: 123 Education Lane, Indore, madhya pradesh</p>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="mt-8 text-center text-xs text-gray-300">
        © 2024 ReportCardGen. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;