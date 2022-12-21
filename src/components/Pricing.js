import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

function Pricing() {
  const { user } = useContext(AuthContext);
  return (
    <section className="min-h-screen py-6 bg-gray-800 text-gray-50">
      <div className="container mx-auto flex flex-col items-center justify-center max-w-lg p-4 lg:max-w-full sm:p-10 lg:flex-row">
        <div className="flex flex-col items-center justify-center flex-1 p-4 pb-8 sm:p-8 lg:p-16 bg-gray-900">
          <span className="text-sm">Basic</span>
          <p className="text-5xl font-bold text-center">$0</p>
          <p className="font-semibold text-center">
            Start learning something new with basic access
          </p>
          {!user?.uid && (
            <Link to="/login">
              <button className="px-8 py-3 mt-6 text-lg font-semibold border rounded sm:mt-12 border-gray-700">
                Sign up
              </button>
            </Link>
          )}
        </div>
        <div className="flex flex-col items-center justify-center flex-1 p-4 pb-8 text-center rounded-md sm:p-8 lg:p-16 bg-violet-400 text-gray-900">
          <span className="text-sm font-semibold">Pro</span>
          <p className="text-5xl font-bold">$19.99</p>
          <p className="font-semibold">
            Build in-demand technical skills for work or a personal project
          </p>
          <Link to="/career">
            <button className="px-6 py-2 mt-6 text-lg font-semibold rounded sm:mt-12 bg-gray-800 text-gray-50">
              Try Pro for free
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
