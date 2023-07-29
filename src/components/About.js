import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi! I am Bella...
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-10 leading-relaxed">
          I am a full stack web developer in the making. I have recently obtained my certification in full stack web development from the University of Texas at Austin.  I enjoy exploring the fundamentals of JavaScript and am currently on the journey of expanding my knowledge and honing my skills in various web technologies. As I progress through this ever-evolving field, I am constantly seeking new challenges and opportunities to enhance my understanding of web development concepts and practices.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./63548786-69D2-431A-B949-FFC013759D96.jpeg"
          />
        </div>
      </div>
    </section>
  );
}