import React from 'react';

const Faq = () => {
  return (
    <section className="min-h-screen bg-gray-800 text-gray-100">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-300">
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              How long does it take to complete a professional certificate?
            </summary>
            <div className="px-4 pb-4">
              <p>
                Time to complete a Professional Certificate can vary by subject
                or how you choose to learn at your own pace. On average, a
                Professional Certificate can be completed in less than 6 months
                at 10 hours per week.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What resources will be available for the job search process?
            </summary>
            <div className="px-4 pb-4">
              <p>
                In addition to hands-on projects designed to showcase your
                experience, you'll get access to a 5-step job search guide to
                help navigate the process. You’ll also get support to build a
                standout resume and LinkedIn profile, virtual interview practice
                for your specific industry, job, and experience level, and
                access to the Professional Certificate Alumni Community to
                network with other career switchers.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What background knowledge is necessary?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                None! Whether you’re completely new to the job field or have had
                some experience, an entry-level Professional Certificate doesn’t
                require any background knowledge.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Are professional certificates 100% online?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                Professional Certificates are completely online. You can access
                your instructional videos, readings, and assignments anytime and
                anywhere via the web or your mobile device.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Faq;
