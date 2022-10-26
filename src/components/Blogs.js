import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Blogs() {
  const blogs = useLoaderData();
  // console.log(blogs);

  return (
    <section className="py-6 sm:py-12 bg-gray-800 text-gray-100">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
          <p className="font-serif text-sm text-gray-400">
            Qualisque erroribus usu at, duo te agam soluta mucius.
          </p>
        </div>

        {blogs.map((blog) => {
          const { date, field, id, questions, answers } = blog;
          const { question_1, question_2 } = questions;
          const { answer_1, answer_2 } = answers;

          return (
            <div key={id} className="bg-gray-800 text-gray-50">
              <div className="container grid grid-cols-12 mx-auto bg-gray-900">
                <div className="bg-no-repeat bg-cover bg-gray-700 col-span-full lg:col-span-4"></div>
                <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
                  <div className="flex justify-start">
                    <span className="px-2 py-1 text-xs rounded-full bg-violet-400 text-gray-900">
                      {field}
                    </span>
                  </div>
                  <h1 className="text-3xl font-semibold">{question_1}</h1>
                  <p className="flex-1 pt-2">{answer_1}</p>

                  <br />

                  <h1 className="text-3xl font-semibold">{question_2}</h1>
                  <p className="flex-1 pt-2">{answer_2}</p>
                  {/* <a
                    rel="noopener noreferrer"
                    href="#"
                    className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm text-violet-400"
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
                  </a> */}

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 text-gray-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="self-center text-sm">
                        by Towhidul Islam Alif
                      </span>
                    </div>
                    <span className="text-xs"> {date} </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Blogs;
