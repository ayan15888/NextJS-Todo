import React, { useState } from 'react';

function CheckBox({ task, onRemove }) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(true);
    setTimeout(() => {
      onRemove(task.id); // Pass task ID or unique identifier to parent to remove the task
    }, 600); // Slight delay for visual effect
  };

  return (
    <div className={`flex items-start space-x-3 p-2 border border-gray-300 rounded-lg bg-white mb-3 lg:w-1/2 mx-auto ${checked ? 'opacity-50' : ''}`}>
      <div
        className={`h-5 w-5 flex items-center justify-center border-2 border-gray-300 rounded-full ${checked ? 'bg-green-600 border-green-600' : 'bg-white'} cursor-pointer`}
        onClick={!checked ? handleCheckboxChange : undefined}
      >
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
      <div className="flex-1 text-sm text-red-700">
        <div className="font-semibold">{task.name}</div>
        <div className="text-gray-600">{task.priority} | {task.date} | {task.time}</div>
        <div className="mt-1 text-gray-800">{task.description}</div>
      </div>
    </div>
  );
}

export default CheckBox;
