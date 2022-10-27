import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Blogs() {
  const blogs = useLoaderData();
  return (
    <div className="bg-gray-800 text-gray-50">
      <div className="container grid grid-cols-12 mx-auto">
        <div className="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover bg-gray-700 lg:col-span-6 lg:h-auto">
          <div className="flex flex-col items-center p-8 py-12 text-center">
            <h1 className="py-4 text-5xl font-bold">
              Stay consistent in your studying
            </h1>
            <p className="pb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!
            </p>
          </div>
        </div>

        {blogs.map((blog) => {
          const { date, id, questions, answers } = blog;
          const { question_1, question_2 } = questions;
          const { answer_1, answer_2 } = answers;
          return (
            <div
              key={id}
              className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-gray-700"
            >
              <div className="pt-6 pb-4 space-y-2">
                <span> {date} </span>
                <h1 className="text-3xl font-bold"> {question_1} </h1>
                <p>{answer_1}</p>
                <br />
                <h1 className="text-3xl font-bold"> {question_2} </h1>
                <p>{answer_2}</p>
                <p
                  rel="noopener noreferrer"
                  className="inline-flex items-center py-2 space-x-2 text-sm text-violet-400"
                >
                  <span>Read more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blogs;
