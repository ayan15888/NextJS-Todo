// components/Header.jsx
"use client";

import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full bg-white text-red-400 p-4 fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-bold">Todoist</div>
        <nav className="hidden md:flex space-x-8">
          <a href="/home" className="hover:text-red-400 transition duration-200">Home</a>
          <a href="#" className="hover:text-red-400 transition duration-200">Features</a>
          <a href="#" className="hover:text-red-400 transition duration-200">Pricing</a>
          {/* <a href="#" className="hover:text-red-400 transition duration-200">Contact</a> */}
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden mt-4">
          {/* <a href="#" className="block py-2 text-center hover:text-red-400 transition duration-200">Home</a> */}
          <a href="#" className="block py-2 text-center hover:text-red-400 transition duration-200">Features</a>
          <a href="#" className="block py-2 text-center hover:text-red-400 transition duration-200">Pricing</a>
          <a href="/home" className="block py-2 text-center hover:text-red-400 transition duration-200">Home</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
