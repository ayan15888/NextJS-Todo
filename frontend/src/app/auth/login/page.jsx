import React from 'react';
import Link from 'next/link';
import FormInput from '../../components/FormInput';

function LoginForm() {
  return (
    <div className="bg-red-50 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-6 md:p-8">
        <h1 className="text-lg md:text-xl font-semibold text-center text-gray-800">Login</h1>
        <form className="mt-4 space-y-4">
          <FormInput
            id="email"
            label="Email"
            type="email"
            placeholder="spiderman@gmail.com"
          />
          <FormInput
            id="password"
            label="Password"
            type="password"
            placeholder="your password is weak i know"
          />
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-xs md:text-sm font-medium text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Login
          </button>
          <div className="text-center text-xs md:text-sm">
            <Link href="/register" className="text-red-500 hover:underline">
              Don&apos;t have an account? Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
