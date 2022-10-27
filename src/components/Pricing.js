import React from 'react';

function Pricing() {
  return (
    <section className="min-h-screen py-6 bg-gray-800 text-gray-50">
      <div className="container mx-auto flex flex-col items-center justify-center max-w-lg p-4 lg:max-w-full sm:p-10 lg:flex-row">
        <div className="flex flex-col items-center justify-center flex-1 p-4 pb-8 sm:p-8 lg:p-16 bg-gray-900">
          <span className="text-sm">Basic</span>
          <p className="text-5xl font-bold text-center">39€</p>
          <p className="font-semibold text-center">
            Nemo deserunt possimus quo provident recusandae! Dolores qui
            architecto omnis pariatur eos voluptatibus sequi cum, non nesciunt
            aspernatur a?
          </p>
          <button className="px-8 py-3 mt-6 text-lg font-semibold border rounded sm:mt-12 border-gray-700">
            Sign up
          </button>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 p-4 pb-8 text-center rounded-md sm:p-8 lg:p-16 bg-violet-400 text-gray-900">
          <span className="text-sm font-semibold">Advanced</span>
          <p className="text-5xl font-bold">89€</p>
          <p className="font-semibold">
            Nemo deserunt possimus quo provident recusandae! Dolores qui
            architecto omnis pariatur eos voluptatibus sequi cum, non nesciunt
            aspernatur a?
          </p>
          <button className="px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12 bg-gray-800 text-gray-50">
            Sign up
          </button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
