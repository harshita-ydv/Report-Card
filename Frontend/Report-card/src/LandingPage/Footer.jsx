import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Project Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Reportify</h3>
          <p className="text-sm leading-relaxed">
            Reportify is a comprehensive report card generation platform, designed to simplify student evaluation.
            It’s a solution for educators to efficiently manage and track student progress.
          </p>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">
            <span className="font-medium">Email:</span> Singaji.com
          </p>
          <p className="text-sm">
            <span className="font-medium">Phone:</span> +1 123456789
          </p>
          <p className="text-sm">
            <span className="font-medium">Address:</span> Singaji Educational Society , Sandalpur, Madhya Pradesh
          </p>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a  rel="noopener noreferrer" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} size="lg"  />
            </a>
            <a  rel="noopener noreferrer" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} size="lg"  />
            </a>
            <a rel="noopener noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} size="lg"  />
            </a>
            <a  rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a rel="noopener noreferrer" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} size="lg"  />
            </a>
          </div>
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
