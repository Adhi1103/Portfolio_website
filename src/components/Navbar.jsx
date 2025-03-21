import React, { useState, useEffect } from "react";
import pic from "../../public/me.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { BsSun, BsMoon } from "react-icons/bs";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark:bg-gray-900", "dark:text-white");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark:bg-gray-900", "dark:text-white");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Projects" },
    { id: 4, text: "Skills" },
    { id: 5, text: "Certificates" },
    { id: 6, text: "Contact" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 dark:text-white shadow-md transition-all duration-300">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 flex justify-between items-center">
        {/* Logo */}
        <div className="flex space-x-2 items-center">
          <img src={pic} className="h-12 w-12 rounded-full" alt="Profile" />
          <h1 className="font-semibold text-xl cursor-pointer">
            Adhikansh Gupt
            <span className="text-green-500 text-2xl">a</span>
            <p className="text-sm">Web Developer</p>
          </h1>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:flex space-x-8">
          {navItems.map(({ id, text }) => (
            <Link
              key={id}
              to={text}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              className="hover:text-blue-500 cursor-pointer"
            >
              {text}
            </Link>
          ))}
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-all"
        >
          {darkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
        </button>

        {/* Mobile Menu Button */}
        <div onClick={() => setMenu(!menu)} className="md:hidden p-2">
          {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
        </div>
      </div>

      {/* Mobile Navbar */}
      {menu && (
        <div className="md:hidden bg-white dark:bg-gray-900">
          <ul className="flex flex-col items-center space-y-3 py-5 text-xl">
            {navItems.map(({ id, text }) => (
              <li key={id} className="font-semibold cursor-pointer">
                <Link
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  onClick={() => setMenu(false)} // Close menu on click
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
