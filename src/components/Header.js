import React, { useState } from 'react';
import { useContext } from 'react';

import { Link } from 'react-router-dom';

import { FaSun } from 'react-icons/fa';

import { AuthContext } from '../context/AuthProvider';

import logo from '../assets/logo/logo63.png';

function Header() {
  // use context and pass auth context
  const { user, signout } = useContext(AuthContext);

  const [lightMode, setLightMode] = useState(true);

  // signout a user
  const handleSignout = () => {
    signout().then().catch();
  };

  return (
    <div className={lightMode ? 'dark' : ''}>
      <div className="dark:bg-gray-800 dark:text-gray-100">
        <div className="p-6 space-y-6">
          <header className="container flex items-center justify-between h-16 px-4 mx-auto rounded dark:bg-gray-900">
            <Link rel="noopener noreferrer" to="/" aria-label="Homepage">
              <div className="flex flex-col items-center">
                <img className=" h-9 rounded w-9" src={logo} alt="" />
                <span className="font-bold text-sm dark:text-gray-100">
                  CodeCamp
                </span>
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
              <FaSun
                onClick={() => setLightMode(!lightMode)}
                className="h-5 w-5 inline-block"
              />
              {user?.uid ? (
                <>
                  <div className="avatar online">
                    <div className="w-12 rounded-full">
                      <img
                        title={user?.displayName}
                        src={user?.photoURL}
                        alt=""
                        className="inline-block"
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleSignout}
                    type="button"
                    className="px-2 py-2 font-semibold rounded bg-gray-100 text-gray-800"
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <Link to="/login">
                  <button
                    type="button"
                    className="px-2 py-2 font-semibold rounded bg-violet-400 text-gray-800"
                  >
                    Log In
                  </button>
                </Link>
              )}
            </div>
          </header>
        </div>
      </div>
    </div>
  );
}

export default Header;
