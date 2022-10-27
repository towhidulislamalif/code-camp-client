import React from 'react';
import { useContext } from 'react';

import { Link } from 'react-router-dom';

import { AuthContext } from '../context/AuthProvider';

import logo from '../assets/logo/logo63.png';

function Header() {
  // use context and pass auth context
  const { user, signout } = useContext(AuthContext);

  // signout a user
  const handleSignout = () => {
    signout().then().catch();
  };

  return (
    <div className="bg-gray-800 text-gray-100">
      <div className="p-6 space-y-6">
        <header className="container flex items-center justify-between h-16 px-4 mx-auto rounded bg-gray-900">
          <Link rel="noopener noreferrer" to="/" aria-label="Homepage">
            <div className="flex flex-col items-center">
              <img className=" h-10 rounded w-10" src={logo} alt="" />
              <span className="font-bold text-sm text-gray-100">CodeCamp</span>
            </div>
          </Link>

          <div className="items-center space-x-3">
            <Link rel="noopener noreferrer" to="/Career">
              Career
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

          <div className="items-center space-x-3">
            {user?.uid ? (
              <>
                <div className="inline-block relative flex-shrink-0">
                  <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-600 border rounded-full text-gray-100 border-gray-900"></span>
                  <img
                    title={user?.displayName}
                    src={user?.photoURL}
                    alt=""
                    className="h-10 w-10 border inline-block rounded-full  border-gray-700"
                  />
                </div>

                <button
                  onClick={handleSignout}
                  type="button"
                  className="px-3 py-2 font-semibold rounded bg-gray-100 text-gray-800"
                >
                  Log Out
                </button>
              </>
            ) : (
              <Link to="/login">
                <button
                  type="button"
                  className="px-3 py-2 font-semibold rounded bg-violet-400 text-gray-800"
                >
                  Log In
                </button>
              </Link>
            )}
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
