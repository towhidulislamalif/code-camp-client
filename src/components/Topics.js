import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Topics() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetch('https://b610-lerning-platform-server-side-iota.vercel.app/career')
      .then((response) => response.json())
      .then((json) => setTopics(json));
  }, []);

  return (
    <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
      {topics.map((topic) => {
        const { duration, id, img, includes, path } = topic;
        return (
          <div
            key={id}
            className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700"
          >
            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
              <Link to={`/topic/${id}`}>
                <img
                  src={img}
                  alt=""
                  className="block object-cover object-center w-full rounded-md h-72 bg-gray-500"
                />
              </Link>
              <h3 className="text-xl font-semibold tracking-wide">{path}</h3>
              <time className="text-xs tracking-wide uppercase text-gray-400">
                {duration}
              </time>
              <p className="mt-3">{includes}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Topics;
