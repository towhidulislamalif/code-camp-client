import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Checkout() {
  const topic = useLoaderData();
  const { earn, experience, path } = topic;

  return (
    <section className="min-h-screen py-6 bg-gray-800 text-gray-50">
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="py-6 space-y-3 md:py-0 md:px-6">
          <h1 className=" font-bold text-3xl"> {path} </h1>
          <p className="font-bold flex items-center text-sm">{earn}</p>
        </div>
        <form
          noValidate=""
          className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
        >
          <label className="block">
            <span className="mb-1">Full name</span>
            <input
              type="text"
              placeholder="Leroy Jenkins"
              className="block px-2 py-2 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400  text-gray-100"
              required
            />
          </label>
          <label className="block">
            <span className="mb-1">Email address</span>
            <input
              type="email"
              placeholder="leroy@jenkins.com"
              className="block px-2 py-2 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400  text-gray-100"
              required
            />
          </label>
          <label className="block">
            <span className="mb-1">Card number</span>
            <input
              type="text"
              placeholder="0000 0000 0000"
              className="block px-2 py-2 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400  text-gray-100"
              required
            />
          </label>
          <label className="block">
            <span className="mb-1">Expire date</span>
            <input
              type="text"
              placeholder="MM/YY"
              className="block px-2 py-2 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400  text-gray-100"
              required
            />
          </label>
          <label className="block">
            <span className="mb-1">CVC/CVV</span>
            <input
              type="text"
              placeholder="CVC/CVV"
              className="block px-2 py-2 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400  text-gray-100"
              required
            />
          </label>
          <button
            type="button"
            className="px-3 py-2 font-semibold rounded bg-violet-400 text-gray-800 self-center  text-lg  focus:ring hover:ring focus:ring-opacity-75  focus:ring-violet-400 hover:ring-violet-400"
          >
            Get Premium Access
          </button>
        </form>
      </div>
    </section>
  );
}

export default Checkout;
