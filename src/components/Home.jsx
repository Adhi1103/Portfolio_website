import React from "react";
import { FaInstagram, FaSquareFacebook, FaLinkedin, FaTelegram, FaReact, FaNodeJs } from "react-icons/fa6";
import { SiMongodb, SiExpress } from "react-icons/si";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28">
        <div className="flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl dark:text-gray-300">Welcome To My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              <ReactTyped 
                className="text-red-700 dark:text-red-500 font-bold" 
                strings={["Developer", "Programmer", "Coder"]} 
                typeSpeed={40} 
                backSpeed={50} 
                loop 
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify text-gray-800 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus sint libero 
              eligendi laborum fuga repudiandae. Asperiores tempore eos animi dolores corrupti!
            </p>
            <br />

            {/* Resume Button */}
            <a 
              href="/resume.pdf" 
              download="My_Resume.pdf"
              className="inline-block px-3 py-1 bg-blue-600 dark:bg-blue-500 text-white font-bold text-sm rounded-lg hover:bg-blue-500 dark:hover:bg-blue-400 transition duration-300"
            >
              📄 Download Resume
            </a>

            <br />

            {/* Social Media & Technologies */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold text-center dark:text-white">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <FaSquareFacebook className="text-2xl cursor-pointer dark:text-gray-300 hover:scale-110 transition" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer dark:text-gray-300 hover:scale-110 transition" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <FaInstagram className="text-2xl cursor-pointer dark:text-gray-300 hover:scale-110 transition" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/" target="_blank">
                      <FaTelegram className="text-2xl cursor-pointer dark:text-gray-300 hover:scale-110 transition" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold text-center dark:text-white">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 cursor-pointer dark:text-green-400" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 cursor-pointer dark:text-gray-400" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 cursor-pointer dark:text-blue-400" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 cursor-pointer dark:text-green-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img src="/me.jpg" className="rounded-full md:w-[450px] md:h-[450px]" alt="Profile Picture" />
          </div>
        </div>
      </div>
      
      {/* Horizontal Line */}
      <hr className="w-full border-t-2 border-gray-300 dark:border-gray-700 my-6" />
    </>
  );
}

export default Home;
