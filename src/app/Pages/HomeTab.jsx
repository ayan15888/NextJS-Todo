"use client";

import React, { useState } from 'react';
import dynamic from 'next/dynamic'; // Import dynamic for dynamic imports
import TaskCard from '../components/TaskCard';
import TodayPage from '../Pages/TodayPage'; // Import TodayPage

// Dynamically import the Home page component
const HomePage = dynamic(() => import('../home/page'), { ssr: false });

function HomeTab() {
  const [showSidebar, setShowSidebar] = useState(true); // Default to true for desktop
  const [showTaskCard, setShowTaskCard] = useState({ visible: false, mode: '' });
  const [currentPage, setCurrentPage] = useState('home'); // State to control the current page

  const toggleSidebar = () => setShowSidebar(!showSidebar);
  const closeSidebar = () => setShowSidebar(false);
  const openTaskCard = (mode) => setShowTaskCard({ visible: true, mode });
  const closeTaskCard = () => setShowTaskCard({ visible: false, mode: '' });
  const handleTodayClick = () => setCurrentPage('today'); // Set currentPage to 'today'

  const renderPageContent = () => {
    switch (currentPage) {
      case 'today':
        return <TodayPage />;
      case 'home':
      default:
        return <HomePage />; // Render the dynamically imported Home page component
    }
  };

  return (
    <div className="relative flex h-screen">
      <aside
        className={`fixed top-0 left-0 z-20 h-full bg-red-50 p-6 border-r border-gray-300 transform ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out w-72`}
      >
        <div className="flex justify-between items-center mb-6 mt-12">
          <h2 className="text-xl font-semibold">Todoist</h2>
          <button
            className="p-2 bg-white rounded-full hover:bg-red-100 transition"
            onClick={closeSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-700"
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
        </div>
        <div className="space-y-4">
          <button
            className="w-full text-left p-1 font-light rounded hover:bg-red-100 transition text-xs"
            onClick={() => setCurrentPage('home')}
          >
            Home
          </button>
          <button
            className="w-full text-left p-1 font-light rounded hover:bg-red-100 transition text-xs"
            onClick={() => openTaskCard('add')}
          >
            Add Task
          </button>
          <button
            className="w-full text-left p-1 text-sm rounded font-light hover:bg-red-100 transition flex items-center justify-between"
            onClick={() => openTaskCard('search')}
          >
            Search
          </button>
          <button
            className="w-full text-left p-1 rounded hover:bg-red-100 transition text-xs"
            onClick={handleTodayClick} // Set currentPage to 'today'
          >
            Today
          </button>
          <button className="w-full text-left p-1 rounded hover:bg-red-100 transition text-xs">
            Upcoming
          </button>
          <button className="w-full text-left p-1 rounded hover:bg-red-100 transition text-xs">
            My Accompolisments
          </button>
        </div>
      </aside>

      <button
        className="fixed top-4 left-4 z-30 p-2 bg-white rounded shadow-md"
        onClick={toggleSidebar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700"
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

      <div
        className={`flex-1 p-6 mt-6 transition-all duration-300 ease-in-out ${
          showSidebar ? "lg:ml-64" : "lg:ml-0"
        } ${showTaskCard.visible ? "blur-sm" : ""}`}
      >
        {renderPageContent()} {/* Render the current page content */}
      </div>

      {showTaskCard.visible && (
        <TaskCard closeTaskCard={closeTaskCard} mode={showTaskCard.mode} />
      )}
    </div>
  );
}

export default HomeTab;
