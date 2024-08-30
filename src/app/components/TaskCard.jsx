import React, { useState } from 'react';

function TaskCard({ closeTaskCard, mode }) {
  const [taskName, setTaskName] = useState('');
  const [taskTime, setTaskTime] = useState('');
  const [taskLabel, setTaskLabel] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [taskPriority, setTaskPriority] = useState('Medium');
  const [searchQuery, setSearchQuery] = useState('');

  const labelSuggestions = ["Meeting", "Call", "Follow-up", "Email"];

  const handleSave = () => {
    console.log({
      taskName,
      taskTime,
      taskLabel,
      taskDate,
      taskPriority,
    });
    closeTaskCard();
  };

  const handleSearch = () => {
    console.log('Search Query:', searchQuery);
    closeTaskCard();
  };

  const addLabel = (label) => {
    setTaskLabel((prevLabel) => (prevLabel ? `${prevLabel}, ${label}` : label));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white py-3 px-6 rounded-md shadow-md w-full max-w-xs mx-2">
        {mode === 'add' ? (
          <>
            <h2 className="text-sm font-semibold mb-3">Add Task</h2>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Task Name"
                className="w-full p-1.5 border text-xs border-gray-300 rounded"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
              <input
                type="time"
                className="w-full p-1.5 border text-xs border-gray-300 rounded"
                value={taskTime}
                onChange={(e) => setTaskTime(e.target.value)}
              />
              <div>
                <input
                  type="text"
                  placeholder="Label"
                  className="w-full p-1.5 border text-xs border-gray-300 rounded"
                  value={taskLabel}
                  onChange={(e) => setTaskLabel(e.target.value)}
                />
                <div className="mt-2 flex space-x-2">
                  {labelSuggestions.map((label) => (
                    <button
                      key={label}
                      className="px-2 py-1 text-xs bg-gray-200 rounded"
                      onClick={() => addLabel(label)}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
              <input
                type="date"
                className="w-full p-1.5 border text-xs border-gray-300 rounded"
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
              />
              <select
                className="w-full p-1.5 border text-xs border-gray-300 rounded"
                value={taskPriority}
                onChange={(e) => setTaskPriority(e.target.value)}
              >
                <option className="bg-yellow-300" value="Low">Low</option>
                <option className="bg-orange-300" value="Medium">Medium</option>
                <option className="bg-red-300" value="High">High</option>
              </select>
            </div>
            <div className="flex justify-end mt-3 space-x-2">
              <button
                className="px-2 py-1 text-xs bg-gray-300 rounded"
                onClick={closeTaskCard}
              >
                Cancel
              </button>
              <button
                className="px-2 py-1 text-xs bg-red-400 text-white rounded"
                onClick={handleSave}
              >
                Add task
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-sm font-semibold mb-3">Search</h2>
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-1.5 border text-xs border-gray-300 rounded mb-4"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="flex justify-end space-x-2">
              <button
                className="px-2 py-1 text-xs bg-gray-300 rounded"
                onClick={closeTaskCard}
              >
                Cancel
              </button>
              <button
                className="px-2 py-1 text-xs bg-red-400 text-white rounded"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default TaskCard;
