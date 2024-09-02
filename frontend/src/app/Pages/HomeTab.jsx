"use client";

import React, { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import TaskCard from '../components/TaskCard';
import TodayPage from '../Pages/TodayPage';
import { RiAddCircleLine, RiSearchLine, RiCalendar2Line, RiCalendarCheckLine } from "react-icons/ri";
import { useDrag } from '@use-gesture/react';
import Link from 'next/link';

const Accompolishment = dynamic(() => import('../Pages/Accompolishment'));

function HomeTab() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showTaskCard, setShowTaskCard] = useState({ visible: false, mode: '' });
  const [currentPage, setCurrentPage] = useState('today');

  const sidebarRef = useRef(null);

  const toggleSidebar = () => setShowSidebar(!showSidebar);
  const closeSidebar = () => setShowSidebar(false);
  const openTaskCard = (mode) => setShowTaskCard({ visible: true, mode });
  const closeTaskCard = () => setShowTaskCard({ visible: false, mode: '' });
  const handleTodayClick = () => setCurrentPage('today');
  const handleAccomplishmentClick = () => setCurrentPage('accomplishment');

  const bind = useDrag((state) => {
    const { movement: [mx], down, last } = state;
    if (down && mx < -50) {
      closeSidebar();
    }
    if (last) {
      state.event.preventDefault();
    }
  });

  const renderPageContent = () => {
    switch (currentPage) {
      case 'today':
        return <TodayPage />;
      case 'accomplishment':
        return <Accompolishment />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="relative flex h-screen">
      <aside
        ref={sidebarRef}
        {...bind()}
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
        <div className="space-y-4 flex-grow">
          <button
            className="flex items-center space-x-2 w-full text-left p-1 font-medium rounded hover:bg-red-100 transition text-xs"
            onClick={() => openTaskCard('add')}
          >
            <RiAddCircleLine className="text-xl text-red-500" />
            <span>Add Task</span>
          </button>

          <button
            className="flex items-center space-x-2 w-full text-left p-1 text-xs rounded font-medium hover:bg-red-100 transition"
            onClick={() => openTaskCard('search')}
          >
            <RiSearchLine className="text-lg text-red-500" />
            <span>Search</span>
          </button>

          <button
            className="flex items-center space-x-2 w-full font-medium text-left p-1 rounded hover:bg-red-100 transition text-xs"
            onClick={handleTodayClick}
          >
            <RiCalendar2Line className="text-lg text-red-500" />
            <span>Today</span>
          </button>

          <button
            className="flex items-center font-medium text-xs space-x-2 w-full text-left p-1 rounded hover:bg-red-100 transition"
          >
            <RiCalendarCheckLine className="text-lg text-red-500" />
            <span>Upcoming</span>
          </button>

          <button
            className="flex items-center font-medium space-x-2 w-full text-left p-1 rounded hover:bg-red-100 transition text-xs"
            onClick={handleAccomplishmentClick}
          >
            <RiCalendarCheckLine className="text-lg text-red-500" />
            <span>My Accomplishments</span>
          </button>
        </div>

        {/* Circular div at the bottom */}
        <Link href="/profile">
        <div className="absolute bottom-6 ml-8 transform -translate-x-1/2 px-2 py-1 bg-red-400 rounded-full flex items-center justify-center">
         <h1 className='text-sm text-white'>Profile</h1>
     
        </div>
      </Link>
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
        {renderPageContent()}
      </div>

      {showTaskCard.visible && (
        <TaskCard closeTaskCard={closeTaskCard} mode={showTaskCard.mode} />
      )}
    </div>
  );
}

export default HomeTab;
