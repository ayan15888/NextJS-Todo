import React from 'react';
import BoxCard from '../components/BoxCard';
import Link from 'next/link';

function Page() {
  // Sample data; you can replace these with dynamic data if needed
  const name = "John Doe";
  const email = "john.doe@example.com";
  const tasksAccomplished = 5; // Example number of tasks accomplished

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen p-2 bg-red-50">
      <BoxCard className="max-w-md p-4 bg-white">
        <h1 className="text-center text-3xl font-semibold mb-4 text-gray-800">Profile</h1>
        <div className="space-y-2">
          <p className="text-sm text-gray-700">Name: <span className="text-black font-semibold">{name}</span></p>
          <p className="text-sm text-gray-700">Email: <span className="font-semibold">{email}</span></p>
          <p className="text-sm text-gray-700">Tasks Accomplished: <span className="font-semibold">{tasksAccomplished}</span></p>
        </div>
      </BoxCard>
      
      <Link href="/login">
        <button 
          className="mt-4 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Log in
        </button>
      </Link>
    </div>
  );
}

export default Page;
