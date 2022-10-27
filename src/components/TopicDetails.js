import React from 'react';
import { useRef } from 'react';

import { Link, useLoaderData } from 'react-router-dom';

import ReactPrint from 'react-to-print';

function TopicDetails() {
  const ref = useRef();

  const topic = useLoaderData();
  // console.log(topic);
  const { duration, description, earn, id, img, path, pricing } = topic;

  return (
    <section className="min-h-screen bg-gray-800 text-gray-100">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <div
          ref={ref}
          rel="noopener noreferrer"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900"
        >
          <img
            src={img}
            alt=""
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold px-2 py-1 bg-purple-700 text-gray-100">
                {pricing}
              </span>
              <span className="text-xs font-bold text-gray-100">
                {duration}
              </span>
            </div>
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              {path}
            </h3>
            <p> {description} </p>
            <br />
            <span className="text-sm font-bold text-gray-100 "> {earn} </span>
          </div>
        </div>
        <div className="flex justify-center gap-3">
          <Link to={`/checkout/${id}`}>
            <button
              type="button"
              className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-900 text-gray-400"
            >
              Get Premium Access
            </button>
          </Link>
          <ReactPrint
            trigger={() => (
              <button
                type="button"
                className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-900 text-gray-400"
              >
                Download to pdf
              </button>
            )}
            content={() => ref.current}
          />
        </div>
      </div>
    </section>
  );
}

export default TopicDetails;
