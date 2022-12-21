import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signout } = useContext(AuthContext);

  // signout a user
  const handleSignout = () => {
    signout().then().catch();
  };

  return (
    // <div className={lightMode ? 'dark' : ''}>
    //   <div className="dark:bg-gray-800 dark:text-gray-100">
    //     <div className="p-6 space-y-6">
    //       <header className="container flex items-center justify-between h-16 px-4 mx-auto rounded dark:bg-gray-900">
    //         <Link rel="noopener noreferrer" to="/" aria-label="Homepage">
    //           <div className="flex flex-col items-center">
    //             <img className=" h-9 rounded w-9" src={logo} alt="" />
    //             <span className="font-bold text-sm dark:text-gray-100">
    //               CodeCamp
    //             </span>
    //           </div>
    //         </Link>

    //         <div className="items-center space-x-3">
    //           <Link rel="noopener noreferrer" to="/Career">
    //             Career
    //           </Link>
    //           <Link rel="noopener noreferrer" to="/pricing">
    //             Pricing
    //           </Link>
    //           <Link rel="noopener noreferrer" to="/blogs">
    //             Blogs
    //           </Link>
    //           <Link rel="noopener noreferrer" to="/faq">
    //             Faq
    //           </Link>
    //         </div>

    //         <div className="items-center space-x-3">
    //           <FaSun
    //             onClick={() => setLightMode(!lightMode)}
    //             className="h-5 w-5 inline-block"
    //           />
    //           {user?.uid ? (
    //             <>
    //               <div className="avatar online">
    //                 <div className="w-12 rounded-full">
    //                   <img
    //                     title={user?.displayName}
    //                     src={user?.photoURL}
    //                     alt=""
    //                     className="inline-block"
    //                   />
    //                 </div>
    //               </div>

    //               <button
    //                 onClick={handleSignout}
    //                 type="button"
    //                 className="px-2 py-2 font-semibold rounded bg-gray-100 text-gray-800"
    //               >
    //                 Log Out
    //               </button>
    //             </>
    //           ) : (
    //             <Link to="/login">
    //               <button
    //                 type="button"
    //                 className="px-2 py-2 font-semibold rounded bg-violet-400 text-gray-800"
    //               >
    //                 Log In
    //               </button>
    //             </Link>
    //           )}
    //         </div>
    //       </header>
    //     </div>
    //   </div>
    // </div>
    <nav className="relative shadow bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-4">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <Link className=" font-bold text-xl lg:text-2xl" to="/">
              <h1>CodeCamp</h1>
            </Link>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className='aria-label="toggle menu'
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div
            className={
              isOpen
                ? 'translate-x-0 opacity-100 absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center '
                : 'opacity-0 -translate-x-full absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center'
            }
          >
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
              <Link
                className="px-2 py-2 mx-3 mt-2 text-white transition-colors duration-500 transform rounded lg:mt-0 hover:text-violet-500"
                rel="noopener noreferrer"
                to="/Career"
              >
                Career
              </Link>
              <Link
                className="px-2 py-2 mx-3 mt-2 text-white transition-colors duration-500 transform rounded lg:mt-0 hover:text-violet-500"
                rel="noopener noreferrer"
                to="/pricing"
              >
                Pricing
              </Link>
              <Link
                className="px-2 py-2 mx-3 mt-2 text-white transition-colors duration-500 transform rounded lg:mt-0 hover:text-violet-500"
                rel="noopener noreferrer"
                to="/blogs"
              >
                Blogs
              </Link>
              <Link
                className="px-2 py-2 mx-3 mt-2 text-white transition-colors duration-500 transform rounded lg:mt-0 hover:text-violet-500"
                rel="noopener noreferrer"
                to="/faq"
              >
                Faq
              </Link>
            </div>
            <div className="flex items-center mt-4 lg:mt-0">
              {user?.uid ? (
                <button
                  onClick={handleSignout}
                  type="button"
                  className="px-2 py-2 mt-2 bg-gray-700 -mx-2 text-white transition-colors duration-500 transform rounded lg:mt-0 hover:text-violet-500"
                >
                  Log Out
                </button>
              ) : (
                <Link to="/login">
                  <button
                    type="button"
                    className="px-2 py-2 mt-2 bg-violet-500 -mx-2 text-white transition-colors duration-500 transform rounded lg:mt-0"
                  >
                    Log In
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
