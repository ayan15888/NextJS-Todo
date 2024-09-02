import React, { useState } from 'react';

function TaskCard({ closeTaskCard, mode }) {
  const [taskName, setTaskName] = useState('');
  const [taskTime, setTaskTime] = useState('');
  const [taskLabel, setTaskLabel] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [taskPriority, setTaskPriority] = useState('Medium');
  const [searchQuery, setSearchQuery] = useState('');
  const [meetingLink, setMeetingLink] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showMeetingLinkInput, setShowMeetingLinkInput] = useState(false);
  const [showPhoneNumberInput, setShowPhoneNumberInput] = useState(false);

  const labelSuggestions = [
    { label: "Meeting", color: "bg-blue-200" },
    { label: "Call", color: "bg-green-200" },
    { label: "Follow-up", color: "bg-yellow-200" },
    { label: "Email", color: "bg-purple-200" },
  ];

  const handleSave = () => {
    console.log({
      taskName,
      taskTime,
      taskLabel,
      taskDate,
      taskPriority,
      meetingLink: showMeetingLinkInput ? meetingLink : undefined,
      phoneNumber: showPhoneNumberInput ? phoneNumber : undefined,
    });
    closeTaskCard();
  };

  const handleSearch = () => {
    console.log('Search Query:', searchQuery);
    closeTaskCard();
  };

  const addLabel = (label) => {
    setTaskLabel(label);

    if (label === "Meeting") {
      setShowMeetingLinkInput(true);
      setShowPhoneNumberInput(false);
    } else if (label === "Call") {
      setShowPhoneNumberInput(true);
      setShowMeetingLinkInput(false);
    } else {
      setShowMeetingLinkInput(false);
      setShowPhoneNumberInput(false);
    }
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
                  readOnly
                />
                <div className="mt-2 flex space-x-2 flex-wrap">
                  {labelSuggestions.map(({ label, color }) => (
                    <button
                      key={label}
                      className={`px-2 py-1 text-xs ${color} rounded ${taskLabel === label ? 'ring-2 ring-offset-2 ring-black' : ''}`}
                      onClick={() => addLabel(label)}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
              {showMeetingLinkInput && (
                <input
                  type="url"
                  placeholder="Meeting Link"
                  className="w-full p-1.5 border text-xs border-gray-300 rounded"
                  value={meetingLink}
                  onChange={(e) => setMeetingLink(e.target.value)}
                />
              )}
              {showPhoneNumberInput && (
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-1.5 border text-xs border-gray-300 rounded"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              )}
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
