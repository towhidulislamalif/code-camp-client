import React from 'react';
import { Link } from 'react-router-dom';

import codecamp from '../assets/image/codecamp.webp';
import teammovement from '../assets/image/teammovement.webp';
import teamsupport from '../assets/image/teamsupport.webp';

function Home() {
  return (
    <div className="min-h-screen bg-gray-800 text-gray-100">
      <div className="p-6 space-y-8">
        <main>
          <div className="container mx-auto space-y-16">
            <section className="bg-gray-800 text-gray-100">
              <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                  <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                    Ac mattis
                    <span className="text-violet-400">senectus</span>erat
                    pharetra
                  </h1>
                  <p className="mt-6 mb-8 text-lg sm:mb-12">
                    Dictum aliquam porta in condimentum ac integer
                    <br className="hidden md:inline lg:hidden" />
                    turpis pulvinar, est scelerisque ligula sem
                  </p>
                  <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                    <Link
                      rel="noopener noreferrer"
                      to="/career"
                      className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900"
                    >
                      Explore Career Path
                    </Link>
                    <Link
                      rel="noopener noreferrer"
                      to="/signup"
                      className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900"
                    >
                      Sign Up
                    </Link>
                    <Link
                      rel="noopener noreferrer"
                      to="/login"
                      className="px-8 py-3 text-lg font-semibold border rounded border-gray-100"
                    >
                      Log In
                    </Link>
                  </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                  <img
                    src={codecamp}
                    alt=""
                    className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                  />
                </div>
              </div>
            </section>
            <section>
              <span className="block mb-2 text-xs font-medium tracking-widest uppercase lg:text-center text-violet-400">
                How it works
              </span>
              <h2 className="text-5xl font-bold lg:text-center text-gray-50">
                Building with Mamba is simple
              </h2>
              <div className="grid gap-6 my-16 lg:grid-cols-3">
                <div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-900">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-violet-400 text-gray-900">
                    1
                  </div>
                  <p className="text-2xl font-semibold">
                    <b>Nulla.</b>Nostrum, corrupti blanditiis. Illum,
                    architecto?
                  </p>
                </div>
                <div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-900">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-violet-400 text-gray-900">
                    2
                  </div>
                  <p className="text-2xl font-semibold">
                    <b>Accusantium.</b>Vitae saepe atque neque sunt eius dolor
                    veniam alias debitis?
                  </p>
                </div>
                <div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-900">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-violet-400 text-gray-900">
                    3
                  </div>
                  <p className="text-2xl font-semibold">
                    <b>Maxime.</b>Expedita temporibus culpa reprehenderit
                    doloribus consectetur odio!
                  </p>
                </div>
              </div>
            </section>
            <section>
              <div className="grid gap-6 lg:grid-cols-3">
                <div className="overflow-hidden rounded lg:flex lg:col-span-3">
                  <img
                    src={teammovement}
                    alt=""
                    className="object-cover w-full h-auto max-h-96 bg-gray-500"
                  />
                  <div className="p-6 space-y-6 lg:p-8 md:flex md:flex-col bg-gray-900">
                    <span className="self-start px-3 py-1 text-sm rounded-full bg-violet-400 text-gray-900">
                      Business
                    </span>
                    <h2 className="text-3xl font-bold md:flex-1">
                      Curating a workplace that inspires team movement
                    </h2>
                    <div>
                      <p className="text-gray-400">November 30, 2020</p>
                      <p className="text-gray-400">By Leroy Jenkins</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded lg:p-8 lg:py-12 bg-gray-900">
                  <h3 className="inline font-medium text-gray-50">
                    Panel-based blocks.
                  </h3>
                  <p className="inline">
                    Flexible panels that are perfect for building functional
                    layouts.
                  </p>
                </div>
                <div className="p-6 rounded lg:p-8 lg:py-12 bg-gray-900">
                  <h3 className="inline font-medium text-gray-50">
                    Responsive design.
                  </h3>
                  <p className="inline">
                    Panels look great no matter the device.
                  </p>
                </div>
                <div className="p-6 rounded lg:p-8 lg:py-12 bg-gray-900">
                  <h3 className="inline font-medium text-gray-50">
                    Premium support.
                  </h3>
                  <p className="inline">
                    Join over 50 000 satisfied customers who use our templates.
                  </p>
                </div>
              </div>
            </section>
            <section>
              <div className="container p-6 py-20 mx-auto rounded lg:px-8 bg-gray-900">
                <h2 className="text-5xl font-bold text-center">
                  Our team is here to help you.
                </h2>
                <img
                  src={teamsupport}
                  alt=""
                  className="object-cover w-full h-auto mt-8 rounded max-h-96 bg-gray-500"
                />
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
