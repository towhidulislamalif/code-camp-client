import React from 'react';

function Home() {
  return (
    <div className="min-h-screen bg-gray-800 text-gray-100">
      <div className="p-6 space-y-8">
        <main>
          <div className="container mx-auto space-y-16">
            <section className="grid gap-6 text-center lg:grid-cols-2 xl:grid-cols-5">
              <div className="w-full p-6 rounded-md sm:p-16 xl:col-span-2 bg-gray-900">
                <span className="block mb-2 text-violet-400">
                  Mamba design system
                </span>
                <h1 className="text-5xl font-extrabold text-gray-50">
                  Build it with Mamba
                </h1>
                <p className="my-8">
                  <span className="font-medium text-gray-50">
                    Modular and versatile.
                  </span>
                  The ultimate design toolkit for savvy technology startups.
                </p>
                <form
                  novalidate=""
                  action=""
                  className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid"
                >
                  <div>
                    <label for="name" className="text-sm sr-only">
                      Your name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-md focus:ring focus:ring-violet-400 border-gray-700"
                    />
                  </div>
                  <div>
                    <label for="lastname" className="text-sm sr-only">
                      Email address
                    </label>
                    <input
                      id="lastname"
                      type="text"
                      placeholder="Email address"
                      className="w-full rounded-md focus:ring focus:ring-violet-400 border-gray-700"
                      data-temp-mail-org="0"
                    />
                  </div>
                  <button className="w-full py-2 font-semibold rounded bg-violet-400 text-gray-900">
                    Join the waitlist
                  </button>
                </form>
              </div>
              <img
                src="https://source.unsplash.com/random/480x360"
                alt=""
                className="object-cover w-full h-full rounded-md xl:col-span-3 bg-gray-500"
              />
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
            <section className="grid gap-6 lg:grid-cols-2">
              <img
                src="https://source.unsplash.com/random/360x480"
                alt=""
                className="object-cover w-full rounded-md max-h-96 bg-gray-500"
              />
              <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 bg-gray-900">
                <img
                  src="https://source.unsplash.com/random/100x100"
                  alt=""
                  className="object-cover w-20 h-20 rounded-full bg-gray-500"
                />
                <blockquote className="max-w-lg text-lg italic font-medium text-center">
                  "Et, dignissimos obcaecati. Recusandae praesentium doloribus
                  vitae? Rem unde atque mollitia!"
                </blockquote>
                <div className="text-center text-gray-400">
                  <p>Leroy Jenkins</p>
                  <p>CEO of Company Co.</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    type="button"
                    aria-label="Page 1"
                    className="w-2 h-2 rounded-full bg-gray-50"
                  ></button>
                  <button
                    type="button"
                    aria-label="Page 2"
                    className="w-2 h-2 rounded-full bg-gray-600"
                  ></button>
                  <button
                    type="button"
                    aria-label="Page 3"
                    className="w-2 h-2 rounded-full bg-gray-600"
                  ></button>
                  <button
                    type="button"
                    aria-label="Page 4"
                    className="w-2 h-2 rounded-full bg-gray-600"
                  ></button>
                </div>
              </div>
              <div className="p-8 space-y-8 rounded-md lg:col-span-full lg:py-12 bg-gray-900">
                <h2 className="text-5xl font-bold text-gray-50">
                  Create with us
                </h2>
                <p className="text-gray-400">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nesciunt facilis quod accusantium beatae cum nam adipisci
                  reiciendis omnis possimus error quo animi voluptas magni, at
                  incidunt. Nulla ex at ullam corporis quidem adipisci vitae,
                  perferendis dolorem libero minus atque tenetur enim pariatur
                  cupiditate commodi in beatae, ipsa eligendi? Quis, saepe.
                </p>
              </div>
            </section>
            <section>
              <div className="grid gap-6 lg:grid-cols-3">
                <div className="overflow-hidden rounded lg:flex lg:col-span-3">
                  <img
                    src="https://source.unsplash.com/random/485x365"
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
                <div className="flex justify-center p-4">
                  <a rel="noopener noreferrer" href="#">
                    Meet our crew &gt;
                  </a>
                </div>
                <img
                  src="https://source.unsplash.com/random/360x240"
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
