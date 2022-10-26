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
    signout()
      .then()
      .catch((error) => console.error(error));
  };

  return (
    <div className="bg-gray-800 text-gray-100">
      <div className="p-6 space-y-6">
        <header className="container flex items-center justify-between h-16 px-4 mx-auto rounded bg-gray-900">
          <Link rel="noopener noreferrer" to="/" aria-label="Homepage">
            <img className="w-12" src={logo} alt="" />
          </Link>

          <div className="items-center space-x-3">
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

          <div className="items-center space-x-3">
            {user?.uid ? (
              <>
                <div className="inline-block relative flex-shrink-0">
                  <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-600 border rounded-full text-gray-100 border-gray-900"></span>
                  <img
                    title={user?.displayName}
                    src={user?.photoURL}
                    alt=""
                    className="w-10 h-10 border inline-block rounded-full  border-gray-700"
                  />
                </div>

                <button
                  onClick={handleSignout}
                  className="px-2 py-2 rounded-md bg-gray-500 text-gray-900"
                >
                  Log Out
                </button>
              </>
            ) : (
              <Link to="/login">
                <button className="px-2 py-2 rounded-md bg-violet-400 text-gray-900">
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
