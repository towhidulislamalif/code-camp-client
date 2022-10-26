import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo/logo63.png';

function Header() {
  return (
    <div className=" bg-gray-800 text-gray-100">
      <div className=" space-y-8">
        <header className="container flex items-center justify-between h-16 px-4 mx-auto rounded">
          <Link rel="noopener noreferrer" to="/" aria-label="Homepage">
            <img src={logo} alt="" />
          </Link>
          <div className="items-center hidden space-x-4 md:flex">
            <div className="space-x-2">
              <Link rel="noopener noreferrer" to="/catalog">
                Catalog
              </Link>
              <Link rel="noopener noreferrer" to="/pricing">
                Pricing
              </Link>
              <Link rel="noopener noreferrer" to="/blogs">
                Blogs
              </Link>
              <Link rel="noopener noreferrer" to="/faq">
                Faq
              </Link>
            </div>
            <Link to="/login">
              <button className="px-2 py-2 rounded-md bg-violet-400 text-gray-900">
                Log in
              </button>
            </Link>
            <button className="px-2 py-2 rounded-md bg-gray-400 text-gray-900">
              Log out
            </button>
          </div>
          <button className="flex items-center justify-center p-2 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-gray-50"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </header>
      </div>
    </div>
  );
}

export default Header;
