import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-pink-800 via-pink-200 to-pink-800 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo / Name */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-700 animate-pulse">
          Esra Osman
        </h1>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Navigation Menu */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } md:block absolute md:static bg-pink-200 md:bg-transparent w-full md:w-auto left-0 top-16 md:top-auto z-40 md:z-auto shadow-lg md:shadow-none`}
        >
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-center md:text-left text-gray-800 font-medium p-4 md:p-0">
            <li>
              <a
                href="#about"
                className="hover:text-pink-600 hover:underline transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="hover:text-pink-600 hover:underline transition duration-300"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-pink-600 hover:underline transition duration-300"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#activities"
                className="hover:text-pink-600 hover:underline transition duration-300"
              >
                Activities
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
