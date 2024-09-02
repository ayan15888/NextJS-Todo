import React from 'react';

function FormInput({ id, label, type = "text", placeholder }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs md:text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-xs md:text-sm"
      />
    </div>
  );
}

export default FormInput;
