//src/Components/About.js
import React from "react"
export default function Skills(){
    return (<section id="about">
    <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          Hello, We're Sapphire Stays LLC.
          <br className="hidden lg:inline-block" />An Airbnb Management Company.
        </h1>
        <p className="mb-8 leading-relaxed">
        At Sapphire Stays, our mission is to offer unparalleled Airbnb management services that transform properties into thriving, high-demand rentals. 
        We are dedicated to providing property owners with comprehensive support and guests with exceptional accommodations, 
        </p>
        <div className="flex justify-center">
          <a
            href="#contact"
            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
            Work With Us
          </a>
          <a
            href="#projects"
            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
            See Our Past Work
          </a>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          className="object-cover object-center rounded"
          alt="hero"
          src="./cover.png"
        />
      </div>
    </div>
  </section>
  );
}