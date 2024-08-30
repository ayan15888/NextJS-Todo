// src/app/components/Header.jsx

"use client";

import React, { useState } from 'react';
import Link from 'next/link';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo and Company Name */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png" // Replace with the actual logo path
            alt="Company Logo"
            className="h-8 w-8"
          />
          <Link href="/">
          <span className="text-xl font-semibold cursor-pointer text-red-500 ml-8">Todoist</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block lg:hidden p-2 text-gray-700 hover:text-red-600"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Link href="#" className="text-gray-700 hover:text-red-600">
            Features
          </Link>
          <Link href="/profile" className="text-gray-700 hover:text-red-600">
            <div className='h-8 w-8 border-red-300 border-2 rounded-full'></div>
          </Link>
        </nav>
      </div>

      {/* Mobile Menu Links */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-md transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          className="absolute top-4 left-4 text-gray-700 hover:text-red-600"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="p-4 mt-8 flex items-center justify-between">
         
       
          <Link href="/profile" className="block text-gray-700 py-2 hover:text-red-600">
            <div className='h-8 w-8 border-red-400 border-2 rounded-full'></div>
            </Link> 
        </div>
      </div>
    </header>
  );
}

export default Header;
