import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaDesktop } from 'react-icons/fa';
import { AiOutlineSetting } from 'react-icons/ai';
import tech from '../assets/image/tech.jpg';
import { AuthContext } from '../context/AuthProvider';

function Home() {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-800 text-gray-100">
      <div className="p-6 space-y-8">
        <main>
          <div className="container mx-auto space-y-16">
            <section className="">
              <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                  <h1 className="text-2xl font-bold leading-none sm:text-4xl">
                    Join the millions learning to code with Codecamp for free
                  </h1>
                  <p className="mt-6 mb-8 text-lg sm:mb-12">
                    Choose your career. We'll teach you the skills to get
                    job-ready.
                  </p>

                  <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                    {user?.uid ? (
                      <Link
                        rel="noopener noreferrer"
                        to="/career"
                        className="px-6 py-2 text-base font-semibold bg-violet-500 text-gray-50"
                      >
                        Explore Career Path
                      </Link>
                    ) : (
                      <>
                        <Link
                          rel="noopener noreferrer"
                          to="/signup"
                          className="px-6 py-2 text-base font-semibold bg-violet-500 text-gray-50"
                        >
                          Sign Up
                        </Link>
                        <Link
                          rel="noopener noreferrer"
                          to="/login"
                          className="px-6 py-2 text-base font-semibold border border-gray-50"
                        >
                          Log In
                        </Link>
                      </>
                    )}
                  </div>
                </div>
                <div className="outline-none border-none flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                  <img
                    src={tech}
                    alt=""
                    className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                  />
                </div>
              </div>
            </section>

            {/* hero */}

            {/* build with code camp */}
            <section>
              <h2 className="text-3xl font-bold lg:text-center text-violet-500">
                Building with Code camp is simple
              </h2>
              <section>
                <div className="container px-6 py-12 mx-auto">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div>
                      <FaCode className="h-8 w-8" />
                      <h1 className="mt-4 text-lg font-semibold text-gray-100">
                        UNDERSTAND THE FULL STACK
                      </h1>
                      <p className="mt-2 text-gray-300">
                        Continually disintermediate premier process improvements
                        after enterprise ideas. Competently synthesize
                        client-based infomediaries with client-centered
                        solutions.
                      </p>
                    </div>

                    <div>
                      <FaDesktop className="h-8 w-8" />
                      <h1 className="mt-4 text-lg font-semibold text-gray-100">
                        BUILD A WEB APP
                      </h1>
                      <p className="mt-2 text-gray-300">
                        Continually disintermediate premier process improvements
                        after enterprise ideas. Competently synthesize
                        client-based infomediaries with client-centered
                        solutions.
                      </p>
                    </div>

                    <div>
                      <AiOutlineSetting className="h-8 w-8" />
                      <h1 className="mt-4 text-lg font-semibold text-gray-100">
                        SHOW OFF YOUR SKILLS
                      </h1>
                      <p className="mt-2 text-gray-300">
                        Continually disintermediate premier process improvements
                        after enterprise ideas. Competently synthesize
                        client-based infomediaries with client-centered
                        solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </section>

            {/* stats */}
            <section className="text-gray-100">
              <div className="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
                <h2 className="text-3xl font-bold text-violet-500">
                  Fully compatible with
                </h2>
                <div className="flex flex-wrap justify-center lg:justify-between">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    aria-label="Angular"
                    className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 text-gray-100"
                  >
                    <title>Angular</title>
                    <path d="M13.24 16.859h5.51l-2.755-6.542zM15.995 0.010l-15.078 5.307 2.297 19.677 12.781 6.995 12.786-6.984 2.297-19.688-15.083-5.302zM25.406 24.406h-3.516l-1.896-4.667h-8l-1.896 4.667h-3.516l9.411-20.865z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    aria-label="Gatsby"
                    className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 text-gray-100"
                  >
                    <title>Gatsby</title>
                    <path d="M16 0.011c-8.901 0-15.989 7.088-15.989 15.989s7.088 15.995 15.989 15.995c8.901 0 15.989-7.093 15.989-15.995s-7.088-15.989-15.989-15.989zM3.484 16.14l12.38 12.376c-6.817 0-12.38-5.563-12.38-12.376zM18.781 28.24l-15.016-15.021c1.251-5.563 6.256-9.735 12.235-9.735 4.011 0.011 7.776 1.917 10.151 5.147l-1.807 1.531c-1.912-2.801-5.089-4.468-8.48-4.453-4.333-0.025-8.197 2.719-9.599 6.819l13.073 13.072c3.197-1.115 5.703-3.896 6.396-7.235h-5.423v-2.364h8.204c0 5.979-4.172 10.989-9.735 12.24z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    aria-label="Plain HTML"
                    className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 text-gray-100"
                  >
                    <title>Plain HTML</title>
                    <path d="M2 0h28l-2.547 28.75-11.484 3.25-11.417-3.25zM11.375 13l-0.307-3.625 13.411 0.005 0.307-3.495-17.573-0.005 0.932 10.682h12.167l-0.432 4.568-3.88 1.068-3.938-1.078-0.255-2.813h-3.479l0.443 5.563 7.229 1.932 7.172-1.927 0.99-10.875z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    aria-label="Next.js"
                    className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 text-gray-100"
                  >
                    <title>Next.js</title>
                    <path d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    aria-label="Nuxt.js"
                    className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 text-gray-100"
                  >
                    <title>Nuxt.js</title>
                    <path d="M26.297 27.031l0.031-0.063c0.031-0.047 0.052-0.099 0.073-0.156v-0.005c0.099-0.26 0.12-0.536 0.073-0.813v0.010c-0.052-0.292-0.156-0.573-0.313-0.828l0.010 0.010-7.094-12.474-1.083-1.891-8.156 14.365c-0.141 0.25-0.229 0.521-0.276 0.802v0.016c-0.057 0.323-0.021 0.651 0.109 0.953l-0.005-0.010c0.016 0.047 0.042 0.089 0.068 0.135l-0.005-0.005c0.214 0.365 0.667 0.802 1.667 0.802h13.198c0.208 0 1.234-0.042 1.708-0.849zM17.995 14.609l6.479 11.396h-12.953zM31.661 25.188l-9.354-16.479c-0.099-0.177-0.635-1.052-1.578-1.052-0.422 0-1.026 0.182-1.521 1.047l-1.208 2.12 1.073 1.896 1.667-2.953 9.255 16.245h-3.521c0.047 0.271 0.021 0.547-0.073 0.807v-0.010c-0.021 0.057-0.042 0.115-0.073 0.167v-0.005l-0.031 0.063c-0.474 0.807-1.495 0.849-1.693 0.849h5.505c0.203 0 1.219-0.042 1.693-0.849 0.214-0.37 0.359-0.984-0.141-1.844zM9.74 27.078c-0.021-0.042-0.042-0.083-0.063-0.125v-0.005c-0.13-0.302-0.172-0.63-0.115-0.953v0.010h-7.563l11.24-19.776 3.687 6.484 1.073-1.891-3.219-5.667c-0.089-0.161-0.63-1.036-1.568-1.036-0.422 0-1.031 0.182-1.521 1.052l-11.385 20.016c-0.099 0.172-0.568 1.078-0.099 1.885 0.214 0.37 0.667 0.802 1.667 0.802h9.531c-0.99 0-1.453-0.427-1.667-0.802z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    aria-label="React"
                    className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 text-gray-100"
                  >
                    <title>React</title>
                    <path d="M16 13.146c-1.573 0-2.854 1.281-2.854 2.854s1.281 2.854 2.854 2.854c1.573 0 2.854-1.281 2.854-2.854s-1.281-2.854-2.854-2.854zM8.010 21.672l-0.63-0.156c-4.688-1.188-7.38-3.198-7.38-5.521s2.693-4.333 7.38-5.521l0.63-0.156 0.177 0.625c0.474 1.635 1.083 3.229 1.818 4.771l0.135 0.281-0.135 0.286c-0.734 1.536-1.344 3.13-1.818 4.771zM7.089 11.932c-3.563 1-5.75 2.536-5.75 4.063s2.188 3.057 5.75 4.063c0.438-1.391 0.964-2.745 1.578-4.063-0.615-1.318-1.141-2.672-1.578-4.063zM23.99 21.672l-0.177-0.625c-0.474-1.635-1.083-3.229-1.818-4.766l-0.135-0.286 0.135-0.286c0.734-1.536 1.344-3.13 1.818-4.771l0.177-0.62 0.63 0.156c4.688 1.188 7.38 3.198 7.38 5.521s-2.693 4.333-7.38 5.521zM23.333 15.995c0.641 1.385 1.172 2.745 1.578 4.063 3.568-1.005 5.75-2.536 5.75-4.063s-2.188-3.057-5.75-4.063c-0.438 1.385-0.964 2.745-1.578 4.063zM7.078 11.927l-0.177-0.625c-1.318-4.646-0.917-7.979 1.099-9.141 1.979-1.141 5.151 0.208 8.479 3.625l0.453 0.464-0.453 0.464c-1.182 1.229-2.26 2.552-3.229 3.958l-0.182 0.255-0.313 0.026c-1.703 0.135-3.391 0.406-5.047 0.813zM9.609 3.089c-0.359 0-0.677 0.073-0.943 0.229-1.323 0.766-1.557 3.422-0.646 7.005 1.422-0.318 2.859-0.542 4.313-0.672 0.833-1.188 1.75-2.323 2.734-3.391-2.078-2.026-4.047-3.172-5.458-3.172zM22.396 30.234c-0.005 0-0.005 0 0 0-1.901 0-4.344-1.427-6.875-4.031l-0.453-0.464 0.453-0.464c1.182-1.229 2.26-2.552 3.229-3.958l0.177-0.255 0.313-0.031c1.703-0.13 3.391-0.401 5.052-0.813l0.63-0.156 0.177 0.625c1.318 4.646 0.917 7.974-1.099 9.135-0.49 0.281-1.042 0.422-1.604 0.411zM16.932 25.729c2.078 2.026 4.047 3.172 5.458 3.172h0.005c0.354 0 0.672-0.078 0.938-0.229 1.323-0.766 1.563-3.422 0.646-7.005-1.422 0.318-2.865 0.542-4.313 0.667-0.833 1.193-1.75 2.323-2.734 3.396zM24.922 11.927l-0.63-0.161c-1.661-0.406-3.349-0.677-5.052-0.813l-0.313-0.026-0.177-0.255c-0.969-1.406-2.047-2.729-3.229-3.958l-0.453-0.464 0.453-0.464c3.328-3.417 6.5-4.766 8.479-3.625 2.016 1.161 2.417 4.495 1.099 9.141zM19.667 9.651c1.521 0.141 2.969 0.365 4.313 0.672 0.917-3.583 0.677-6.24-0.646-7.005-1.318-0.76-3.797 0.406-6.401 2.943 0.984 1.073 1.896 2.203 2.734 3.391zM9.609 30.234c-0.563 0.010-1.12-0.13-1.609-0.411-2.016-1.161-2.417-4.49-1.099-9.135l0.177-0.625 0.63 0.156c1.542 0.391 3.24 0.661 5.047 0.813l0.313 0.031 0.177 0.255c0.969 1.406 2.047 2.729 3.229 3.958l0.453 0.464-0.453 0.464c-2.526 2.604-4.969 4.031-6.865 4.031zM8.021 21.667c-0.917 3.583-0.677 6.24 0.646 7.005 1.318 0.75 3.792-0.406 6.401-2.943-0.984-1.073-1.901-2.203-2.734-3.396-1.453-0.125-2.891-0.349-4.313-0.667zM16 22.505c-1.099 0-2.224-0.047-3.354-0.141l-0.313-0.026-0.182-0.26c-0.635-0.917-1.24-1.859-1.797-2.828-0.563-0.969-1.078-1.958-1.557-2.969l-0.135-0.286 0.135-0.286c0.479-1.010 0.995-2 1.557-2.969 0.552-0.953 1.156-1.906 1.797-2.828l0.182-0.26 0.313-0.026c2.234-0.188 4.479-0.188 6.708 0l0.313 0.026 0.182 0.26c1.276 1.833 2.401 3.776 3.354 5.797l0.135 0.286-0.135 0.286c-0.953 2.021-2.073 3.964-3.354 5.797l-0.182 0.26-0.313 0.026c-1.125 0.094-2.255 0.141-3.354 0.141zM13.073 21.057c1.969 0.151 3.885 0.151 5.859 0 1.099-1.609 2.078-3.302 2.927-5.063-0.844-1.76-1.823-3.453-2.932-5.063-1.948-0.151-3.906-0.151-5.854 0-1.109 1.609-2.089 3.302-2.932 5.063 0.849 1.76 1.828 3.453 2.932 5.063z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    aria-label="Svelte"
                    className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 text-gray-100"
                  >
                    <title>Svelte</title>
                    <path d="M27.573 4.229c-2.927-4.25-8.656-5.479-13.068-2.802l-7.464 4.745c-2.042 1.281-3.443 3.365-3.854 5.734-0.365 1.969-0.047 4.005 0.891 5.776-0.641 0.964-1.073 2.052-1.266 3.198-0.427 2.406 0.13 4.885 1.547 6.88 2.932 4.24 8.646 5.474 13.068 2.828l7.469-4.75c2.031-1.281 3.427-3.365 3.839-5.734 0.359-1.964 0.042-3.995-0.896-5.755 1.984-3.115 1.88-7.12-0.266-10.12zM13.76 28.172c-2.401 0.625-4.938-0.318-6.349-2.359-0.865-1.198-1.182-2.677-0.932-4.146l0.146-0.708 0.135-0.438 0.401 0.266c0.88 0.667 1.865 1.146 2.917 1.469l0.271 0.094-0.031 0.266c-0.026 0.37 0.083 0.786 0.297 1.104 0.438 0.63 1.198 0.932 1.932 0.734 0.161-0.052 0.318-0.104 0.453-0.188l7.438-4.745c0.375-0.24 0.615-0.599 0.708-1.026 0.083-0.443-0.026-0.896-0.266-1.255-0.443-0.615-1.198-0.891-1.932-0.708-0.161 0.057-0.333 0.12-0.469 0.203l-2.813 1.786c-2.661 1.583-6.099 0.839-7.865-1.708-0.859-1.198-1.198-2.693-0.938-4.146 0.26-1.438 1.12-2.698 2.365-3.469l7.422-4.745c0.469-0.292 0.974-0.505 1.521-0.667 2.401-0.625 4.932 0.318 6.349 2.349 1 1.406 1.281 3.203 0.76 4.849l-0.135 0.443-0.385-0.266c-0.891-0.651-1.88-1.146-2.932-1.469l-0.266-0.078 0.026-0.266c0.026-0.391-0.083-0.802-0.297-1.12-0.438-0.63-1.198-0.896-1.932-0.708-0.161 0.052-0.318 0.104-0.453 0.188l-7.453 4.786c-0.375 0.25-0.615 0.599-0.693 1.036-0.078 0.427 0.026 0.896 0.266 1.24 0.427 0.63 1.203 0.896 1.922 0.708 0.172-0.052 0.333-0.104 0.464-0.188l2.844-1.813c0.464-0.307 0.984-0.531 1.516-0.677 2.417-0.63 4.938 0.318 6.349 2.359 0.865 1.198 1.198 2.677 0.958 4.13-0.25 1.438-1.099 2.698-2.333 3.469l-7.438 4.734c-0.484 0.292-1.005 0.521-1.547 0.677z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    aria-label="Vue.js"
                    className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 text-gray-100"
                  >
                    <title>Vue.js</title>
                    <path d="M24.306 4.019h-4.806l-3.5 5.537-3-5.537h-11l14 23.981 14-23.981zM5.481 6.019h3.363l7.156 12.387 7.15-12.387h3.363l-10.512 18.012z"></path>
                  </svg>
                </div>
              </div>
            </section>
            {/* extra */}
            <section>
              <div className="grid gap-6 lg:grid-cols-3">
                <div className="p-6 rounded lg:p-8 lg:py-12 bg-gray-900">
                  <h3 className="inline font-medium text-gray-100">
                    Panel-based blocks.
                  </h3>
                  <p className="inline">
                    Flexible panels that are perfect for building functional
                    layouts.
                  </p>
                </div>
                <div className="p-6 rounded lg:p-8 lg:py-12 bg-gray-900">
                  <h3 className="inline font-medium text-gray-100">
                    Responsive design.
                  </h3>
                  <p className="inline">
                    Panels look great no matter the device.
                  </p>
                </div>
                <div className="p-6 rounded lg:p-8 lg:py-12 bg-gray-900">
                  <h3 className="inline font-medium text-gray-100">
                    Premium support.
                  </h3>
                </div>
              </div>
            </section>

            {/* our team */}
            <section>
              <div className="container px-6 py-8 mx-auto">
                <h2 className="text-3xl font-semibold text-center text-violet-500 capitalize lg:text-4xl dark:text-white">
                  Our team is here to help you
                </h2>

                <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  <div className="w-full max-w-xs text-center">
                    <img
                      className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                      src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80"
                      alt="avatar"
                    />

                    <div className="mt-2">
                      <h3 className="text-lg font-medium text-gray-200 dark:text-gray-200">
                        Ahmed Omer
                      </h3>
                      <span className="mt-1 font-medium text-gray-300 dark:text-gray-300">
                        Full Stack Developer
                      </span>
                    </div>
                  </div>

                  <div className="w-full max-w-xs text-center">
                    <img
                      className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                      src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                      alt="avatar"
                    />

                    <div className="mt-2">
                      <h3 className="text-lg font-medium text-gray-200 dark:text-gray-200">
                        Jane Doe
                      </h3>
                      <span className="mt-1 font-medium text-gray-300 dark:text-gray-300">
                        Data Scientist
                      </span>
                    </div>
                  </div>

                  <div className="w-full max-w-xs text-center">
                    <img
                      className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                      src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
                      alt="avatar"
                    />

                    <div className="mt-2">
                      <h3 className="text-lg font-medium text-gray-200 dark:text-gray-200">
                        Steve Ben
                      </h3>
                      <span className="mt-1 font-medium text-gray-300 dark:text-gray-300">
                        UI/UX
                      </span>
                    </div>
                  </div>

                  <div className="w-full max-w-xs text-center">
                    <img
                      className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                      alt="avatar"
                    />

                    <div className="mt-2">
                      <h3 className="text-lg font-medium text-gray-200 dark:text-gray-200">
                        Patterson Johnson
                      </h3>
                      <span className="mt-1 font-medium text-gray-300 dark:text-gray-300">
                        Software Engineer
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* testimonial */}
            <section className="my-8">
              <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
                <h1 className="text-3xl font-semibold leading-none text-center text-violet-500">
                  What our students are saying about us
                </h1>
              </div>
              <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
                <div className="flex flex-col items-center mx-12 lg:mx-0">
                  <div className="relative text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="absolute top-0 left-0 w-8 h-8 text-gray-300"
                    >
                      <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                      <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                    </svg>
                    <p className="px-6 py-1 text-lg italic">
                      Proactively actualize functionalized portals whereas
                      accurate manufactured products. Conveniently matrix
                      revolutionary interfaces vis-a-vis state of the art web
                      services. Objectively.
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="absolute bottom-0 right-0 w-8 h-8 text-gray-300"
                    >
                      <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                      <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                    </svg>
                  </div>
                  <span className="w-12 h-1 my-2 rounded-lg bg-violet-600"></span>
                  <p>Ahmed Ayman</p>
                </div>
                <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
                  <div className="relative text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="absolute top-0 left-0 w-8 h-8 text-gray-300"
                    >
                      <path
                        fill="currentColor"
                        d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"
                      ></path>
                    </svg>
                    <p className="px-6 py-1 text-lg italic">
                      Assertively strategize business alignments whereas dynamic
                      leadership. Collaboratively coordinate best-of-breed
                      networks before technically sound infrastructures.
                      Continually seize cross-unit best practices.
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="absolute bottom-0 right-0 w-8 h-8 text-gray-300"
                    >
                      <path
                        fill="currentColor"
                        d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"
                      ></path>
                    </svg>
                  </div>
                  <span className="w-12 h-1 my-2 rounded-lg bg-violet-600"></span>
                  <p>Jannatul Maowa</p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
