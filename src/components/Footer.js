import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div className=" bg-gray-900 text-gray-100">
      <div className="p-6 space-y-6">
        <footer>
          <div className="container flex flex-col items-center justify-between p-4 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
            <Link to="/" className=" font-bold text-2xl text-gray-100">
              Codecamp
            </Link>

            <p className="text-sm text-gray-100">
              © Copyright 2023. All Rights Reserved.
            </p>

            <div className="flex -mx-2">
              <a href="#" className="mx-2 text-gray-100" aria-label="Facebook">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="mx-2 text-gray-100" aria-label="Github">
                <FaGithub className="h-5 w-5" />
              </a>
              <a href="#" className="mx-2 text-gray-100" aria-label="LinkedIn">
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
