// app/page.jsx or wherever your Page component is located
"use client";

import { useRouter } from 'next/navigation';
import Header from "../components/Header"; // Adjust the import path as necessary

const Page = () => {
  const router = useRouter();

  // Function to handle the redirection to the /register page
  const handleSignUp = () => {
    router.push('/auth/register');
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Header />
      <div className="text-center mb-24 mt-16"> {/* Added mt-16 to push content below navbar */}
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-gray-600">
          Organize your work <br /> and life finally.
        </h1>
        <h3 className="text-xs text-red-600 mt-8">
          Simplify life for both you and your team. The world’s #1 task <br />manager and to-do list app.
        </h3>
        <button
          onClick={handleSignUp}
          className="mt-8 px-6 py-2 bg-red-400 text-sm font-medium rounded text-white hover:bg-red-600 transition duration-200"
        >
          Sign Up
        </button>
      </div>
    </main>
  );
};

export default Page;
