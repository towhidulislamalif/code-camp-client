import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-hot-toast';

function Checkout() {
  const topic = useLoaderData();
  const { earn, path } = topic;

  const handleCheckout = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const card = e.target.card.value;
    const expire = e.target.expire.value;
    const cvc = e.target.cvc.value;
    console.log(name, email, card, expire, cvc);
    toast.success('Payment Successfull');
    e.target.reset();
  };

  return (
    <section className="min-h-screen py-6 bg-gray-800 text-gray-50">
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="py-6 space-y-3 md:py-0 md:px-6">
          <h1 className=" font-bold text-3xl"> {path} </h1>
          <p className="font-bold flex items-center text-sm">{earn}</p>
        </div>
        <form
          onSubmit={handleCheckout}
          noValidate=""
          className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
        >
          <label className="block">
            <span className="mb-1">Full name</span>
            <input
              type="text"
              name="name"
              placeholder="Leroy Jenkins"
              className="block px-2 py-2 w-full rounded-md shadow-sm text-gray-900"
              required
            />
          </label>
          <label className="block">
            <span className="mb-1">Email address</span>
            <input
              type="email"
              name="email"
              placeholder="leroy@jenkins.com"
              className="block px-2 py-2 w-full rounded-md shadow-sm text-gray-900"
              required
            />
          </label>
          <label className="block">
            <span className="mb-1">Card number</span>
            <input
              type="text"
              name="card"
              placeholder="0000 0000 0000"
              className="block px-2 py-2 w-full rounded-md shadow-sm text-gray-900"
              required
            />
          </label>
          <label className="block">
            <span className="mb-1">Expire date</span>
            <input
              type="text"
              name="expire"
              placeholder="MM/YY"
              className="block px-2 py-2 w-full rounded-md shadow-sm text-gray-900"
              required
            />
          </label>
          <label className="block">
            <span className="mb-1">CVC/CVV</span>
            <input
              type="text"
              name="cvc"
              placeholder="CVC/CVV"
              className="block px-2 py-2 w-full rounded-md shadow-sm text-gray-900"
              required
            />
          </label>
          <button
            type="submit"
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
