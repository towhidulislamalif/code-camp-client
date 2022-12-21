import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Blogs() {
  const blogs = useLoaderData();
  return (
    <div className="py-16 bg-gray-800 text-gray-100">
      <div className="container grid grid-cols-12 mx-auto">
        <div className="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover bg-gray-700 lg:col-span-6 lg:h-auto">
          <div className="flex flex-col items-center p-8 py-12 text-center">
            <h1 className="py-4 text-5xl font-bold">
              Stay consistent in your studying
            </h1>
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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blogs;
